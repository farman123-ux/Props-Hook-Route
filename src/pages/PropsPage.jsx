import { useState } from 'react'
import { BookOpen, ArrowLeft, Check, Copy, Sliders, ShoppingCart } from 'lucide-react'
import { Link as RouterLink } from 'react-router-dom'

export default function PropsPage({ onAddToCart }) {
  const [copiedExample, setCopiedExample] = useState(null)


  const [name, setName] = useState('Farman')
  const [role, setRole] = useState('Developer')

  const copyCode = (code, id) => {
    navigator.clipboard.writeText(code)
    setCopiedExample(id)
    setTimeout(() => setCopiedExample(null), 2000)
  }

  const example1Code = `// Example 1: Passing Data (Simple)
function App() {
  return <Card title="Hello World" />;
}

function Card(props) {
  return <h1>{props.title}</h1>;
}`

  const example2Code = `// Example 2: Passing a Function (Simple)
function App() {
  function handleClick() {
    alert("Clicked!");
  }

  return <Button onClick={handleClick} />;
}

function Button(props) {
  return <button onClick={props.onClick}>Click Me</button>;
}`

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10 bg-slate-950 text-slate-100">
      

      <RouterLink to="/" className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white font-medium">
        <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
      </RouterLink>


      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 text-xs font-semibold">
            <BookOpen className="w-3.5 h-3.5 text-cyan-400" /> Lesson 1: Props
          </div>
          <h1 className="text-3xl font-extrabold text-white">React Props</h1>
        </div>

        {onAddToCart && (
          <button
            onClick={() => onAddToCart({ title: 'Props Complete Module', description: 'Master passing data and callback functions in React.' })}
            className="px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-semibold text-xs transition-colors flex items-center gap-2 shadow-lg shadow-cyan-600/20 self-start sm:self-auto"
          >
            <ShoppingCart className="w-4 h-4" /> Add Props Lesson to Cart
          </button>
        )}
      </div>


      <section className="p-5 rounded-2xl bg-slate-900/80 border border-cyan-500/30 space-y-1 backdrop-blur-sm">
        <h2 className="text-base font-bold text-cyan-300">What is Props?</h2>
        <p className="text-xs text-slate-200 leading-relaxed">
          Props are like function arguments. They pass data from a Parent component down to a Child component.
        </p>
      </section>


      <section className="space-y-5">
        <h2 className="text-xl font-bold text-white">Two Simple Examples</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          

          <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-cyan-400">1. Passing Data</h3>
              <button
                onClick={() => copyCode(example1Code, 'ex1')}
                className="text-slate-400 hover:text-white p-1"
              >
                {copiedExample === 'ex1' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
            <p className="text-[11px] text-slate-400">
              Pass text data into a child component.
            </p>
            <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 text-xs font-mono text-slate-300">
              <pre><code>{example1Code}</code></pre>
            </div>
          </div>


          <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-cyan-400">2. Passing Functions</h3>
              <button
                onClick={() => copyCode(example2Code, 'ex2')}
                className="text-slate-400 hover:text-white p-1"
              >
                {copiedExample === 'ex2' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
            <p className="text-[11px] text-slate-400">
              Pass a click function to handle button clicks.
            </p>
            <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 text-xs font-mono text-slate-300">
              <pre><code>{example2Code}</code></pre>
            </div>
          </div>

        </div>
      </section>


      <section className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-5">
        <div className="border-b border-slate-800 pb-3 flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <Sliders className="w-4 h-4 text-cyan-400" /> Live Props Test
            </h2>
            <p className="text-[11px] text-slate-400 mt-0.5">
              Type text in the inputs to change the child card props live.
            </p>
          </div>
          {onAddToCart && (
            <button
              onClick={() => onAddToCart({ title: `Props Card (${name})`, description: `User Name Prop: ${name}` })}
              className="px-3 py-1.5 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-xs font-semibold flex items-center gap-1.5"
            >
              <ShoppingCart className="w-3.5 h-3.5" /> Add Card to Cart
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">

          <div className="space-y-3 bg-slate-950 p-4 rounded-xl border border-slate-800">
            <div>
              <label className="text-xs text-slate-300 block mb-1">Name Prop:</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-1.5 text-xs bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-500"
              />
            </div>
            <div>
              <label className="text-xs text-slate-300 block mb-1">Role Prop:</label>
              <input
                type="text"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full px-3 py-1.5 text-xs bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-500"
              />
            </div>
          </div>


          <div className="p-5 rounded-2xl bg-gradient-to-br from-slate-900 to-cyan-950/40 border border-cyan-500/40 text-center space-y-2 shadow-lg shadow-cyan-500/10">
            <span className="text-[10px] text-cyan-400 block font-mono">Rendered Child Card Component</span>
            <h3 className="text-lg font-bold text-white">{name || 'User'}</h3>
            <p className="text-xs text-cyan-300 font-medium">{role || 'Role'}</p>
          </div>
        </div>
      </section>

    </div>
  )
}
