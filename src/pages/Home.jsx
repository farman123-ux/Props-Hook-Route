import { useState } from 'react'
import Hero from '../components/Hero'
import ConceptCard from '../components/ConceptCard'
import { BookOpen, Layers, Route as RouteIcon, Zap, ArrowRight, User, ShoppingCart } from 'lucide-react'
import { Link as RouterLink } from 'react-router-dom'

export default function Home({ onAddToCart }) {
  const [demoName, setDemoName] = useState('Farman Developer')
  const [demoCount, setDemoCount] = useState(1)

  return (
    <div className="space-y-12 sm:space-y-16 bg-slate-950 text-slate-100">

      <Hero />


      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Choose a Topic to Learn
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-1">
            Click any card below to see a simple definition and two clear examples, or click "Add to Cart" to store in notifications!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ConceptCard
            title="Props"
            description="Pass data down from parent to child components."
            icon={BookOpen}
            badge="Data Flow"
            linkTo="/props"
            color="cyan"
            onAddToCart={onAddToCart}
            features={[
              'Pass names, numbers, or objects',
              'Pass button click functions',
              'Components stay reusable'
            ]}
          />

          <ConceptCard
            title="Hooks"
            description="Remember state and run actions automatically."
            icon={Layers}
            badge="State & Actions"
            linkTo="/hooks"
            color="emerald"
            onAddToCart={onAddToCart}
            features={[
              'useState remembers component state',
              'useEffect runs automatic actions',
              'Clean functional code'
            ]}
          />

          <ConceptCard
            title="Routes"
            description="Switch between pages instantly without reloads."
            icon={RouteIcon}
            badge="Page Navigation"
            linkTo="/routes"
            color="purple"
            onAddToCart={onAddToCart}
            features={[
              'Fast Single Page Navigation',
              'Link component for smooth switching',
              'Dynamic URL parameters'
            ]}
          />
        </div>
      </section>


      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/80 border border-slate-800 backdrop-blur-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-4">
            <div>

              <h3 className="text-lg font-bold text-white mt-1">Quick Live Card Examples</h3>
            </div>
            <RouterLink to="/props" className="text-xs text-indigo-400 hover:text-indigo-300 font-semibold flex items-center gap-1">
              Start Lessons <ArrowRight className="w-3.5 h-3.5" />
            </RouterLink>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            

            <div className="p-5 bg-slate-950 rounded-2xl border border-cyan-500/30 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-bold text-cyan-400 flex items-center gap-1.5">
                  <User className="w-4 h-4" /> Props Card Example
                </h4>
                {onAddToCart && (
                  <button
                    onClick={() => onAddToCart({ title: 'Props Interactive Card', description: `User Name: ${demoName}` })}
                    className="px-2.5 py-1 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-[10px] font-semibold flex items-center gap-1"
                  >
                    <ShoppingCart className="w-3 h-3" /> Add to Cart
                  </button>
                )}
              </div>
              <div>
                <label className="text-[11px] text-slate-400 block mb-1">Type User Name Prop:</label>
                <input
                  type="text"
                  value={demoName}
                  onChange={(e) => setDemoName(e.target.value)}
                  className="w-full px-3 py-1.5 text-xs bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-500"
                />
              </div>
              <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 text-center">
                <span className="text-xs text-slate-400">Child Component Output:</span>
                <div className="text-sm font-bold text-cyan-300 mt-0.5">{demoName || 'Anonymous'}</div>
              </div>
            </div>


            <div className="p-5 bg-slate-950 rounded-2xl border border-emerald-500/30 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-bold text-emerald-400 flex items-center gap-1.5">
                  <Zap className="w-4 h-4" /> useState Counter Example
                </h4>
                {onAddToCart && (
                  <button
                    onClick={() => onAddToCart({ title: 'useState Counter Card', description: `Current State Value: ${demoCount}` })}
                    className="px-2.5 py-1 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[10px] font-semibold flex items-center gap-1"
                  >
                    <ShoppingCart className="w-3 h-3" /> Add to Cart
                  </button>
                )}
              </div>
              <div className="text-center py-2">
                <span className="text-xs text-slate-400 block mb-1">Current State:</span>
                <span className="text-2xl font-mono font-bold text-emerald-400">{demoCount}</span>
              </div>
              <div className="flex justify-center gap-2">
                <button
                  onClick={() => setDemoCount(c => Math.max(0, c - 1))}
                  className="px-3 py-1 bg-slate-800 hover:bg-slate-700 text-xs font-bold text-white rounded-lg"
                >
                  -
                </button>
                <button
                  onClick={() => setDemoCount(c => c + 1)}
                  className="px-4 py-1 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-lg shadow-md shadow-emerald-600/20"
                >
                  + Increase State
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
