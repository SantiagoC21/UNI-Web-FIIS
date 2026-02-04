import React from "react"
import type { Metadata } from "next"
import { Roboto, Roboto_Condensed } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import "./globals.css"

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"] });
const robotoCondensed = Roboto_Condensed({ subsets: ["latin"], weight: ["700"] });

export const metadata: Metadata = {
  title: 'FIIS - UNI | Facultad de Ingeniería Industrial, de Sistemas y de Software',
  description: 'Universidad Nacional de Ingeniería - Facultad de Ingeniería Industrial, de Sistemas y de Software',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`font-sans antialiased`}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1 bg-white">
            {children}
          </main>
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  )
}