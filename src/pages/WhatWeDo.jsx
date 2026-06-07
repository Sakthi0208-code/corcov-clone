import React from 'react'
import { motion } from 'framer-motion'
import ScrollReveal from '../components/ui/ScrollReveal'
import img1 from '../assets/what_we_do_1.jpg'
import img2 from '../assets/what_we_do_2.jpg'
import img3 from '../assets/what_we_do_3.jpg'
import img4 from '../assets/what_we_do_4.jpg'
import img5 from '../assets/what_we_do_5.jpg'

const WhatWeDo = () => {
  return (
    <div className="w-full bg-white text-corcov-slate">
      {/* 1. Page Header / Intro Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left Column Text */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <ScrollReveal>
                <h1 className="font-display font-normal text-4xl md:text-[80px] text-corcov-charcoal tracking-tight leading-tight mb-4">
                  What we do
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <div className="space-y-4 text-base md:text-lg text-corcov-slate leading-relaxed font-normal">
                  <p>
                    We analyze terabytes of structured and unstructured data to detect trading opportunities. We research and develop data driven algorithmic strategies using advanced Artificial Intelligence techniques to trade across most liquid asset classes. As an emerging Algorithmic trading firm, we integrate disciplines such as computer science, Mathematics, Statistics, finance and AI.
                  </p>
                  <p>
                    We have independent teams for different asset classes and they are equipped with shared tools and technology developed by core engineering team.
                  </p>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Column Image */}
            <div className="lg:col-span-5">
              <ScrollReveal delay={0.2}>
                <motion.div 
                  whileHover={{ scale: 1.03, y: -6 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="overflow-hidden rounded-none shadow-sm hover:shadow-tech-hover"
                >
                  <img
                    src={img3}
                    alt="Financial Data Skyscrapers Analysis"
                    className="w-full h-auto object-cover rounded-none"
                  />
                </motion.div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Teams Section & Quote */}
      <section className="py-12 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <ScrollReveal>
            <h2 className="font-display font-normal text-3xl md:text-[48px] text-corcov-charcoal tracking-tight leading-tight">
              Teams at Corcov Capital
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="mt-8 mb-16 max-w-3xl space-y-2">
              <span className="text-4xl text-corcov-sky font-serif leading-none block">“</span>
              <p className="text-2xl md:text-3xl text-corcov-charcoal font-normal tracking-tight">
                Nobody is perfect but a team can be
              </p>
              <p className="text-sm font-semibold text-slate-400 uppercase tracking-widest mt-1">
                Meredith Belbin
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 3. Alternating Grid Rows for Teams */}
      <section className="pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {/* Row 1: Image Left, Text Right (Core Engineering) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-5">
                <ScrollReveal>
                  <motion.div 
                    whileHover={{ scale: 1.03, y: -6 }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                    className="overflow-hidden rounded-none shadow-sm hover:shadow-tech-hover"
                  >
                    <img
                      src={img1}
                      alt="Core Engineering Team"
                      className="w-full h-auto object-cover rounded-none"
                    />
                  </motion.div>
                </ScrollReveal>
              </div>
              <div className="lg:col-span-7 space-y-4 text-left">
                <ScrollReveal delay={0.1}>
                  <h3 className="font-display font-normal text-2xl md:text-[32px] text-corcov-charcoal leading-snug">
                    Core Engineering
                  </h3>
                  <p className="text-corcov-slate leading-relaxed text-sm md:text-base">
                    We have talented engineers and programmers who are working on robust trading infrastructure which can handle transactions worth millions on a trading day. This team builds software and analytical engines for trading and investment teams. Also, Our experts in distributed computing, security, networking and IT makes our products robust and faster.
                  </p>
                </ScrollReveal>
              </div>
            </div>

            {/* Row 2: Text Left, Image Right (Trading Technology Team) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-7 space-y-4 text-left order-last lg:order-first">
                <ScrollReveal delay={0.1}>
                  <h3 className="font-display font-normal text-2xl md:text-[32px] text-corcov-charcoal leading-snug">
                    Trading technology team
                  </h3>
                  <p className="text-corcov-slate leading-relaxed text-sm md:text-base">
                    With deeper understanding of evolving financial markets and micro structures, we use cutting-edge and bleeding-edge technologies to gain from the markets. Our Mathematicians, Statisticians, Data Scientists and AI researchers are working to building and improving new trading strategies.
                  </p>
                </ScrollReveal>
              </div>
              <div className="lg:col-span-5">
                <ScrollReveal>
                  <motion.div 
                    whileHover={{ scale: 1.03, y: -6 }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                    className="overflow-hidden rounded-none shadow-sm hover:shadow-tech-hover"
                  >
                    <img
                      src={img2}
                      alt="Trading Technology Screens"
                      className="w-full h-auto object-cover rounded-none"
                    />
                  </motion.div>
                </ScrollReveal>
              </div>
            </div>

            {/* Row 3: Image Left, Text Right (Investment Technology Team) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-5">
                <ScrollReveal>
                  <motion.div 
                    whileHover={{ scale: 1.03, y: -6 }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                    className="overflow-hidden rounded-none shadow-sm hover:shadow-tech-hover"
                  >
                    <img
                      src={img4}
                      alt="Investment Technology Chart Interaction"
                      className="w-full h-auto object-cover rounded-none"
                    />
                  </motion.div>
                </ScrollReveal>
              </div>
              <div className="lg:col-span-7 space-y-4 text-left">
                <ScrollReveal delay={0.1}>
                  <h3 className="font-display font-normal text-2xl md:text-[32px] text-corcov-charcoal leading-snug">
                    Investment technology team
                  </h3>
                  <p className="text-corcov-slate leading-relaxed text-sm md:text-base">
                    We build technology platforms with focus on best risk adjusted returns. We have rigurus methodologies for asset selection and risk managment which includes edge cases like asset correlation and tail risk.
                  </p>
                </ScrollReveal>
              </div>
            </div>

            {/* Row 4: Text Left, Image Right (Operational Teams) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-7 space-y-4 text-left order-last lg:order-first">
                <ScrollReveal delay={0.1}>
                  <h3 className="font-display font-normal text-2xl md:text-[32px] text-corcov-charcoal leading-snug">
                    Operational teams
                  </h3>
                  <p className="text-corcov-slate leading-relaxed text-sm md:text-base">
                    At Corcov Capital, we trust Finance, accounting, legal and compliance, and HR teams to business operations run smoothly.
                  </p>
                </ScrollReveal>
              </div>
              <div className="lg:col-span-5">
                <ScrollReveal>
                  <motion.div 
                    whileHover={{ scale: 1.03, y: -6 }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                    className="overflow-hidden rounded-none shadow-sm hover:shadow-tech-hover"
                  >
                    <img
                      src={img5}
                      alt="Operational Teams Group Portrait"
                      className="w-full h-auto object-cover rounded-none"
                    />
                  </motion.div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default WhatWeDo
