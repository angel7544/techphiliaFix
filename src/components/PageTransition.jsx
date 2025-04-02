"use client"

import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

const PageTransition = ({ children }) => {
  const location = useLocation()
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    // Start animation when location changes
    setIsAnimating(true)

    // Reset animation state after animation completes
    const timer = setTimeout(() => {
      setIsAnimating(false)
    }, 500) // Match this with your CSS animation duration

    return () => clearTimeout(timer)
  }, [location.pathname])

  return <div className={`page-transition ${isAnimating ? "animate-fade" : ""}`}>{children}</div>
}

export default PageTransition

