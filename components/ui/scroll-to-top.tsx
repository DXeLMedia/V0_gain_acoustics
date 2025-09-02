"use client"

import { useEffect, useState } from "react"
import { ArrowUp } from "lucide-react"

import { Button } from "@/components/ui/button"

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)

    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isVisible && (
        <Button
          onClick={scrollToTop}
          className="btn-primary h-12 w-12 rounded-full"
        >
          <ArrowUp className="h-6 w-6" />
        </Button>
      )}
    </div>
  )
}
