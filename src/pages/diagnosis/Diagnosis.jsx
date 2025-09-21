import { useState } from 'react'
import { Upload, FileText, Brain, ExternalLink, CheckCircle, AlertCircle, Info } from 'lucide-react'
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts'

import Footer from '@/components/Footer'
import NiftiViewer from '@/components/NiftiViewer'

export default function Diagnosis() {
  const [uploadedFile, setUploadedFile] = useState(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [results, setResults] = useState(null)

  // Mock analysis function
  const analyzeFile = async (file) => {
    setIsAnalyzing(true)
    // Simulate analysis time
    await new Promise(resolve => setTimeout(resolve, 3000))

    // Mock results with probability
    const probability = Math.random() * 0.4 + 0.1 // Random between 0.1-0.5 for demo
    setResults({
      probability: probability,
      hasMS: probability > 0.3,
      confidence: 0.87,
      riskFactors: [
        { name: 'Lesion Count', value: Math.floor(Math.random() * 15) + 5 },
        { name: 'Lesion Volume', value: Math.floor(Math.random() * 8) + 2 },
        { name: 'White Matter Changes', value: Math.floor(Math.random() * 6) + 3 },
      ],
      timeSeriesData: [
        { month: 'Jan', risk: 0.2 },
        { month: 'Feb', risk: 0.25 },
        { month: 'Mar', risk: 0.28 },
        { month: 'Apr', risk: probability },
      ],
      file: file // 🔹 add file for NIfTI viewer
    })
    setIsAnalyzing(false)
  }

  const handleFileUpload = (event) => {
    const file = event.target.files[0]
    if (file && file.name.toLowerCase().includes('nii')) {
      setUploadedFile(file)
      analyzeFile(file)
    } else {
      alert('Please upload a valid NIfTI (.nii or .nii.gz) file')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      {/* Header Section */}
      <div className="pt-20 pb-16 text-center">
        <h1 className="text-5xl font-bold text-slate-900 mb-6">
          Multiple Sclerosis Diagnosis
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto px-6">
          Upload your MRI (NIfTI) image to get started with AI-powered Multiple Sclerosis analysis
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 pb-20">
        {/* Two Column Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Information Section */}
          <div className="bg-white rounded-2xl p-8 shadow-lg ring-1 ring-slate-200">
            <div className="flex items-center gap-3 mb-6">
              <Info className="h-6 w-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-slate-900">About Multiple Sclerosis</h2>
            </div>

            <div className="space-y-4 text-slate-600">
              <p className="leading-relaxed">
                Multiple Sclerosis (MS) is a chronic autoimmune disease that affects the central nervous system,
                including the brain and spinal cord. It occurs when the immune system attacks the protective
                covering of nerve fibers, causing communication problems between the brain and the rest of the body.
              </p>

              <div className="space-y-2">
                <h3 className="font-semibold text-slate-900">Common Symptoms:</h3>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Fatigue and weakness</li>
                  <li>Vision problems</li>
                  <li>Muscle spasms and stiffness</li>
                  <li>Balance and coordination issues</li>
                  <li>Cognitive changes</li>
                </ul>
              </div>

              <div className="pt-4">
                <a
                  href="https://en.wikipedia.org/wiki/Multiple_sclerosis"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <ExternalLink className="h-4 w-4" />
                  Read More on Wikipedia
                </a>
              </div>
            </div>
          </div>

          {/* Upload Section */}
          <div className="bg-white rounded-2xl p-8 shadow-lg ring-1 ring-slate-200">
            <div className="flex items-center gap-3 mb-6">
              <Upload className="h-6 w-6 text-teal-600" />
              <h2 className="text-2xl font-bold text-slate-900">Upload MRI Scan</h2>
            </div>

            <div className="space-y-6">
              {/* File Upload Area */}
              <div className="relative">
                <input
                  type="file"
                  id="file-upload"
                  className="hidden"
                  accept=".nii,.nii.gz"
                  onChange={handleFileUpload}
                  disabled={isAnalyzing}
                />
                <label
                  htmlFor="file-upload"
                  className={`flex flex-col items-center justify-center w-full h-48 border-2 border-dashed rounded-xl cursor-pointer transition-colors ${
                    uploadedFile
                      ? 'border-teal-300 bg-teal-50'
                      : 'border-slate-300 bg-slate-50 hover:bg-slate-100'
                  } ${isAnalyzing ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {uploadedFile ? (
                    <div className="text-center">
                      <FileText className="h-12 w-12 text-teal-600 mx-auto mb-2" />
                      <p className="text-sm font-medium text-teal-800">{uploadedFile.name}</p>
                      <p className="text-xs text-teal-600">File uploaded successfully</p>
                    </div>
                  ) : (
                    <div className="text-center">
                      <Upload className="h-12 w-12 text-slate-400 mx-auto mb-4" />
                      <p className="text-lg font-medium text-slate-700">Drop your NIfTI file here</p>
                      <p className="text-sm text-slate-500">or click to browse</p>
                      <p className="text-xs text-slate-400 mt-2">Supports .nii and .nii.gz files</p>
                    </div>
                  )}
                </label>
              </div>

              {/* Analysis Status */}
              {isAnalyzing && (
                <div className="text-center py-4">
                  <div className="inline-flex items-center gap-3 text-teal-600">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-teal-600"></div>
                    <span className="font-medium">Analyzing MRI scan...</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Results Section */}
        {results && !isAnalyzing && (
          <div className="bg-white rounded-2xl p-8 shadow-lg ring-1 ring-slate-200">
            <div className="flex items-center gap-3 mb-8">
              <Brain className="h-6 w-6 text-purple-600" />
              <h2 className="text-2xl font-bold text-slate-900">Analysis Results</h2>
            </div>

            {/* Main Result */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="text-center p-6 rounded-xl bg-gradient-to-br from-slate-50 to-white border">
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${
                    results.hasMS ? 'bg-red-100' : 'bg-green-100'
                  }`}
                >
                  {results.hasMS ? (
                    <AlertCircle className="h-8 w-8 text-red-600" />
                  ) : (
                    <CheckCircle className="h-8 w-8 text-green-600" />
                  )}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {results.hasMS ? 'MS Indicators Detected' : 'No Significant MS Indicators'}
                </h3>
                <p className="text-lg text-slate-600">
                  MS Probability:{' '}
                  <span className="font-bold">
                    {(results.probability * 100).toFixed(1)}%
                  </span>
                </p>
              </div>

              {/* Probability Donut */}
              <div className="h-64">
                <h4 className="text-lg font-semibold text-slate-900 mb-4 text-center">
                  MS Probability
                </h4>
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={[
                        { name: 'MS', value: results.probability * 100 },
                        { name: 'No MS', value: 100 - results.probability * 100 },
                      ]}
                      cx="50%"
                      cy="50%"
                      innerRadius={70}
                      outerRadius={100}
                      startAngle={90}
                      endAngle={-270}
                      dataKey="value"
                    >
                      <Cell fill={results.hasMS ? '#ef4444' : '#10b981'} />
                      <Cell fill="#e5e7eb" />
                    </Pie>
                    <Tooltip formatter={(value) => `${value.toFixed(1)}%`} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Progress Bar */}
            <div>
              <h4 className="text-lg font-semibold text-slate-900 mb-4">Risk Level</h4>
              <div className="w-full bg-slate-200 rounded-full h-4">
                <div
                  className={`h-4 rounded-full ${results.hasMS ? 'bg-red-500' : 'bg-green-500'}`}
                  style={{ width: `${results.probability * 100}%` }}
                ></div>
              </div>
              <p className="text-sm text-slate-500 mt-2">
                {results.hasMS
                  ? 'High probability of MS case'
                  : 'Low probability of MS case'}
              </p>
            </div>

            {/* MRI Slice Viewer */}
            {results.file && <NiftiViewer file={results.file} />}
          </div>
        )}
      </div>
    </div>
  )
}
