"use client"

import { ChevronUp } from "lucide-react"

export const ScrollToTop = () => {
  return (
    <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth"})} className="fixed flex items-center justify-center p-2 bg-yellow-600 shadow-lg cursor-pointer hover:bg-yellow-800 bottom-4 right-4">
      <ChevronUp className="text-white" />
    </button>
  )
}
