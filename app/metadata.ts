import { Metadata } from "next"

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
