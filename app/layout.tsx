import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "FICPM - Federation of Indian Compostable Products Manufacturers",
  description:
    "Leading India's transition to sustainable compostable products. Uniting manufacturers, promoting innovation, and championing environmental responsibility.",
  generator: "v0.app",
  keywords: ["FICPM", "compostable products", "sustainable manufacturing", "India", "eco-friendly", "biodegradable"],
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${poppins.variable} font-sans antialiased`}>
        <Header />
        <main className="pt-20">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
