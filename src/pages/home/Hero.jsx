import AnimatedSection from "@/components/animated-section";
import { Brain, CheckCircle, Info } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <header className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-teal-50 min-h-screen">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
      <div className="absolute top-10 right-10 h-64 w-64 rounded-full bg-teal-100/30 blur-3xl" />
      <div className="absolute bottom-10 left-10 h-48 w-48 rounded-full bg-blue-100/20 blur-2xl" />

      <AnimatedSection
        as="div"
        className="relative mx-auto md:mt-5 max-w-6xl px-6 py-20 md:py-20"
      >
        <div className="flex flex-col items-center justify-between gap-16 lg:flex-row lg:gap-20">
          <div className="max-w-2xl space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-teal-50 via-teal-50 to-teal-50 border border-slate-200 px-4 py-2 text-sm font-medium text-teal-800">
                <Brain className="h-4 w-4" />
                AI-Powered Neurological Assessment
              </div>
              <h1 className="text-balance text-4xl font-bold tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
                MS Early
                <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
                  {" "}
                  Diagnosis
                </span>
                <br />
                Assistant
              </h1>
              <p className="text-pretty text-lg leading-relaxed text-slate-600 md:text-xl">
                Revolutionary AI-powered platform that uses MRI scans, and OCT
                scans to detect Multiple Sclerosis. Early detection saves lives
                and improves outcomes.
              </p>
            </div>

            {/* Key benefits */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex items-center gap-3 text-left">
                <CheckCircle className="h-5 w-5 shrink-0 text-teal-600" />
                <span className="text-slate-700">
                  Results in under 5 minutes
                </span>
              </div>
              <div className="flex items-center gap-3 text-left">
                <CheckCircle className="h-5 w-5 shrink-0 text-teal-600" />
                <span className="text-slate-700">MRI Analysis</span>
              </div>
              <div className="flex items-center gap-3 text-left">
                <CheckCircle className="h-5 w-5 shrink-0 text-teal-600" />
                <span className="text-slate-700">Complete patient privacy</span>
              </div>
              <div className="flex items-center gap-3 text-left">
                <CheckCircle className="h-5 w-5 shrink-0 text-teal-600" />
                <span className="text-slate-700">OCT Analysis</span>
              </div>
            </div>

            <div className="flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
              <Link
                to="/diagnosis"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-teal-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:bg-teal-700 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600"
              >
                <Brain className="h-5 w-5" />
                Start Assessment
              </Link>
              <a
                href="https://en.wikipedia.org/wiki/Multiple_sclerosis"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-slate-300 px-8 py-4 text-lg font-semibold text-slate-900 transition-all hover:border-slate-400 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600"
              >
                <Info className="h-5 w-5" />
                More About MS
              </a>
            </div>
          </div>

          {/* Medical brain image */}
          <div className="relative flex-shrink-0">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute -inset-8 rounded-full bg-gradient-to-r from-teal-400/20 to-blue-400/20 blur-2xl" />

              {/* Main image container */}
              <div className="relative h-96 w-96 rounded-2xl bg-gradient-to-br from-slate-100 to-white p-8 shadow-2xl ring-1 ring-slate-200">
                <img src="./src/assets/brain.png" alt="brain" />
              </div>

              {/* Floating indicators */}
              <div className="absolute -right-4 top-16 rounded-lg bg-white px-3 py-2 shadow-lg ring-1 ring-slate-200 animate-float">
                <div className="text-xs font-medium text-slate-600">
                  MRI Analysis
                </div>
                <div className="text-sm font-bold text-teal-600">Active</div>
              </div>

              <div className="absolute -left-4 bottom-16 rounded-lg bg-white px-3 py-2 shadow-lg ring-1 ring-slate-200 animate-float [animation-delay:0.8s]">
                <div className="text-xs font-medium text-slate-600">
                  OCT Analysis
                </div>
                <div className="text-sm font-bold text-green-600">Active</div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </header>
  );
}
