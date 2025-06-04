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
      image: "https://res.cloudinary.com/djreoxyzu/image/upload/f_auto,q_auto/v1748983935/velka-raca_dy4t2s.webp",
    },
    {
      title: "Kysucká cyklomagistrála",
      description: "Cyklotrasa vedúca priamo cez obec, v zime možnosť bežkovania.",
      seasonality: "Celoročne",
      image: "https://res.cloudinary.com/djreoxyzu/image/upload/f_auto,q_auto/v1748983932/cyklomagistrala_l1yamd.webp",
    },
    {
      title: "Slovenský orloj v Starej Bystrici",
      description: "Unikátny drevený orloj, jediný svojho druhu na Slovensku.",
      distance: "4 km",
      duration: "4 min",
      seasonality: "Celoročne",
      image: "https://res.cloudinary.com/djreoxyzu/image/upload/f_auto,q_auto/v1748983933/orloj_ji4xtn.webp",
    },
    {
      title: "Malá Fatra",
      description: "Nádherné hory s možnosťou turistiky, výstupy na Malý a Veľký Rozsutec, Jánošíkove diery.",
      distance: "26 km",
      duration: "30 min",
      seasonality: "Celoročne (v zime lyžovanie)",
      image: "https://res.cloudinary.com/djreoxyzu/image/upload/f_auto,q_auto/v1748983933/mala-fatra_atubc7.webp",
    },
    {
      title: "Vychylovka – múzeum Kysuckej dediny s lesnou železnicou",
      description: "Múzeum kysuckej dediny je skanzen nachádzajúci sa neďaleko Novej Bystrice, v jej časti Vychylovka v údolí Chmúra, ktorá je súčasťou chránenej krajinnej oblasti Kysuce.",
      distance: "17 km",
      duration: "19 min",
      seasonality: "Celoročne",
      image: "https://res.cloudinary.com/djreoxyzu/image/upload/f_auto,q_auto/v1748983935/vychylovka_sc9dmb.webp",
    },
    {
      title: "Kysucká hvezdáreň v Kysuckom Novom Meste",
      description: "Pre návštevníkov ponúka sprostredkovanie najnovších objavov a poznatkov prostredníctvom prednášok, výstav, astrotýždňa s možnosťou priamej účasti sa na pozorovaní vesmírnych úkazov a objektov.",
      distance: "23 km",
      duration: "27 min",
      seasonality: "Celoročne",
      image: "https://res.cloudinary.com/djreoxyzu/image/upload/f_auto,q_auto/v1748983934/hvezdaren_uk89cq.webp",
    },
    {
      title: "Lanový Park Dino Adventure",
      description: "Obrie modely pravekých dinosaurov spolu s rôznorodými detskými lezeckými prekážkami. Na náučnom chodníku sa Vaši najmenší dozvedia zaujímavé informácie o vystavených dinosauroch.",
      distance: "24 km",
      duration: "26 min",
      seasonality: "Celoročne",
      image: "https://res.cloudinary.com/djreoxyzu/image/upload/f_auto,q_auto/v1748983934/dino_nh8evm.webp",
    },
    {
      title: "Hoplandia Žilina",
      description: "Jediné nafukovacie centrum na Slovensku tohto druhu.",
      distance: "25 km",
      duration: "28 min",
      seasonality: "Celoročne",
      image: "https://res.cloudinary.com/djreoxyzu/image/upload/f_auto,q_auto/v1748983938/hoplandia_rc7iha.webp",
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
                href="https://www.google.com/maps/place/Chalupa+u+Str%C3%BDka/@49.3538678,18.8951198,17z/data=!4m16!1m9!3m8!1s0x4714451607843951:0xa63fb2bc7729a684!2sChalupa+u+Str%C3%BDka!8m2!3d49.3538643!4d18.8976947!9m1!1b1!16s%2Fg%2F11pyzgcdqw!3m5!1s0x4714451607843951:0xa63fb2bc7729a684!8m2!3d49.3538643!4d18.8976947!16s%2Fg%2F11pyzgcdqw?entry=ttu&g_ep=EgoyMDI1MDUwNy4wIKXMDSoASAFQAw%3D%3D"
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
                href="https://ul.waze.com/ul?place=ChIJUTmEBxZFFEcRhKYpd7yyP6Y&ll=49.35386430%2C18.89769470&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location"
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


        <AnimatedElement className="mb-12">
          <AnimatedText as="h3" className="text-2xl font-semibold mb-6 text-center">
            Turistické atrakcie v okolí
          </AnimatedText>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {attractions.map((attraction, index) => (
              <div key={index}>
                <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow h-full">
                  <div className="relative h-48">
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
                  </div>
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-lg mb-1">
                      {attraction.title}
                    </h4>
                    <p className="text-sm text-muted-foreground mb-2">{attraction.description}</p>
                    <div className="flex items-center text-sm text-primary">
                      <div className="mr-1">
                        <Calendar size={16} />
                      </div>
                      <span>{attraction.seasonality}</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
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
                  <span>Autobusom: Zastávka v obci Klubina, 100 m od chalupy</span>
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
                  <span>Potraviny: Obchod v obci (250 m), Tesco v Krásne nad Kysucou (8 km), Kaufland v Čadci (15km) </span>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.7 }}
                  className="flex items-start gap-2 text-sm"
                >
                  <div className="h-2 w-2 rounded-full bg-primary mt-2" />
                  <span>Reštaurácie: Stará Bystrica (4 km), Zborov nad Bystricou (4 km)</span>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.8 }}
                  className="flex items-start gap-2 text-sm"
                >
                  <div className="h-2 w-2 rounded-full bg-primary mt-2" />
                  <span>Zdravotná starostlivosť: Nemocnica v Čadci (15 km)</span>
                </motion.li>
              </ul>
            </div>
          </div>
        </AnimatedElement>
      </div>
    </AnimatedSection>
  )
}
