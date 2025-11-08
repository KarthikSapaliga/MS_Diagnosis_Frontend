import { Brain, Mail, MapPin, ExternalLink, Heart, ArrowRight } from "lucide-react";
import { navLinks } from "@/lib/constants";


export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 text-white overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="relative mx-auto max-w-6xl px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid gap-10 md:grid-cols-3 mb-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="inline-flex justify-center items-center h-12 w-12 rounded-xl bg-gradient-to-br from-teal-500 to-blue-600 shadow-lg">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-400">
                MSDiagnosis
              </span>
            </div>
            <p className="text-slate-300 leading-relaxed">
              Research-focused MS diagnosis prototype leveraging AI-powered dual-modality imaging analysis. Built with modern web technologies.
            </p>
          </div>

          {/* Navigation Section */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              Quick Links
              <div className="h-0.5 w-8 bg-gradient-to-r from-teal-400 to-transparent"></div>
            </h4>
            <ul className="space-y-4">
              {navLinks.map(({ path, label }) => (
                <li key={path}>
                  <a
                    href={path}
                    className="group inline-flex items-center gap-2 text-slate-300 hover:text-white transition-all duration-300"
                  >
                    <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              Get in Touch
              <div className="h-0.5 w-8 bg-gradient-to-r from-blue-400 to-transparent"></div>
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <div className="flex-shrink-0 inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white/10 group-hover:bg-white/20 backdrop-blur-sm transition-all duration-300">
                  <Mail className="h-5 w-5 text-teal-400" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 mb-1">Email</p>
                  <a href="mailto:support@msdiagnosis.com" className="text-slate-300 hover:text-white transition-colors">
                    support@msdiagnosis.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="flex-shrink-0 inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white/10 group-hover:bg-white/20 backdrop-blur-sm transition-all duration-300">
                  <MapPin className="h-5 w-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 mb-1">Location</p>
                  <p className="text-slate-300">Remote-first</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <p className="text-sm text-slate-400 flex items-center gap-2">
              © {new Date().getFullYear()} MSDiagnosis. All rights reserved.
            </p>
            
          </div>
        </div>

        {/* Disclaimer Badge */}
        <div className="mt-8 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
          <p className="text-xs text-slate-400 text-center leading-relaxed">
            <strong className="text-slate-300">Medical Disclaimer:</strong> This is a research prototype for educational purposes only. Not intended for clinical diagnosis. Always consult qualified healthcare professionals for medical advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
