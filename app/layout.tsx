import type React from "react"
import type { Metadata } from "next"
import { Inter, Montserrat, Quicksand } from "next/font/google"
import "./globals.css"

const quicksand = Quicksand({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-quicksand",
})

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["400", "600", "700", "900"],
})

export const metadata: Metadata = {
  title: "Kruthi Narayana Swamy - VLSI Engineer Portfolio",
  description:
    "Portfolio of  Kruthi Narayana Swamy, VLSI Design Engineer specializing in digital circuit design and verification",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable} ${quicksand.variable} antialiased`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
