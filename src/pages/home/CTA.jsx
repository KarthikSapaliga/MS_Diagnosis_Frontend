import { ArrowRight, Sparkles, Brain, Zap, CheckCircle } from "lucide-react";

export default function CTA() {
  return (
    <section className="mx-auto mb-10 max-w-6xl px-6 py-16">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-teal-500 via-cyan-500 to-blue-600 p-1 shadow-2xl hover:shadow-3xl transition-all duration-500">
        {/* Inner container */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 p-10 md:p-16">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-teal-400/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-blue-400/20 to-transparent rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>

          {/* Floating particles effect */}
          <div className="absolute top-10 left-20 w-2 h-2 bg-teal-400 rounded-full opacity-40 animate-bounce"></div>
          <div
            className="absolute top-32 right-32 w-3 h-3 bg-blue-400 rounded-full opacity-30 animate-bounce"
            style={{ animationDelay: "0.5s" }}
          ></div>
          <div
            className="absolute bottom-20 left-40 w-2 h-2 bg-cyan-400 rounded-full opacity-50 animate-bounce"
            style={{ animationDelay: "1s" }}
          ></div>

          {/* Content */}
          <div className="relative grid items-center gap-10 md:grid-cols-2">
            {/* Left side - Text content */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-md border border-teal-200">
                <Sparkles className="h-4 w-4 text-teal-600 animate-pulse" />
                <span className="text-sm font-semibold text-teal-900">
                  AI-Powered Diagnosis
                </span>
              </div>

              <h3 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                Ready to try the{" "}
                <span className="relative inline-block">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-blue-600">
                    demo?
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
                      <linearGradient
                        id="gradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                      >
                        <stop offset="0%" stopColor="#14b8a6" />
                        <stop offset="100%" stopColor="#3b82f6" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
              </h3>

              <p className="text-lg text-slate-700 leading-relaxed">
                Upload MRI and OCT scans to see probability-based MS predictions
                and high-risk insights in action. Experience the power of
                dual-modality AI analysis.
              </p>

              {/* Feature badges */}
              <div className="flex flex-wrap gap-3 pt-2">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/70 backdrop-blur-sm rounded-lg border border-slate-200 shadow-sm">
                  <Brain className="h-4 w-4 text-blue-600" />
                  <span className="text-sm font-medium text-slate-700">
                    MRI Analysis
                  </span>
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/70 backdrop-blur-sm rounded-lg border border-slate-200 shadow-sm">
                  <Zap className="h-4 w-4 text-teal-600" />
                  <span className="text-sm font-medium text-slate-700">
                    OCT Analysis
                  </span>
                </div>
              </div>
            </div>

            {/* Right side - CTA button */}
            <div className="flex md:justify-end">
              <div className="w-full md:w-auto">
                <div className="group relative">
                  {/* Button glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-blue-600 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300 animate-pulse"></div>

                  {/* Actual button */}
                  <a
                    href="/diagnosis"
                    className="relative block text-center md:inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-teal-600 to-blue-600 px-10 py-5 text-lg font-semibold text-white shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105 focus:outline-none focus-visible:ring-4 focus-visible:ring-teal-300"
                  >
                    <span>Start Diagnosis</span>
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>

                {/* Trust indicators below button */}
                <div className="mt-6 space-y-2">
                  <p className="text-xs text-slate-600 text-center md:text-right flex items-center justify-center md:justify-end gap-1">
                    <svg
                      className="w-4 h-4 text-green-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Free to use • No registration required
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats section */}
          <div className="relative mt-12 pt-8 border-t border-slate-200/50">
            <div className="grid grid-cols-3 gap-6 text-center">
              <div className="group cursor-pointer">
                <div className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-blue-600 group-hover:scale-110 transition-transform duration-300">
                  98%
                </div>
                <div className="text-sm text-slate-600 mt-1">Accuracy Rate</div>
              </div>
              <div className="group cursor-pointer">
                <div className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-blue-600 group-hover:scale-110 transition-transform duration-300">
                  &lt;5 min
                </div>
                <div className="text-sm text-slate-600 mt-1">Analysis Time</div>
              </div>
              <div className="group cursor-pointer">
                <div className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-blue-600 group-hover:scale-110 transition-transform duration-300">
                  Dual AI
                </div>
                <div className="text-sm text-slate-600 mt-1">
                  Modality Check
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
