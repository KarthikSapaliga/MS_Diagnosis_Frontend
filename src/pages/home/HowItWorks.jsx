import AnimatedSection from "@/components/animated-section"
import { Upload, Search, BarChart3 } from "lucide-react"

const steps = [
  { 
    id: 1, 
    title: "Process MRI Scan", 
    desc: "Upload a brain MRI scan. The system analyzes it to compute the probability of Multiple Sclerosis and detect potential lesions.",
    icon: Upload,
    color: "text-blue-600",
    bgColor: "bg-blue-100"
  },
  { 
    id: 2, 
    title: "OCT Validation", 
    desc: "If the MRI probability is inconclusive, OCT scans are analyzed to assess retinal thickness and refine the MS prediction with additional confidence.",
    icon: Search,
    color: "text-green-600",
    bgColor: "bg-green-100"
  },
  { 
    id: 3, 
    title: "Risk Classification", 
    desc: "Combined MRI and OCT results classify patients as Normal, MS-positive, or High-risk, providing clear guidance for follow-up.",
    icon: BarChart3,
    color: "text-purple-600",
    bgColor: "bg-purple-100"
  },
]

export default function HowItWorks() {
  return (
    <AnimatedSection as="section" className="mx-auto max-w-6xl px-6 py-16" id="how-it-works">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-balance text-3xl font-semibold md:text-4xl">How it works</h2>
        <p className="mt-4 text-pretty text-slate-600">
          Our streamlined workflow ensures accurate MS diagnosis through systematic analysis of multiple imaging modalities.
        </p>
      </div>

      <ol className="mt-10 grid gap-4 md:grid-cols-3">
        {steps.map((step, index) => {
          const IconComponent = step.icon
          return (
            <li key={step.id} className="relative group">
              <div className="rounded-2xl border border-slate-200 bg-white p-8 transition-all hover:shadow-lg hover:border-slate-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${step.bgColor}`}>
                    <IconComponent className={`h-6 w-6 ${step.color}`} />
                  </div>
                    <h3 className="text-xl font-semibold text-slate-900">{step.title}</h3>
                </div>
                <p className="text-base leading-relaxed text-slate-600">{step.desc}</p>
              </div>
              
              {/* Connection line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-14 -right-4 w-8 h-0.5 bg-slate-300 z-10"></div>
              )}
            </li>
          )
        })}
      </ol>
    </AnimatedSection>
  )
}
