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
      image: "https://res.cloudinary.com/djreoxyzu/image/upload/f_auto,q_auto/v1753290852/terrace_gm6qcr.jpg",
    },
    {
      title: "Detské ihrisko",
      description: "Futbalové bránky, basketbalový kôš, hojdačky, lezecká stena, trampolína, drevený domček so šmýkačkou a pieskoviskom.",
      image: "https://res.cloudinary.com/djreoxyzu/image/upload/f_auto,q_auto/v1748988766/playground_acnpkr.png",
    },
    {
      title: "Bazén s lehátkami",
      description: "K dispozícii je prekrytý bazén vyhrievaný tepelným čerpadlom, vybavený aj UV lampou na účinnejšiu dezinfekciu vody. Súčasťou vybavenia je aj solárna sprcha, lehátka a slnečník na pohodlný relax.",
      image: "https://res.cloudinary.com/djreoxyzu/image/upload/f_auto,q_auto/v1753286830/11_ylzdmo.jpg",
    },
    {
      title: "Vodné atrakcie",
      description: "Kaďa s hydromasážnymi tryskami, ktorú vyhrieva piecka na drevo. V letných mesiacoch môžete využiť na príjemné osvieženie počas horúcich dní.",
      image: "https://res.cloudinary.com/djreoxyzu/image/upload/f_auto,q_auto/v1748988776/kada_csfcrr.jpg",
    },
  ]

  const allExteriorImages = [
    { src: "https://res.cloudinary.com/djreoxyzu/image/upload/f_auto,q_auto/v1753290653/2_mnncph.jpg", alt: "Kúpacia kaďa" },
    { src: "https://res.cloudinary.com/djreoxyzu/image/upload/f_auto,q_auto/v1753290964/exterier3_mad4pu.jpg", alt: "Hupacia sieť" },
    { src: "https://res.cloudinary.com/djreoxyzu/image/upload/f_auto,q_auto/v1753373762/4_gfwj0q.jpg", alt: "Visiacie posedenie" },
    { src: "https://res.cloudinary.com/djreoxyzu/image/upload/f_auto,q_auto/v1748988770/5_afsnkl.png", alt: "Výrivka" },
    { src: "https://res.cloudinary.com/djreoxyzu/image/upload/f_auto,q_auto/v1748988779/11_lg9dil.png", alt: "Bazén" },
    { src: "https://res.cloudinary.com/djreoxyzu/image/upload/f_auto,q_auto/v1753290702/exterier1_srbzfy.jpg", alt: "Posedenie" },
    { src: "https://res.cloudinary.com/djreoxyzu/image/upload/f_auto,q_auto/v1748988774/6_rb48ip.png", alt: "Gril" },
    { src: "https://res.cloudinary.com/djreoxyzu/image/upload/f_auto,q_auto/v1748988775/7_czmkgh.png", alt: "Basketbalový kôš" },
    { src: "https://res.cloudinary.com/djreoxyzu/image/upload/f_auto,q_auto/v1753373808/8_vsmxph.jpg", alt: "Šípky" },
    { src: "https://res.cloudinary.com/djreoxyzu/image/upload/f_auto,q_auto/v1748989053/10_zccajg.png", alt: "Zimné posedenie" },
    { src: "https://res.cloudinary.com/djreoxyzu/image/upload/f_auto,q_auto/v1748988769/3_eqtldz.png", alt: "Kúpacia kaďa v zime" },
    { src: "https://res.cloudinary.com/djreoxyzu/image/upload/f_auto,q_auto/v1753388022/suhrn_ba6hkk.jpg", alt: "Koláž" },
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
                    src={imgError[feature.image] ? "https://res.cloudinary.com/djreoxyzu/image/upload/f_auto,q_auto/v1753392204/placeholder_afrpgi.svg" : feature.image}
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
          <h3 className="text-2xl font-semibold mb-6 text-center">
            Fotogaléria exteriéru
          </h3>
          <ImageGallery images={allExteriorImages} />
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
              viewport={{ once: true, amount: 0.1  }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-white rounded-xl p-6 shadow-md"
            >
              <h4 className="text-xl font-semibold mb-4 text-primary">Relaxačná zóna</h4>
              <div className="grid grid-cols-1 gap-4">
                {[
                  {
                    title: "Kúpacia kaďa",
                    description: "Kaďa pre 6 osôb, vyhrievaná externou pieckou na drevo, vybavená hydromasážou a LED osvetlením",
                    icon: "spa",
                  },
                  {
                    title: "Záhradné lehátka",
                    description: "Pohodlné lehátka na slnenie s nastaviteľným sklonom, tienidlom a slnečníkom",
                    icon: "sun",
                  },
                  {
                    title: "Večerné posedenie",
                    description: "Krytá terasa s LED osvetlením, príjemným posedním a závesnými kreslami",
                    icon: "music",
                  },
                  {
                    title: "Kotlík a ohnisko",
                    description: "Kotlík na guláš, gril na drevené uhlie a otvorené ohnisko s lavičkami",
                    icon: "fire",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02, backgroundColor: "rgba(236, 253, 243, 0.4)" }}
                    className="flex items-start gap-4 p-4 rounded-lg transition-all duration-300"
                  >
                    <div className="mt-1">
                      {item.icon === "pool" && (
                        <motion.svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="text-primary"
                          width="24"
                          height="24"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          whileHover={{ rotate: 10, scale: 1.2 }}
                        >
                          <path d="M2 20c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2 2-2 4-2" />
                          <path d="M6 16V4" />
                          <path d="M10 16V4" />
                        </motion.svg>
                      )}
                      {item.icon === "tub" && (
                        <motion.svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="text-primary"
                          width="24"
                          height="24"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          whileHover={{ rotate: 10, scale: 1.2 }}
                        >
                          <path d="M3 12h18v4a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4z" />
                          <path d="M7 12V4a2 2 0 0 1 4 0v8" />
                        </motion.svg>
                      )}
                      {item.icon === "spa" && (
                        <motion.svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="text-primary"
                          width="24"
                          height="24"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          whileHover={{ rotate: 10, scale: 1.2 }}
                        >
                          <path d="M20.7 9c.4 0 .7.2.9.6.2.4.1.8-.2 1.1-3.8 3.2-7.1 7.4-8.3 12.3-.1.4-.5.7-.9.7s-.8-.3-.9-.7c-1.2-4.9-4.5-9.1-8.3-12.3-.3-.3-.4-.7-.2-1.1.2-.4.5-.6.9-.6 6.9 0 13.1 0 17 0z" />
                        </motion.svg>
                      )}
                      {item.icon === "sauna" && (
                        <motion.svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="text-primary"
                          width="24"
                          height="24"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          whileHover={{ rotate: 10, scale: 1.2 }}
                        >
                          <path d="M4 22V2h16v20" />
                          <path d="M10 6h4" />
                          <path d="M10 10h4" />
                          <path d="M10 14h4" />
                          <path d="M10 18h4" />
                        </motion.svg>
                      )}
                      {item.icon === "sun" && (
                        <motion.svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="text-primary"
                          width="24"
                          height="24"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
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
                      {item.icon === "jump" && (
                        <motion.svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="text-primary"
                          width="24"
                          height="24"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          whileHover={{ rotate: 15, scale: 1.2 }}
                        >
                          <circle cx="12" cy="4" r="2" />
                          <path d="M12 6v8" />
                          <path d="M9 20h6l-1-6h-4z" />
                        </motion.svg>
                      )}
                      {item.icon === "music" && (
                        <motion.svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor"
                          strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"
                          whileHover={{ rotate: 10, scale: 1.2 }}>
                          <path d="M9 18V5l12-2v13" />
                          <circle cx="6" cy="18" r="3" />
                          <circle cx="18" cy="16" r="3" />
                        </motion.svg>
                      )}
                      {item.icon === "fire" && (
                        <motion.svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor"
                          strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"
                          whileHover={{ rotate: 10, scale: 1.2 }}>
                          <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
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
              viewport={{ once: true, amount: 0.1  }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-white rounded-xl p-6 shadow-md"
            >
              <h4 className="text-xl font-semibold mb-4 text-primary">Aktivity a zábava</h4>
              <div className="grid grid-cols-1 gap-4">
               {[
                  {
                    title: "Vonkajšia príprava jedla",
                    description: "Gril, kotlík na guláš a ohnisko",
                    icon: "utensils",
                  },
                  {
                    title: "Športové vybavenie",
                    description: "Stolný tenis, stolný futbal, futbalové bránky, el. šípky, basketbalový kôs a ďalšie športové potreby",
                    icon: "tennis",
                  },
                  {
                    title: "Trampolína a preliezky",
                    description: "Detská trampolína, hojdačky, lezecká stena a domček s pieskoviskom a šmýkačkou pre najmenších",
                    icon: "kids",
                  },
                  {
                    title: "Sušič na lyžiarky",
                    description: "Praktický sušič na lyžiarky pre pohodlné a rýchle vysušenie obuvi po lyžovačke v suteréne so stojanom na lyže",
                    icon: "boots-dryer",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02, backgroundColor: "rgba(236, 253, 243, 0.4)" }}
                    className="flex items-start gap-4 p-4 rounded-lg transition-all duration-300"
                  >
                    <div className="mt-1">
                      {item.icon === "utensils" && (
                        // kuchyňa / jedlo
                        <motion.svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor"
                          strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"
                          whileHover={{ rotate: 10, scale: 1.2 }}>
                          <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
                          <path d="M7 2v20" />
                          <path d="M21 15V2a5 5 0 0 0-5 5v6a2 2 0 0 0 2 2h3v7" />
                        </motion.svg>
                      )}
                      {item.icon === "tennis" && (
                        // šport
                        <motion.svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor"
                          strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"
                          whileHover={{ rotate: 10, scale: 1.2 }}>
                          <circle cx="12" cy="12" r="10" />
                          <path d="M19 12c0-3.87-3.13-7-7-7" />
                          <path d="M5 12c0 3.87 3.13 7 7 7" />
                        </motion.svg>
                      )}
                      {item.icon === "music" && (
                        // večerný relax
                        <motion.svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor"
                          strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"
                          whileHover={{ rotate: 10, scale: 1.2 }}>
                          <path d="M9 18V5l12-2v13" />
                          <circle cx="6" cy="18" r="3" />
                          <circle cx="18" cy="16" r="3" />
                        </motion.svg>
                      )}
                      {item.icon === "kids" && (
                        // detské aktivity
                        <motion.svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor"
                          strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"
                          whileHover={{ rotate: 10, scale: 1.2 }}>
                          <circle cx="12" cy="6" r="4" />
                          <path d="M5 22v-2a7 7 0 0 1 14 0v2" />
                        </motion.svg>
                      )}
                      {item.icon === "boots-dryer" && (
                        // sušič na lyžiarky
                        <motion.svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-primary"
                          whileHover={{ rotate: 10, scale: 1.2 }}
                        >
                          {/* Ikonka topánky so "vlnkami" (sušenie) */}
                          <path d="M4 17V7a2 2 0 0 1 2-2h8l6 7v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" />
                          <path d="M9 22s.5-2 3-2 3 2 3 2" /> {/* "Parné" vlnky na sušenie */}
                        </motion.svg>
                      )}
                      {item.icon === "fire" && (
                        // ohnisko
                        <motion.svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor"
                          strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"
                          whileHover={{ rotate: 10, scale: 1.2 }}>
                          <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
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
            viewport={{ once: true, amount: 0.1  }}
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
                "Vonkajšie osvetlenie",
                "Úložný priestor na športové vybavenie",
                "Miestnosť na uskladnenie bicyklov",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.1  }}
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
