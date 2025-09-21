import AnimatedSection from "@/components/animated-section"
import { Link } from "react-router-dom"

export default function CTA() {
  return (
    <AnimatedSection as="section" className="mx-auto mb-10 max-w-6xl px-6 py-16">
      <div className="rounded-xl bg-gradient-to-r from-teal-100 via-teal-200 to-teal-100 border border-slate-200 p-8 md:p-10">
        <div className="grid items-center gap-6 md:grid-cols-2">
          <div>
            <h3 className="text-balance text-2xl font-semibold md:text-3xl text-slate-900">Ready to try the demo?</h3>
            <p className="mt-2 text-slate-700">
              Upload MRI and OCT scans to see probability-based MS predictions and high-risk insights in action.
            </p>
          </div>
          <div className="flex md:justify-end">
            <Link
              to="/diagnosis"
              className="inline-flex items-center justify-center rounded-md bg-teal-600 px-5 py-2.5 text-white shadow-sm transition-colors hover:bg-teal-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600"
            >
              Start Diagnosis
            </Link>
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
