import { useState, useEffect } from 'react'
import { Layers, ArrowLeft, Check, Copy, Zap, ShoppingCart } from 'lucide-react'
import { Link as RouterLink } from 'react-router-dom'

export default function HooksPage({ onAddToCart }) {
  const [copiedExample, setCopiedExample] = useState(null)

  // Demo 1: useState
  const [count, setCount] = useState(0)

  // Demo 2: useEffect
  const [seconds, setSeconds] = useState(0)
  const [isRunning, setIsRunning] = useState(false)

  useEffect(() => {
    let timer = null
    if (isRunning) {
      timer = setInterval(() => setSeconds(s => s + 1), 1000)
    }
    return () => clearInterval(timer)
  }, [isRunning])

  const copyCode = (code, id) => {
    navigator.clipboard.writeText(code)
    setCopiedExample(id)
    setTimeout(() => setCopiedExample(null), 2000)
  }

  const example1Code = `// Example 1: useState (State Memory)
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}`

  const example2Code = `// Example 2: useEffect (Automatic Action)
import { useEffect } from 'react';

function Header() {
  useEffect(() => {
    alert("Page loaded!");
  }, []);

  return <h1>Welcome!</h1>;
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 text-xs font-semibold">
            <Layers className="w-3.5 h-3.5 text-emerald-400" /> Lesson 2: Hooks
          </div>
          <h1 className="text-3xl font-extrabold text-white">React Hooks</h1>
        </div>

        {onAddToCart && (
          <button
            onClick={() => onAddToCart({ title: 'Hooks Complete Module', description: 'Master useState and useEffect in React.' })}
            className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-colors flex items-center gap-2 shadow-lg shadow-emerald-600/20 self-start sm:self-auto"
          >
            <ShoppingCart className="w-4 h-4" /> Add Hooks Lesson to Cart
          </button>
        )}
      </div>

      {/* Simple Definition */}
      <section className="p-5 rounded-2xl bg-slate-900/80 border border-emerald-500/30 space-y-1 backdrop-blur-sm">
        <h2 className="text-base font-bold text-emerald-300">What are Hooks?</h2>
        <p className="text-xs text-slate-200 leading-relaxed">
          Hooks are special functions in React that let components remember data (state) and run automatic actions.
        </p>
      </section>

      {/* Exactly Two Super Simple Examples */}
      <section className="space-y-5">
        <h2 className="text-xl font-bold text-white">Two Simple Examples</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Example 1 */}
          <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-emerald-400">1. useState Hook</h3>
              <button
                onClick={() => copyCode(example1Code, 'ex1')}
                className="text-slate-400 hover:text-white p-1"
              >
                {copiedExample === 'ex1' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
            <p className="text-[11px] text-slate-400">
              Remembers numbers or text in component memory.
            </p>
            <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 text-xs font-mono text-slate-300">
              <pre><code>{example1Code}</code></pre>
            </div>
          </div>

          {/* Example 2 */}
          <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-emerald-400">2. useEffect Hook</h3>
              <button
                onClick={() => copyCode(example2Code, 'ex2')}
                className="text-slate-400 hover:text-white p-1"
              >
                {copiedExample === 'ex2' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
            <p className="text-[11px] text-slate-400">
              Runs an automatic action when the component loads.
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
              <Zap className="w-4 h-4 text-emerald-400" /> Live Hooks Test
            </h2>
            <p className="text-[11px] text-slate-400 mt-0.5">
              Click the buttons to test state memory and effect timer.
            </p>
          </div>
          {onAddToCart && (
            <button
              onClick={() => onAddToCart({ title: `Hooks Counter (${count})`, description: `Current State Value: ${count}` })}
              className="px-3 py-1.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-semibold flex items-center gap-1.5"
            >
              <ShoppingCart className="w-3.5 h-3.5" /> Add Counter to Cart
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* useState Demo */}
          <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-3 text-center">
            <h3 className="text-xs font-bold text-emerald-400">useState Counter</h3>
            <div className="text-2xl font-mono font-bold text-emerald-400">{count}</div>
            <div className="flex justify-center gap-2">
              <button
                onClick={() => setCount(c => c - 1)}
                className="px-3 py-1 bg-slate-800 hover:bg-slate-700 text-xs font-bold text-white rounded"
              >
                -
              </button>
              <button
                onClick={() => setCount(c => c + 1)}
                className="px-4 py-1 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded shadow-md shadow-emerald-600/20"
              >
                + 1
              </button>
            </div>
          </div>

          {/* useEffect Demo */}
          <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-3 text-center">
            <h3 className="text-xs font-bold text-emerald-400">useEffect Timer</h3>
            <div className="text-2xl font-mono font-bold text-emerald-400">{seconds}s</div>
            <div className="flex justify-center gap-2">
              <button
                onClick={() => setIsRunning(!isRunning)}
                className="px-4 py-1 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded shadow-md shadow-emerald-600/20"
              >
                {isRunning ? 'Pause' : 'Start'}
              </button>
            </div>
          </div>

        </div>
      </section>

    </div>
  )
}
