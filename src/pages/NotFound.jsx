import React from 'react'
import { Link } from 'react-router-dom'
import { FiHome } from 'react-icons/fi'

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center py-28 text-center bg-white text-slate-800 animate-fade-in">
      <h1 className="text-9xl font-display font-extrabold text-slate-200 tracking-wider">
        404
      </h1>
      <h2 className="text-2xl font-bold text-slate-900 mt-4 mb-2">
        Page Not Found
      </h2>
      <p className="text-slate-500 mb-8 max-w-md">
        The destination you are looking for does not exist or has been relocated within the Corcov Capital network.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-[#003366] hover:bg-[#002244] text-white font-bold tracking-wide uppercase text-xs rounded-sm transition-colors shadow-sm flex items-center space-x-2"
      >
        <FiHome className="w-4 h-4" />
        <span>Return Home</span>
      </Link>
    </div>
  )
}

export default NotFound
