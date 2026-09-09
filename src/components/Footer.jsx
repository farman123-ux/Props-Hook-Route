import { Link as RouterLink } from 'react-router-dom'
import { Code2, Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 text-slate-400 mt-16 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
        
        {/* Brand */}
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-indigo-600 text-white font-bold shadow-md shadow-indigo-600/30">
            <Code2 className="w-4 h-4" />
          </div>
          <span className="font-bold text-sm text-white">ReactCraft</span>
          <span className="text-slate-500">• Learn Props, Hooks & Routes Simply</span>
        </div>

        {/* Links */}
        <div className="flex items-center gap-6 font-medium text-slate-300">
          <RouterLink to="/" className="hover:text-indigo-400 transition-colors">Home</RouterLink>
          <RouterLink to="/props" className="hover:text-cyan-400 transition-colors">Props</RouterLink>
          <RouterLink to="/hooks" className="hover:text-emerald-400 transition-colors">Hooks</RouterLink>
          <RouterLink to="/routes" className="hover:text-purple-400 transition-colors">Routes</RouterLink>
        </div>

        {/* Copyright */}
        <div className="text-slate-500 flex items-center gap-1">
          <span>Made with</span> <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> <span>for React Learners</span>
        </div>

      </div>
    </footer>
  )
}
