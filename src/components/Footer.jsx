import { Link } from "react-router-dom"
import { navLinks } from "@/lib/constants"

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-slate-200">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="inline-block h-7 w-7 rounded-md bg-teal-600" aria-hidden="true" />
              <span className="text-lg font-semibold text-slate-900">NeuroDx</span>
            </div>
            <p className="text-base leading-relaxed text-slate-600">
              Research-focused MS diagnosis UI prototype. Built with React and Tailwind CSS.
            </p>
          </div>

          <div>
            <h4 className="text-base font-semibold text-slate-900 mb-4">Navigation</h4>
            <ul className="space-y-2">
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
            <ul className="space-y-2">
              <li className="text-base text-slate-600">Email: hello@neurodx.example</li>
              <li className="text-base text-slate-600">Location: Remote-first</li>
              <li className="text-base">
                <a href="#" className="text-slate-600 hover:text-slate-900 transition-colors">
                  Twitter
                </a>{" "}
                <span className="text-slate-400">·</span>{" "}
                <a href="#" className="text-slate-600 hover:text-slate-900 transition-colors">
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-slate-100 text-sm text-slate-500 text-center">
          © {new Date().getFullYear()} NeuroDx. For research and educational use only.
        </div>
      </div>
    </footer>
  )
}