"use client"

import { useCallback, useEffect, useState } from "react"
import { motion } from "framer-motion"

interface Particle {
  id: number
  x: number
  y: number
  size: number
  color: string
  vx: number
  vy: number
}

export default function ParticlesBackground() {
  const [particles, setParticles] = useState<Particle[]>([])
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  const createParticles = useCallback(() => {
    const newParticles: Particle[] = []
    const count = Math.min(Math.floor(window.innerWidth / 30), 30)

    for (let i = 0; i < count; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 3 + 1,
        color: `rgba(${Math.floor(Math.random() * 100) + 155}, ${Math.floor(Math.random() * 100) + 155}, ${Math.floor(Math.random() * 100) + 155}, ${Math.random() * 0.3 + 0.1})`,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
      })
    }

    setParticles(newParticles)
  }, [])

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
      createParticles()
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [createParticles])

  useEffect(() => {
    const updateParticles = () => {
      setParticles((prevParticles) =>
        prevParticles.map((particle) => {
          let newX = particle.x + particle.vx
          let newY = particle.y + particle.vy

          // Bounce off edges
          if (newX <= 0 || newX >= dimensions.width) {
            particle.vx *= -1
            newX = particle.x + particle.vx
          }

          if (newY <= 0 || newY >= dimensions.height) {
            particle.vy *= -1
            newY = particle.y + particle.vy
          }

          return {
            ...particle,
            x: newX,
            y: newY,
          }
        }),
      )
    }

    const intervalId = setInterval(updateParticles, 50)

    return () => {
      clearInterval(intervalId)
    }
  }, [dimensions])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            left: particle.x,
            top: particle.y,
            opacity: 0.5,
          }}
          animate={{
            x: particle.x,
            y: particle.y,
            transition: { duration: 0.5, ease: "linear" },
          }}
        />
      ))}
    </div>
  )
}
