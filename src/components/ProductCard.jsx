import { useState } from 'react'
import { Heart, ShoppingCart, Star, Plus, Minus, Check } from 'lucide-react'

// ===================================================================
// ProductCard Component
// 1. Receives data and functions from parent via PROPS: { product, onAddToCart }
// 2. Uses local state (useState) for quantity, favorite heart, and added button feedback
// ===================================================================
export default function ProductCard({ product, onAddToCart }) {
  // Local state for quantity counter (starts at 1)
  const [quantity, setQuantity] = useState(1)

  // Local state for wishlist heart toggle (true / false)
  const [isFavorite, setIsFavorite] = useState(false)

  // Local state for temporary button feedback ("Added!" checkmark)
  const [isAdded, setIsAdded] = useState(false)

  // Handlers for quantity buttons (+ / -)
  const increaseQty = () => setQuantity((prev) => prev + 1)
  const decreaseQty = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))

  // Handle Add to Cart button click
  const handleAdd = () => {
    if (onAddToCart) {
      onAddToCart(product, quantity)
    }
    setIsAdded(true)
    setTimeout(() => setIsAdded(false), 1500)
  }

  return (
    <div className="flex flex-col justify-between p-5 rounded-3xl bg-slate-900/80 border border-slate-800 transition-all duration-300 hover:border-indigo-500/50 hover:shadow-xl hover:shadow-indigo-500/10 group">
      <div>
        {/* Product Image & Badges */}
        <div className="relative rounded-2xl overflow-hidden bg-slate-950 mb-4 h-48 flex items-center justify-center border border-slate-800/80">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            onError={(e) => {
              e.target.src = 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&auto=format&fit=crop&q=80'
            }}
          />

          {/* Category Tag */}
          <span className="absolute top-3 left-3 text-[10px] font-mono uppercase px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-indigo-300 border border-slate-700 font-semibold">
            {product.category}
          </span>

          {/* Favorite Heart Toggle (Local useState) */}
          {/*  */}
        </div>

        {/* Rating, Title, Description */}
        <div className="space-y-1.5 mb-3">
          <div className="flex items-center gap-1 text-amber-400 text-xs font-semibold">
            <Star className="w-3.5 h-3.5 fill-amber-400" />
            <span>{product.rating}</span>
            <span className="text-slate-500 font-normal">({product.reviews} reviews)</span>
          </div>

          <h3 className="text-base font-bold text-white group-hover:text-indigo-300 transition-colors line-clamp-1">
            {product.title}
          </h3>

          <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
            {product.description}
          </p>
        </div>
      </div>

      {/* Price, Quantity, and Add Button */}
      <div className="pt-4 border-t border-slate-800/80 space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-[10px] text-slate-500 block uppercase font-mono">Price</span>
            <span className="text-lg font-mono font-extrabold text-white">
              ${product.price.toFixed(2)}
            </span>
          </div>

          {/* Quantity Controls (useState) */}
          <div className="flex items-center gap-1 p-1 rounded-xl bg-slate-950 border border-slate-800">
            <button
              onClick={decreaseQty}
              className="p-1 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
              title="Decrease quantity"
            >
              <Minus className="w-3.5 h-3.5" />
            </button>
            <span className="w-6 text-center text-xs font-mono font-bold text-indigo-300">
              {quantity}
            </span>
            <button
              onClick={increaseQty}
              className="p-1 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
              title="Increase quantity"
            >
              <Plus className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Add to Cart Button (Calls parent function via Props) */}
        <button
          onClick={handleAdd}
          className={`w-full py-2.5 px-4 rounded-xl font-semibold text-xs transition-all flex items-center justify-center gap-2 shadow-md ${
            isAdded
              ? 'bg-emerald-600 text-white shadow-emerald-600/20'
              : 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-indigo-600/20'
          }`}
        >
          {isAdded ? (
            <>
              <Check className="w-4 h-4 text-white" />
              <span>Added ({quantity})</span>
            </>
          ) : (
            <>
              <ShoppingCart className="w-4 h-4" />
              <span>Add to Cart • ${(product.price * quantity).toFixed(2)}</span>
            </>
          )}
        </button>
      </div>
    </div>
  )
}
