"use client"

import type React from "react"

import { type ReactNode, useRef, useEffect } from "react"
import { motion, useAnimation, useInView } from "framer-motion"

interface AnimatedElementProps {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
  once?: boolean
  animation?: "fadeIn" | "slideUp" | "slideLeft" | "slideRight" | "scale" | "none"
  as?: React.ElementType
}

const animations = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  slideUp: {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  },
  slideLeft: {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  },
  slideRight: {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  },
  none: {
    hidden: {},
    visible: {},
  },
}

export default function AnimatedElement({
  children,
  className = "",
  delay = 0,
  duration = 0.5,
  once = true,
  animation = "fadeIn",
  as: Component = "div",
}: AnimatedElementProps) {
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { once, amount: 0.3 })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    } else if (!once) {
      controls.start("hidden")
    }
  }, [controls, inView, once])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={animations[animation]}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
      as={Component}
    >
      {children}
    </motion.div>
  )
}
