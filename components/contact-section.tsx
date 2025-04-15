"use client"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import AnimatedSection from "./animated-section"
import AnimatedElement from "./animated-element"
import AnimatedText from "./animated-text"
import ReservationForm from "./reservation-form"

export default function ContactSection() {
  return (
    <AnimatedSection id="contact" className="py-20 bg-white" animation="fadeIn">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <AnimatedText as="h2" animation="slideUp" className="text-3xl md:text-4xl font-bold mb-4">
            Rezervujte si pobyt
          </AnimatedText>
          <AnimatedText animation="slideUp" delay={0.2} className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Kontaktujte nás a rezervujte si nezabudnuteľný pobyt v Chalupe u Strýka
          </AnimatedText>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Telefón",
              description: "Zavolajte nám a dohodnite si rezerváciu",
              contact: "+421 900 000 000",
              href: "tel:+421900000000",
              icon: (
                <svg
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
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              ),
            },
            {
              title: "Email",
              description: "Napíšte nám a my vám odpovieme čo najskôr",
              contact: "info@chalupaustryka.sk",
              href: "mailto:info@chalupaustryka.sk",
              icon: (
                <svg
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
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              ),
            },
            {
              title: "Adresa",
              description: "Navštívte nás osobne",
              contact: (
                <>
                  Chalupa u Strýka
                  <br />
                  Klubina
                  <br />
                  023 04 Čadca
                </>
              ),
              icon: (
                <svg
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
                >
                  <path d="M21 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="13" cy="10" r="3" />
                </svg>
              ),
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <Card className="border-none shadow-md h-full">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <motion.div
                      className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      {item.icon}
                    </motion.div>
                    <motion.h3 className="text-xl font-semibold mb-2" whileHover={{ scale: 1.05 }}>
                      {item.title}
                    </motion.h3>
                    <p className="text-muted-foreground mb-4">{item.description}</p>
                    {typeof item.contact === "string" ? (
                      <motion.a
                        href={item.href}
                        className="text-primary font-medium hover:underline"
                        whileHover={{ scale: 1.05 }}
                      >
                        {item.contact}
                      </motion.a>
                    ) : (
                      <address className="not-italic text-primary font-medium">{item.contact}</address>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <AnimatedElement animation="slideUp" delay={0.5} className="mt-16 bg-gray-50 rounded-xl p-8 md:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <AnimatedElement animation="slideLeft" delay={0.6} className="flex flex-col justify-center">
              <AnimatedText as="h3" animation="slideLeft" delay={0.6} className="text-2xl font-semibold mb-4">
                Rezervačný formulár
              </AnimatedText>
              <AnimatedText animation="slideLeft" delay={0.7} className="text-muted-foreground mb-6">
                Vyplňte formulár a my vás budeme kontaktovať ohľadom dostupnosti a ďalších detailov.
              </AnimatedText>
              <ReservationForm />
            </AnimatedElement>
            <AnimatedElement animation="slideRight" delay={0.6} className="flex flex-col justify-center">
              <AnimatedText as="h3" animation="slideRight" delay={0.7} className="text-2xl font-semibold mb-4">
                Cenník
              </AnimatedText>
              <div className="space-y-4">
                {[
                  { season: "Hlavná sezóna (júl - august)", price: "200 € / noc" },
                  { season: "Zimná sezóna (december - marec)", price: "180 € / noc" },
                  { season: "Mimo sezóny", price: "150 € / noc" },
                  { season: "Víkendový pobyt (min. 2 noci)", price: "od 160 € / noc" },
                  { season: "Týždenný pobyt", price: "od 140 € / noc" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="flex justify-between items-center pb-2 border-b border-gray-200"
                  >
                    <span className="font-medium">{item.season}</span>
                    <span className="font-semibold">{item.price}</span>
                  </motion.div>
                ))}
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1.3 }}
                whileHover={{ y: -5 }}
                className="mt-6 p-4 bg-primary/10 rounded-lg"
              >
                <h4 className="font-semibold mb-2">Poznámka:</h4>
                <ul className="space-y-1 text-sm">
                  <motion.li whileHover={{ x: 3 }}>• Ceny sú uvedené za celý objekt pre max. 9 osôb</motion.li>
                  <motion.li whileHover={{ x: 3 }}>• Minimálna dĺžka pobytu: 2 noci</motion.li>
                  <motion.li whileHover={{ x: 3 }}>• Záloha: 50% z celkovej ceny pobytu</motion.li>
                  <motion.li whileHover={{ x: 3 }}>• Vratná kaucia: 200 €</motion.li>
                </ul>
              </motion.div>
            </AnimatedElement>
          </div>
        </AnimatedElement>
      </div>
    </AnimatedSection>
  )
}
