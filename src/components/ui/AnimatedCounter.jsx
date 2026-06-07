import React, { useEffect, useRef, useState } from 'react'
import { useInView, animate } from 'framer-motion'

const AnimatedCounter = ({ from = 0, to, duration = 1.5, delay = 0, suffix = '', prefix = '' }) => {
  const nodeRef = useRef(null)
  const inView = useInView(nodeRef, { once: true, margin: '-50px' })
  const [value, setValue] = useState(from)

  useEffect(() => {
    if (!inView) return

    const controls = animate(from, to, {
      duration: duration,
      delay: delay,
      ease: 'easeOut',
      onUpdate: (value) => setValue(Math.floor(value)),
    })

    return () => controls.stop()
  }, [inView, from, to, duration, delay])

  return (
    <span ref={nodeRef} className="tabular-nums">
      {prefix}{value.toLocaleString()}{suffix}
    </span>
  )
}

export default AnimatedCounter
