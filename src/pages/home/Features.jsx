import AnimatedSection from "@/components/animated-section"
import { Brain, Eye, Target, BookOpen } from "lucide-react"

const features = [
  {
    title: "MRI Analysis",
    desc: "Pretrained models analyze MRI scans to predict MS probability.",
    icon: Brain,
    color: "text-blue-600",
    bgColor: "bg-blue-100"
  },
  {
    title: "OCT Analysis",
    desc: "OCT retinal scans refine predictions for intermediate MRI results.",
    icon: Eye,
    color: "text-green-600",
    bgColor: "bg-green-100"
  },
  {
    title: "Risk Assessment",
    desc: "Combined MRI and OCT probabilities classify patients as Normal or MS-positive",
    icon: Target,
    color: "text-purple-600",
    bgColor: "bg-purple-100"
  },
  {
    title: "Validated Models",
    desc: "Models are trained on public datasets using research-based methodologies.",
    icon: BookOpen,
    color: "text-orange-600",
    bgColor: "bg-orange-100"
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

      <div className="mx-auto max-w-2xl text-center">
        
      </div>

      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => {
          const IconComponent = feature.icon
          return (
            <div key={feature.title} className="group rounded-2xl border border-slate-200 p-5 transition-all hover:shadow-lg hover:border-slate-300">
              <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${feature.bgColor}`}>
                <IconComponent className={`h-6 w-6 ${feature.color}`} />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-slate-900 group-hover:text-slate-800">
                {feature.title}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                {feature.desc}
              </p>
            </div>
          )
        })}
      </div>
    </AnimatedSection>
  )
}