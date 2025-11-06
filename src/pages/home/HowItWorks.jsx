import AnimatedSection from "@/components/animated-section"

import { Upload, Search, BarChart3, Workflow, ArrowRight } from "lucide-react"

const steps = [
  { 
    id: 1, 
    title: "Process MRI Scan", 
    desc: "Upload a brain MRI scan. The system analyzes it to compute the probability of Multiple Sclerosis and detect potential lesions.",
    icon: Upload,
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    iconBg: "bg-gradient-to-br from-blue-500 to-blue-600"
  },
  { 
    id: 2, 
    title: "OCT Validation", 
    desc: "If the MRI probability is inconclusive, OCT scans are analyzed to assess retinal thickness and refine the MS prediction with additional confidence.",
    icon: Search,
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
    iconBg: "bg-gradient-to-br from-green-500 to-green-600"
  },
  { 
    id: 3, 
    title: "Risk Classification", 
    desc: "Combined MRI and OCT results classify patients as Normal, MS-positive, or High-risk, providing clear guidance for follow-up.",
    icon: BarChart3,
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
    iconBg: "bg-gradient-to-br from-purple-500 to-purple-600"
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

      {/* Steps Grid */}
      <ol className="grid gap-8 md:grid-cols-3 relative mt-10">
        {steps.map((step) => {
          const IconComponent = step.icon
          return (
            <li key={step.id} className="relative">
              <div className={`${step.bgColor} ${step.borderColor} border-2 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer group overflow-hidden relative h-full`}>
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

                {/* Content */}
                <div className="relative">
                  <div className={`inline-flex items-center justify-center w-14 h-14 ${step.iconBg} rounded-xl shadow-md mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="h-7 w-7 text-white" />
                  </div>
                  
                  <h3 className={`text-2xl font-bold text-slate-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:${step.iconBg} transition-all duration-300`}>
                    {step.title}
                  </h3>
                  
                  <p className="text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>

                  {/* Decorative element */}
                  <div className={`absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-br ${step.color} opacity-5 rounded-tl-full`}></div>
                </div>
              </div>
            </li>
          )
        })}
      </ol>
    </AnimatedSection>
  )
}
