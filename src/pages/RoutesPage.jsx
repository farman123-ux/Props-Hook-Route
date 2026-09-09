import { useState } from 'react'
import { Route as RouteIcon, ArrowLeft, Check, Copy, Globe, Compass, ShoppingCart } from 'lucide-react'
import { Link as RouterLink, useNavigate } from 'react-router-dom'

export default function RoutesPage({ onAddToCart }) {
  const [copiedExample, setCopiedExample] = useState(null)
  const navigate = useNavigate()

  // Interactive Route Simulator state
  const [simulatedPath, setSimulatedPath] = useState('/props')

  const copyCode = (code, id) => {
    navigator.clipboard.writeText(code)
    setCopiedExample(id)
    setTimeout(() => setCopiedExample(null), 2000)
  }

  const example1Code = `// Example 1: Link Navigation (Simple)
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/props">Props</Link>
    </nav>
  );
}`

  const example2Code = `// Example 2: Dynamic URL Params (Simple)
import { useParams } from 'react-router-dom';

// Route setup: <Route path="/user/:id" element={<User />} />

function User() {
  const { id } = useParams();

  return <h1>User ID: {id}</h1>;
}`

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10 bg-slate-950 text-slate-100">
      
      {/* Back button */}
      <RouterLink to="/" className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white font-medium">
        <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
      </RouterLink>

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20 text-xs font-semibold">
            <RouteIcon className="w-3.5 h-3.5 text-purple-400" /> Lesson 3: Routes
          </div>
          <h1 className="text-3xl font-extrabold text-white">React Routes</h1>
        </div>

        {onAddToCart && (
          <button
            onClick={() => onAddToCart({ title: 'React Router Module', description: 'Master client-side routing, Link, and useParams.' })}
            className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-xs transition-colors flex items-center gap-2 shadow-lg shadow-purple-600/20 self-start sm:self-auto"
          >
            <ShoppingCart className="w-4 h-4" /> Add Routes Lesson to Cart
          </button>
        )}
      </div>

      {/* Simple Definition */}
      <section className="p-5 rounded-2xl bg-slate-900/80 border border-purple-500/30 space-y-1 backdrop-blur-sm">
        <h2 className="text-base font-bold text-purple-300">What is React Router?</h2>
        <p className="text-xs text-slate-200 leading-relaxed">
          React Router lets users switch between different pages instantly without reloading the browser.
        </p>
      </section>

      {/* Exactly Two Super Simple Examples */}
      <section className="space-y-5">
        <h2 className="text-xl font-bold text-white">Two Simple Examples</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Example 1 */}
          <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-purple-400">1. Link Navigation</h3>
              <button
                onClick={() => copyCode(example1Code, 'ex1')}
                className="text-slate-400 hover:text-white p-1"
              >
                {copiedExample === 'ex1' ? <Check className="w-3.5 h-3.5 text-purple-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
            <p className="text-[11px] text-slate-400">
              Use <code>&lt;Link to="..."&gt;</code> to change pages without reloads.
            </p>
            <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 text-xs font-mono text-slate-300">
              <pre><code>{example1Code}</code></pre>
            </div>
          </div>

          {/* Example 2 */}
          <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-purple-400">2. Dynamic URL Params</h3>
              <button
                onClick={() => copyCode(example2Code, 'ex2')}
                className="text-slate-400 hover:text-white p-1"
              >
                {copiedExample === 'ex2' ? <Check className="w-3.5 h-3.5 text-purple-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
            <p className="text-[11px] text-slate-400">
              Use <code>useParams()</code> to read values from the URL like <code>/user/:id</code>.
            </p>
            <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 text-xs font-mono text-slate-300">
              <pre><code>{example2Code}</code></pre>
            </div>
          </div>

        </div>
      </section>

      {/* Clean Interactive Demo */}
      <section className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-5">
        <div className="border-b border-slate-800 pb-3 flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <Compass className="w-4 h-4 text-purple-400" /> Live Route Test
            </h2>
            <p className="text-[11px] text-slate-400 mt-0.5">
              Click the route buttons to switch paths in the address bar simulator.
            </p>
          </div>
          {onAddToCart && (
            <button
              onClick={() => onAddToCart({ title: `Route Simulator (${simulatedPath})`, description: `Simulated URL path: ${simulatedPath}` })}
              className="px-3 py-1.5 rounded-lg bg-purple-500/10 hover:bg-purple-500/20 text-purple-300 border border-purple-500/30 text-xs font-semibold flex items-center gap-1.5"
            >
              <ShoppingCart className="w-3.5 h-3.5" /> Add Route to Cart
            </button>
          )}
        </div>

        <div className="space-y-4">
          
          {/* Address Bar */}
          <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 flex items-center gap-2 text-xs font-mono">
            <Globe className="w-4 h-4 text-purple-400" />
            <span className="text-slate-500">https://myapp.com</span>
            <span className="text-purple-300 font-bold">{simulatedPath}</span>
          </div>

          {/* Quick Buttons */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSimulatedPath('/')}
              className="px-3 py-1 rounded bg-slate-800 hover:bg-slate-700 text-xs font-mono text-slate-200"
            >
              / (Home)
            </button>
            <button
              onClick={() => setSimulatedPath('/props')}
              className="px-3 py-1 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-xs font-mono"
            >
              /props
            </button>
            <button
              onClick={() => setSimulatedPath('/hooks')}
              className="px-3 py-1 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-mono"
            >
              /hooks
            </button>
            <button
              onClick={() => setSimulatedPath('/user/101')}
              className="px-3 py-1 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30 text-xs font-mono"
            >
              /user/101
            </button>
          </div>

          <div className="pt-2">
            <button
              onClick={() => navigate(simulatedPath.startsWith('/user') ? '/' : simulatedPath)}
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold text-xs shadow-md shadow-purple-600/20"
            >
              Go to Actual Page →
            </button>
          </div>

        </div>
      </section>

    </div>
  )
}
