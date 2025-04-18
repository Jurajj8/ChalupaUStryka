"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import AnimatedSection from "./animated-section"
import AnimatedElement from "./animated-element"
import AnimatedText from "./animated-text"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MapPin, Clock, Calendar, Car, Compass, Info } from "lucide-react"

export default function LocationSection() {
  const [imgError, setImgError] = useState<Record<string, boolean>>({})
  const [activeTab, setActiveTab] = useState("attractions")

  const handleImageError = (src: string) => {
    setImgError((prev) => ({
      ...prev,
      [src]: true,
    }))
  }

  const attractions = [
    {
      title: "Snow Paradise Veľká Rača",
      description:
        "Lyžiarske stredisko v zime, v lete Bike Park, bobová dráha, trampolíny, lanový park a ďalšie atrakcie.",
      distance: "18 km",
      duration: "24 min",
      seasonality: "Celoročne",
      image: "/ChalupaUStryka/images/attractions/velka-raca.jpg",
    },
    {
      title: "Kysucká cyklomagistrála",
      description: "Cyklotrasa vedúca priamo cez obec, v zime možnosť bežkovania.",
      seasonality: "Celoročne",
      image: "/ChalupaUStryka/images/attractions/cyklomagistrala.jpg",
    },
    {
      title: "Slovenský orloj v Starej Bystrici",
      description: "Unikátny drevený orloj, jediný svojho druhu na Slovensku.",
      distance: "4 km",
      duration: "4 min",
      seasonality: "Celoročne",
      image: "/ChalupaUStryka/images/attractions/orloj.jpg",
    },
    {
      title: "Malá Fatra",
      description: "Nádherné hory s možnosťou turistiky, výstupy na Malý a Veľký Rozsutec, Jánošíkove diery.",
      distance: "26 km",
      duration: "30 min",
      seasonality: "Celoročne (v zime lyžovanie)",
      image: "/ChalupaUStryka/images/attractions/mala-fatra.jpg",
    },
  ]

  // const cities = [
  //   {
  //     name: "Čadca",
  //     description: "Okresné mesto s kompletnou občianskou vybavenosťou, nákupnými centrami a kultúrnymi podujatiami.",
  //     distance: "15 km",
  //     duration: "20 min",
  //     amenities: ["Nemocnica", "Nákupné centrá", "Kino", "Reštaurácie", "Múzeum Kysúc"],
  //   },
  //   {
  //     name: "Žilina",
  //     description: "Krajské mesto s historickým centrom, univerzitou a širokou ponukou služieb a zábavy.",
  //     distance: "30 km",
  //     duration: "35 min",
  //     amenities: ["Historické centrum", "Nákupné centrá", "Divadlo", "Univerzita", "Aquapark"],
  //   },
  //   {
  //     name: "Ostrava (CZ)",
  //     description: "Veľké české mesto s bohatou priemyselnou históriou a množstvom atrakcií.",
  //     distance: "70 km",
  //     duration: "1 hod 10 min",
  //     amenities: ["Dolní Vítkovice", "ZOO", "Nákupné centrá", "Kultúrne podujatia"],
  //   },
  // ]

  // const seasonalActivities = {
  //   spring: [
  //     "Turistika v prebúdzajúcej sa prírode",
  //     "Cykloturistika po Kysuckej cyklomagistrále",
  //     "Návšteva okolitých hradov a zámkov",
  //     "Pozorovanie vtáctva v okolitých lesoch",
  //   ],
  //   summer: [
  //     "Kúpanie v prírodných jazerách a kúpaliskách",
  //     "Turistika v Malej Fatre a Javorníkoch",
  //     "Bike Park Veľká Rača",
  //     "Splav rieky Kysuca",
  //     "Grilovanie a opekanie v záhrade",
  //   ],
  //   autumn: [
  //     "Zber húb v okolitých lesoch",
  //     "Turistika s výhľadmi na farebnú jesennú krajinu",
  //     "Návšteva Slovenského orloja v Starej Bystrici",
  //     "Ochutnávka lokálnych jesenných špecialít",
  //   ],
  //   winter: [
  //     "Lyžovanie v stredisku Snow Paradise Veľká Rača",
  //     "Bežkovanie po Kysuckej cyklomagistrále",
  //     "Sánkovanie na okolitých kopcoch",
  //     "Relaxácia vo vírivke a saune",
  //   ],
  // }

  return (
    <AnimatedSection id="location" className="py-20 bg-gray-50" animation="fadeIn">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <AnimatedText as="h2" animation="slideUp" className="text-3xl md:text-4xl font-bold mb-4">
            Lokalita a okolie
          </AnimatedText>
          <AnimatedText animation="slideUp" delay={0.2} className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Chalupa u Strýka je situovaná v obci Klubina na severe Slovenska, v okrese Čadca
          </AnimatedText>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <AnimatedElement
            animation="slideLeft"
            delay={0.3}
            className="relative aspect-video rounded-xl overflow-hidden shadow-lg"
          >
            <div className="absolute inset-0 bg-black/5 z-10 pointer-events-none"></div>
            <Image
              src={imgError["/ChalupaUStryka/images/klubina.jpg"] ? "/ChalupaUStryka/placeholder.svg?height=720&width=1280" : "/ChalupaUStryka/images/klubina.jpg"}
              alt="Mapa lokality"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              onError={() => handleImageError("/ChalupaUStryka/images/klubina.jpg")}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-md"
            >
              <div className="flex items-center gap-2 text-primary font-medium">
                <MapPin size={18} className="text-primary" />
                <span>Klubina, Kysuce, Slovensko</span>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="absolute bottom-4 right-4 z-20 flex gap-2"
            >
              <a
                href="https://maps.google.com/?q=Klubina+Slovakia"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white px-3 py-1.5 rounded-md text-sm font-medium flex items-center gap-1 hover:bg-primary/90 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 11h.01" />
                  <path d="M11 15h.01" />
                  <path d="M16 16h.01" />
                  <path d="m2 12 5-3v6z" />
                  <path d="M5 12v4h16v-2a2 2 0 0 0-2-2h-6" />
                  <path d="M9 12V8a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4" />
                </svg>
                Google Maps
              </a>
              <a
                href="https://waze.com/ul?ll=49.3833,18.8667&navigate=yes"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-primary border border-primary px-3 py-1.5 rounded-md text-sm font-medium flex items-center gap-1 hover:bg-primary/10 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2v8" />
                  <path d="m4.93 10.93 1.41 1.41" />
                  <path d="M2 18h2" />
                  <path d="M20 18h2" />
                  <path d="m19.07 10.93-1.41 1.41" />
                  <path d="M22 22H2" />
                  <path d="m8 22 4-10 4 10" />
                </svg>
                Waze
              </a>
            </motion.div>
          </AnimatedElement>

          <AnimatedElement animation="slideRight" delay={0.3} className="flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-white p-6 rounded-xl shadow-md mb-6"
            >
              <motion.h3
                className="text-2xl font-semibold mb-4 flex items-center gap-2 text-primary"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Info size={20} />
                <span>O lokalite</span>
              </motion.h3>
              <p className="text-muted-foreground mb-4">
                Obec Klubina sa nachádza v malebnom prostredí Kysúc, obklopená krásnou prírodou a množstvom turistických
                atrakcií. Je ideálnym východiskovým bodom pre výlety do okolia, či už v lete alebo v zime.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-sm text-muted-foreground mb-2">Nadmorská výška</h4>
                  <p className="font-semibold">485 m n.m.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-sm text-muted-foreground mb-2">Počet obyvateľov</h4>
                  <p className="font-semibold">cca 520</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-sm text-muted-foreground mb-2">Región</h4>
                  <p className="font-semibold">Kysuce, Žilinský kraj</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-sm text-muted-foreground mb-2">Charakter</h4>
                  <p className="font-semibold">Horská dedina</p>
                </div>
              </div>
            </motion.div>

            <ul className="space-y-3">
              <motion.li
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm"
              >
                <motion.div whileHover={{ scale: 1.2, rotate: 5 }} className="mt-1 text-primary">
                  <MapPin size={20} />
                </motion.div>
                <div>
                  <span className="font-medium">Adresa:</span> Klubina, okres Čadca, Žilinský kraj
                </div>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm"
              >
                <motion.div whileHover={{ scale: 1.2, rotate: 5 }} className="mt-1 text-primary">
                  <Car size={20} />
                </motion.div>
                <div>
                  <span className="font-medium">Vzdialenosti:</span> Čadca (15 km), Žilina (30 km), Bratislava (220 km)
                </div>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm"
              >
                <motion.div whileHover={{ scale: 1.2, rotate: 5 }} className="mt-1 text-primary">
                  <Compass size={20} />
                </motion.div>
                <div>
                  <span className="font-medium">Klíma:</span> Mierne podnebie, ideálne pre letné aj zimné aktivity
                </div>
              </motion.li>
            </ul>
          </AnimatedElement>
        </div>


        <AnimatedElement animation="slideUp" delay={0.4} className="mb-12">
          {/* <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full"> */}
            {/* <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 mb-8">
              <motion.div whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 400 }}>
                <TabsTrigger value="attractions" className="text-sm md:text-base">
                  Turistické atrakcie
                </TabsTrigger>
              </motion.div>
              <motion.div whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 400 }}>
                <TabsTrigger value="cities" className="text-sm md:text-base">
                  Mestá v okolí
                </TabsTrigger>
              </motion.div>
              <motion.div whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 400 }}>
                <TabsTrigger value="seasonal" className="text-sm md:text-base">
                  Sezónne aktivity
                </TabsTrigger>
              </motion.div>
            </TabsList> */}

            {/* <TabsContent value="attractions" forceMount> */}
            <AnimatedText as="h3" animation="slideUp" delay={0.3} className="text-2xl font-semibold mb-6 text-center">
                Turistické atrakcie v okolí
              </AnimatedText>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {attractions.map((attraction, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    whileHover={{ y: -10 }}
                  >
                    <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow h-full">
                      <motion.div
                        className="relative h-48"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300, damping: 10 }}
                      >
                        <Image
                          src={imgError[attraction.image] ? "/placeholder.svg?height=400&width=600" : attraction.image}
                          alt={attraction.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                          className="object-cover"
                          onError={() => handleImageError(attraction.image)}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div className="absolute bottom-2 left-2 right-2 flex justify-between items-center">
                          <div className="flex items-center gap-1 text-white text-sm bg-black/40 px-2 py-1 rounded-md backdrop-blur-sm">
                            <Car size={14} />
                            <span>{attraction.distance}</span>
                          </div>
                          <div className="flex items-center gap-1 text-white text-sm bg-black/40 px-2 py-1 rounded-md backdrop-blur-sm">
                            <Clock size={14} />
                            <span>{attraction.duration}</span>
                          </div>
                        </div>
                      </motion.div>
                      <CardContent className="p-4">
                        <motion.h4
                          className="font-semibold text-lg mb-1"
                          whileHover={{ x: 5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          {attraction.title}
                        </motion.h4>
                        <p className="text-sm text-muted-foreground mb-2">{attraction.description}</p>
                        <motion.div className="flex items-center text-sm text-primary" whileHover={{ scale: 1.05 }}>
                          <motion.div whileHover={{ rotate: 10 }} className="mr-1">
                            <Calendar size={16} />
                          </motion.div>
                          <span>{attraction.seasonality}</span>
                        </motion.div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            {/* </TabsContent> */}

            {/* <TabsContent value="cities">
              <AnimatedText as="h3" animation="slideUp" delay={0.3} className="text-2xl font-semibold mb-6 text-center">
                Mestá v okolí
              </AnimatedText>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {cities.map((city, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow h-full">
                      <CardContent className="p-5">
                        <div className="flex justify-between items-center mb-4">
                          <motion.h4
                            className="font-semibold text-xl"
                            whileHover={{ x: 5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            {city.name}
                          </motion.h4>
                          <div className="flex items-center gap-2">
                            <div className="flex items-center gap-1 text-sm text-muted-foreground">
                              <Car size={14} className="text-primary" />
                              <span>{city.distance}</span>
                            </div>
                            <div className="flex items-center gap-1 text-sm text-muted-foreground">
                              <Clock size={14} className="text-primary" />
                              <span>{city.duration}</span>
                            </div>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground mb-4">{city.description}</p>
                        <div className="bg-gray-50 p-3 rounded-lg">
                          <h5 className="text-sm font-medium mb-2 text-primary">Vybavenosť a atrakcie:</h5>
                          <div className="flex flex-wrap gap-2">
                            {city.amenities.map((amenity, i) => (
                              <motion.span
                                key={i}
                                whileHover={{ scale: 1.05 }}
                                className="text-xs bg-white px-2 py-1 rounded-md border border-gray-200"
                              >
                                {amenity}
                              </motion.span>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent> */}

            {/* <TabsContent value="seasonal">
              <AnimatedText as="h3" animation="slideUp" delay={0.3} className="text-2xl font-semibold mb-6 text-center">
                Aktivity podľa sezóny
              </AnimatedText>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    season: "Jar",
                    activities: seasonalActivities.spring,
                    color: "from-green-50 to-green-100",
                    icon: "spring",
                  },
                  {
                    season: "Leto",
                    activities: seasonalActivities.summer,
                    color: "from-yellow-50 to-yellow-100",
                    icon: "summer",
                  },
                  {
                    season: "Jeseň",
                    activities: seasonalActivities.autumn,
                    color: "from-orange-50 to-orange-100",
                    icon: "autumn",
                  },
                  {
                    season: "Zima",
                    activities: seasonalActivities.winter,
                    color: "from-blue-50 to-blue-100",
                    icon: "winter",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <Card
                      className={`overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow h-full bg-gradient-to-br ${item.color}`}
                    >
                      <CardContent className="p-5">
                        <div className="flex items-center gap-3 mb-4">
                          {item.icon === "spring" && (
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
                              className="text-green-600"
                              whileHover={{ rotate: 10, scale: 1.2 }}
                            >
                              <path d="M12 2v8" />
                              <path d="M4.93 10.93 8 14" />
                              <path d="M2 18h12" />
                              <path d="M20 18h2" />
                              <path d="M20 18v-8" />
                              <path d="M16 12.93 19.07 10" />
                            </motion.svg>
                          )}
                          {item.icon === "summer" && (
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
                              className="text-yellow-600"
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
                          {item.icon === "autumn" && (
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
                              className="text-orange-600"
                              whileHover={{ rotate: 10, scale: 1.2 }}
                            >
                              <path d="M2 22 12 2l10 20-10-5-10 5Z" />
                              <path d="M12 17V2" />
                            </motion.svg>
                          )}
                          {item.icon === "winter" && (
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
                              className="text-blue-600"
                              whileHover={{ rotate: 45, scale: 1.2 }}
                            >
                              <path d="M2 12h20" />
                              <path d="M12 2v20" />
                              <path d="m4.93 4.93 14.14 14.14" />
                              <path d="m19.07 4.93-14.14 14.14" />
                            </motion.svg>
                          )}
                          <motion.h4
                            className="font-semibold text-lg"
                            whileHover={{ x: 5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            {item.season}
                          </motion.h4>
                        </div>
                        <ul className="space-y-2">
                          {item.activities.map((activity, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.3, delay: 0.6 + i * 0.1 }}
                              className="flex items-start gap-2"
                            >
                              <div className="h-2 w-2 rounded-full bg-primary mt-2" />
                              <span className="text-sm">{activity}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent> */}
          {/* </Tabs> */}
        </AnimatedElement>

        <AnimatedElement
          animation="slideUp"
          delay={0.5}
          className="bg-white p-6 rounded-xl shadow-md border border-gray-100"
        >
          <div className="flex items-center gap-3 mb-4">
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
            <h3 className="text-xl font-semibold">Užitočné informácie</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-primary mb-3">Doprava a dostupnosť</h4>
              <ul className="space-y-2">
                <motion.li
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.6 }}
                  className="flex items-start gap-2 text-sm"
                >
                  <div className="h-2 w-2 rounded-full bg-primary mt-2" />
                  <span>Autom: Priamo k chalupe vedie asfaltová cesta s možnosťou parkovania</span>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.7 }}
                  className="flex items-start gap-2 text-sm"
                >
                  <div className="h-2 w-2 rounded-full bg-primary mt-2" />
                  <span>Autobusom: Zastávka v obci Klubina, 500 m od chalupy</span>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.8 }}
                  className="flex items-start gap-2 text-sm"
                >
                  <div className="h-2 w-2 rounded-full bg-primary mt-2" />
                  <span>Vlakom: Najbližšia stanica v Čadci (15 km), možnosť objednania taxi</span>
                </motion.li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-primary mb-3">Služby v okolí</h4>
              <ul className="space-y-2">
                <motion.li
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.6 }}
                  className="flex items-start gap-2 text-sm"
                >
                  <div className="h-2 w-2 rounded-full bg-primary mt-2" />
                  <span>Potraviny: Obchod v obci (300 m), supermarkety v Čadci (15 km)</span>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.7 }}
                  className="flex items-start gap-2 text-sm"
                >
                  <div className="h-2 w-2 rounded-full bg-primary mt-2" />
                  <span>Reštaurácie: Miestna reštaurácia (500 m), koliba s tradičnými jedlami (2 km)</span>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.8 }}
                  className="flex items-start gap-2 text-sm"
                >
                  <div className="h-2 w-2 rounded-full bg-primary mt-2" />
                  <span>Zdravotná starostlivosť: Ambulancia v obci, nemocnica v Čadci (15 km)</span>
                </motion.li>
              </ul>
            </div>
          </div>
        </AnimatedElement>
      </div>
    </AnimatedSection>
  )
}
