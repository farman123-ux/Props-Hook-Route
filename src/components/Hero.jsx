import { Zap, ShoppingCart, Layers } from 'lucide-react'


export default function Hero({ flashSaleSeconds = 60 }) {
  return (
    <section className="relative overflow-hidden pt-10 pb-12 sm:pt-14 sm:pb-16 bg-slate-950">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-600/15 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold">
          <span>
            Flash Deal Timer (useEffect Hook):{' '}
            <strong className="font-mono text-amber-400">{flashSaleSeconds}s</strong> remaining
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-3xl mx-auto">
          React <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">Props & Hooks</span> Store
        </h1>

        <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
         React Hooks are special functions that let you use React features inside functional components. They help you manage data, update the UI, 
         and perform actions when something changes.
        </p>

        <div className="flex flex-wrap justify-center gap-4 pt-2 text-xs text-slate-300">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800">
            <Layers className="w-4 h-4 text-cyan-400" />
            <span><strong>Props:</strong> Passing product data & callbacks</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800">
            <Zap className="w-4 h-4 text-purple-400" />
            <span><strong>useEffect:</strong> Countdown interval timer</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800">
            <ShoppingCart className="w-4 h-4 text-indigo-400" />
            <span><strong>useState:</strong> Dynamic shopping cart state</span>
          </div>
        </div>
      </div>
    </section>
  )
}
