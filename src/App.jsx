import { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import PropsPage from './pages/PropsPage'
import HooksPage from './pages/HooksPage'
import RoutesPage from './pages/RoutesPage'


function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function App() {

  const [notifications, setNotifications] = useState([])
  const [toastMessage, setToastMessage] = useState(null)

  const addToCart = (product) => {
    const newItem = {
      id: Date.now(),
      title: product.title || 'React Course Item',
      desc: product.description || 'Added to cart successfully!',
      time: 'Just now',
      unread: true
    }
    setNotifications((prev) => [newItem, ...prev])


    setToastMessage(`✓ Added "${product.title}" to Notifications!`)
    setTimeout(() => setToastMessage(null), 3000)
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between selection:bg-indigo-500 selection:text-white relative">
      <ScrollToTop />


      {toastMessage && (
        <div className="fixed bottom-5 right-5 z-50 px-4 py-2.5 bg-indigo-600 text-white font-semibold text-xs rounded-xl shadow-2xl border border-indigo-400 animate-in fade-in slide-in-from-bottom-2 flex items-center gap-2">
          <span>{toastMessage}</span>
        </div>
      )}
      

      <Navbar notifications={notifications} setNotifications={setNotifications} />


      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home onAddToCart={addToCart} />} />
          <Route path="/props" element={<PropsPage onAddToCart={addToCart} />} />
          <Route path="/hooks" element={<HooksPage onAddToCart={addToCart} />} />
          <Route path="/routes" element={<RoutesPage onAddToCart={addToCart} />} />
          <Route path="*" element={<Home onAddToCart={addToCart} />} />
        </Routes>
      </main>


      <Footer />
    </div>
  )
}

export default App
