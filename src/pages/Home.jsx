import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import ScrollReveal from '../components/ui/ScrollReveal'
import heroImg from '../assets/corcov_hero.jpg'

const Home = () => {
  return (
    <div className="w-full bg-white text-corcov-slate">
      {/* 1. Hero Section - Styled exactly like the screenshot */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl space-y-6 text-left">
            <ScrollReveal yOffset={25}>
              <h2 className="font-display font-normal text-xl md:text-2xl text-slate-500 tracking-wide">
                Innovative Trading and Investment Technology Company
              </h2>
            </ScrollReveal>
            
            <ScrollReveal yOffset={25} delay={0.1}>
              <h1 className="font-display font-normal text-5xl md:text-[80px] text-corcov-charcoal tracking-tight leading-tight mb-4">
                Corcov Capital
              </h1>
            </ScrollReveal>

            <ScrollReveal yOffset={25} delay={0.2}>
              <div className="space-y-4 max-w-4xl text-base md:text-lg text-corcov-slate leading-relaxed font-normal">
                <p>
                  At Corcov Capital, brilliant minds build cutting edge platforms for research, development, modeling, and risk management. In essence, we apply mathematics, statistics and artificial intelligence to discover trends based on petabytes of financial market data. We enjoy working in a collaborative environment that is dynamic and fun. Corcov Capital is always in search of passionate solutioners.
                </p>
                <p className="text-corcov-slate">
                  Come join the fun!
                </p>
              </div>
            </ScrollReveal>

            {/* Vertical Button Stack on the Left */}
            <ScrollReveal yOffset={25} delay={0.3}>
              <div className="pt-4 flex flex-col items-start space-y-3 max-w-xs">
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-48">
                  <Link
                    to="/careers"
                    className="w-full py-4 bg-corcov-sky hover:bg-corcov-sky-dark text-white font-sans font-semibold tracking-wide text-sm rounded-none transition-colors shadow-sm flex items-center justify-center"
                  >
                    Apply Now
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-48">
                  <Link
                    to="/contact"
                    className="w-full py-4 bg-corcov-sky hover:bg-corcov-sky-dark text-white font-sans font-semibold tracking-wide text-sm rounded-none transition-colors shadow-sm flex items-center justify-center"
                  >
                    Contact Us
                  </Link>
                </motion.div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 2. About Us - Layout with Image on Left, Text on Right */}
      <section className="py-20 md:py-24 border-t border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Left Column Image (Raw Handshake Image, No Borders) */}
            <div className="lg:col-span-5">
              <ScrollReveal delay={0.15}>
                <motion.div 
                  whileHover={{ scale: 1.02, y: -6 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="overflow-hidden rounded-none shadow-sm hover:shadow-tech-hover"
                >
                  <img
                    src={heroImg}
                    alt="Corcov Capital Analytics Desk Handshake"
                    className="w-full h-auto object-cover rounded-none"
                  />
                </motion.div>
              </ScrollReveal>
            </div>

            {/* Right Column Content */}
            <div className="lg:col-span-7 space-y-6">
              <ScrollReveal>
                <h2 className="font-display font-normal text-3xl md:text-[48px] text-corcov-charcoal tracking-tight leading-tight">
                  About Us
                </h2>
              </ScrollReveal>
              
              <ScrollReveal delay={0.1}>
                <p className="text-base md:text-lg leading-relaxed text-corcov-slate font-normal">
                  Established in 2022, Corcov Capital is privately funded investment and trading technology company that has built cutting edge platforms to solve investment research, trading, and portfolio problems. We are an equal opportunity employer with strong work ethics. We build advanced computing infrastructure for research and development, and risk management to trade and invest across asset classes. We are working as one team and apply cutting-edge research to solve difficult problems in the world's financial markets.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="pt-2">
                  <Link
                    to="/what-we-do"
                    className="py-4 px-6 bg-corcov-sky hover:bg-corcov-sky-dark text-white font-sans font-semibold tracking-wide text-sm rounded-none transition-colors shadow-sm inline-flex items-center justify-center w-44"
                  >
                    Read More
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Our Values Section - Recreated as 2-Column layout with Sky-blue Outline SVGs */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-display font-normal text-3xl md:text-[48px] text-corcov-charcoal tracking-tight mb-16 text-left leading-tight">
              Our Values
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-20">
            {/* Left Column values */}
            <div className="space-y-16">
              {/* Value 1: Leading Innovation */}
              <ScrollReveal>
                <div className="space-y-4 text-left">
                  {/* Custom Outlined Lightbulb SVG */}
                  <motion.div whileHover={{ scale: 1.08, rotate: 1.5 }} className="inline-block">
                    <svg className="w-16 h-16 text-corcov-sky mb-2" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="32" cy="26" r="8" />
                      <path d="M32 6 C20.95 6, 12 14.95, 12 26 C12 32.8 15.4 38.8 20.6 42.4 C22.4 43.7, 23.4 45.8, 23.4 48 L23.4 51 C23.4 52.7, 24.8 54, 26.5 54 L37.5 54 C39.2 54, 40.6 52.7, 40.6 51 L40.6 48 C40.6 45.8, 41.6 43.7, 43.4 42.4 C48.6 38.8, 52 32.8, 52 26 C52 14.95, 43.05 6, 32 6 Z" />
                      <path d="M25 58 L39 58 M28 62 L36 62" />
                    </svg>
                  </motion.div>
                  <h3 className="font-display font-normal text-2xl md:text-[32px] text-corcov-charcoal leading-snug">
                    Leading Innovation
                  </h3>
                  <p className="text-corcov-slate leading-relaxed text-sm md:text-base">
                    At core, We are passionate problem solvers. We want to be the leading innovators in our industry. We believe that innovation consists not only of finding a creative solution, but also of solving problems as effectively as possible.
                  </p>
                </div>
              </ScrollReveal>

              {/* Value 2: Agile */}
              <ScrollReveal delay={0.1}>
                <div className="space-y-4 text-left">
                  {/* Custom Outlined Agile Gear SVG */}
                  <motion.div whileHover={{ scale: 1.08, rotate: -2 }} className="inline-block">
                    <svg className="w-16 h-16 text-corcov-sky mb-2" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="32" cy="32" r="8" />
                      <path d="M32 8 A 24 24 0 0 1 56 32 C56 37.5, 54.2 42.6, 51 46.8 L54 50 M56 32 L50 32 M56 32 L56 26" />
                      <path d="M32 56 A 24 24 0 0 1 8 32 C8 26.5, 9.8 21.4, 13 17.2 L10 14 M8 32 L14 32 M8 32 L8 38" />
                    </svg>
                  </motion.div>
                  <h3 className="font-display font-normal text-2xl md:text-[32px] text-corcov-charcoal leading-snug">
                    Agile
                  </h3>
                  <p className="text-corcov-slate leading-relaxed text-sm md:text-base">
                    Work at Corcov Capital is challenging and exciting. We operate in a highly competitive, evolving environments, and feedback cycles of successes and failures are quick. This faster cycle allow us to evaluate and improve our strategies and performances. We belive in fail fast and learn smart to constantly iterate to learning from our feedback.
                  </p>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Column values */}
            <div className="space-y-16">
              {/* Value 3: Trust & Transparency */}
              <ScrollReveal>
                <div className="space-y-4 text-left">
                  {/* Custom Outlined Shaking Hands SVG */}
                  <motion.div whileHover={{ scale: 1.08, y: -2 }} className="inline-block">
                    <svg className="w-16 h-16 text-corcov-sky mb-2" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="32" cy="16" r="8" />
                      <path d="M29 16 L31 18 L35 14" />
                      <path d="M12 40 L22 40 C24 40, 26 42, 27 44 L30 48" />
                      <path d="M52 40 L42 40 C40 40, 38 42, 37 44 L34 48" />
                      <path d="M26 36 L38 36 C40 36, 41 37, 41 39 C41 41, 40 42, 38 42 L26 42" />
                      <path d="M28 42 C26 42, 25 43, 25 45 C25 47, 26 48, 28 48 L36 48" />
                    </svg>
                  </motion.div>
                  <h3 className="font-display font-normal text-2xl md:text-[32px] text-corcov-charcoal leading-snug">
                    Trust & Transparency
                  </h3>
                  <p className="text-corcov-slate leading-relaxed text-sm md:text-base">
                    We trust people to take ownership of their work activities which is empowered by flexible work schedule. We communicate transparently and expect the same from everyone.
                  </p>
                </div>
              </ScrollReveal>

              {/* Value 4: Togetherness */}
              <ScrollReveal delay={0.1}>
                <div className="space-y-4 text-left">
                  {/* Custom Outlined Interlocking Hands SVG */}
                  <motion.div whileHover={{ scale: 1.08, rotate: 2 }} className="inline-block">
                    <svg className="w-16 h-16 text-corcov-sky mb-2" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 20 L44 20 C46 20, 46 22, 44 24 L24 24 C22 24, 20 26, 20 28 L20 44 C20 46, 18 46, 18 44 L18 24 C18 22, 20 20, 20 20 Z" />
                      <path d="M44 44 L20 44 C18 44, 18 42, 20 40 L40 40 C42 40, 44 38, 44 36 L44 20 C44 18, 46 18, 46 20 L46 40 C46 42, 44 44, 44 44 Z" />
                      <path d="M20 44 L20 20 C20 18, 22 18, 24 20 L24 40 C24 42, 26 44, 28 44 L44 44 C46 44, 46 46, 44 46 L24 46 C22 46, 20 44, 20 44 Z" />
                      <path d="M44 20 L44 44 C44 46, 42 46, 40 44 L40 24 C40 22, 38 20, 36 20 L20 20 C18 20, 18 18, 20 18 L40 18 C42 18, 44 20, 44 20 Z" />
                    </svg>
                  </motion.div>
                  <h3 className="font-display font-normal text-2xl md:text-[32px] text-corcov-charcoal leading-snug">
                    Togetherness
                  </h3>
                  <p className="text-corcov-slate leading-relaxed text-sm md:text-base">
                    Corcov Capital embraces a culture of togetherness that extends far beyond Workplace. We are a community of friends and colleagues. Whether we are sharing a meal or competing over a game, We are together.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
