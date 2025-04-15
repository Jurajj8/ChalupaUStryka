"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import MainNavigation from "./main-navigation"
import MobileNavigation from "./mobile-navigation"
import { motion } from "framer-motion"

export default function DynamicHeader() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Inicializácia

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 transition-all duration-300 z-40",
        isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent border-transparent",
      )}
    >
      <div className="container mx-auto px-4 md:px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.a
            href="/"
            className={cn("text-xl font-bold transition-colors", isScrolled ? "text-primary" : "text-white")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Chalupa u Strýka
          </motion.a>
          <MainNavigation />
          <MobileNavigation />
        </div>
      </div>
    </motion.header>
  )
}
