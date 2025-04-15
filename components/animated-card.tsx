"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

interface AnimatedCardProps {
  children: ReactNode
  className?: string
  delay?: number
  index?: number
}

export default function AnimatedCard({ children, className = "", delay = 0, index = 0 }: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.5,
        delay: delay + index * 0.1,
        ease: "easeOut",
      }}
      whileHover={{
        y: -10,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      }}
      className={className}
    >
      <Card className="border-none shadow-md h-full">
        <CardContent className="p-6">{children}</CardContent>
      </Card>
    </motion.div>
  )
}
