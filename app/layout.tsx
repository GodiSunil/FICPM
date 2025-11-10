"use client"

import React, { useState, useEffect } from "react"
import { Inter, Space_Grotesk, Roboto_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

// Load Inter as primary font
const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: 'swap',
  adjustFontFallback: false,
})

// Load Space Grotesk for headings
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
  display: 'swap',
  adjustFontFallback: false,
})

// Load Roboto Mono as fallback for code/monospace
const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: 'swap',
  adjustFontFallback: false,
})

// Create a client component wrapper to handle client-side features
function ClientLayout({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    // Don't render anything on the server
    return null
  }

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <style jsx global>{`
          :root {
            --font-sans: ${inter.style.fontFamily};
            --font-heading: ${spaceGrotesk.style.fontFamily};
            --font-mono: ${robotoMono.style.fontFamily};
          }
          
          h1, h2, h3, h4, h5, h6 {
            font-family: var(--font-heading);
            font-weight: 700;
            line-height: 1.2;
            letter-spacing: -0.02em;
          }
          
          body {
            font-family: var(--font-sans);
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            text-rendering: optimizeLegibility;
          }
          
          code, pre, kbd, samp {
            font-family: var(--font-mono);
          }
        `}</style>
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${robotoMono.variable} font-sans antialiased text-foreground bg-background`}>
        <Header />
        <main className="pt-20">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // This is a workaround for the "use client" directive in the root layout
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    // Return a simple layout for the initial server render
    return (
      <html lang="en">
        <body className={`${inter.variable} ${spaceGrotesk.variable} ${robotoMono.variable} font-sans antialiased text-foreground bg-background`}>
          <Header />
          <main className="pt-20">{children}</main>
          <Footer />
          <Analytics />
        </body>
      </html>
    );
  }

  return <ClientLayout>{children}</ClientLayout>;
}
