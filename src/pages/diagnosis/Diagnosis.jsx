import { useState } from "react";
import { Upload, FileText, Eye } from "lucide-react";

import Wiki from "./Wiki";
import MRIResult from "./MRIResult";
import OCTResult from "./OCTResult";

export default function Diagnosis() {
  const [uploadedFile, setUploadedFile] = useState(null);
  const [octFile, setOctFile] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [mriResults, setMriResults] = useState(null);
  const [octResults, setOctResults] = useState(null);
  const [mriProb, setMriProb] = useState(null);

  // MRI Probability thresholds
  const MRI_LOW_THRESHOLD = 0.2;
  const MRI_HIGH_THRESHOLD = 0.5;

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const name = file.name.toLowerCase();

    if (name.includes("nii")) {
      setUploadedFile(file);
      setOctFile(null);
      setOctResults(null);
      await analyzeMRI(file);
    } else if (
      name.endsWith(".png") ||
      name.endsWith(".jpg") ||
      name.endsWith(".jpeg")
    ) {
      setOctFile(file);
      await analyzeOCT(file);
    } else {
      alert("Please upload a valid MRI (.nii/.nii.gz) or OCT (.png/.jpg) file");
    }
  };

  const analyzeMRI = async (file) => {
    setIsAnalyzing(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("http://localhost:5000/predict/mri", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      setMriProb(data.mri_prob);

      if (data.mri_prob !== undefined && data.mri_label !== undefined) {
        setMriResults({
          mriProb: data.mri_prob,
          mriPred: data.mri_label,
          hasMS: data.mri_label === "MS",
          file,
        });
      } else {
        alert("Error: MRI analysis failed.");
      }
    } catch (err) {
      console.error(err);
      alert("Error analyzing MRI");
    } finally {
      setIsAnalyzing(false);
    }
  };

  const analyzeOCT = async (file) => {
    if (mriProb === null) {
      alert("Please upload MRI first.");
      return;
    }

    setIsAnalyzing(true);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("mri_prob", mriProb);

    try {
      const res = await fetch("http://localhost:5000/predict/oct", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      setOctResults({
        mriProb: mriResults.mriProb,
        mriPred: mriResults.mriPred,
        octProb: data.oct_prob,
        octLabel: data.oct_pred,
        probability: data.combined_prob,
        finalPrediction: data.final_prediction,
        hasMS: data.final_prediction === "MS",
        file: uploadedFile,
      });
    } catch (err) {
      console.error(err);
      alert("Error analyzing OCT");
    } finally {
      setIsAnalyzing(false);
    }
  };

  // --- Determine when to show OCT upload section ---
  // const shouldShowOCTUpload =
  //   mriResults &&
  //   mriResults.mriProb >= MRI_LOW_THRESHOLD &&
  //   mriResults.mriProb <= MRI_HIGH_THRESHOLD;

  const shouldShowOCTUpload = mriResults;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      {/* Header */}
      <div className="pt-28 pb-16 text-center">
        <h1 className="text-5xl font-bold text-slate-900 mb-6">
          Multiple Sclerosis Diagnosis
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto px-6">
          Upload your MRI (NIfTI) image to get started. OCT image may be needed
          if MRI results are borderline.
        </p>
      </div>

      {/* Upload Section */}
      <div className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <Wiki />
          <div className="gap-8 flex flex-col">
            {/* MRI Upload Box */}
            <div className="bg-white rounded-2xl p-8 shadow-lg ring-1 ring-slate-200">
              <div className="flex items-center gap-3 mb-6">
                <Upload className="h-6 w-6 text-teal-600" />
                <h2 className="text-2xl font-bold text-slate-900">
                  Upload MRI
                </h2>
              </div>

              <div className="space-y-6">
                <input
                  type="file"
                  id="file-upload"
                  className="hidden"
                  accept=".nii,.nii.gz,.png,.jpg,.jpeg"
                  onChange={handleFileUpload}
                  disabled={isAnalyzing}
                />
                <label
                  htmlFor="file-upload"
                  className={`flex flex-col items-center justify-center w-full h-52 border-2 border-dashed rounded-xl cursor-pointer transition-colors ${
                    uploadedFile
                      ? "border-teal-300 bg-teal-50"
                      : "border-slate-300 bg-slate-50 hover:bg-slate-100"
                  } ${isAnalyzing ? "opacity-50 cursor-not-allowed" : ""}`}
                >
                  {uploadedFile ? (
                    <div className="text-center">
                      <FileText className="h-14 w-14 text-teal-600 mx-auto mb-2" />
                      <p className="text-sm font-medium text-teal-800">
                        {uploadedFile.name}
                      </p>
                    </div>
                  ) : (
                    <div className="text-center">
                      <Upload className="h-12 w-12 text-slate-400 mx-auto mb-4" />
                      <p className="text-xl font-medium text-slate-700">
                        Drop your file here
                      </p>
                    </div>
                  )}
                </label>
              </div>
            </div>

            {/* Status box */}
            <div className="bg-white rounded-2xl p-8 shadow-lg ring-1 ring-slate-200 h-full flex min-h-8 gap-4">
              <span className="text-lg font-medium">
                {isAnalyzing ? (
                  <span className="inline-flex items-center gap-3 text-pink-300">
                    <span className="animate-spin rounded-full h-4 w-4 border-b-2 border-pink-300"></span>
                    <span className="font-medium">Analyzing...</span>
                  </span>
                ) : uploadedFile && !mriResults ? (
                  <span className="text-teal-600">
                    Error Analyzing {uploadedFile.name}
                  </span>
                ) : uploadedFile && mriResults ? (
                  <span className="text-teal-600">
                    Analyzed {uploadedFile.name}
                  </span>
                ) : (
                  <span className="text-red-400">File Not Uploaded</span>
                )}
              </span>
            </div>
          </div>
        </div>

        {/* MRI Results */}
        {mriResults && !isAnalyzing && <MRIResult results={mriResults} />}

        {/* OCT Upload only if 0.2 <= mriProb <= 0.5 */}
        {shouldShowOCTUpload && (
          <div className="my-16 bg-white rounded-2xl p-8 shadow-lg ring-1 ring-slate-200">
            <div className="flex items-center gap-3 mb-6">
              <Eye className="h-6 w-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-slate-900">Upload OCT</h2>
            </div>

            <p className="text-slate-600 mb-6">
              MRI probability is borderline ({mriResults.mriProb.toFixed(2)}).
              Please upload your OCT (retinal scan) image for final diagnosis.
            </p>

            <div className="space-y-6">
              <input
                type="file"
                id="file-upload-oct"
                className="hidden"
                accept=".png,.jpg,.jpeg"
                onChange={handleFileUpload}
                disabled={isAnalyzing}
              />
              <label
                htmlFor="file-upload-oct"
                className={`flex flex-col items-center justify-center w-full h-48 border-2 border-dashed rounded-xl cursor-pointer transition-colors
                  ${
                    octFile
                      ? "border-blue-300 bg-blue-50"
                      : "border-slate-300 bg-slate-50 hover:bg-slate-100"
                  }
                  ${isAnalyzing ? "opacity-50 cursor-not-allowed" : ""}`}
              >
                {octFile ? (
                  <div className="text-center">
                    <FileText className="h-12 w-12 text-blue-600 mx-auto mb-2" />
                    <p className="text-sm font-medium text-blue-800">
                      {octFile.name}
                    </p>
                  </div>
                ) : (
                  <div className="text-center">
                    <Upload className="h-12 w-12 text-slate-400 mx-auto mb-4" />
                    <p className="text-lg font-medium text-slate-700">
                      Drop your OCT file here
                    </p>
                  </div>
                )}
              </label>

              {isAnalyzing && (
                <div className="text-center py-4">
                  <div className="inline-flex items-center gap-3 text-blue-600">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-600"></div>
                    <span className="font-medium">Analyzing OCT...</span>
                  </div>
                </div>
              )}
            </div>

            {octFile && (
              <div className="mt-10 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border-2 border-blue-200">
                <div className="flex items-center gap-2 mb-4">
                  <Eye className="h-5 w-5 text-blue-600" />
                  <h3 className="text-xl font-bold text-slate-900">
                    Uploaded OCT Image
                  </h3>
                </div>
                <div className="p-4">
                  <img
                    src={URL.createObjectURL(octFile)}
                    alt="OCT Scan"
                    className="max-w-full h-auto mx-auto rounded-lg shadow-md"
                    style={{ maxHeight: "400px" }}
                  />
                  <p className="text-center mt-3 text-sm text-slate-600">
                    File: {octFile.name} ({(octFile.size / 1024).toFixed(2)} KB)
                  </p>
                </div>
              </div>
            )}
          </div>
        )}

        {/* OCT Results */}
        {octResults && !isAnalyzing && <OCTResult results={octResults} />}
      </div>
    </div>
  );
}
