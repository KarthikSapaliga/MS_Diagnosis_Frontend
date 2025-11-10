import AnimatedSection from "@/components/animated-section";

import { Upload, Search, BarChart3, Workflow, ArrowRight } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Process MRI Scan",
    desc: "Upload a brain MRI scan. The system analyzes it to compute the probability of Multiple Sclerosis.",
    icon: Upload,
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    iconBg: "bg-gradient-to-br from-blue-500 to-blue-600",
  },
  {
    id: 2,
    title: "OCT Validation",
    desc: "If the MRI probability is inconclusive, OCT scans are analyzed to assess retinal thickness and to make final prediction.",
    icon: Search,
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
    iconBg: "bg-gradient-to-br from-green-500 to-green-600",
  },
  {
    id: 3,
    title: "Risk Classification",
    desc: "Combined MRI and OCT results classify patients as Normal or MS-positive providing clear guidance for follow-up.",
    icon: BarChart3,
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
    iconBg: "bg-gradient-to-br from-purple-500 to-purple-600",
  },
];

export default function HowItWorks() {
  return (
    <AnimatedSection
      as="section"
      className="mx-auto max-w-6xl px-6 py-16 mt-10"
      id="how-it-works"
    >
      <div className="mx-auto max-w-2xl text-center">
        {/* <h2 className="text-balance text-3xl font-semibold md:text-4xl"> works</h2>
        <p className="mt-4 text-pretty text-slate-600">
          Our streamlined workflow ensures accurate MS diagnosis through systematic analysis of multiple imaging modalities.
        </p>*/}
        <h2 className="text-5xl font-bold text-slate-900 mb-6">
          How it&nbsp;
          <span className="relative inline-block">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-blue-600">
              Works?
            </span>
            <svg
              className="absolute -bottom-2 left-0 w-full"
              height="8"
              viewBox="0 0 200 8"
              fill="none"
            >
              <path
                d="M0 4C50 4 50 8 100 4C150 0 150 4 200 4"
                stroke="url(#gradient)"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#14b8a6" />
                  <stop offset="100%" stopColor="#3b82f6" />
                </linearGradient>
              </defs>
            </svg>
          </span>
        </h2>
        <p className="text-xl text-slate-600 leading-relaxed">
          Our streamlined workflow ensures accurate MS diagnosis through
          systematic analysis of multiple imaging modalities.
        </p>
      </div>

      {/* Steps Grid */}
      <ol className="grid gap-8 md:grid-cols-3 relative mt-10">
        {steps.map((step) => {
          const IconComponent = step.icon;
          return (
            <li key={step.id} className="relative">
              <div
                className={`${step.bgColor} ${step.borderColor} border-2 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer group overflow-hidden relative h-full`}
              >
                {/* Gradient overlay on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                ></div>

                {/* Content */}
                <div className="relative">
                  <div
                    className={`inline-flex items-center justify-center w-14 h-14 ${step.iconBg} rounded-xl shadow-md mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className="h-7 w-7 text-white" />
                  </div>

                  <h3
                    className={`text-2xl font-bold text-slate-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:${step.iconBg} transition-all duration-300`}
                  >
                    {step.title}
                  </h3>

                  <p className="text-slate-600 leading-relaxed">{step.desc}</p>

                  {/* Decorative element */}
                  <div
                    className={`absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-br ${step.color} opacity-5 rounded-tl-full`}
                  ></div>
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </AnimatedSection>
  );
}
