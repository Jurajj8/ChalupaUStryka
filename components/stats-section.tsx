"use client"

import { motion } from "framer-motion"
import AnimatedSection from "./animated-section"
import AnimatedText from "./animated-text"
import AnimatedCounter from "./animated-counter"
import { Users, Home, Star, Calendar } from "lucide-react"

export default function StatsSection() {
  const stats = [
    {
      value: 9,
      label: "Maximálna kapacita",
      icon: <Users className="h-8 w-8 text-primary" />,
      suffix: " osôb",
    },
    {
      value: 365,
      label: "Dní v roku k dispozícii",
      icon: <Calendar className="h-8 w-8 text-primary" />,
      suffix: " dní",
    },
    {
      value: 4.9,
      label: "Priemerné hodnotenie",
      icon: <Star className="h-8 w-8 text-primary" />,
      suffix: "/5",
      decimals: 1,
    },
    {
      value: 2021,
      label: "Rok založenia",
      icon: <Home className="h-8 w-8 text-primary" />,
    },
  ]

  return (
    <AnimatedSection className="py-16 bg-gray-50" animation="fadeIn">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <AnimatedText as="h2" animation="slideUp" className="text-3xl md:text-4xl font-bold mb-4">
            Chalupa u Strýka v číslach
          </AnimatedText>
          <AnimatedText animation="slideUp" delay={0.2} className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Už niekoľko rokov poskytujeme kvalitné ubytovanie a nezabudnuteľné zážitky
          </AnimatedText>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white p-6 rounded-xl shadow-md text-center"
            >
              <motion.div
                className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                {stat.icon}
              </motion.div>
              <h3 className="text-3xl font-bold mb-2 leading-snug">
                <div>
                  {stat.decimals ? stat.value.toFixed(stat.decimals) : stat.value}
                  {stat.suffix || ""}
                </div>
              </h3>

              <p className="text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
