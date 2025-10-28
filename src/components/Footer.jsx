import { Link } from "react-router-dom"
import { navLinks } from "@/lib/constants"
import { Brain } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 shadow-[0px_0px_5px_rgb(0,0,0,0.1)]">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="inline-flex justify-center items-center h-7 w-7 rounded-md bg-teal-600 p-1" aria-hidden="true">
                <Brain className="text-white" />
              </span>
              <span className="text-lg font-semibold text-slate-900">MSDiagnosis</span>
            </div>
            <p className="text-base leading-relaxed text-slate-600">
              Research-focused MS diagnosis prototype. Built with React and Tailwind CSS.
            </p>
          </div>

          <div>
            <h4 className="text-base font-semibold text-slate-900 mb-4">Navigation</h4>
            <ul className="space-y-3">
              {
                navLinks.map(({ path, label }) => {
                  return <li key={path}>
                    <Link to={path} className="text-base text-slate-600 hover:text-slate-900 transition-colors">
                      {label}
                    </Link>
                  </li>
                })
              }
            </ul>
          </div>

          <div>
            <h4 className="text-base font-semibold text-slate-900 mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="text-base text-slate-600">Email: support@msdiagnosis.com</li>
              <li className="text-base text-slate-600">Location: Remote-first</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-slate-100 text-sm text-slate-500 text-center">
          © {new Date().getFullYear()} MSDiagnosis. For research and educational use only.
        </div>
      </div>
    </footer>
  )
}