"use client"

import { useEffect } from "react"
import { useLocation } from "react-router-dom"

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    // Use requestAnimationFrame for smoother scrolling
    window.requestAnimationFrame(() => {
      window.scrollTo({
        top: 0,
        behavior: "instant", // Use "instant" instead of "smooth" to avoid conflicts with page transitions
      })
    })
  }, [pathname])

  return null
}

export default ScrollToTop

