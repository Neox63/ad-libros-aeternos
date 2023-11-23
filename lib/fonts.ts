import { JetBrains_Mono as FontMono, Inter as FontSans, Coming_Soon, Caveat, Bellota } from "next/font/google"

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const fontComing = Coming_Soon({
  subsets: ["latin"],
  variable: "--font-coming",
  weight: ["400"],
})

export const fontCaveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  weight: ["400", "500", "600", "700"],
})

export const fontBellota = Bellota({
  subsets: ["latin"],
  variable: "--font-bellota",
  weight: ["400", "700"],
})