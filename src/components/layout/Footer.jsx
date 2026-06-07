import React from 'react'
import { Link } from 'react-router-dom'
import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-corcov-charcoal py-16 text-slate-400 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
          
          {/* Column 1: Brand Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-3 group">
              <img src="/favicon.png" alt="Corcov Capital Logo" className="w-10 h-10 object-contain flex-shrink-0" />
              <div className="font-display font-bold text-xl tracking-wide">
                <span className="text-corcov-sky">Corcov</span>{' '}
                <span className="text-white">Capital</span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-slate-300 font-normal">
              Corcov Capital is an innovative trading and investment technology company. We build advanced computing infrastrcture for research and development, and risk management to trade and invest across asset classes
            </p>
          </div>
          {/* Column 2: Contact Info */}
          <div className="space-y-4">
            <h4 className="font-display font-normal text-white tracking-wide text-lg">
              Contact Info
            </h4>
            <div className="space-y-3 text-sm text-slate-300">
              <p className="flex items-start space-x-2">
                <FiMapPin className="w-5 h-5 text-corcov-sky mt-0.5 flex-shrink-0" />
                <span>
                  Corcov Capital,<br />
                  64, School road , Emapper, Kallakurichi ,<br />
                  Chennai, Tamilnadu
                </span>
              </p>
              <p className="flex items-center space-x-2">
                <FiPhone className="w-4 h-4 text-corcov-sky flex-shrink-0" />
                <a href="tel:+916383477174" className="hover:text-corcov-sky transition-colors">
                  +91 6383477174
                </a>
              </p>
              <p className="flex items-center space-x-2">
                <FiMail className="w-4 h-4 text-corcov-sky flex-shrink-0" />
                <a href="mailto:admin@corcov-trading.com" className="hover:text-corcov-sky transition-colors">
                  admin@corcov-trading.com
                </a>
              </p>
              <p className="flex items-center space-x-2 pl-6">
                <a href="mailto:hr@corcov-trading.com" className="hover:text-corcov-sky transition-colors">
                  hr@corcov-trading.com
                </a>
              </p>
            </div>
          </div>

          {/* Column 3: Get In Touch */}
          <div className="space-y-5">
            <h4 className="font-display font-normal text-white tracking-wide text-lg">
              Get In Touch
            </h4>
            <p className="text-sm text-slate-300 leading-relaxed">
              We are approachable and accessible to all. We are here to answer your queries
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-slate-800 hover:bg-corcov-sky text-white hover:text-white transition-all rounded-none shadow-sm"
                title="Facebook"
              >
                <FaFacebookF className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-slate-800 hover:bg-corcov-sky text-white hover:text-white transition-all rounded-none shadow-sm"
                title="Twitter"
              >
                <FaTwitter className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-slate-800 hover:bg-corcov-sky text-white hover:text-white transition-all rounded-none shadow-sm"
                title="LinkedIn"
              >
                <FaLinkedinIn className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-slate-800 hover:bg-corcov-sky text-white hover:text-white transition-all rounded-none shadow-sm"
                title="Instagram"
              >
                <FaInstagram className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider & Bottom Section */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
            <Link to="/" className="text-sm text-slate-300 hover:text-corcov-sky transition-colors font-medium">
              Home
            </Link>
            <Link to="/what-we-do" className="text-sm text-slate-300 hover:text-corcov-sky transition-colors font-medium">
              What we do
            </Link>
            <Link to="/culture" className="text-sm text-slate-300 hover:text-corcov-sky transition-colors font-medium">
              Culture
            </Link>
            <Link to="/contact" className="text-sm text-slate-300 hover:text-corcov-sky transition-colors font-medium">
              Contact
            </Link>
          </div>

          {/* Copyright */}
          <p className="text-xs text-slate-500 font-medium">
            Copyright &copy; 2026 Corcov Trading
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
