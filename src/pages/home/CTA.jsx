import AnimatedSection from "@/components/animated-section";
import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <AnimatedSection
      as="section"
      className="mx-auto mb-10 max-w-6xl px-6 py-16"
    >
      <div className="rounded-xl bg-gradient-to-br from-teal-50 via-teal-100 to-teal-50 border-2 border-teal-200 p-8 md:p-10 shadow-lg hover:shadow-lg hover:scale-105  hover:border-teal-300 transition-all">
        <div className="relative grid items-center gap-6 md:grid-cols-2">
          <div>
            <h3 className="text-balance text-2xl font-semibold md:text-3xl text-slate-900">
              Ready to try the demo?
            </h3>
            <p className="mt-2 text-slate-700">
              Upload MRI and OCT scans to see probability-based MS predictions
              and high-risk insights in action.
            </p>
          </div>
          <div className="flex md:justify-end">
            <Link
              to="/diagnosis"
              className="inline-flex items-center justify-center rounded-md bg-gradient-to-br from-teal-400 to-teal-500 px-5 py-2.5 text-white shadow-sm transition-colors hover:bg-teal-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600"
            >
              Start Diagnosis
            </Link>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}