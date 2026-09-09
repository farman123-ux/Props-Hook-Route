import { useState } from 'react'
import { Link as RouterLink, NavLink } from 'react-router-dom'
import { Search, Bell, Code2, BookOpen, Layers, Route as RouteIcon, Sparkles, X, ShoppingCart } from 'lucide-react'

// Simple Database for Navbar Search
const SEARCH_DATABASE = [
  { title: 'What is Props?', category: 'Props', path: '/props' },
  { title: 'How to use Props', category: 'Props', path: '/props' },
  { title: 'What are Hooks?', category: 'Hooks', path: '/hooks' },
  { title: 'useState Hook', category: 'Hooks', path: '/hooks' },
  { title: 'useEffect Hook', category: 'Hooks', path: '/hooks' },
  { title: 'What is React Router?', category: 'Routes', path: '/routes' },
  { title: 'Link & useParams', category: 'Routes', path: '/routes' }
]

export default function Navbar({ notifications = [], setNotifications }) {
  // Simple State
  const [searchQuery, setSearchQuery] = useState('')
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isNotificationOpen, setIsNotificationOpen] = useState(false)

  // Simple 1-line Search Filter
  const searchResults = searchQuery
    ? SEARCH_DATABASE.filter(item => item.title.toLowerCase().includes(searchQuery.toLowerCase()))
    : []

  // Simple Notification Handlers
  const clearOne = (id) => {
    if (setNotifications) {
      setNotifications(notifications.filter(item => item.id !== id))
    }
  }

  const clearAll = () => {
    if (setNotifications) {
      setNotifications([])
    }
  }

  return (
    <header className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Brand Logo */}
          <RouterLink to="/" className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-indigo-600 text-white font-bold">
              <Code2 className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base text-white tracking-tight">
                ReactCraft <span className="text-[10px] px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 font-normal">Learn</span>
              </span>
              <span className="text-[9px] text-slate-400 font-mono">PROPS • HOOKS • ROUTES</span>
            </div>
          </RouterLink>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-1">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `px-3.5 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 ${
                  isActive ? 'bg-indigo-600/20 text-indigo-300 border border-indigo-500/30' : 'text-slate-300 hover:text-white'
                }`
              }
            >
             Home
            </NavLink>
            <NavLink
              to="/props"
              className={({ isActive }) =>
                `px-3.5 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 ${
                  isActive ? 'bg-cyan-600/20 text-cyan-300 border border-cyan-500/30' : 'text-slate-300 hover:text-white'
                }`
              }
            >
              Props
            </NavLink>
            <NavLink
              to="/hooks"
              className={({ isActive }) =>
                `px-3.5 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 ${
                  isActive ? 'bg-emerald-600/20 text-emerald-300 border border-emerald-500/30' : 'text-slate-300 hover:text-white'
                }`
              }
            >
              Hooks
            </NavLink>
            <NavLink
              to="/routes"
              className={({ isActive }) =>
                `px-3.5 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 ${
                  isActive ? 'bg-purple-600/20 text-purple-300 border border-purple-500/30' : 'text-slate-300 hover:text-white'
                }`
              }
            >
              <RouteIcon className="w-3.5 h-3.5" /> Routes
            </NavLink>
          </nav>

          {/* Search Bar & Notification Bell */}
          <div className="flex items-center gap-3">

            {/* Simple Search Bar */}
            <div className="relative">
              <div className="flex items-center">
                <Search className="w-3.5 h-3.5 absolute left-3 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search topic..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value)
                    setIsSearchOpen(true)
                  }}
                  className="w-36 sm:w-56 pl-8 pr-7 py-1 text-xs bg-slate-900 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-indigo-500"
                />
                {searchQuery && (
                  <button
                    onClick={() => {
                      setSearchQuery('')
                      setIsSearchOpen(false)
                    }}
                    className="absolute right-2 text-slate-400 hover:text-white"
                  >
                    <X className="w-3 h-3" />
                  </button>
                )}
              </div>

              {/* Search Results Dropdown */}
              {isSearchOpen && searchQuery && (
                <div className="absolute right-0 mt-2 w-72 bg-slate-900 border border-slate-800 rounded-xl shadow-2xl p-2 z-50">
                  {searchResults.length > 0 ? (
                    searchResults.map((item, idx) => (
                      <RouterLink
                        key={idx}
                        to={item.path}
                        onClick={() => {
                          setIsSearchOpen(false)
                          setSearchQuery('')
                        }}
                        className="block p-2 text-xs hover:bg-slate-800 rounded-lg text-white font-medium flex items-center justify-between"
                      >
                        <span>{item.title}</span>
                        <span className="text-[9px] px-1.5 py-0.5 rounded bg-slate-800 text-slate-400 font-mono">
                          {item.category}
                        </span>
                      </RouterLink>
                    ))
                  ) : (
                    <div className="p-3 text-center text-slate-400 text-xs">No matches found</div>
                  )}
                </div>
              )}
            </div>

            {/* Simple Notification Bell / Cart */}
            <div className="relative">
              <button
                onClick={() => setIsNotificationOpen(!isNotificationOpen)}
                className="p-2 text-slate-300 hover:text-white bg-slate-900 rounded-xl border border-slate-800 flex items-center gap-1"
              >
                <Bell className="w-4 h-4 text-indigo-400" />
                {notifications.length > 0 && (
                  <span className="px-1.5 py-0.2 bg-indigo-600 text-[10px] font-bold text-white rounded-full">
                    {notifications.length}
                  </span>
                )}
              </button>

              {/* Notifications Popover */}
              {isNotificationOpen && (
                <div className="absolute right-0 mt-2 w-72 bg-slate-900 border border-slate-800 rounded-xl shadow-2xl overflow-hidden z-50">
                  <div className="p-3 bg-slate-950 border-b border-slate-800 flex justify-between items-center text-xs">
                    <span className="font-bold text-white flex items-center gap-1.5">
                      <ShoppingCart className="w-3.5 h-3.5 text-indigo-400" /> Saved Items
                    </span>
                    {notifications.length > 0 && (
                      <button onClick={clearAll} className="text-[10px] text-rose-400 hover:text-rose-300 font-semibold">
                        Clear All
                      </button>
                    )}
                  </div>

                  <div className="max-h-60 overflow-y-auto divide-y divide-slate-800">
                    {notifications.length > 0 ? (
                      notifications.map((item) => (
                        <div key={item.id} className="p-3 text-xs flex justify-between items-start gap-2">
                          <div>
                            <div className="font-semibold text-white">{item.title}</div>
                            <div className="text-[10px] text-slate-400">{item.desc}</div>
                          </div>
                          <button onClick={() => clearOne(item.id)} className="text-slate-500 hover:text-white p-0.5">
                            <X className="w-3 h-3" />
                          </button>
                        </div>
                      ))
                    ) : (
                      <div className="p-5 text-center text-slate-400 text-xs">
                        No saved items yet. Click "Add to Cart" on any card!
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

          </div>

        </div>
      </div>
    </header>
  )
}
