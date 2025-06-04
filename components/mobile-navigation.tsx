"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { useActiveSection } from "@/hooks/use-active-section"
import { motion, AnimatePresence } from "framer-motion"

export default function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const sections = [
    { id: "home", label: "Domov", href: "#" },
    { id: "features", label: "Vybavenie", href: "#features" },
    { id: "interior", label: "Interiér", href: "#interior" },
    { id: "exterior", label: "Exteriér", href: "#exterior" },
    { id: "location", label: "Lokalita", href: "#location" },
    { id: "contact", label: "Kontakt", href: "#contact" },
    { id: "reservation", label: "Rezervovať", href: "#reservation" },
    { id: "rating", label: "Hodnotenie", href: "#rating" },
  ]

  const activeSection = useActiveSection(["home", "features", "interior", "exterior", "location", "contact", "reservation", "rating"], 200)

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

  // Zavrieť menu po kliknutí na odkaz
  const handleLinkClick = () => {
    setIsOpen(false)
  }

  // Zablokovať scrollovanie keď je menu otvorené
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  return (
    <div className="md:hidden">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className={cn("p-2 rounded-md transition-colors", isScrolled ? "text-foreground" : "text-white")}
        aria-label={isOpen ? "Zavrieť menu" : "Otvoriť menu"}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed top-0 left-0 right-0 bottom-0 w-full h-full bg-white z-50"
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "white", // Explicitne nastavenie bieleho pozadia
            }}
          >
            <div className="flex flex-col h-full bg-white">
              <div className="flex justify-end p-4 bg-white">
                <motion.button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-gray-800"
                  aria-label="Zavrieť menu"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X size={24} />
                </motion.button>
              </div>

              <div className="flex-1 flex flex-col items-center justify-center bg-white">
                {sections.map((section, index) => (
                  <motion.a
                    key={section.id}
                    href={section.href}
                    onClick={handleLinkClick}
                    className={cn(
                      "text-xl font-medium transition-colors py-5 w-full text-center",
                      activeSection === section.id ? "text-primary" : "text-gray-800 hover:text-primary",
                    )}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.05 * index }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {section.label}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
