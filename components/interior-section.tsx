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
      description: "V chate sa nachádzajú tri spálne s ôsmimi pevnými lôžkami, jednou prístelkou a cestovnou postieľkou.",
      images: [
        { src: "https://res.cloudinary.com/djreoxyzu/image/upload/f_auto,q_auto/v1749031329/4_dmjrdn.png", alt: "Spálňa 1" },
        { src: "https://res.cloudinary.com/djreoxyzu/image/upload/f_auto,q_auto/v1753288927/spalna_xmdkea.jpg", alt: "Spálňa 1" },
        { src: "https://res.cloudinary.com/djreoxyzu/image/upload/f_auto,q_auto/v1753387884/1_pc8pov.jpg", alt: "Spálňa 2" },
        { src: "https://res.cloudinary.com/djreoxyzu/image/upload/f_auto,q_auto/v1749031330/2_piw4zp.png", alt: "Spálňa 3" },
        { src: "https://res.cloudinary.com/djreoxyzu/image/upload/f_auto,q_auto/v1749031327/3_s8ae9w.png", alt: "Detská postielka" },
      ],
    },
    {
      id: "spolocenska",
      title: "Spoločenská miestnosť",
      description:
        "Spoločenská miestnosť je vybavená gaučom a televízorom so satelitným alebo internetovým príjmom prostredníctvom služby Skylink. Celá rodina či skupina priateľov sa môže zabaviť aj pri rôznych spoločenských hrách, alebo pri stolnom futbale.",
      images: [
        { src: "https://res.cloudinary.com/djreoxyzu/image/upload/f_auto,q_auto/v1753373915/1_bikx46.jpg", alt: "Spoločenská miestnosť 1" },
        { src: "https://res.cloudinary.com/djreoxyzu/image/upload/f_auto,q_auto/v1749031348/2_nikqzx.png", alt: "Spoločenská miestnosť 2" },
        { src: "https://res.cloudinary.com/djreoxyzu/image/upload/f_auto,q_auto/v1749031356/3_bi16eo.png", alt: "Detský kútik" },
        { src: "https://res.cloudinary.com/djreoxyzu/image/upload/f_auto,q_auto/v1749031303/4_cwncpi.png", alt: "Kalčeto" },
      ],
    },
    {
      id: "kuchyna",
      title: "Kuchyňa",
      description:
        "Súčasťou vybavenia sú aj praktické doplnky ako sú rýchlovarná kanvica, hriankovač, či kompletný kuchynský riad, ktoré zabezpečujú maximálne pohodlie počas pobytu.",
      images: [
        { src: "https://res.cloudinary.com/djreoxyzu/image/upload/f_auto,q_auto/v1749031319/1_sciuzp.png", alt: "Kuchyňa 1" },
        { src: "https://res.cloudinary.com/djreoxyzu/image/upload/f_auto,q_auto/v1749031337/2_tmfl9o.png", alt: "Jedálenský stôl" },
        { src: "https://res.cloudinary.com/djreoxyzu/image/upload/f_auto,q_auto/v1749031351/3_ssjwer.png", alt: "Kuchynské spotrebiče" },
        { src: "https://res.cloudinary.com/djreoxyzu/image/upload/f_auto,q_auto/v1753288487/stolicka_thhsfz.jpg", alt: "Detská stolička" },

      ],
    },
    {
      id: "kupelne",
      title: "Kúpeľne",
      description:
        "K dispozícii sú dve moderne vybavené kúpeľne s toaletou a sprchovacím kútom. Jedna z nich je navyše vybavená infrasaunou pre dve osoby, ideálnou na relax po aktívnom dni. Ubytovanie zahŕňa aj všetko potrebné pre váš komfort – posteľné bielizne, 3x uteráky a saunové plachty. Osušky je potrebné si priniesť.",
      images: [
        { src: "https://res.cloudinary.com/djreoxyzu/image/upload/f_auto,q_auto/v1749031191/1_mttqex.png", alt: "Kúpeľňa 1" },
        { src: "https://res.cloudinary.com/djreoxyzu/image/upload/f_auto,q_auto/v1749031191/2_ltb6g9.png", alt: "Kúpeľňa 2" },
        { src: "https://res.cloudinary.com/djreoxyzu/image/upload/f_auto,q_auto/v1749031191/3_jujuy1.png", alt: "Sauna" },
      ],
    },
    {
      id: "suteren",
      title: "Suterén",
      description:
        "Suterén je vybavený sušičom na lyžiarky, stojanom na lyže, stolným tenisom, elektronickými šípkami. ",
      images: [
        { src: "https://res.cloudinary.com/djreoxyzu/image/upload/f_auto,q_auto/v1749031298/1_c6u8hl.png", alt: "Suterén" },
        { src: "https://res.cloudinary.com/djreoxyzu/image/upload/f_auto,q_auto/v1753288708/susiak_fpkfs1.jpg", alt: "Sušiak" },
        { src: "https://res.cloudinary.com/djreoxyzu/image/upload/f_auto,q_auto/v1753288709/stojan_c52fz3.jpg", alt: "Stojan" },
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
            <TabsList
              className="
                flex flex-wrap justify-center gap-2 mb-8 w-full p-0 md:grid md:grid-cols-4 md:gap-x-0 md:overflow-visible h-auto
              "
            >
              {interiorSpaces.map((space, index) => (
                <motion.div
                  key={space.id}
                  whileHover={{ y: -3 }}
                  whileTap={{ y: 0 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="flex-1" 
                >
                  <TabsTrigger
                    key={space.id}
                    value={space.id}
                    //onClick={() => setActiveTab(space.id)}
                    className="
                      min-w-[120px] w-full text-sm md:text-base text-center py-2.5 rounded-lg border border-transparent
                      data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:border-primary 
                      transition-colors duration-150
                      whitespace-nowrap
                      px-3
                    "
                  >
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
                      {/* Rozloženie spální */}
                      <AnimatedElement animation="slideLeft" delay={0.5}>
                          <li className="flex items-start gap-2">
                            <div>
                              <span className="font-medium">Spálňa 1:</span> Manželská posteľ, možnosť cestovnej postieľky
                            </div>
                          </li>
                        </AnimatedElement>
                        <AnimatedElement animation="slideLeft" delay={0.6}>
                          <li className="flex items-start gap-2">
                            <div>
                              <span className="font-medium">Spálňa 2:</span> Manželská posteľ, jednolôžko
                            </div>
                          </li>
                        </AnimatedElement>
                        <AnimatedElement animation="slideLeft" delay={0.7}>
                          <li className="flex items-start gap-2">
                            <div>
                              <span className="font-medium">Spálňa 3:</span> Manželská posteľ, jednolôžko, prístelka
                            </div>
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
                            <span>SkyLink</span>
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
                            <span>Indukčná varná doska</span>
                          </li>
                        </AnimatedElement>
                        <AnimatedElement animation="slideLeft" delay={0.3}>
                          <li className="flex items-center gap-2">
                            <motion.div whileHover={{ scale: 1.1, rotate: 5 }}>
                              <CheckCircle className="h-5 w-5 text-primary" />
                            </motion.div>
                            <span>Odsávač pár</span>
                          </li>
                        </AnimatedElement>
                        <AnimatedElement animation="slideLeft" delay={0.4}>
                          <li className="flex items-center gap-2">
                            <motion.div whileHover={{ scale: 1.1, rotate: 5 }}>
                              <CheckCircle className="h-5 w-5 text-primary" />
                            </motion.div>
                            <span>Elektrická rúra</span>
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
                            <span>Mikrovlnná rúra</span>
                          </li>
                        </AnimatedElement>
                        <AnimatedElement animation="slideLeft" delay={0.6}>
                          <li className="flex items-center gap-2">
                            <motion.div whileHover={{ scale: 1.1, rotate: 5 }}>
                              <CheckCircle className="h-5 w-5 text-primary" />
                            </motion.div>
                            <span>Pákový kávovar na mletú kávu</span>
                          </li>
                        </AnimatedElement>
                        <AnimatedElement animation="slideLeft" delay={0.6}>
                          <li className="flex items-center gap-2">
                            <motion.div whileHover={{ scale: 1.1, rotate: 5 }}>
                              <CheckCircle className="h-5 w-5 text-primary" />
                            </motion.div>
                            <span>Chladnička s mrazničkou</span>
                          </li>
                        </AnimatedElement>
                        <AnimatedElement animation="slideLeft" delay={0.6}>
                          <li className="flex items-center gap-2">
                            <motion.div whileHover={{ scale: 1.1, rotate: 5 }}>
                              <CheckCircle className="h-5 w-5 text-primary" />
                            </motion.div>
                            <span>Jedálenské posedenie</span>
                          </li>
                        </AnimatedElement>
                      </>
                    )}
                    {space.id === "kupelne" && (
                      <>
                        <AnimatedElement animation="slideLeft" delay={0.2}>
                          <li className="flex items-center gap-2">
                            <span>Kúpeľňa 1: Infra sauna pre dve osoby, sprchový kút, toaleta, dvojumývadlo</span>
                          </li>
                        </AnimatedElement>
                        <AnimatedElement animation="slideLeft" delay={0.3}>
                          <li className="flex items-center gap-2">
                            <span>Kúpeľňa 2: Sprchový kút, toaleta, dvojumývadlo</span>
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
