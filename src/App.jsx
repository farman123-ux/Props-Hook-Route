import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductCard from './components/ProductCard'
import Footer from './components/Footer'
import { Layers, Zap, ShoppingCart, Sparkles, Filter, CheckCircle2 } from 'lucide-react'

const INITIAL_PRODUCTS = [
  {
    id: 1,
    title: 'React 19 Masterclass Course',
    category: 'Courses',
    price: 49.99,
    rating: 4.9,
    reviews: 128,
    description: 'Complete video guide covering useState, useEffect, useContext, and custom hooks.',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 2,
    title: 'Wireless Mechanical Keyboard',
    category: 'Tech Gear',
    price: 89.00,
    rating: 4.8,
    reviews: 94,
    description: 'RGB mechanical keyboard optimized for speed coding and React development.',
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 3,
    title: 'React Architecture E-Book',
    category: 'Books',
    price: 19.99,
    rating: 4.7,
    reviews: 62,
    description: 'Learn component design patterns, props passing, and scalable folder organization.',
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 4,
    title: 'Ergonomic Coding Mouse',
    category: 'Tech Gear',
    price: 59.50,
    rating: 4.9,
    reviews: 140,
    description: 'Precision ergonomic mouse designed for long programming sessions.',
    image: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 5,
    title: 'Hooks & State Management Bootcamp',
    category: 'Courses',
    price: 39.99,
    rating: 4.9,
    reviews: 210,
    description: 'Deep-dive interactive exercises on useState, useEffect, useMemo, and useRef.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 6,
    title: 'Developer Desk Pad Mat',
    category: 'Tech Gear',
    price: 24.99,
    rating: 4.6,
    reviews: 85,
    description: 'Waterproof anti-slip desk mat featuring React code cheatsheets.',
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&auto=format&fit=crop&q=80'
  }
]

export default function App() {
  // Hooks State Management
  const [products] = useState(INITIAL_PRODUCTS)
  const [cart, setCart] = useState([])
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [toastMessage, setToastMessage] = useState(null)
  const [flashSaleSeconds, setFlashSaleSeconds] = useState(120)

  // useEffect Hook: Flash deal countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setFlashSaleSeconds((prev) => (prev > 0 ? prev - 1 : 120))
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  // Add to Cart handler Hook callback
  const handleAddToCart = (itemToAdd) => {
    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex((item) => item.id === itemToAdd.id)
      if (existingIndex > -1) {
        const updated = [...prevCart]
        const currentQty = updated[existingIndex].quantity || 1
        const addQty = itemToAdd.quantity || 1
        const newQty = currentQty + addQty
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: newQty,
          totalPrice: (updated[existingIndex].price * newQty).toFixed(2)
        }
        return updated
      } else {
        return [itemToAdd, ...prevCart]
      }
    })

    // Show floating toast
    setToastMessage(`✓ Added ${itemToAdd.quantity || 1}x "${itemToAdd.title}" to Notification Cart!`)
    setTimeout(() => setToastMessage(null), 3000)
  }

  // Filter Products using activeCategory and searchQuery
  const filteredProducts = products.filter((p) => {
    const matchesCategory = activeCategory === 'All' || p.category === activeCategory
    const matchesSearch =
      searchQuery.trim() === '' ||
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const categories = ['All', 'Courses', 'Tech Gear', 'Books']

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between selection:bg-indigo-500 selection:text-white relative">
      
      {/* Floating Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-5 right-5 z-50 px-4 py-2.5 bg-indigo-600 text-white font-semibold text-xs rounded-xl shadow-2xl border border-indigo-400 flex items-center gap-2 animate-in fade-in slide-in-from-bottom-2">
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Navbar with Search & Cart Drawer (Consumes Props) */}
      <Navbar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        cart={cart}
        setCart={setCart}
      />

      {/* Hero Section */}
      <Hero flashSaleSeconds={flashSaleSeconds} />

      {/* Main Product Store Showcase */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10 flex-grow">
        
        {/* Category Filter & Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800/80 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 text-xs font-semibold mb-2">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" /> Products Powered by React Hooks
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Featured Product Cards
            </h2>
          </div>

          {/* Category Filter Pills (useState Hook) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-slate-900 rounded-2xl border border-slate-800">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  activeCategory === cat
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid (Passes Props to ProductCard) */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        ) : (
          <div className="p-12 text-center bg-slate-900/60 rounded-3xl border border-slate-800 space-y-2">
            <Filter className="w-8 h-8 text-slate-600 mx-auto mb-2" />
            <h3 className="text-base font-bold text-white">No products found</h3>
            <p className="text-xs text-slate-400">
              Try clearing your search query or selecting another category filter.
            </p>
            <button
              onClick={() => {
                setActiveCategory('All')
                setSearchQuery('')
              }}
              className="mt-3 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs text-indigo-300 font-semibold"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Interactive Hooks Explanation Section */}
        <section className="p-8 sm:p-10 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-6 mt-12">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/30">
              <Layers className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">How React Hooks Power This Product Store</h3>
              <span className="text-xs text-indigo-300 font-mono">Real-time State & Side Effects</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm">
                <CheckCircle2 className="w-4 h-4" /> 1. useState (Local State)
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Each Product Card uses <code className="text-cyan-300">useState</code> locally to track quantity counters (`+` / `-`) and heart wishlist toggles.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                <CheckCircle2 className="w-4 h-4" /> 2. useState (Global Cart)
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                The main <code className="text-emerald-300">App</code> maintains the cart array state and passes add/remove handler functions as component props.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-purple-400 font-bold text-sm">
                <CheckCircle2 className="w-4 h-4" /> 3. useEffect (Side Effects)
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                <code className="text-purple-300">useEffect</code> handles automatic flash deal timers and automatically clears toast notification popovers.
              </p>
            </div>

          </div>
        </section>

      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
