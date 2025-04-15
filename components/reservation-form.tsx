"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { toast } from "@/components/ui/use-toast"
import { Loader2 } from "lucide-react"

type FormData = {
  name: string
  email: string
  phone: string
  guests: string
  arrival: string
  departure: string
  message: string
}

type FormErrors = {
  [key in keyof FormData]?: string
}

export default function ReservationForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    guests: "",
    arrival: "",
    departure: "",
    message: "",
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validateForm = () => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = "Meno je povinné"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email je povinný"
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Neplatný email"
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Telefón je povinný"
    }

    if (!formData.guests) {
      newErrors.guests = "Vyberte počet osôb"
    }

    if (!formData.arrival) {
      newErrors.arrival = "Dátum príchodu je povinný"
    }

    if (!formData.departure) {
      newErrors.departure = "Dátum odchodu je povinný"
    } else if (formData.arrival && new Date(formData.departure) <= new Date(formData.arrival)) {
      newErrors.departure = "Dátum odchodu musí byť po dátume príchodu"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error when field is edited
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (validateForm()) {
      setIsSubmitting(true)

      // Simulácia odoslania formulára
      setTimeout(() => {
        setIsSubmitting(false)
        toast({
          title: "Rezervácia odoslaná",
          description: "Vaša rezervácia bola úspešne odoslaná. Budeme vás kontaktovať čo najskôr.",
        })

        // Reset formulára
        setFormData({
          name: "",
          email: "",
          phone: "",
          guests: "",
          arrival: "",
          departure: "",
          message: "",
        })
      }, 1500)
    }
  }

  return (
    <motion.form
      className="space-y-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.8 }}
      onSubmit={handleSubmit}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <motion.div whileHover={{ y: -3 }} transition={{ type: "spring", stiffness: 300 }}>
          <label htmlFor="name" className="block text-sm font-medium mb-1">
            Meno a priezvisko *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-3 py-2 border ${
              errors.name ? "border-red-500" : "border-gray-300"
            } rounded-md focus:outline-none focus:ring-2 focus:ring-primary`}
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
        </motion.div>
        <motion.div whileHover={{ y: -3 }} transition={{ type: "spring", stiffness: 300 }}>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-3 py-2 border ${
              errors.email ? "border-red-500" : "border-gray-300"
            } rounded-md focus:outline-none focus:ring-2 focus:ring-primary`}
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </motion.div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <motion.div whileHover={{ y: -3 }} transition={{ type: "spring", stiffness: 300 }}>
          <label htmlFor="phone" className="block text-sm font-medium mb-1">
            Telefón *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`w-full px-3 py-2 border ${
              errors.phone ? "border-red-500" : "border-gray-300"
            } rounded-md focus:outline-none focus:ring-2 focus:ring-primary`}
          />
          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
        </motion.div>
        <motion.div whileHover={{ y: -3 }} transition={{ type: "spring", stiffness: 300 }}>
          <label htmlFor="guests" className="block text-sm font-medium mb-1">
            Počet osôb *
          </label>
          <select
            id="guests"
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            className={`w-full px-3 py-2 border ${
              errors.guests ? "border-red-500" : "border-gray-300"
            } rounded-md focus:outline-none focus:ring-2 focus:ring-primary`}
          >
            <option value="">Vyberte počet</option>
            <option value="1">1 osoba</option>
            <option value="2">2 osoby</option>
            <option value="3">3 osoby</option>
            <option value="4">4 osoby</option>
            <option value="5">5 osôb</option>
            <option value="6">6 osôb</option>
            <option value="7">7 osôb</option>
            <option value="8">8 osôb</option>
            <option value="9">9 osôb</option>
          </select>
          {errors.guests && <p className="text-red-500 text-xs mt-1">{errors.guests}</p>}
        </motion.div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <motion.div whileHover={{ y: -3 }} transition={{ type: "spring", stiffness: 300 }}>
          <label htmlFor="arrival" className="block text-sm font-medium mb-1">
            Dátum príchodu *
          </label>
          <input
            type="date"
            id="arrival"
            name="arrival"
            value={formData.arrival}
            onChange={handleChange}
            min={new Date().toISOString().split("T")[0]}
            className={`w-full px-3 py-2 border ${
              errors.arrival ? "border-red-500" : "border-gray-300"
            } rounded-md focus:outline-none focus:ring-2 focus:ring-primary`}
          />
          {errors.arrival && <p className="text-red-500 text-xs mt-1">{errors.arrival}</p>}
        </motion.div>
        <motion.div whileHover={{ y: -3 }} transition={{ type: "spring", stiffness: 300 }}>
          <label htmlFor="departure" className="block text-sm font-medium mb-1">
            Dátum odchodu *
          </label>
          <input
            type="date"
            id="departure"
            name="departure"
            value={formData.departure}
            onChange={handleChange}
            min={formData.arrival || new Date().toISOString().split("T")[0]}
            className={`w-full px-3 py-2 border ${
              errors.departure ? "border-red-500" : "border-gray-300"
            } rounded-md focus:outline-none focus:ring-2 focus:ring-primary`}
          />
          {errors.departure && <p className="text-red-500 text-xs mt-1">{errors.departure}</p>}
        </motion.div>
      </div>
      <motion.div whileHover={{ y: -3 }} transition={{ type: "spring", stiffness: 300 }}>
        <label htmlFor="message" className="block text-sm font-medium mb-1">
          Správa
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
        ></textarea>
      </motion.div>
      <Button type="submit" className="w-full md:w-auto" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Odosielam...
          </>
        ) : (
          "Odoslať rezerváciu"
        )}
      </Button>
      <p className="text-xs text-muted-foreground mt-2">* Povinné polia</p>
    </motion.form>
  )
}
