import React, { useState } from 'react'
import { motion } from 'framer-motion'
import ScrollReveal from '../components/ui/ScrollReveal'

const Careers = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'Software Engineer (Java/C++)',
    coverLetter: '',
    resume: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const roles = [
    {
      title: 'Senior Software Engineer (Low Latency / Java / C++)',
      dept: 'Core Engineering',
      type: 'Full-time / Hybrid',
      desc: 'Build latency-sensitive distributed exchange connectors and shared analytical engines. Requires strong object-oriented programming background (Java or C++), deep knowledge of concurrency, and garbage collection tuning.'
    },
    {
      title: 'Machine Learning Engineer',
      dept: 'Trading Technology',
      type: 'Full-time / On-site',
      desc: 'Research and implement deep learning and predictive artificial intelligence models onto structured market data streams to identify high-probability alpha opportunities.'
    },
    {
      title: 'Quantitative Researcher',
      dept: 'Investment Technology',
      type: 'Full-time / Hybrid',
      desc: 'Design mathematical and statistical algorithms for asset allocation, tail-risk coverage, and portfolio rebalancing. Requires a Ph.D. or Master\'s degree in Mathematics, Physics, or Financial Engineering.'
    },
    {
      title: 'Operations Associate',
      dept: 'Operational Support',
      type: 'Full-time / On-site',
      desc: 'Coordinate regulatory auditing, tax compliance, corporate bookkeeping, legal contracts, and HR pipelines to support international scaling of our trading desks.'
    }
  ]

  const benefits = [
    { title: 'Flexible Schedules', desc: 'Work hours oriented around productivity, not desk presence. We manage by results.' },
    { title: 'Hybrid & Remote Options', desc: 'Coordinate with your team lead to set up hybrid or remote arrangements.' },
    { title: 'Premium Health Coverage', desc: 'Comprehensive medical, dental, and vision insurance options for you and your dependents.' },
    { title: 'Continuous Learning', desc: 'Generous books, courses, and educational subsidies to expand your academic foundations.' }
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      role: 'Software Engineer (Java/C++)',
      coverLetter: '',
      resume: ''
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
                Join the Team
              </span>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h1 className="font-display font-normal text-4xl md:text-[80px] text-corcov-charcoal tracking-tight leading-tight">
                Careers at Corcov
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-lg md:text-xl text-corcov-slate font-normal leading-relaxed">
                We are always in search of passionate solutioners. If you are excited to solve mathematical puzzles and build low-latency distributed networks, explore our open positions.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-display font-normal text-2xl md:text-[48px] text-corcov-charcoal mb-16 text-center md:text-left leading-tight">
              Why Join Corcov Capital?
            </h2>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((b, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                  className="space-y-3 p-6 border border-slate-200 hover:border-corcov-sky/40 hover:shadow-tech bg-white transition-all duration-300 rounded-none h-full"
                >
                  <div className="w-2 bg-corcov-sky h-8 rounded-none block" />
                  <h3 className="font-display font-bold text-lg text-corcov-charcoal">{b.title}</h3>
                  <p className="text-corcov-slate text-sm leading-relaxed">{b.desc}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Careers Opportunities & Application Forms */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Left Column: Job Openings */}
            <div className="lg:col-span-7 space-y-12">
              <ScrollReveal>
                <h2 className="font-display font-normal text-2xl md:text-[48px] text-corcov-charcoal leading-tight">
                  Current Opportunities
                </h2>
              </ScrollReveal>
              
              <div className="space-y-6">
                {roles.map((r, idx) => (
                  <ScrollReveal key={idx} delay={idx * 0.1}>
                    <motion.div
                      whileHover={{ y: -6 }}
                      transition={{ duration: 0.2, ease: 'easeOut' }}
                      className="border border-slate-200 p-6 rounded-none space-y-4 hover:border-corcov-sky/40 hover:shadow-tech bg-white transition-all duration-300"
                    >
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                        <div>
                          <h3 className="font-display font-bold text-lg text-corcov-charcoal">{r.title}</h3>
                          <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider block mt-0.5">{r.dept}</span>
                        </div>
                        <span className="px-3 py-1 bg-corcov-bglight text-corcov-slate font-bold text-xs uppercase rounded-none self-start">
                          {r.type}
                        </span>
                      </div>
                      <p className="text-corcov-slate text-sm leading-relaxed">
                        {r.desc}
                      </p>
                    </motion.div>
                  </ScrollReveal>
                ))}
              </div>
            </div>

            {/* Right Column: Application Form */}
            <div className="lg:col-span-5">
              <ScrollReveal delay={0.25}>
                <div className="bg-corcov-bglight/50 border border-slate-200 p-8 rounded-none shadow-sm">
                  <h3 className="font-display font-bold text-xl text-corcov-charcoal mb-6">
                    Apply Online
                  </h3>

                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="space-y-6 text-center py-8"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                        className="w-12 h-12 rounded-none bg-corcov-sky text-white flex items-center justify-center mx-auto text-xl font-bold font-display shadow-sm"
                      >
                        ✓
                      </motion.div>
                      <h4 className="font-display font-bold text-lg text-corcov-charcoal">Application Submitted</h4>
                      <p className="text-corcov-slate text-sm leading-relaxed">
                        Thank you for applying to Corcov Capital. Our recruitment team will review your application. We will reach out to you via email if your skills match our requirements.
                      </p>
                      <p className="text-xs text-slate-400">
                        For direct inquiries, email us at <a href="mailto:hr@corcov-trading.com" className="text-corcov-sky-dark underline font-semibold">hr@corcov-trading.com</a>
                      </p>
                      <button
                        onClick={handleReset}
                        className="w-full py-3 bg-corcov-sky text-white font-display font-bold tracking-wide uppercase text-xs rounded-none hover:bg-corcov-sky-dark transition-colors"
                      >
                        Submit Another Application
                      </button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label className="block text-xs font-bold text-corcov-charcoal uppercase tracking-wider mb-1">Full Name</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Jane Doe"
                          className="w-full px-4 py-3 border border-slate-300 rounded-none focus:outline-none focus:ring-2 focus:ring-corcov-sky/20 focus:border-corcov-sky text-sm bg-white transition-all text-corcov-charcoal"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-corcov-charcoal uppercase tracking-wider mb-1">Email Address</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="jane.doe@example.com"
                          className="w-full px-4 py-3 border border-slate-300 rounded-none focus:outline-none focus:ring-2 focus:ring-corcov-sky/20 focus:border-corcov-sky text-sm bg-white transition-all text-corcov-charcoal"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-corcov-charcoal uppercase tracking-wider mb-1">Desired Role</label>
                        <select
                          value={formData.role}
                          onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                          className="w-full px-4 py-3 border border-slate-300 rounded-none focus:outline-none focus:ring-2 focus:ring-corcov-sky/20 focus:border-corcov-sky text-sm bg-white transition-all text-corcov-charcoal"
                        >
                          <option>Software Engineer (Java/C++)</option>
                          <option>Machine Learning Engineer</option>
                          <option>Quantitative Researcher</option>
                          <option>Operations Associate</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-corcov-charcoal uppercase tracking-wider mb-1">Cover Letter (Brief)</label>
                        <textarea
                          required
                          rows="4"
                          value={formData.coverLetter}
                          onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
                          placeholder="Introduce yourself and describe why you want to work at Corcov..."
                          className="w-full px-4 py-3 border border-slate-300 rounded-none focus:outline-none focus:ring-2 focus:ring-corcov-sky/20 focus:border-corcov-sky text-sm bg-white transition-all text-corcov-charcoal"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-corcov-charcoal uppercase tracking-wider mb-1">Resume Link or Text</label>
                        <input
                          type="text"
                          required
                          value={formData.resume}
                          onChange={(e) => setFormData({ ...formData, resume: e.target.value })}
                          placeholder="Link to your LinkedIn or PDF resume file"
                          className="w-full px-4 py-3 border border-slate-300 rounded-none focus:outline-none focus:ring-2 focus:ring-corcov-sky/20 focus:border-corcov-sky text-sm bg-white transition-all text-corcov-charcoal"
                        />
                      </div>
                      <div className="pt-2">
                        <motion.button
                          whileHover={{ scale: 1.01 }}
                          whileTap={{ scale: 0.99 }}
                          type="submit"
                          className="w-full py-4 bg-corcov-sky text-white font-display font-bold tracking-wide uppercase text-sm rounded-none hover:bg-corcov-sky-dark transition-colors shadow-sm"
                        >
                          Submit Application
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

export default Careers
