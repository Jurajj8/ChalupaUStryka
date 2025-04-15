"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface AnimatedBackgroundProps {
  className?: string
}

export default function AnimatedBackground({ className = "" }: AnimatedBackgroundProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full bg-primary/10 blur-[100px] opacity-50"
        animate={{
          x: mousePosition.x - 250,
          y: mousePosition.y - 250,
        }}
        transition={{ type: "spring", damping: 50, stiffness: 100 }}
      />
    </div>
  )
}
