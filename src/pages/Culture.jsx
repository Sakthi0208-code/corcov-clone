import React from 'react'
import { motion } from 'framer-motion'
import ScrollReveal from '../components/ui/ScrollReveal'
import cultureImg from '../assets/corcov_culture.png'

const Culture = () => {
  return (
    <div className="w-full bg-white text-corcov-slate min-h-[70vh]">
      {/* Main Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Huge Page Heading */}
          <ScrollReveal yOffset={30}>
            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="font-display font-normal text-5xl md:text-[80px] text-corcov-charcoal tracking-tight leading-tight mb-16 text-left"
            >
              What we do
            </motion.h1>
          </ScrollReveal>

          {/* Grid Layout: Image Left, Text Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Handshake Meeting Image */}
            <div className="lg:col-span-6">
              <ScrollReveal delay={0.15} yOffset={30}>
                <motion.div 
                  whileHover={{ scale: 1.03, y: -6 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="overflow-hidden rounded-none shadow-sm border border-slate-100 hover:shadow-tech-hover"
                >
                  <img
                    src={cultureImg}
                    alt="Corcov Capital Team Meeting Handshake"
                    className="w-full h-auto object-cover rounded-none"
                  />
                </motion.div>
              </ScrollReveal>
            </div>

            {/* Right Column: Two Paragraphs with Larger Font Size */}
            <div className="lg:col-span-6 space-y-8 text-left">
              <ScrollReveal delay={0.2} yOffset={35}>
                <p className="text-lg md:text-[21px] leading-[1.65] text-corcov-slate font-normal">
                  It is our belief that Investing in human capital is best investment in the world to evolve and grow together. Our culture stems from the core values. We strive to create an environment where people are happier and do what they good at while having fun in the process. We are committed to listen to employees to provide the best work atmosphere possible, promoting the practice of listening to understand rather respond.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.3} yOffset={35}>
                <p className="text-lg md:text-[21px] leading-[1.65] text-corcov-slate font-normal">
                  We place a huge importance on creative ideas and perspectives, and constantly collaborate to solve complex problems. At Corcov Capital, teams are constantly encouraged to innovate by experimenting new ideas to challenge our existing beliefs about markets.
                </p>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default Culture
