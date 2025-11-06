import AnimatedSection from "@/components/animated-section"

import { Brain, Eye, Target, BookOpen, Sparkles } from "lucide-react"

const features = [
  {
    title: "MRI Analysis",
    desc: "Pretrained models analyze MRI scans to predict MS probability.",
    icon: Brain,
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    iconBg: "bg-gradient-to-br from-blue-500 to-blue-600"
  },
  {
    title: "OCT Analysis",
    desc: "OCT retinal scans refine predictions for intermediate MRI results.",
    icon: Eye,
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
    iconBg: "bg-gradient-to-br from-green-500 to-green-600"
  },
  {
    title: "Risk Assessment",
    desc: "Combined MRI and OCT probabilities classify patients as Normal or MS-positive",
    icon: Target,
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
    iconBg: "bg-gradient-to-br from-purple-500 to-purple-600"
  },
  {
    title: "Validated Models",
    desc: "Models are trained on public datasets using research-based methodologies.",
    icon: BookOpen,
    color: "from-orange-500 to-orange-600",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-200",
    iconBg: "bg-gradient-to-br from-orange-500 to-orange-600"
  },
]


export default function Features() {
  return (
    <AnimatedSection as="section" className="mx-auto mt-5 max-w-6xl px-6 py-24" id="features">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-balance text-3xl font-semibold md:text-4xl">Advanced Diagnostic Technology</h2>
        <p className="mt-4 text-pretty text-slate-600">
          Cutting-edge AI-powered analysis combining MRI and OCT imaging for comprehensive Multiple Sclerosis detection and risk assessment.
        </p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 ">
        {features.map((feature) => {
          const IconComponent = feature.icon
          return (
            <div 
              key={feature.title} 
              className={`${feature.bgColor} ${feature.borderColor} border-2 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer group overflow-hidden relative`}
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              {/* Content */}
              <div className="relative">
                <div className={`inline-flex items-center justify-center gap-2 text-white px-3 py-2 ${feature.iconBg} rounded-lg shadow-md mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="h-5 w-5" />
                  {feature.title}
                </div>
                
                <p className="text-slate-600 text-md leading-relaxed">
                  {feature.desc}
                </p>

                {/* Decorative element */}
                <div className={`absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-br ${feature.color} opacity-5 rounded-tl-full`}></div>
              </div>
            </div>
          )
        })}
      </div>
    </AnimatedSection>
  )
}