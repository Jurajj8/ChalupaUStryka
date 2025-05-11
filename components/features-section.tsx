"use client"
import { motion } from "framer-motion"
import AnimatedSection from "./animated-section"
import AnimatedElement from "./animated-element"
import AnimatedCard from "./animated-card"

export default function FeaturesSection() {
  const features = [
    {
      title: "Komfortné ubytovanie",
      description: "Celoročné ubytovanie s maximálnou kapacitou 9 osôb v komfortne zariadenej chate.",
      icon: "home",
    },
    {
      title: "Plne vybavená kuchyňa",
      description:
        "Elektrický sporák s rúrou, chladnička s mrazničkou, mikrovlnná rúra, umývačka riadu a ďalšie vybavenie.",
      icon: "utensils",
    },
    {
      title: "Relaxačná zóna",
      description: "Spoločenská miestnosť s gaučom, televízorom so satelitným príjmom a službou SkyLink.",
      icon: "tv",
    },
    {
      title: "Wellness",
      description: "Infra sauna pre dve osoby, kúpacia kaďa s hydromasážnymi tryskami, v lete nadkrytý bazén s pieskovou filtráciou, vyhrievaný tepelným čerpadlom.",
      icon: "spa",
    },
    {
      title: "Detské ihrisko",
      description: "Futbalové bránky, basketbalový kôš, drevený domček so šmýkačkou a pieskoviskom.",
      icon: "baby",
    },
    {
      title: "Bezplatné WiFi",
      description: "V celom objekte sa na internet pripojíte pomocou siete WiFi zadarmo.",
      icon: "wifi",
    },
  ]

  return (
    <AnimatedSection id="features" className="py-20 bg-white" animation="fadeIn">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <AnimatedElement animation="slideUp">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Prečo si vybrať Chalupu u Strýka?</h2>
          </AnimatedElement>
          <AnimatedElement animation="slideUp" delay={0.2}>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ponúkame vám komfortné ubytovanie s množstvom vybavenia pre dokonalý oddych a zábavu pre celú rodinu.
            </p>
          </AnimatedElement>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <AnimatedCard key={index} index={index}>
              <div className="mb-4 text-primary">
                {feature.icon === "home" && (
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-home"
                    whileHover={{ rotate: 5, scale: 1.1 }}
                  >
                    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </motion.svg>
                )}
                {feature.icon === "utensils" && (
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-utensils"
                    whileHover={{ rotate: 5, scale: 1.1 }}
                  >
                    <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
                    <path d="M7 2v20" />
                    <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
                  </motion.svg>
                )}
                {feature.icon === "tv" && (
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-tv"
                    whileHover={{ rotate: 5, scale: 1.1 }}
                  >
                    <rect width="20" height="15" x="2" y="7" rx="2" ry="2" />
                    <polyline points="17 2 12 7 7 2" />
                  </motion.svg>
                )}
                {feature.icon === "spa" && (
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-spa"
                    whileHover={{ rotate: 5, scale: 1.1 }}
                  >
                    <path d="M20.7 9c.4 0 .7.2.9.6.2.4.1.8-.2 1.1-3.8 3.2-7.1 7.4-8.3 12.3-.1.4-.5.7-.9.7-.4 0-.8-.3-.9-.7-1.2-4.9-4.5-9.1-8.3-12.3-.3-.3-.4-.7-.2-1.1.2-.4.5-.6.9-.6 6.9 0 13.1 0 17 0z" />
                    <path d="M9.1 9c-.5-3.4-1.5-5.6-3.1-7" />
                    <path d="M14.9 9c.5-3.4 1.5-5.6 3.1-7" />
                  </motion.svg>
                )}
                {feature.icon === "baby" && (
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-baby"
                    whileHover={{ rotate: 5, scale: 1.1 }}
                  >
                    <path d="M9 12h.01" />
                    <path d="M15 12h.01" />
                    <path d="M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5" />
                    <path d="M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1" />
                  </motion.svg>
                )}
                {feature.icon === "wifi" && (
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-wifi"
                    whileHover={{ rotate: 5, scale: 1.1 }}
                  >
                    <path d="M5 13a10 10 0 0 1 14 0" />
                    <path d="M8.5 16.5a5 5 0 0 1 7 0" />
                    <path d="M2 8.82a15 15 0 0 1 20 0" />
                    <line x1="12" x2="12.01" y1="20" y2="20" />
                  </motion.svg>
                )}
              </div>
              <motion.h3
                className="text-xl font-semibold mb-2"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {feature.title}
              </motion.h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
