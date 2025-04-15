"use client"

import { type ReactNode, useEffect } from "react"

interface SmoothScrollProviderProps {
  children: ReactNode
}

export function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.tagName === "A") {
        const href = target.getAttribute("href")
        if (href && href.startsWith("#")) {
          e.preventDefault()

          if (href === "#") {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          } else {
            const element = document.querySelector(href)
            if (element) {
              window.scrollTo({
                top: element.getBoundingClientRect().top + window.scrollY - 80,
                behavior: "smooth",
              })
            }
          }
        }
      }
    }

    document.addEventListener("click", handleAnchorClick)

    return () => {
      document.removeEventListener("click", handleAnchorClick)
    }
  }, [])

  return <>{children}</>
}
