import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import DynamicHeader from "@/components/dynamic-header"
import Preloader from "@/components/preloader"
import CookieConsent from "@/components/cookie-consent"
// Pridajte import pre Toaster
import { Toaster } from "@/components/ui/toaster"
import { SITE_URL, siteConfig, lodgingJsonLd } from "@/lib/site"

const inter = Inter({ subsets: ["latin", "latin-ext"] })

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name, url: SITE_URL }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: SITE_URL,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  // Overenie v Google Search Console:
  // Ak použijete metódu "HTML značka", vložte sem získaný kód, napr.:
  // verification: { google: "VÁŠ_OVEROVACÍ_KÓD" },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="sk" suppressHydrationWarning>
      <head>
        <link rel="icon" href="https://res.cloudinary.com/djreoxyzu/image/upload/v1753393595/favicon_k53ey2.png" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(lodgingJsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Preloader />
          <DynamicHeader />
          {children}
          <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-4 md:px-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">Chalupa u Strýka</h3>
                  <p className="text-gray-400 mb-4">
                    Komfortné ubytovanie pre 9 osôb v malebnej obci Klubina na severe Slovenska.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4">Kontakt</h3>
                  <ul className="space-y-2 text-gray-400">
                    <li className="flex items-start gap-2">
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
                        className="mt-1"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                      <span>+421 918 326 431</span>
                    </li>
                    <li className="flex items-start gap-2">
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
                        className="mt-1"
                      >
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                      <span>chalupaustryka@gmail.com</span>
                    </li>
                    <li className="flex items-start gap-2">
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
                        className="mt-1"
                      >
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      <span>Chalupa u Strýka, Klubina, 023 04 Klubina</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4">Rýchle odkazy</h3>
                  <ul className="space-y-2 text-gray-400">
                    <li>
                      <a href="#" className="hover:text-white">
                        Domov
                      </a>
                    </li>
                    <li>
                      <a href="#features" className="hover:text-white">
                        Vybavenie
                      </a>
                    </li>
                    <li>
                      <a href="#interior" className="hover:text-white">
                        Interiér
                      </a>
                    </li>
                    <li>
                      <a href="#exterior" className="hover:text-white">
                        Exteriér
                      </a>
                    </li>
                    <li>
                      <a href="#location" className="hover:text-white">
                        Lokalita
                      </a>
                    </li>
                    <li>
                      <a href="#contact" className="hover:text-white">
                        Kontakt
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
                <p>&copy; {new Date().getFullYear()} Chalupa u Strýka. Všetky práva vyhradené.</p>
                <p className="mt-2">
                  Ubytovanie{" "}
                  <a
                    href="https://www.megaubytovanie.sk/chalupa-u-stryka?mu_email=eyJtIjoiNW0xNHIiLCJjIjoiYzNkOGEzYjktZWE5Mi00NzM3LTlkNmEtMjljMTIzZTdlYzk3In0"
                    className="text-gray-300 hover:text-white underline"
                  >
                    Chalupa u Strýka
                  </a>{" "}
                  víta hostí z portálu{" "}
                  <a
                    href="https://www.megaubytovanie.sk/?mu_email=eyJtIjoiNW0xNHIiLCJjIjoiYzNkOGEzYjktZWE5Mi00NzM3LTlkNmEtMjljMTIzZTdlYzk3In0"
                    className="text-gray-300 hover:text-white underline"
                  >
                    MegaUbytovanie.sk
                  </a>{" "}
                  už od decembra 2024.
                </p>
              </div>
            </div>
          </footer>
          <Toaster />
          <CookieConsent />
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'