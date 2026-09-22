import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductCard from './components/ProductCard'
import Footer from './components/Footer'
import { Layers, Sparkles, Filter, CheckCircle2 } from 'lucide-react'

// ===================================================================
// 1. INITIAL DATA: List of available store products
// ===================================================================
const PRODUCTS_DATA = [
  {
    id: 1,
    title: 'React 19 Masterclass Course',
    category: 'Courses',
    price: 49.99,
    rating: 4.9,
    reviews: 128,
    description: 'Complete hands-on guide covering useState, useEffect, props, and custom hooks.',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 2,
    title: 'Wireless Mechanical Keyboard',
    category: 'Gear',
    price: 89.00,
    rating: 4.8,
    reviews: 94,
    description: 'RGB mechanical keyboard optimized for speed coding and developer comfort.',
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 3,
    title: 'React Architecture E-Book',
    category: 'Books',
    price: 19.99,
    rating: 4.7,
    reviews: 62,
    description: 'Learn scalable component architecture, clean props passing, and project organization.',
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 4,
    title: 'Ergonomic Coding Mouse',
    category: 'Gear',
    price: 59.50,
    rating: 4.9,
    reviews: 140,
    description: 'Precision ergonomic mouse designed for long daily programming sessions.',
    image: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 5,
    title: 'Hooks Bootcamp Video Series',
    category: 'Courses',
    price: 39.99,
    rating: 4.9,
    reviews: 210,
    description: 'Deep-dive exercises on useState, useEffect, useMemo, and real-world patterns.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 6,
    title: 'Developer Desk Pad Mat',
    category: 'Gear',
    price: 24.99,
    rating: 4.6,
    reviews: 85,
    description: 'Waterproof anti-slip desk mat featuring React code snippets and shortcuts.',
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&auto=format&fit=crop&q=80'
  }
]

export default function App() {
  // ===================================================================
  // 2. STATE HOOKS (useState): Stores application data that can change
  // ===================================================================
  const [products] = useState(PRODUCTS_DATA)
  const [cart, setCart] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [toastMessage, setToastMessage] = useState(null)
  const [flashSaleSeconds, setFlashSaleSeconds] = useState(60)

  // ===================================================================
  // 3. EFFECT HOOK (useEffect): Runs countdown timer side effect
  // ===================================================================
  useEffect(() => {
    // Start interval timer
    const interval = setInterval(() => {
      setFlashSaleSeconds((prev) => (prev > 0 ? prev - 1 : 60))
    }, 1000)

    // Cleanup interval when component unmounts
    return () => clearInterval(interval)
  }, [])

  // ===================================================================
  // 4. CART LOGIC (Simple and easy to read)
  // ===================================================================
  
  // Add item to cart (or increase quantity if already in cart)
  const handleAddToCart = (product, quantity = 1) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id)
      
      if (existingItem) {
        // If already in cart, increment quantity
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      }
      
      // If new item, add to array
      return [...prevCart, { ...product, quantity }]
    })

    // Show quick toast notification
    setToastMessage(`Added ${quantity}x "${product.title}" to cart!`)
    setTimeout(() => setToastMessage(null), 2500)
  }

  // Remove an item from cart by ID
  const handleRemoveFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id))
  }

  // Clear all items in cart
  const handleClearCart = () => {
    setCart([])
  }

  // ===================================================================
  // 5. FILTER LOGIC: Filter products by Category and Search Text
  // ===================================================================
  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === 'All' || product.category === selectedCategory
    const matchesSearch =
      searchQuery.trim() === '' ||
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase())

    return matchesCategory && matchesSearch
  })

  const categories = ['All', 'Courses', 'Gear', 'Books']

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between selection:bg-indigo-500 selection:text-white relative">
      
      {/* Toast Notification Alert */}
      {toastMessage && (
        <div className="fixed bottom-5 right-5 z-50 px-4 py-2.5 bg-indigo-600 text-white font-semibold text-xs rounded-xl shadow-2xl border border-indigo-400 flex items-center gap-2">
          <span>✓ {toastMessage}</span>
        </div>
      )}

      {/* 1. NAVBAR COMPONENT: Passes cart & search props */}
      <Navbar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        cart={cart}
        onRemoveFromCart={handleRemoveFromCart}
        onClearCart={handleClearCart}
      />

      {/* 2. HERO COMPONENT: Passes timer prop */}
      <Hero flashSaleSeconds={flashSaleSeconds} />

      {/* 3. MAIN STORE SECTION */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10 flex-grow w-full">
        
        {/* Header & Category Buttons */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Featured Products ({filteredProducts.length})
            </h2>
          </div>

          {/* Category Filter Pills (Controlled via useState) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-slate-900 rounded-2xl border border-slate-800">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  selectedCategory === cat
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid: Passes each product + onAddToCart callback via PROPS */}
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
          <div className="p-12 text-center bg-slate-900/60 rounded-3xl border border-slate-800 space-y-3">
            <Filter className="w-8 h-8 text-slate-600 mx-auto" />
            <h3 className="text-base font-bold text-white">No products found</h3>
            <p className="text-xs text-slate-400">
              No items matched "{searchQuery}". Try selecting another category or resetting the search.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All')
                setSearchQuery('')
              }}
              className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs text-indigo-300 font-semibold"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Concept Explanations: Clear & Simple React Learning Section */}
        <section className="p-8 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-6 mt-12">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/30">
              <Layers className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">
                Simple React Concepts Used in This App
              </h3>
              <p className="text-xs text-slate-400">
                Understand how data flows and state updates in three easy steps
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Concept 1: Props */}
            <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm">
                <CheckCircle2 className="w-4 h-4" /> 1. Props (Passing Data)
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                The parent <code className="text-cyan-300">App</code> passes product details and the{' '}
                <code className="text-cyan-300">handleAddToCart</code> function down to{' '}
                <code className="text-cyan-300">ProductCard</code> via props.
              </p>
            </div>

            {/* Concept 2: useState */}
            <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                <CheckCircle2 className="w-4 h-4" /> 2. useState (State)
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                <code className="text-emerald-300">cart</code>,{' '}
                <code className="text-emerald-300">selectedCategory</code>, and{' '}
                <code className="text-emerald-300">searchQuery</code> store live data that re-renders the UI automatically when changed.
              </p>
            </div>

            {/* Concept 3: useEffect */}
            <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-purple-400 font-bold text-sm">
                <CheckCircle2 className="w-4 h-4" /> 3. useEffect (Side Effects)
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                <code className="text-purple-300">useEffect</code> runs a clean 1-second countdown timer in the background and clears it with{' '}
                <code className="text-purple-300">clearInterval</code>.
              </p>
            </div>

          </div>
        </section>

      </main>

      {/* 4. FOOTER */}
      <Footer />
    </div>
  )
}
