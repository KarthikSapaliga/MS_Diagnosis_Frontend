import { useState, useEffect } from "react";
import * as nifti from "nifti-reader-js";

export default function NiftiViewer({ file }) {
  const [slices, setSlices] = useState([]);

  useEffect(() => {
    if (!file) return;

    const loadNifti = async () => {
      try {
        const arrayBuffer = await file.arrayBuffer();

        if (!nifti.isNIFTI(arrayBuffer)) {
          console.error("Not a valid NIfTI file");
          return;
        }

        const header = nifti.readHeader(arrayBuffer);
        const imageData = nifti.readImage(header, arrayBuffer);

        // Convert to typed array
        let data;
        if (header.datatypeCode === nifti.NIFTI1.TYPE_UINT8) {
          data = new Uint8Array(imageData);
        } else if (header.datatypeCode === nifti.NIFTI1.TYPE_INT16) {
          data = new Int16Array(imageData);
        } else {
          data = new Float32Array(imageData);
        }

        const [nx, ny, nz] = header.dims.slice(1, 4);

        // Efficient min/max
        let minVal = Infinity, maxVal = -Infinity;
        for (let i = 0; i < data.length; i++) {
          if (data[i] < minVal) minVal = data[i];
          if (data[i] > maxVal) maxVal = data[i];
        }

        const normalize = (val) =>
          Math.floor(((val - minVal) / (maxVal - minVal)) * 255);

        // Pick 10 middle slices
        const mid = Math.floor(nz / 2);
        const sliceIndices = Array.from({ length: 10 }, (_, i) => mid - 5 + i);

        const extracted = sliceIndices.map((z) => {
          if (z < 0 || z >= nz) return null;
          const slice = new Uint8ClampedArray(nx * ny * 4);

          for (let y = 0; y < ny; y++) {
            for (let x = 0; x < nx; x++) {
              const idx = x + y * nx + z * nx * ny;
              const val = normalize(data[idx]);
              const pixelIdx = (y * nx + x) * 4;
              slice[pixelIdx] = val;
              slice[pixelIdx + 1] = val;
              slice[pixelIdx + 2] = val;
              slice[pixelIdx + 3] = 255;
            }
          }
          return new ImageData(slice, nx, ny);
        }).filter(Boolean);

        setSlices(extracted);
      } catch (err) {
        console.error("Error reading NIfTI file:", err);
      }
    };

    loadNifti();
  }, [file]);

  return (
    <div className="mt-8">
      <h4 className="text-lg font-semibold text-slate-900 mb-4">
        MRI Slice Preview
      </h4>
      {slices.length > 0 ? (
        <div className="grid grid-cols-5 gap-4">
          {slices.map((slice, i) => (
            <canvas
              key={i}
              className="border rounded shadow"
              ref={(canvas) => {
                if (canvas) {
                  const ctx = canvas.getContext("2d");
                  canvas.width = slice.width;
                  canvas.height = slice.height;
                  ctx.putImageData(slice, 0, 0);
                }
              }}
            />
          ))}
        </div>
      ) : (
        <p className="text-slate-500">Loading NIfTI slices...</p>
      )}
    </div>
  );
}
