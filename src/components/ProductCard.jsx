import { useState } from 'react'
import { Heart, ShoppingCart, Star, Plus, Minus, Check } from 'lucide-react'

// Reusable Product Card Component consuming Props (product, onAddToCart)
// Internal Hooks: useState for local item quantity and favorite wishlist heart toggle
export default function ProductCard({ product, onAddToCart }) {
  const [quantity, setQuantity] = useState(1)
  const [isFavorite, setIsFavorite] = useState(false)
  const [added, setAdded] = useState(false)

  const handleAdd = () => {
    if (onAddToCart) {
      onAddToCart({
        ...product,
        quantity: quantity,
        totalPrice: (product.price * quantity).toFixed(2)
      })
    }
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <div className="flex flex-col justify-between p-5 rounded-3xl bg-slate-900/80 border border-slate-800 backdrop-blur-sm transition-all duration-300 hover:border-indigo-500/50 hover:shadow-2xl hover:shadow-indigo-500/10 group">
      <div>
        
        {/* Product Image & Top Badges */}
        <div className="relative rounded-2xl overflow-hidden bg-slate-950 mb-4 h-48 flex items-center justify-center border border-slate-800/80">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&auto=format&fit=crop&q=80' }}
          />

          {/* Category Badge */}
          <span className="absolute top-3 left-3 text-[10px] font-mono uppercase px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-indigo-300 border border-slate-700 font-semibold">
            {product.category}
          </span>

          {/* Favorite Heart Toggle Hook (useState) */}
          <button
            onClick={() => setIsFavorite(!isFavorite)}
            className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-md border transition-all ${
              isFavorite
                ? 'bg-rose-500/20 text-rose-500 border-rose-500/40 scale-110'
                : 'bg-slate-950/80 text-slate-400 border-slate-700 hover:text-white'
            }`}
            title={isFavorite ? 'Remove from Wishlist' : 'Add to Wishlist'}
          >
            <Heart className={`w-4 h-4 ${isFavorite ? 'fill-rose-500' : ''}`} />
          </button>
        </div>

        {/* Title & Star Rating */}
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

      {/* Price & Add to Cart Controls */}
      <div className="pt-4 border-t border-slate-800/80 space-y-3">
        
        <div className="flex items-center justify-between">
          <div>
            <span className="text-[10px] text-slate-500 block uppercase font-mono">Price</span>
            <span className="text-lg font-mono font-extrabold text-white">${product.price}</span>
          </div>

          {/* Quantity Counter Hook (useState) */}
          <div className="flex items-center gap-1 p-1 rounded-xl bg-slate-950 border border-slate-800">
            <button
              onClick={() => setQuantity(q => Math.max(1, q - 1))}
              className="p-1 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
              title="Decrease quantity"
            >
              <Minus className="w-3 h-3" />
            </button>
            <span className="w-6 text-center text-xs font-mono font-bold text-indigo-300">
              {quantity}
            </span>
            <button
              onClick={() => setQuantity(q => q + 1)}
              className="p-1 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
              title="Increase quantity"
            >
              <Plus className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={handleAdd}
          className={`w-full py-2.5 px-4 rounded-xl font-semibold text-xs transition-all flex items-center justify-center gap-2 shadow-md ${
            added
              ? 'bg-emerald-600 text-white shadow-emerald-600/20'
              : 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-indigo-600/20'
          }`}
        >
          {added ? (
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
