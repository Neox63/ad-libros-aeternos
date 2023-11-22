import { JetBrains_Mono as FontMono, Inter as FontSans, Coming_Soon } from "next/font/google"

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
  weight: "400",
})