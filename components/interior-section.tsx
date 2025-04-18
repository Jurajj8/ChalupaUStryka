"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle } from "lucide-react"
import { motion } from "framer-motion"
import ImageGallery from "./image-gallery"
import AnimatedSection from "./animated-section"
import AnimatedElement from "./animated-element"
import AnimatedText from "./animated-text"

export default function InteriorSection() {
  const interiorSpaces = [
    {
      id: "spalne",
      title: "Spálne",
      description: "V chate sa nachádzajú tri spálne s 8 pevnými lôžkami, jednou prístelkou a cestovnou postieľkou.",
      images: [
        { src: "/ChalupaUStryka/images/interior/bedrooms/4.png", alt: "Spálňa 1" },
        { src: "/ChalupaUStryka/images/interior/bedrooms/1.png", alt: "Spálňa 2" },
        { src: "/ChalupaUStryka/images/interior/bedrooms/2.png", alt: "Spálňa 3" },
        { src: "/ChalupaUStryka/images/interior/bedrooms/3.png", alt: "Detská postielka" },
      ],
    },
    {
      id: "spolocenska",
      title: "Spoločenská miestnosť",
      description:
        "Spoločenská miestnosť s gaučom a televízorom so satelitným alebo internetovým príjmom a službou Netflix. Celá rodina či skupina priateľov sa môže zabaviť aj pri rôznych spoločenských hrách, alebo pri stolnom futbale.",
      images: [
        { src: "/ChalupaUStryka/images/interior/common/1.png", alt: "Spoločenská miestnosť 1" },
        { src: "/ChalupaUStryka/images/interior/common/2.png", alt: "Spoločenská miestnosť 2" },
        { src: "/ChalupaUStryka/images/interior/common/3.png", alt: "Detský kútik" },
        { src: "/ChalupaUStryka/images/interior/common/4.png", alt: "Kalčeto" },
      ],
    },
    {
      id: "kuchyna",
      title: "Kuchyňa",
      description:
        "Na prípravu vlastnej stravy je k dispozícii plne vybavená kuchyňa, kde nechýba elektrický sporák s rúrou, chladnička s mrazničkou, mikrovlnná rúra, umývačka riadu, rýchlovarná kanvica, kávovar, hriankovač a jedálenské posedenie.",
      images: [
        { src: "/ChalupaUStryka/images/interior/kitchen/1.png", alt: "Kuchyňa 1" },
        { src: "/ChalupaUStryka/images/interior/kitchen/2.png", alt: "Jedálenský stôl" },
        { src: "/ChalupaUStryka/images/interior/kitchen/3.png", alt: "Kuchynské spotrebiče" },

      ],
    },
    {
      id: "kupelne",
      title: "Kúpeľne",
      description:
        "K vybaveniu patria tiež dve kúpeľne s toaletou a sprchovacím kútom, pričom v jednej sa nachádza infrasauna pre dve osoby. K dispozícii sú posteľné obliečky, plachty do sauny v počte 9 kusov a uteráky na ruky.",
      images: [
        { src: "/ChalupaUStryka/images/interior/bathroom/1.png", alt: "Kúpeľňa 1" },
        { src: "/ChalupaUStryka/images/interior/bathroom/2.png", alt: "Kúpeľňa 2" },
        { src: "/ChalupaUStryka/images/interior/bathroom/3.png", alt: "Sauna" },
      ],
    },
  ]

  const [activeTab, setActiveTab] = useState("spalne")

  return (
    <AnimatedSection id="interior" className="py-20 bg-gray-50" animation="fadeIn">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <AnimatedText as="h2" animation="slideUp" className="text-3xl md:text-4xl font-bold mb-4">
            Interiér
          </AnimatedText>
          <AnimatedText animation="slideUp" delay={0.2} className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Komfortné a útulné priestory pre váš dokonalý oddych
          </AnimatedText>
        </div>

        <Tabs defaultValue="spalne" className="w-full" value={activeTab} onValueChange={setActiveTab}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
              {interiorSpaces.map((space, index) => (
                <motion.div
                  key={space.id}
                  whileHover={{ y: -3 }}
                  whileTap={{ y: 0 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <TabsTrigger value={space.id} className="text-sm md:text-base" onClick={() => setActiveTab(space.id)}>
                    {space.title}
                  </TabsTrigger>
                </motion.div>
              ))}
            </TabsList>
          </motion.div>

          {interiorSpaces.map((space) => (
            <TabsContent key={space.id} value={space.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: activeTab === space.id ? 1 : 0, y: activeTab === space.id ? 0 : 20 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start"
              >
                <div>
                  <AnimatedText as="h3" animation="slideLeft" className="text-2xl font-semibold mb-4">
                    {space.title}
                  </AnimatedText>
                  <AnimatedText animation="slideLeft" delay={0.1} className="text-muted-foreground mb-6">
                    {space.description}
                  </AnimatedText>
                  <ul className="space-y-2">
                    {space.id === "spalne" && (
                      <>
                        <AnimatedElement animation="slideLeft" delay={0.2}>
                          <li className="flex items-center gap-2">
                            <motion.div whileHover={{ scale: 1.1, rotate: 5 }}>
                              <CheckCircle className="h-5 w-5 text-primary" />
                            </motion.div>
                            <span>8 pevných lôžok</span>
                          </li>
                        </AnimatedElement>
                        <AnimatedElement animation="slideLeft" delay={0.3}>
                          <li className="flex items-center gap-2">
                            <motion.div whileHover={{ scale: 1.1, rotate: 5 }}>
                              <CheckCircle className="h-5 w-5 text-primary" />
                            </motion.div>
                            <span>1 prístelka</span>
                          </li>
                        </AnimatedElement>
                        <AnimatedElement animation="slideLeft" delay={0.4}>
                          <li className="flex items-center gap-2">
                            <motion.div whileHover={{ scale: 1.1, rotate: 5 }}>
                              <CheckCircle className="h-5 w-5 text-primary" />
                            </motion.div>
                            <span>Cestovná postieľka</span>
                          </li>
                        </AnimatedElement>
                      </>
                    )}
                    {space.id === "spolocenska" && (
                      <>
                        <AnimatedElement animation="slideLeft" delay={0.2}>
                          <li className="flex items-center gap-2">
                            <motion.div whileHover={{ scale: 1.1, rotate: 5 }}>
                              <CheckCircle className="h-5 w-5 text-primary" />
                            </motion.div>
                            <span>Televízor so satelitným príjmom</span>
                          </li>
                        </AnimatedElement>
                        <AnimatedElement animation="slideLeft" delay={0.3}>
                          <li className="flex items-center gap-2">
                            <motion.div whileHover={{ scale: 1.1, rotate: 5 }}>
                              <CheckCircle className="h-5 w-5 text-primary" />
                            </motion.div>
                            <span>Netflix</span>
                          </li>
                        </AnimatedElement>
                        <AnimatedElement animation="slideLeft" delay={0.4}>
                          <li className="flex items-center gap-2">
                            <motion.div whileHover={{ scale: 1.1, rotate: 5 }}>
                              <CheckCircle className="h-5 w-5 text-primary" />
                            </motion.div>
                            <span>Spoločenské hry</span>
                          </li>
                        </AnimatedElement>
                        <AnimatedElement animation="slideLeft" delay={0.5}>
                          <li className="flex items-center gap-2">
                            <motion.div whileHover={{ scale: 1.1, rotate: 5 }}>
                              <CheckCircle className="h-5 w-5 text-primary" />
                            </motion.div>
                            <span>Stolný futbal</span>
                          </li>
                        </AnimatedElement>
                      </>
                    )}
                    {space.id === "kuchyna" && (
                      <>
                        <AnimatedElement animation="slideLeft" delay={0.2}>
                          <li className="flex items-center gap-2">
                            <motion.div whileHover={{ scale: 1.1, rotate: 5 }}>
                              <CheckCircle className="h-5 w-5 text-primary" />
                            </motion.div>
                            <span>Elektrický sporák s rúrou</span>
                          </li>
                        </AnimatedElement>
                        <AnimatedElement animation="slideLeft" delay={0.3}>
                          <li className="flex items-center gap-2">
                            <motion.div whileHover={{ scale: 1.1, rotate: 5 }}>
                              <CheckCircle className="h-5 w-5 text-primary" />
                            </motion.div>
                            <span>Chladnička s mrazničkou</span>
                          </li>
                        </AnimatedElement>
                        <AnimatedElement animation="slideLeft" delay={0.4}>
                          <li className="flex items-center gap-2">
                            <motion.div whileHover={{ scale: 1.1, rotate: 5 }}>
                              <CheckCircle className="h-5 w-5 text-primary" />
                            </motion.div>
                            <span>Mikrovlnná rúra</span>
                          </li>
                        </AnimatedElement>
                        <AnimatedElement animation="slideLeft" delay={0.5}>
                          <li className="flex items-center gap-2">
                            <motion.div whileHover={{ scale: 1.1, rotate: 5 }}>
                              <CheckCircle className="h-5 w-5 text-primary" />
                            </motion.div>
                            <span>Umývačka riadu</span>
                          </li>
                        </AnimatedElement>
                        <AnimatedElement animation="slideLeft" delay={0.6}>
                          <li className="flex items-center gap-2">
                            <motion.div whileHover={{ scale: 1.1, rotate: 5 }}>
                              <CheckCircle className="h-5 w-5 text-primary" />
                            </motion.div>
                            <span>Kávovar a rýchlovarná kanvica</span>
                          </li>
                        </AnimatedElement>
                      </>
                    )}
                    {space.id === "kupelne" && (
                      <>
                        <AnimatedElement animation="slideLeft" delay={0.2}>
                          <li className="flex items-center gap-2">
                            <motion.div whileHover={{ scale: 1.1, rotate: 5 }}>
                              <CheckCircle className="h-5 w-5 text-primary" />
                            </motion.div>
                            <span>2 kúpeľne s toaletou</span>
                          </li>
                        </AnimatedElement>
                        <AnimatedElement animation="slideLeft" delay={0.3}>
                          <li className="flex items-center gap-2">
                            <motion.div whileHover={{ scale: 1.1, rotate: 5 }}>
                              <CheckCircle className="h-5 w-5 text-primary" />
                            </motion.div>
                            <span>Infrasauna pre 2 osoby</span>
                          </li>
                        </AnimatedElement>
                        <AnimatedElement animation="slideLeft" delay={0.4}>
                          <li className="flex items-center gap-2">
                            <motion.div whileHover={{ scale: 1.1, rotate: 5 }}>
                              <CheckCircle className="h-5 w-5 text-primary" />
                            </motion.div>
                            <span>Posteľné obliečky</span>
                          </li>
                        </AnimatedElement>
                        <AnimatedElement animation="slideLeft" delay={0.5}>
                          <li className="flex items-center gap-2">
                            <motion.div whileHover={{ scale: 1.1, rotate: 5 }}>
                              <CheckCircle className="h-5 w-5 text-primary" />
                            </motion.div>
                            <span>Plachty do sauny (9 ks)</span>
                          </li>
                        </AnimatedElement>
                        <AnimatedElement animation="slideLeft" delay={0.6}>
                          <li className="flex items-center gap-2">
                            <motion.div whileHover={{ scale: 1.1, rotate: 5 }}>
                              <CheckCircle className="h-5 w-5 text-primary" />
                            </motion.div>
                            <span>Uteráky na ruky</span>
                          </li>
                        </AnimatedElement>
                      </>
                    )}
                  </ul>
                </div>
                <AnimatedElement animation="slideRight" delay={0.2}>
                  <ImageGallery images={space.images} />
                </AnimatedElement>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </AnimatedSection>
  )
}
