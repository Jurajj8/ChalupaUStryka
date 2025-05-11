"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"

interface AnimatedCounterProps {
  end: number
  duration?: number
  delay?: number
  prefix?: string
  suffix?: string
  className?: string
  decimals?: number
}

export default function AnimatedCounter({
  end,
  duration = 2,
  delay = 0,
  prefix = "",
  suffix = "",
  className = "",
  decimals = 0,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true)
  
      let startTime: number | undefined
      let animationFrameId: number
  
      const startAnimation = (timestamp: number) => {
        if (startTime === undefined) startTime = timestamp
        const progress = (timestamp - startTime) / (duration * 1000)
  
        if (progress < 1) {
          const currentCount = parseFloat((end * progress).toFixed(decimals))
          setCount(currentCount)
          animationFrameId = requestAnimationFrame(startAnimation)
        } else {
          setCount(end)
        }
      }
  
      const timeoutId = setTimeout(() => {
        animationFrameId = requestAnimationFrame(startAnimation)
      }, delay * 1000)
  
      return () => {
        clearTimeout(timeoutId)
        if (animationFrameId) cancelAnimationFrame(animationFrameId)
      }
    }
  }, [isInView, end, duration, delay, hasAnimated, decimals])
  
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {prefix}
      {decimals > 0 ? count.toFixed(decimals) : count}
      {suffix}
    </motion.div>
  )
}
