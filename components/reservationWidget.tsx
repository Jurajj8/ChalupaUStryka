import { useEffect } from "react"

declare global {
  interface Window {
    muEmbed?: (...args: any[]) => any;
  }
}

export default function ReservationWidget() {
  useEffect(() => {
    // Vložiť script len raz!
    const script = document.createElement("script")
    script.src = "https://www.megaubytovanie.sk/muEmbed.js"
    script.async = true
    script.defer = true
    script.onload = () => {
      // @ts-ignore pretože TS nevie o muEmbed v global scope
      window.muEmbed &&
        window.muEmbed(
          {
            embedType: "reservation-widget",
            accommodationId: 12361,
            token: "6e3664190fe88fd8093f332e743937e3",
            settings: {
              primary_color: "rgba(22,163,74,1)",
              secondary_color: "#0058aa",
              background_color: "rgba(255,255,255,1)",
              text_color: "rgba(24,29,34,1)",
            },
          },
          "embed-NFX10uvoJVM3KFHFlHhSU"
        )
    }
    document.body.appendChild(script)
    // Clean-up ak treba
    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <div
      id="embed-NFX10uvoJVM3KFHFlHhSU"
      data-mu-embed-origin="https://www.megaubytovanie.sk"
      style={{ width: "100%" }}
    ></div>
  )
}
