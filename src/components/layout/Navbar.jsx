import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FiPhone, FiMail, FiMenu, FiX, FiLinkedin, FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  // Exactly matching navigation links in the screenshot
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'What we do', path: '/what-we-do' },
    { name: 'Culture', path: '/culture' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <>
      {/* Top Contact & Social Bar - Sky Blue background */}
      <div className="bg-corcov-sky text-white text-xs py-2.5 z-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-2 font-sans font-semibold">
          <div className="flex items-center space-x-6">
            <a href="tel:+916383477174" className="flex items-center space-x-1.5 hover:opacity-80 transition-opacity">
              <FiPhone className="w-3.5 h-3.5" />
              <span>+91 6383477174</span>
            </a>
            <a href="mailto:admin@corcov-trading.com" className="flex items-center space-x-1.5 hover:opacity-80 transition-opacity">
              <FiMail className="w-3.5 h-3.5" />
              <span>admin@corcov-trading.com</span>
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
              <FiFacebook className="w-4 h-4" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
              <FiTwitter className="w-4 h-4" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
              <FiInstagram className="w-4 h-4" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
              <FiLinkedin className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header className="sticky top-0 z-50 w-full bg-white border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo - Matching exact concentric crescents and text colors from the screenshot */}
            <Link to="/" className="flex items-center space-x-3 group">
              <img src="/favicon.png" alt="Corcov Capital Logo" className="w-10 h-10 object-contain flex-shrink-0" />
              <div className="font-display font-bold text-xl tracking-wide">
                <span className="text-corcov-sky">Corcov</span>{' '}
                <span className="text-corcov-charcoal">Capital</span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `text-sm font-semibold tracking-wide transition-all py-2 border-b-2 font-display ${
                      isActive
                        ? 'text-corcov-sky border-corcov-sky'
                        : 'text-slate-500 border-transparent hover:text-corcov-sky hover:border-corcov-sky/30'
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </nav>

            {/* Mobile Hamburger Button */}
            <div className="flex md:hidden items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-slate-600 hover:text-corcov-sky hover:bg-slate-50 rounded-lg transition-colors focus:outline-none"
              >
                {isOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer with Framer Motion */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="md:hidden bg-white border-t border-slate-100 overflow-hidden shadow-inner"
            >
              <div className="px-4 py-3 space-y-1">
                {navItems.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `block px-4 py-3 text-sm font-semibold tracking-wide rounded-sm transition-all font-display ${
                        isActive
                          ? 'text-white bg-corcov-sky'
                          : 'text-slate-600 hover:text-corcov-sky hover:bg-slate-50'
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  )
}

export default Navbar
