import { useState, useRef, useEffect } from 'react'
import { Search, Bell, ShoppingCart, X, Check, Store, Trash2 } from 'lucide-react'

// Navbar Component consuming Props (searchQuery, setSearchQuery, cart, setCart)
export default function Navbar({ searchQuery, setSearchQuery, cart = [], setCart }) {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)

  const searchRef = useRef(null)
  const cartRef = useRef(null)

  // Outside click handler Hook (useEffect)
  useEffect(() => {
    function handleClickOutside(event) {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchOpen(false)
      }
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setIsCartOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const totalCartCount = cart.reduce((sum, item) => sum + (item.quantity || 1), 0)
  const totalCartPrice = cart.reduce((sum, item) => sum + (Number(item.price) * (item.quantity || 1)), 0).toFixed(2)

  const removeCartItem = (id) => {
    if (setCart) {
      setCart(cart.filter(item => item.id !== id))
    }
  }

  const clearAllCart = () => {
    if (setCart) {
      setCart([])
    }
  }

  return (
    <header className="sticky top-0 z-50 bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Brand Logo */}
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-500 text-white shadow-lg shadow-indigo-500/25">
              <Store className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg text-white tracking-tight flex items-center gap-1.5">
                ReactCraft <span className="text-[10px] px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 font-medium border border-indigo-500/30">Store</span>
              </span>
              <span className="text-[10px] text-slate-400 font-mono tracking-widest">HOOKS & PRODUCT CARDS</span>
            </div>
          </div>

          {/* Search Navbar & Notification Cart */}
          <div className="flex items-center gap-3">

            {/* Product Search Bar */}
            <div className="relative" ref={searchRef}>
              <div className="relative flex items-center">
                <Search className="w-3.5 h-3.5 absolute left-3 text-slate-400 pointer-events-none" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-40 sm:w-64 pl-8 pr-7 py-1.5 text-xs bg-slate-900/90 border border-slate-700/80 rounded-xl text-slate-100 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-2 text-slate-400 hover:text-white"
                  >
                    <X className="w-3 h-3" />
                  </button>
                )}
              </div>
            </div>

            {/* Dynamic Notification Cart Icon */}
            <div className="relative" ref={cartRef}>
              <button
                onClick={() => setIsCartOpen(!isCartOpen)}
                className="relative p-2 text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 rounded-xl border border-slate-800 transition-all focus:outline-none focus:ring-1 focus:ring-indigo-500 flex items-center gap-2"
                aria-label="Cart Notifications"
              >
                <Bell className="w-4 h-4 text-indigo-400" />
                {totalCartCount > 0 && (
                  <span className="flex h-5 min-w-[20px] px-1.5 items-center justify-center rounded-full bg-indigo-600 text-[10px] font-bold text-white shadow-md animate-pulse">
                    {totalCartCount}
                  </span>
                )}
              </button>

              {/* Cart Popover Drawer */}
              {isCartOpen && (
                <div className="absolute right-0 mt-2 w-80 sm:w-96 bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden z-50">
                  <div className="p-3.5 bg-slate-950 border-b border-slate-800 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <ShoppingCart className="w-4 h-4 text-indigo-400" />
                      <span className="text-xs font-bold text-white">Cart & Notifications</span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 font-medium">
                        {totalCartCount} items
                      </span>
                    </div>
                    {cart.length > 0 && (
                      <button
                        onClick={clearAllCart}
                        className="text-[10px] text-rose-400 hover:text-rose-300 font-medium flex items-center gap-1"
                      >
                        <Trash2 className="w-3 h-3" /> Clear
                      </button>
                    )}
                  </div>

                  <div className="max-h-72 overflow-y-auto divide-y divide-slate-800/60">
                    {cart.length > 0 ? (
                      cart.map((item, idx) => (
                        <div
                          key={idx}
                          className="p-3 text-xs flex items-center justify-between gap-3 hover:bg-slate-800/40 transition-colors"
                        >
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-10 h-10 rounded-lg object-cover bg-slate-950 border border-slate-800 shrink-0"
                            onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=100' }}
                          />
                          <div className="flex-1 space-y-0.5">
                            <div className="font-semibold text-slate-100 line-clamp-1">{item.title}</div>
                            <div className="text-[11px] text-slate-400 font-mono">
                              {item.quantity || 1} x ${item.price} = <span className="text-indigo-300 font-bold">${item.totalPrice || item.price}</span>
                            </div>
                          </div>
                          <button
                            onClick={() => removeCartItem(item.id)}
                            className="text-slate-500 hover:text-rose-400 p-1 transition-colors"
                          >
                            <X className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      ))
                    ) : (
                      <div className="p-6 text-center text-slate-400 space-y-1">
                        <ShoppingCart className="w-6 h-6 mx-auto text-slate-600 mb-1" />
                        <div className="text-xs font-semibold text-slate-300">Your Cart & Notifications are Empty</div>
                        <p className="text-[11px] text-slate-500">Click "Add to Cart" on any product card below.</p>
                      </div>
                    )}
                  </div>

                  {cart.length > 0 && (
                    <div className="p-3 bg-slate-950 border-t border-slate-800 flex items-center justify-between">
                      <div>
                        <span className="text-[10px] text-slate-400 block uppercase font-mono">Total Cart Value</span>
                        <span className="text-sm font-mono font-bold text-white">${totalCartPrice}</span>
                      </div>
                      <button className="px-4 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs transition-colors">
                        Checkout
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>

          </div>

        </div>
      </div>
    </header>
  )
}
