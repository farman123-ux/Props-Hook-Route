import { useState } from 'react'
import { Search, ShoppingCart, X, Store, Trash2 } from 'lucide-react'

// ===================================================================
// Navbar Component
// 1. Receives search and cart data/functions via PROPS
// 2. Uses local state (useState) to toggle the Cart Drawer (open/close)
// ===================================================================
export default function Navbar({
  searchQuery = '',
  setSearchQuery,
  cart = [],
  onRemoveFromCart,
  onClearCart
}) {
  // Simple state to open or close the cart popup
  const [isCartOpen, setIsCartOpen] = useState(false)

  // Simple calculations for total items and total price
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)
  const totalPrice = cart
    .reduce((sum, item) => sum + item.price * item.quantity, 0)
    .toFixed(2)

  return (
    <header className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-500 text-white shadow-lg shadow-indigo-500/25">
              <Store className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg text-white tracking-tight flex items-center gap-1.5">
                ReactCraft <span className="text-[10px] px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 font-medium border border-indigo-500/30">Store</span>
              </span>
              <span className="text-[10px] text-slate-400 font-mono tracking-widest">
                PROPS & HOOKS PRACTICE
              </span>
            </div>
          </div>

          {/* Search Input & Cart Button */}
          <div className="flex items-center gap-3">
            
            {/* Search Bar */}
            <div className="relative flex items-center">
              <Search className="w-3.5 h-3.5 absolute left-3 text-slate-400 pointer-events-none" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-40 sm:w-64 pl-8 pr-8 py-1.5 text-xs bg-slate-900 border border-slate-700/80 rounded-xl text-slate-100 placeholder-slate-400 focus:outline-none focus:border-indigo-500 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 text-slate-400 hover:text-white"
                  title="Clear search"
                >
                  <X className="w-3 h-3" />
                </button>
              )}
            </div>

            {/* Cart Button */}
            <div className="relative">
              <button
                onClick={() => setIsCartOpen(!isCartOpen)}
                className="relative p-2 text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 rounded-xl border border-slate-800 transition-all flex items-center gap-2"
                title="View Cart"
              >
                <ShoppingCart className="w-4 h-4 text-indigo-400" />
                {totalItems > 0 && (
                  <span className="flex h-5 min-w-[20px] px-1.5 items-center justify-center rounded-full bg-indigo-600 text-[10px] font-bold text-white shadow-md">
                    {totalItems}
                  </span>
                )}
              </button>

              {/* Cart Drawer Popup */}
              {isCartOpen && (
                <>
                  {/* Backdrop to easily close on clicking outside */}
                  <div
                    className="fixed inset-0 z-40 bg-black/40 backdrop-blur-[2px]"
                    onClick={() => setIsCartOpen(false)}
                  />

                  <div className="absolute right-0 mt-2 w-80 sm:w-96 bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden z-50 animate-in fade-in zoom-in-95">
                    
                    {/* Cart Header */}
                    <div className="p-3.5 bg-slate-950 border-b border-slate-800 flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <ShoppingCart className="w-4 h-4 text-indigo-400" />
                        <span className="text-xs font-bold text-white">Your Cart</span>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 font-medium">
                          {totalItems} items
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        {cart.length > 0 && (
                          <button
                            onClick={onClearCart}
                            className="text-[11px] text-rose-400 hover:text-rose-300 font-medium flex items-center gap-1"
                          >
                            <Trash2 className="w-3 h-3" /> Clear
                          </button>
                        )}
                        <button
                          onClick={() => setIsCartOpen(false)}
                          className="text-slate-400 hover:text-white p-1"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Cart Items List */}
                    <div className="max-h-72 overflow-y-auto divide-y divide-slate-800/60 p-1">
                      {cart.length > 0 ? (
                        cart.map((item) => (
                          <div
                            key={item.id}
                            className="p-2.5 text-xs flex items-center justify-between gap-3 hover:bg-slate-800/40 rounded-xl transition-colors"
                          >
                            <img
                              src={item.image}
                              alt={item.title}
                              className="w-10 h-10 rounded-lg object-cover bg-slate-950 border border-slate-800 shrink-0"
                              onError={(e) => {
                                e.target.src =
                                  'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=100'
                              }}
                            />
                            <div className="flex-1 min-w-0">
                              <div className="font-semibold text-slate-100 truncate">
                                {item.title}
                              </div>
                              <div className="text-[11px] text-slate-400 font-mono">
                                {item.quantity} x ${item.price.toFixed(2)} ={' '}
                                <span className="text-indigo-300 font-bold">
                                  ${(item.price * item.quantity).toFixed(2)}
                                </span>
                              </div>
                            </div>
                            <button
                              onClick={() => onRemoveFromCart(item.id)}
                              className="text-slate-500 hover:text-rose-400 p-1.5 transition-colors"
                              title="Remove item"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </div>
                        ))
                      ) : (
                        <div className="p-8 text-center text-slate-400 space-y-1">
                          <ShoppingCart className="w-8 h-8 mx-auto text-slate-600 mb-2" />
                          <div className="text-xs font-semibold text-slate-300">
                            Your Cart is Empty
                          </div>
                          <p className="text-[11px] text-slate-500">
                            Click "Add to Cart" on any product card below.
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Cart Footer */}
                    {cart.length > 0 && (
                      <div className="p-3.5 bg-slate-950 border-t border-slate-800 flex items-center justify-between">
                        <div>
                          <span className="text-[10px] text-slate-400 block uppercase font-mono">
                            Total Value
                          </span>
                          <span className="text-base font-mono font-bold text-white">
                            ${totalPrice}
                          </span>
                        </div>
                        <button
                          onClick={() => alert(`Order placed for $${totalPrice}!`)}
                          className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs transition-colors shadow-md shadow-indigo-600/20"
                        >
                          Checkout
                        </button>
                      </div>
                    )}

                  </div>
                </>
              )}
            </div>

          </div>

        </div>
      </div>
    </header>
  )
}
