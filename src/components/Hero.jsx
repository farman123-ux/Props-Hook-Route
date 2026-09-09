import { Link as RouterLink } from 'react-router-dom'
import { Sparkles, ArrowRight, BookOpen, Layers, Route as RouteIcon } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-10 pb-12 sm:pt-16 sm:pb-20 bg-slate-950">
      
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-600/15 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-purple-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold">
          <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
          <span>Simple & Friendly React Guide</span>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-3xl mx-auto">
          Learn <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">Props, Hooks & Routes</span> Easily
        </h1>

        {/* Subtitle */}
        <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          Master the 3 essential building blocks of React with simple definitions, clear code examples, and live interactive previews.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-3 pt-2">
          <RouterLink
            to="/props"
            className="px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-lg shadow-cyan-500/25 transition-all flex items-center gap-2"
          >
            <BookOpen className="w-4 h-4" /> Learn Props <ArrowRight className="w-4 h-4" />
          </RouterLink>

          <RouterLink
            to="/hooks"
            className="px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white shadow-lg shadow-emerald-500/25 transition-all flex items-center gap-2"
          >
            <Layers className="w-4 h-4" /> Learn Hooks <ArrowRight className="w-4 h-4" />
          </RouterLink>

          <RouterLink
            to="/routes"
            className="px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-400 hover:to-indigo-500 text-white shadow-lg shadow-purple-500/25 transition-all flex items-center gap-2"
          >
            <RouteIcon className="w-4 h-4" /> Learn Routes <ArrowRight className="w-4 h-4" />
          </RouterLink>
        </div>

        {/* 3 Topic Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 text-left">
          
          <RouterLink
            to="/props"
            className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/50 transition-all hover:-translate-y-1 group backdrop-blur-sm"
          >
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <BookOpen className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white mb-1 group-hover:text-cyan-300">1. Props</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Pass data from parent component to child component easily.
            </p>
          </RouterLink>

          <RouterLink
            to="/hooks"
            className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-emerald-500/50 transition-all hover:-translate-y-1 group backdrop-blur-sm"
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white mb-1 group-hover:text-emerald-300">2. Hooks</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Remember state and run automatic actions in components.
            </p>
          </RouterLink>

          <RouterLink
            to="/routes"
            className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-purple-500/50 transition-all hover:-translate-y-1 group backdrop-blur-sm"
          >
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/30 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <RouteIcon className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white mb-1 group-hover:text-purple-300">3. Routes</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Switch between different pages instantly without reloads.
            </p>
          </RouterLink>

        </div>

      </div>
    </section>
  )
}
