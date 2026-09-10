import { Link as RouterLink } from 'react-router-dom'
import { ArrowRight, CheckCircle2, ShoppingCart } from 'lucide-react'

export default function ConceptCard({ title, description, icon: Icon, badge, linkTo, color = 'cyan', features = [], codeSnippet, onAddToCart }) {
  const colorMap = {
    cyan: {
      border: 'hover:border-cyan-500/50',
      badge: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30',
      iconBg: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
      button: 'bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 shadow-cyan-600/20 text-white',
      cartBtn: 'bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
      accentText: 'text-cyan-400'
    },
    emerald: {
      border: 'hover:border-emerald-500/50',
      badge: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30',
      iconBg: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
      button: 'bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 shadow-emerald-600/20 text-white',
      cartBtn: 'bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
      accentText: 'text-emerald-400'
    },
    purple: {
      border: 'hover:border-purple-500/50',
      badge: 'bg-purple-500/10 text-purple-300 border-purple-500/30',
      iconBg: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
      button: 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-purple-600/20 text-white',
      cartBtn: 'bg-purple-500/10 hover:bg-purple-500/20 text-purple-300 border-purple-500/30',
      accentText: 'text-purple-400'
    }
  }

  const theme = colorMap[color] || colorMap.purple

  return (
    <div className={`flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-slate-900/80 border border-slate-800 backdrop-blur-sm transition-all duration-300 ${theme.border} hover:shadow-2xl hover:-translate-y-1 group`}>
      <div>
        

        <div className="flex items-center justify-between mb-5">
          <div className={`p-3 rounded-2xl border ${theme.iconBg} group-hover:scale-110 transition-transform`}>
            {Icon && <Icon className="w-6 h-6" />}
          </div>
          {badge && (
            <span className={`text-xs px-3 py-1 rounded-full font-mono border ${theme.badge}`}>
              {badge}
            </span>
          )}
        </div>


        <h3 className="text-xl font-bold text-white mb-2">
          {title}
        </h3>
        <p className="text-sm text-slate-400 leading-relaxed mb-6">
          {description}
        </p>


        {features.length > 0 && (
          <ul className="space-y-2.5 mb-6 text-xs text-slate-300">
            {features.map((feat, i) => (
              <li key={i} className="flex items-center gap-2">
                <CheckCircle2 className={`w-4 h-4 shrink-0 ${theme.accentText}`} />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        )}
      </div>


      <div className="space-y-2 pt-2">
        {onAddToCart && (
          <button
            onClick={() => onAddToCart({ title: `${title} Module`, description: description })}
            className={`w-full py-2.5 px-4 rounded-xl font-semibold text-xs border transition-all flex items-center justify-center gap-2 ${theme.cartBtn}`}
          >
            <ShoppingCart className="w-3.5 h-3.5" />
            <span>Add {title} to Cart</span>
          </button>
        )}

        <RouterLink
          to={linkTo}
          className={`w-full py-3 px-4 rounded-xl font-semibold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 ${theme.button}`}
        >
          <span>Explore {title}</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </RouterLink>
      </div>
    </div>
  )
}
