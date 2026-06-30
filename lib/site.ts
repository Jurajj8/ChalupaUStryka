// Centrálna konfigurácia webu – používa sa v metadátach (layout.tsx),
// v sitemape (app/sitemap.ts), robots (app/robots.ts) a v štruktúrovaných
// dátach (JSON-LD). Údaje meňte na jednom mieste.

export const SITE_URL = "https://chalupaustryka.sk"

export const siteConfig = {
  name: "Chalupa u Strýka",
  url: SITE_URL,
  title: "Chalupa u Strýka – Komfortné ubytovanie v Klubine na Kysuciach",
  description:
    "Celoročné ubytovanie pre 9 osôb v malebnej obci Klubina na severe Slovenska. 3 spálne, 2 kúpeľne, infra sauna, kúpacia kaďa, v lete bazén, detské ihrisko a bezplatné WiFi.",
  // Cloudinary náhľadový obrázok pre zdieľanie (1200×630) – odporúčaný rozmer pre OG.
  ogImage:
    "https://res.cloudinary.com/djreoxyzu/image/upload/w_1200,h_630,c_fill,g_auto,f_jpg,q_auto/v1753392126/landing_dh6bml.jpg",
  locale: "sk_SK",
  keywords: [
    "chalupa Klubina",
    "ubytovanie Klubina",
    "chata Kysuce",
    "chalupa na prenájom",
    "ubytovanie Čadca",
    "chata so saunou",
    "ubytovanie severné Slovensko",
    "chalupa pre rodiny",
    "chata s bazénom Kysuce",
    "Chalupa u Strýka",
  ],
  contact: {
    phone: "+421918326431",
    phoneDisplay: "+421 918 326 431",
    email: "chalupaustryka@gmail.com",
  },
  address: {
    locality: "Klubina",
    postalCode: "023 04",
    region: "Žilinský kraj",
    country: "SK",
  },
  // Presná poloha chalupy (zhodná s pinom Google Business Profilu).
  geo: {
    latitude: 49.3538643,
    longitude: 18.8976947,
  },
  // Google Business Profile (Mapy) – prepája web s firmou v Mapách.
  googleMapsUrl: "https://www.google.com/maps?cid=11979490056351622788",
} as const

// Štruktúrované dáta (JSON-LD) typu LodgingBusiness pre Google rich results.
export const lodgingJsonLd = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  image: [siteConfig.ogImage],
  hasMap: siteConfig.googleMapsUrl,
  sameAs: [siteConfig.googleMapsUrl],
  telephone: siteConfig.contact.phone,
  email: siteConfig.contact.email,
  priceRange: "€€",
  petsAllowed: true,
  numberOfRooms: 3,
  maximumAttendeeCapacity: 9,
  currenciesAccepted: "EUR",
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address.locality,
    addressLocality: siteConfig.address.locality,
    postalCode: siteConfig.address.postalCode,
    addressRegion: siteConfig.address.region,
    addressCountry: siteConfig.address.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: siteConfig.geo.latitude,
    longitude: siteConfig.geo.longitude,
  },
  amenityFeature: [
    "Plne vybavená kuchyňa",
    "Infra sauna",
    "Kúpacia kaďa s hydromasážnymi tryskami",
    "Vonkajší bazén (v lete)",
    "Detské ihrisko",
    "Bezplatné WiFi",
    "Satelitná TV (SkyLink)",
    "Parkovanie zdarma",
    "Blízkosť cyklotrasy",
  ].map((name) => ({
    "@type": "LocationFeatureSpecification",
    name,
    value: true,
  })),
} as const
