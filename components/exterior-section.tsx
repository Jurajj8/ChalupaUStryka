"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import ImageGallery from "./image-gallery"
import AnimatedSection from "./animated-section"
import AnimatedElement from "./animated-element"
import AnimatedText from "./animated-text"

export default function ExteriorSection() {
  const [imgError, setImgError] = useState<Record<string, boolean>>({})

  const handleImageError = (src: string) => {
    setImgError((prev) => ({
      ...prev,
      [src]: true,
    }))
  }

  const exteriorFeatures = [
    {
      title: "Opláštená terasa",
      description: "Priamo z kuchyne je opláštená terasa s posedením a dvomi závesnými kreslami.",
      image: "/ChalupaUStryka/images/exterior/terrace.jpg",
    },
    {
      title: "Detské ihrisko",
      description: "Futbalové bránky, basketbalový kôš, drevený domček so šmýkačkou a pieskoviskom.",
      image: "/ChalupaUStryka/images/exterior/playground.jpg",
    },
    {
      title: "Ohnisko a posedenie",
      description: "Ohnisko na opekanie s posedením pre celú rodinu alebo skupinu priateľov.",
      image: "/ChalupaUStryka/images/exterior/fireplace.jpg",
    },
    {
      title: "Vodné atrakcie",
      description: "Kúpacia kaďa a v lete bazén pre osvieženie počas horúcich dní.",
      image: "/ChalupaUStryka/images/exterior/pool.jpg",
    },
  ]

  const allExteriorImages = [
    { src: "/ChalupaUStryka/images/exterior/chalupa-exterior-main.jpg", alt: "Chalupa u Strýka - Exteriér" },
    { src: "/ChalupaUStryka/images/exterior/terrace.jpg", alt: "Terasa" },
    { src: "/ChalupaUStryka/images/exterior/playground.jpg", alt: "Detské ihrisko" },
    { src: "/ChalupaUStryka/images/exterior/fireplace.jpg", alt: "Ohnisko" },
    { src: "/ChalupaUStryka/images/exterior/pool.jpg", alt: "Bazén" },
    { src: "/ChalupaUStryka/images/exterior/garden.jpg", alt: "Záhrada" },
  ]

  return (
    <AnimatedSection id="exterior" className="py-20 bg-white" animation="fadeIn">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <AnimatedText as="h2" animation="slideUp" className="text-3xl md:text-4xl font-bold mb-4">
            Exteriér
          </AnimatedText>
          <AnimatedText animation="slideUp" delay={0.2} className="text-lg text-muted-foreground max-w-2xl mx-auto">
            V exteriéri si voľné chvíle užijete v oplotenej záhrade s množstvom atrakcií
          </AnimatedText>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {exteriorFeatures.map((feature, index) => (
            <AnimatedElement
              key={index}
              animation={index % 2 === 0 ? "slideLeft" : "slideRight"}
              delay={index * 0.1}
              className={`flex flex-col ${index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"} gap-6 items-center`}
            >
              <div className="w-full md:w-1/2">
                <motion.div
                  className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-md"
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                >
                  <Image
                    src={imgError[feature.image] ? "/placeholder.svg?height=600&width=800" : feature.image}
                    alt={feature.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-300"
                    onError={() => handleImageError(feature.image)}
                  />
                </motion.div>
              </div>
              <div className="w-full md:w-1/2">
                <motion.h3
                  className="text-2xl font-semibold mb-3"
                  whileHover={{ x: index % 2 === 0 ? 5 : -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {feature.title}
                </motion.h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </AnimatedElement>
          ))}
        </div>

        <div className="mt-12">
          <AnimatedText as="h3" animation="slideUp" className="text-2xl font-semibold mb-6 text-center">
            Fotogaléria exteriéru
          </AnimatedText>
          <AnimatedElement animation="scale" delay={0.2}>
            <ImageGallery images={allExteriorImages} />
          </AnimatedElement>
        </div>

        <AnimatedElement
          animation="slideUp"
          delay={0.3}
          className="mt-16 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 md:p-8 shadow-lg"
        >
          <AnimatedText as="h3" animation="slideUp" delay={0.4} className="text-2xl font-semibold mb-6 text-center">
            Exkluzívne vybavenie exteriéru
          </AnimatedText>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-white rounded-xl p-6 shadow-md"
            >
              <h4 className="text-xl font-semibold mb-4 text-primary">Relaxačná zóna</h4>
              <div className="grid grid-cols-1 gap-4">
                {[
                  {
                    title: "Vonkajšia vírivka",
                    description: "Celoročne vyhrievaná vírivka pre 4 osoby s hydromasážou a LED osvetlením",
                    icon: "spa",
                  },
                  {
                    title: "Vonkajšia sauna",
                    description: "Fínska sauna s kapacitou pre 4 osoby s výhľadom na okolité hory",
                    icon: "flame",
                  },
                  {
                    title: "Záhradné lehátka",
                    description: "Pohodlné lehátka na slnenie s nastaviteľným sklonom a tienidlom",
                    icon: "sun",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02, backgroundColor: "rgba(236, 253, 243, 0.4)" }}
                    className="flex items-start gap-4 p-4 rounded-lg transition-all duration-300"
                  >
                    <div className="mt-1">
                      {item.icon === "spa" && (
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
                          className="text-primary"
                          whileHover={{ rotate: 10, scale: 1.2 }}
                        >
                          <path d="M20.7 9c.4 0 .7.2.9.6.2.4.1.8-.2 1.1-3.8 3.2-7.1 7.4-8.3 12.3-.1.4-.5.7-.9.7-.4 0-.8-.3-.9-.7-1.2-4.9-4.5-9.1-8.3-12.3-.3-.3-.4-.7-.2-1.1.2-.4.5-.6.9-.6 6.9 0 13.1 0 17 0z" />
                          <path d="M9.1 9c-.5-3.4-1.5-5.6-3.1-7" />
                          <path d="M14.9 9c.5-3.4 1.5-5.6 3.1-7" />
                        </motion.svg>
                      )}
                      {item.icon === "flame" && (
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
                          className="text-primary"
                          whileHover={{ rotate: 10, scale: 1.2 }}
                        >
                          <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
                        </motion.svg>
                      )}
                      {item.icon === "sun" && (
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
                          className="text-primary"
                          whileHover={{ rotate: 45, scale: 1.2 }}
                        >
                          <circle cx="12" cy="12" r="4" />
                          <path d="M12 2v2" />
                          <path d="M12 20v2" />
                          <path d="m4.93 4.93 1.41 1.41" />
                          <path d="m17.66 17.66 1.41 1.41" />
                          <path d="M2 12h2" />
                          <path d="M20 12h2" />
                          <path d="m6.34 17.66-1.41 1.41" />
                          <path d="m19.07 4.93-1.41 1.41" />
                        </motion.svg>
                      )}
                    </div>
                    <div>
                      <h5 className="font-medium text-lg">{item.title}</h5>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-white rounded-xl p-6 shadow-md"
            >
              <h4 className="text-xl font-semibold mb-4 text-primary">Aktivity a zábava</h4>
              <div className="grid grid-cols-1 gap-4">
                {[
                  {
                    title: "Vonkajšia letná kuchyňa",
                    description: "Plne vybavená letná kuchyňa s grilom, udiarňou a pizza pecou",
                    icon: "utensils",
                  },
                  {
                    title: "Športové vybavenie",
                    description: "Stolný tenis, badminton, volejbal, petang a ďalšie športové potreby",
                    icon: "tennis",
                  },
                  {
                    title: "Večerné posedenie",
                    description: "Krytá terasa s vonkajším krbom, LED osvetlením a bluetooth reproduktormi",
                    icon: "music",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02, backgroundColor: "rgba(236, 253, 243, 0.4)" }}
                    className="flex items-start gap-4 p-4 rounded-lg transition-all duration-300"
                  >
                    <div className="mt-1">
                      {item.icon === "utensils" && (
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
                          className="text-primary"
                          whileHover={{ rotate: 10, scale: 1.2 }}
                        >
                          <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
                          <path d="M7 2v20" />
                          <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
                        </motion.svg>
                      )}
                      {item.icon === "tennis" && (
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
                          className="text-primary"
                          whileHover={{ rotate: 10, scale: 1.2 }}
                        >
                          <circle cx="12" cy="12" r="10" />
                          <path d="M19 12c0-3.87-3.13-7-7-7" />
                          <path d="M5 12c0 3.87 3.13 7 7 7" />
                        </motion.svg>
                      )}
                      {item.icon === "music" && (
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
                          className="text-primary"
                          whileHover={{ rotate: 10, scale: 1.2 }}
                        >
                          <path d="M9 18V5l12-2v13" />
                          <circle cx="6" cy="18" r="3" />
                          <circle cx="18" cy="16" r="3" />
                        </motion.svg>
                      )}
                    </div>
                    <div>
                      <h5 className="font-medium text-lg">{item.title}</h5>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mt-8 bg-primary/10 rounded-lg p-5 border border-primary/20"
          >
            <div className="flex items-center gap-3 mb-3">
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
                className="text-primary"
                whileHover={{ rotate: 10, scale: 1.2 }}
              >
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                <path d="m9 12 2 2 4-4" />
              </motion.svg>
              <h4 className="text-lg font-semibold">Praktické vybavenie</h4>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-2 ml-2">
              {[
                "Oplotená záhrada s bránou",
                "Parkovanie pre 3 autá",
                "Záhradný nábytok z masívu",
                "Vonkajšie osvetlenie s pohybovým senzorom",
                "Automatický zavlažovací systém",
                "Úložný priestor na športové vybavenie",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                  className="flex items-center gap-2 py-1"
                >
                  <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                  <span className="text-sm">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatedElement>
      </div>
    </AnimatedSection>
  )
}
