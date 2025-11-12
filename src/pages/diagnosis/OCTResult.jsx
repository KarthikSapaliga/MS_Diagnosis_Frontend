import {
  Brain,
  CheckCircle,
  AlertCircle,
  Activity,
  AlertTriangle,
} from "lucide-react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
} from "recharts";

function OCTResult({ results }) {
  const MRI_LOW_THRESHOLD = 0.2;
  const MRI_HIGH_THRESHOLD = 0.5;

  let mriPredLabel = "";
  let flag = false;
  if (results.mriProb < MRI_LOW_THRESHOLD) {
    mriPredLabel = "NORMAL";
  } else if (results.mriProb <= MRI_HIGH_THRESHOLD) {
    mriPredLabel = "No MS (Upload OCT)";
    flag = true;
  } else {
    mriPredLabel = "MS";
  }
  const comparisonData = [
    {
      name: "MS Probability",
      MRI: results.mriProb * 100,
      OCT: results.octProb * 100,
      Combined: results.probability * 100,
    },
    {
      name: "No MS Probability",
      MRI: (1 - results.mriProb) * 100,
      OCT: (1 - results.octProb) * 100,
      Combined: (1 - results.probability) * 100,
    },
  ];

  const mriConfidence = (
    (results.mriProb > MRI_HIGH_THRESHOLD
      ? results.mriProb
      : 1 - results.mriProb) * 100
  ).toFixed(1);
  const octConfidence = (
    (results.octProb > 1 - results.octProb
      ? results.octProb
      : 1 - results.octProb) * 100
  ).toFixed(1);
  
  const showWarning = results.mriProb < MRI_LOW_THRESHOLD && results.octProb > 1 - results.octProb;

  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg ring-1 ring-slate-200 mt-8">
      {/* Header */}
      <div className="flex items-center gap-3 mb-8">
        <Brain className="h-6 w-6 text-blue-600" />
        <h2 className="text-2xl font-bold text-slate-900">
          Complete Analysis Results
        </h2>
      </div>

      {/* Final Prediction Card */}
      <div className="mb-8 p-8 rounded-xl bg-gradient-to-br from-slate-50 to-white border-2 border-slate-300">
        <div className="text-center">
          <div
            className={`inline-flex items-center justify-center w-20 h-20 rounded-full mb-4 ${
              results.hasMS
                ? "bg-red-100 ring-4 ring-red-200"
                : "bg-green-100 ring-4 ring-green-200"
            }`}
          >
            {results.hasMS ? (
              <AlertCircle className="h-10 w-10 text-red-600" />
            ) : (
              <CheckCircle className="h-10 w-10 text-green-600" />
            )}
          </div>
          <h3 className="text-3xl font-bold text-slate-900 mb-4">
            Final Diagnosis: {results.hasMS ? "MS Detected" : "No MS Detected"}
          </h3>
          <div className="inline-block px-6 py-2 bg-blue-100 rounded-full">
            <p className="text-lg font-semibold text-blue-900">
              {(
                (results.probability > 1 - results.probability
                  ? results.probability
                  : 1 - results.probability) * 100
              ).toFixed(1)}
              % Confidence
            </p>
          </div>
        </div>
      </div>

      {/* Individual Analysis */}
      <div className="mb-8">
        <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
          <Activity className="h-5 w-5 text-blue-600" />
          Individual Analysis Breakdown
        </h3>
        <div className="grid md:grid-cols-3 gap-4">
          {/* MRI Card */}
          <div className="p-4 rounded-lg bg-purple-50 border-2 border-purple-200">
            <h4 className="font-semibold text-purple-900 mb-2">MRI Analysis</h4>
            <p className="text-3xl font-bold text-purple-700">
              {mriConfidence}%
            </p>
            <p className="text-sm text-purple-600 mt-1">
              Prediction: {mriPredLabel}
            </p>
          </div>

          {/* OCT Card */}
          <div className="p-4 rounded-lg bg-cyan-50 border-2 border-cyan-200">
            <h4 className="font-semibold text-cyan-900 mb-2">OCT Analysis</h4>
            <p className="text-3xl font-bold text-cyan-700">{octConfidence}%</p>
            <p className="text-sm text-cyan-600 mt-1">
              Prediction: {results.octLabel}
            </p>
          </div>

          {/* Combined Result */}
          <div className="p-4 rounded-lg bg-blue-50 border-2 border-blue-300">
            <h4 className="font-semibold text-blue-900 mb-2">
              Combined Result
            </h4>
            <p className="text-3xl font-bold text-blue-700">
              {flag ? octConfidence : mriConfidence}%
            </p>
            <p className="text-sm text-blue-600 mt-1">
              Prediction: {results.finalPrediction}
            </p>
          </div>
        </div>
      </div>

      {/* Comparison Bar Chart */}
      <div className="mb-8 p-6 bg-slate-50 rounded-xl">
        <h3 className="text-xl font-bold text-slate-900 mb-4 text-center">
          MRI vs OCT vs Combined Analysis
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={comparisonData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis dataKey="name" stroke="#475569" />
            <YAxis
              stroke="#475569"
              label={{
                value: "Probability (%)",
                angle: -90,
                position: "insideLeft",
              }}
            />
            <Tooltip formatter={(value) => `${value.toFixed(1)}%`} />
            <Legend verticalAlign="top" align="right" />
            <Bar dataKey="MRI" fill="#fadc15" radius={[8, 8, 0, 0]} />
            <Bar dataKey="OCT" fill="#06b6d4" radius={[8, 8, 0, 0]} />
            <Bar dataKey="Combined" fill="#3b82f6" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Pie Chart & Summary */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Combined Probability Pie */}
        <div className="p-6 bg-slate-50 rounded-xl relative">
          <h4 className="text-lg font-semibold text-slate-900 mb-4 text-center">
            Combined Probability Distribution
          </h4>
          <ResponsiveContainer width="100%" height={220}>
            <PieChart>
              <Pie
                data={[
                  { name: "MS", value: results.probability * 100 },
                  { name: "No MS", value: 100 - results.probability * 100 },
                ]}
                cx="50%"
                cy="50%"
                innerRadius={70}
                outerRadius={100}
                startAngle={90}
                endAngle={-270}
                dataKey="value"
              >
                <Cell fill="#ef4444" />
                <Cell fill="#e5e7eb" />
              </Pie>
              <Tooltip formatter={(value) => `${value.toFixed(1)}%`} />
              <Legend
                verticalAlign="top"
                align="right"
                layout="vertical"
                iconType="circle"
                wrapperStyle={{
                  top: 0,
                  right: 0,
                  lineHeight: "20px",
                  fontSize: "14px",
                  position: "absolute",
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Analysis Summary */}
        <div className="p-6 bg-slate-50 rounded-xl">
          <h4 className="text-lg font-semibold text-slate-900 mb-4 text-center">
            Analysis Summary
          </h4>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-white rounded-lg">
              <span className="font-medium text-slate-700">MRI Result:</span>
              <span
                className={`font-bold ${
                  mriPredLabel === "MS"
                    ? "text-red-600"
                    : mriPredLabel === "No MS (Upload OCT)"
                      ? "text-yellow-600"
                      : "text-green-600"
                }`}
              >
                {mriPredLabel}
              </span>
            </div>

            <div className="flex justify-between items-center p-3 bg-white rounded-lg">
              <span className="font-medium text-slate-700">OCT Result:</span>
              <span
                className={`font-bold ${
                  results.octLabel === "MS" ? "text-red-600" : "text-green-600"
                }`}
              >
                {results.octLabel}
              </span>
            </div>

            <div className="flex justify-between items-center p-3 bg-white rounded-lg border-2 border-blue-300">
              <span className="font-medium text-slate-700">
                Final Diagnosis:
              </span>
              <span
                className={`font-bold text-lg ${
                  results.hasMS ? "text-red-600" : "text-green-600"
                }`}
              >
                {results.finalPrediction}
              </span>
            </div>

            <div className="mt-4 p-3 bg-blue-100 rounded-lg">
              <p className="text-sm text-blue-900 text-center">
                <strong>Agreement:</strong>{" "}
                {mriPredLabel === results.octLabel
                  ? "Both methods agree ✓"
                  : "Methods disagree - combined analysis used"}
              </p>
            </div>
          </div>
        </div>
      </div>
      
     { showWarning && (
       
       <div className="mt-12 p-6 bg-yellow-50 rounded-2xl shadow-sm border border-yellow-300">
         <div className="flex items-start gap-4">
           <div className="flex-shrink-0">
             <AlertTriangle className="h-6 w-6 text-yellow-600" />
           </div>
           <div>
             <h4 className="font-bold text-yellow-700 mb-2">Warning</h4>
             <p className="text-md text-yellow-700 leading-relaxed">
               The retinal thickness appears to be lower than normal, which may
               indicate the possibility of related eye or neurological
               conditions. Please consult your physician or visit a specialist
               for further evaluation.
             </p>
           </div>
         </div>
       </div>
     )}

      
    </div>
  );
}

export default OCTResult;
