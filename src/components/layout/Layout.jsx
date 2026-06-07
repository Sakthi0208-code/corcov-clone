import React, { useState, useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './Navbar'
import Footer from './Footer'
import FloatingParticles from '../ui/FloatingParticles'

const Layout = () => {
  const location = useLocation()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Faint preloader simulation for premium entry experience
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="flex flex-col min-h-screen bg-white text-corcov-slate relative tech-grid">
      {/* Background Particles */}
      <FloatingParticles />

      {/* Preloader Animation */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
            className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center"
          >
            <div className="space-y-6 flex flex-col items-center">
              <div className="relative w-16 h-16 flex items-center justify-center">
                {/* Circular tech loader */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 1.2, ease: 'linear' }}
                  className="absolute inset-0 rounded-full border-4 border-slate-100 border-t-corcov-sky"
                />
                <span className="font-display font-extrabold text-corcov-sky-dark text-2xl">C</span>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className="text-center"
              >
                <h2 className="font-display font-bold text-lg text-corcov-charcoal tracking-widest uppercase">
                  Corcov Capital
                </h2>
                <p className="text-xs text-slate-400 font-medium uppercase tracking-widest mt-1">
                  Algorithmic Research & Infrastructure
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Navbar />

      {/* Main Content View with enhanced transitions */}
      <main className="flex-grow w-full relative z-10 flex flex-col justify-start">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="w-full flex-grow flex flex-col"
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />

      {/* Sticky WhatsApp Chat Widget */}
      <a
        href="https://wa.me/916383477174"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-[#25C366] text-white p-3.5 rounded-full shadow-lg hover:scale-105 transition-transform duration-300 flex items-center justify-center"
        aria-label="Chat with Corcov Capital on WhatsApp"
        id="whatsapp-chat-widget"
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.747 1.451 5.436.002 9.858-4.395 9.862-9.81.002-2.623-1.02-5.086-2.877-6.944-1.857-1.859-4.325-2.883-6.953-2.885-5.437 0-9.86 4.397-9.865 9.813-.003 1.765.46 3.488 1.345 5.03l-1.019 3.717 3.812-.999L6.647 19.154zM16.6 13.9c-.251-.126-1.488-.733-1.718-.817-.23-.084-.397-.126-.563.125-.167.251-.647.817-.792.984-.146.167-.292.188-.543.062-.251-.126-1.06-.39-2.019-1.246-.747-.665-1.251-1.487-1.398-1.738-.146-.252-.016-.388.11-.513.112-.113.251-.293.377-.44.125-.146.167-.251.251-.418.084-.167.042-.314-.021-.44-.063-.126-.563-1.36-.771-1.861-.203-.49-.41-.423-.563-.431-.146-.007-.314-.008-.482-.008-.167 0-.439.062-.669.314-.23.251-.878.858-.878 2.093 0 1.235.9 2.428.999 2.564.1.136 1.77 2.7 4.29 3.79.6.258 1.07.412 1.435.528.6.19 1.15.163 1.58.099.48-.071 1.488-.607 1.7-.1.21-.49.21-.908.15-.992-.06-.084-.23-.126-.48-.252z"/>
        </svg>
      </a>
    </div>
  )
}

export default Layout
