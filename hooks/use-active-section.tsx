"use client"

import { useState, useEffect } from "react"

export function useActiveSection(sectionIds: string[], offset = 100) {
  const [activeSection, setActiveSection] = useState<string>("")

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset

      // Nájdeme sekciu, ktorá je aktuálne viditeľná
      for (const sectionId of sectionIds) {
        const section = document.getElementById(sectionId)
        if (!section) continue

        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId)
          break
        }
      }
    }

    // Inicializácia pri načítaní
    handleScroll()

    // Pridanie event listenera
    window.addEventListener("scroll", handleScroll)

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [sectionIds, offset])

  return activeSection
}
