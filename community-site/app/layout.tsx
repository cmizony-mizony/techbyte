import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"

export const metadata: Metadata = {
  title: "TechByte Community - The Road to Big Tech, One Byte at a Time",
  description:
    "Join TechByte, a vibrant community where tech and AI engineers connect, learn through AI Cards, and grow professionally. Your hub for cutting-edge tech insights and professional growth.",
  generator: "v0.app",
  keywords:
    "tech community, AI engineers, professional growth, knowledge sharing, AI Cards, mentorship, big tech careers",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}
