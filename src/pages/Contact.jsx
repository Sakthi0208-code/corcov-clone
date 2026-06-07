import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FiPhone, FiMail, FiMapPin, FiLinkedin, FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi'
import ScrollReveal from '../components/ui/ScrollReveal'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    })
    setIsSubmitted(false)
  }

  return (
    <div className="w-full bg-white text-corcov-slate">
      {/* Page Header */}
      <section className="py-20 bg-corcov-bglight/50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <ScrollReveal>
              <span className="text-xs font-bold text-corcov-sky-dark uppercase tracking-wider block">
                Get in Touch
              </span>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h1 className="font-display font-normal text-4xl md:text-[80px] text-corcov-charcoal tracking-tight leading-tight">
                Contact Us
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-lg md:text-xl text-corcov-slate font-normal leading-relaxed">
                For client queries, technical research collaborations, or career opportunities, please reach out to our teams.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Left Column: Contact info & Coordinates */}
            <div className="lg:col-span-5 space-y-10">
              <div className="space-y-6">
                <ScrollReveal>
                  <h2 className="font-display font-normal text-2xl md:text-[48px] text-corcov-charcoal leading-tight">
                    Our Office
                  </h2>
                </ScrollReveal>
                
                <div className="space-y-6 text-corcov-slate">
                  <ScrollReveal delay={0.1}>
                    <motion.div whileHover={{ x: 6, scale: 1.015 }} transition={{ type: 'spring', stiffness: 300, damping: 20 }} className="flex items-start space-x-4 cursor-default">
                      <div className="p-3 bg-corcov-bglight border border-slate-200 rounded-none text-corcov-sky-dark flex-shrink-0">
                        <FiMapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-display font-bold text-sm text-corcov-charcoal uppercase tracking-wide">Registered Office</h4>
                        <p className="text-sm text-corcov-slate mt-1 leading-relaxed">
                          Corcov Capital Private Limited<br />
                          64, School Road, Emapper,<br />
                          Kallakurichi, Chennai,<br />
                          Tamil Nadu, India
                        </p>
                      </div>
                    </motion.div>
                  </ScrollReveal>

                  <ScrollReveal delay={0.2}>
                    <motion.div whileHover={{ x: 6, scale: 1.015 }} transition={{ type: 'spring', stiffness: 300, damping: 20 }} className="flex items-start space-x-4 cursor-default">
                      <div className="p-3 bg-corcov-bglight border border-slate-200 rounded-none text-corcov-sky-dark flex-shrink-0">
                        <FiPhone className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-display font-bold text-sm text-corcov-charcoal uppercase tracking-wide">Telephone</h4>
                        <a href="tel:+916383477174" className="text-sm text-corcov-slate hover:text-corcov-sky-dark transition-colors mt-1 block">
                          +91 6383477174
                        </a>
                      </div>
                    </motion.div>
                  </ScrollReveal>

                  <ScrollReveal delay={0.3}>
                    <motion.div whileHover={{ x: 6, scale: 1.015 }} transition={{ type: 'spring', stiffness: 300, damping: 20 }} className="flex items-start space-x-4 cursor-default">
                      <div className="p-3 bg-corcov-bglight border border-slate-200 rounded-none text-corcov-sky-dark flex-shrink-0">
                        <FiMail className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-display font-bold text-sm text-corcov-charcoal uppercase tracking-wide">Email Channels</h4>
                        <div className="space-y-1 mt-1 text-sm text-corcov-slate">
                          <a href="mailto:admin@corcov-trading.com" className="hover:text-corcov-sky-dark transition-colors block">
                            General: admin@corcov-trading.com
                          </a>
                          <a href="mailto:hr@corcov-trading.com" className="hover:text-corcov-sky-dark transition-colors block">
                            Careers: hr@corcov-trading.com
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  </ScrollReveal>
                </div>
              </div>

              {/* Social Channels */}
              <div className="space-y-4">
                <ScrollReveal delay={0.35}>
                  <h3 className="font-display font-bold text-sm text-corcov-charcoal uppercase tracking-wide">
                    Social Channels
                  </h3>
                </ScrollReveal>
                
                <div className="flex space-x-3">
                  {[
                    { icon: FiLinkedin, href: 'https://linkedin.com' },
                    { icon: FiFacebook, href: 'https://facebook.com' },
                    { icon: FiTwitter, href: 'https://twitter.com' },
                    { icon: FiInstagram, href: 'https://instagram.com' }
                  ].map((s, idx) => {
                    const Icon = s.icon
                    return (
                      <ScrollReveal key={idx} delay={0.4 + idx * 0.05}>
                        <motion.a
                          whileHover={{ y: -3, scale: 1.05 }}
                          href={s.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-corcov-bglight border border-slate-200 text-slate-500 hover:text-corcov-sky-dark hover:border-corcov-sky/40 transition-colors rounded-none block shadow-sm"
                        >
                          <Icon className="w-5 h-5" />
                        </motion.a>
                      </ScrollReveal>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Right Column: Contact form */}
            <div className="lg:col-span-7">
              <ScrollReveal delay={0.2}>
                <div className="bg-corcov-bglight/50 border border-slate-200 p-8 md:p-10 rounded-none shadow-sm">
                  <h3 className="font-display font-bold text-xl text-corcov-charcoal mb-6">
                    Send Us a Message
                  </h3>

                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="space-y-6 text-center py-12"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                        className="w-12 h-12 rounded-none bg-corcov-sky text-white flex items-center justify-center mx-auto text-xl font-bold font-display shadow-sm"
                      >
                        ✓
                      </motion.div>
                      <h4 className="font-display font-bold text-lg text-corcov-charcoal">Message Transmitted</h4>
                      <p className="text-corcov-slate text-sm leading-relaxed max-w-md mx-auto">
                        Thank you for your message. We have received your query and a representative from Corcov Capital will respond to you within 24–48 business hours.
                      </p>
                      <button
                        onClick={handleReset}
                        className="px-8 py-3.5 bg-corcov-sky text-white font-display font-bold tracking-wide uppercase text-xs rounded-none hover:bg-corcov-sky-dark transition-colors"
                      >
                        Send Another Message
                      </button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-bold text-corcov-charcoal uppercase tracking-wider mb-1">Your Name</label>
                          <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="John Doe"
                            className="w-full px-4 py-3.5 border border-slate-300 rounded-none focus:outline-none focus:ring-2 focus:ring-corcov-sky/20 focus:border-corcov-sky text-sm bg-white transition-all text-corcov-charcoal"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-corcov-charcoal uppercase tracking-wider mb-1">Email Address</label>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="john.doe@example.com"
                            className="w-full px-4 py-3.5 border border-slate-300 rounded-none focus:outline-none focus:ring-2 focus:ring-corcov-sky/20 focus:border-corcov-sky text-sm bg-white transition-all text-corcov-charcoal"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-corcov-charcoal uppercase tracking-wider mb-1">Subject</label>
                        <input
                          type="text"
                          required
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          placeholder="Algorithm collaboration query / Investment discussion"
                          className="w-full px-4 py-3.5 border border-slate-300 rounded-none focus:outline-none focus:ring-2 focus:ring-corcov-sky/20 focus:border-corcov-sky text-sm bg-white transition-all text-corcov-charcoal"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-corcov-charcoal uppercase tracking-wider mb-1">Message Content</label>
                        <textarea
                          required
                          rows="6"
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Type your message here..."
                          className="w-full px-4 py-3.5 border border-slate-300 rounded-none focus:outline-none focus:ring-2 focus:ring-corcov-sky/20 focus:border-corcov-sky text-sm bg-white transition-all text-corcov-charcoal"
                        />
                      </div>
                      <div className="pt-2">
                        <motion.button
                          whileHover={{ scale: 1.01 }}
                          whileTap={{ scale: 0.99 }}
                          type="submit"
                          className="px-8 py-4 bg-corcov-sky text-white font-display font-bold tracking-wide uppercase text-sm rounded-none hover:bg-corcov-sky-dark transition-colors shadow-sm"
                        >
                          Transmit Message
                        </motion.button>
                      </div>
                    </form>
                  )}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
