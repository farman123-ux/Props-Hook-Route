import { Store, Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 text-slate-400 mt-16 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
        
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-indigo-600 text-white font-bold shadow-md shadow-indigo-600/30">
            <Store className="w-4 h-4" />
          </div>
          <span className="font-bold text-sm text-white">ReactCraft Store</span>
          <span className="text-slate-500">• Powered by React Hooks & Product Cards</span>
        </div>

        <div className="text-slate-500 flex items-center gap-1">
          <span>Made with</span> <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> <span>for React Developers</span>
        </div>

      </div>
    </footer>
  )
}
