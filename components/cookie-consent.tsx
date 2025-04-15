"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Kontrola, či používateľ už prijal cookies
    const cookiesAccepted = localStorage.getItem("cookiesAccepted")
    if (!cookiesAccepted) {
      // Zobrazenie banneru po krátkom oneskorení
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookiesAccepted", "true")
    setIsVisible(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 bg-white shadow-lg p-4 md:p-6 z-50 border-t border-gray-200"
        >
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-gray-700">
              <p>
                Táto stránka používa cookies na zlepšenie vášho zážitku. Používaním našej stránky súhlasíte s našimi{" "}
                <a href="#" className="text-primary hover:underline">
                  podmienkami používania
                </a>{" "}
                a{" "}
                <a href="#" className="text-primary hover:underline">
                  ochranou osobných údajov
                </a>
                .
              </p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" size="sm" onClick={() => setIsVisible(false)}>
                Odmietnuť
              </Button>
              <Button size="sm" onClick={acceptCookies}>
                Prijať všetky
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
