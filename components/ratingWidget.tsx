"use client"

import { useEffect } from "react"

declare global {
  interface Window {
    muEmbed?: (...args: any[]) => any;
  }
}

export default function RatingWidget() {
  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://www.megaubytovanie.sk/muEmbed.js"
    script.async = true
    script.defer = true
    script.onload = () => {
      window.muEmbed &&
        window.muEmbed(
          {
            embedType: "rating-widget",
            accommodationId: 12361,
            token: "b7f412f2db49b4106158591bd9fd03c2",
            settings: {
              header_text_color: "rgba(24,29,34,1)",
              background_color: "rgba(255,255,255,1)",
              button_color: "rgba(22,163,74,1)",
              show_customer_reviews: true,
              show_reviews_as_carousel: false,
              show_add_rating_button: true,
            },
          },
          "embed-W-fsDyoCqIqp1xS5Y4V0W"
        )
    }
    document.body.appendChild(script)
    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <div className="container mx-auto px-4 md:px-6 py-20">
      <div
        id="embed-W-fsDyoCqIqp1xS5Y4V0W"
        data-mu-embed-origin="https://www.megaubytovanie.sk"
        style={{ width: "100%" }}
      ></div>
    </div>
  )
}
