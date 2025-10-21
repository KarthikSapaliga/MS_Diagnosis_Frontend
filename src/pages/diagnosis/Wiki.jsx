import { ExternalLink, Info } from 'lucide-react'

function Wiki() {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg ring-1 ring-slate-200">
      <div className="flex items-center gap-3 mb-6">
        <Info className="h-6 w-6 text-teal-600" />
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
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-teal-600 hover:bg-teal-700 font-semibold text-white transition-colors"
          >
            <ExternalLink className="h-4 w-4 font-semibold" />
            Read More on Wikipedia
          </a>
        </div>
      </div>
    </div>
  )
}

export default Wiki