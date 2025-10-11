import { Brain, CheckCircle, AlertCircle } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

import NiftiViewer from '@/components/NiftiViewer';

const MRI_THRESHOLD = 0.5

function MRIResult({ results }) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg ring-1 ring-slate-200">
      <div className="flex items-center gap-3 mb-8">
        <Brain className="h-6 w-6 text-purple-600" />
        <h2 className="text-2xl font-bold text-slate-900">MRI Analysis Results</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="text-center p-6 rounded-xl bg-gradient-to-br from-slate-50 to-white border flex flex-col items-center justify-center">
          <div
            className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${results.hasMS ? 'bg-red-100' : 'bg-green-100'
              }`}
          >
            {results.hasMS ? (
              <AlertCircle className="h-10 w-10 text-red-600" />
            ) : (
              <CheckCircle className="h-10 w-10 text-green-600" />
            )}
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">
            {results.hasMS ? (results.mriProb>MRI_THRESHOLD? 'MS Detected':'MS Indicators Detected' ) : 'No Significant MS Indicators'}
          </h3>
          <div className="inline-block px-6 py-2 bg-blue-100 rounded-full">
            <p className="text-lg font-semibold text-blue-900">
              {(results.mriProb * 100).toFixed(1)}% Confidence
            </p>
          </div>
        </div>

        <div className="p-4 bg-slate-50 rounded-xl">
          <h4 className="text-lg font-semibold text-slate-900 mb-2 text-center">
            Probability Distribution
          </h4>
          <ResponsiveContainer width="100%" height={180}>
            <PieChart>
              <Pie
                data={[
                  { name: 'MS', value: results.mriProb * 100 },
                  { name: 'No MS', value: 100 - results.mriProb * 100 },
                ]}
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={75}
                startAngle={90}
                endAngle={-270}
                dataKey="value"
                label={({ value }) => `${value.toFixed(1)}%`}
              >
                <Cell fill={results.hasMS ? '#ef4444' : '#10b981'} />
                <Cell fill="#e5e7eb" />
              </Pie>
              <Tooltip formatter={(value) => `${value.toFixed(1)}%`} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* MRI Viewer */}
      {/* {results.file && <NiftiViewer file={results.file} />} */}
    </div>
  );
}

export default MRIResult;
