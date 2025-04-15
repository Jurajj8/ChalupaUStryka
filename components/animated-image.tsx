"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

interface AnimatedImageProps {
  src: string
  alt: string
  className?: string
  width?: number
  height?: number
  fill?: boolean
  sizes?: string
  priority?: boolean
  fallbackSrc?: string
}

export default function AnimatedImage({
  src,
  alt,
  className = "",
  width,
  height,
  fill = false,
  sizes,
  priority = false,
  fallbackSrc = "/placeholder.svg",
}: AnimatedImageProps) {
  const [imgError, setImgError] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{
        opacity: isLoaded ? 1 : 0,
        scale: isLoaded ? 1 : 0.9,
      }}
      transition={{ duration: 0.5 }}
      className="relative w-full h-full"
    >
      <Image
        src={imgError ? fallbackSrc : src}
        alt={alt}
        className={className}
        width={width}
        height={height}
        fill={fill}
        sizes={sizes}
        priority={priority}
        onError={() => setImgError(true)}
        onLoad={() => setIsLoaded(true)}
      />
    </motion.div>
  )
}
