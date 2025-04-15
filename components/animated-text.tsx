"use client"

import type React from "react"
import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface AnimatedTextProps {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
  as?: React.ElementType
  animation?: "fadeIn" | "slideUp" | "slideLeft" | "slideRight" | "scale"
}

export default function AnimatedText({
  children,
  className = "",
  delay = 0,
  duration = 0.5,
  as: Component = "p",
  animation = "fadeIn",
}: AnimatedTextProps) {
  const animations = {
    fadeIn: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
    slideUp: {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
    },
    slideLeft: {
      hidden: { opacity: 0, x: 20 },
      visible: { opacity: 1, x: 0 },
    },
    slideRight: {
      hidden: { opacity: 0, x: -20 },
      visible: { opacity: 1, x: 0 },
    },
    scale: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1 },
    },
  }

  // Create a motion component with dynamic "as" prop
  const MotionComponent = motion(Component);

  return (
    <MotionComponent
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={animations[animation]}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </MotionComponent>
  )
}
