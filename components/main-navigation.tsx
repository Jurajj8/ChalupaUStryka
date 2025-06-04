"use client"

import type React from "react"

import { useActiveSection } from "@/hooks/use-active-section"
import { cn } from "@/lib/utils"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export default function MainNavigation() {
  const sections = [
    { id: "home", label: "Domov", href: "#home" },
    { id: "features", label: "Vybavenie", href: "#features" },
    { id: "interior", label: "Interiér", href: "#interior" },
    { id: "exterior", label: "Exteriér", href: "#exterior" },
    { id: "location", label: "Lokalita", href: "#location" },
    { id: "contact", label: "Kontakt", href: "#contact" },
    { id: "reservation", label: "Rezervovať", href: "#reservation" },
    { id: "rating", label: "Hodnotenie", href: "#rating" },
  ]

  const activeSection = useActiveSection(["home", "features", "interior", "exterior", "location", "contact", "reservation", "rating"], 200)

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

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      window.scrollTo({
        top: element.getBoundingClientRect().top + window.scrollY - 80,
        behavior: "smooth",
      })
    } else if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    }
  }

  return (
    <nav className="hidden md:flex items-center space-x-6">
      {sections.map((section, index) => (
        <motion.a
          key={section.id}
          href={section.href}
          onClick={(e) => handleClick(e, section.href)}
          className={cn(
            "text-sm font-medium transition-colors relative",
            activeSection === section.id
              ? "text-primary"
              : isScrolled
                ? "text-foreground hover:text-primary"
                : "text-white hover:text-primary-foreground",
          )}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 * index }}
          whileHover={{ y: -2 }}
        >
          {section.label}
          {activeSection === section.id && (
            <motion.span
              className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
              layoutId="activeSection"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          )}
        </motion.a>
      ))}
    </nav>
  )
}
