"use client"

import { useEffect, useRef, useState } from "react"

export const Counter = ({ end, duration = 2000, suffix = "", prefix = "" }) => {
  const [count, setCount] = useState(0)
  const countRef = useRef(null)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          animateCounter()
        }
      },
      { threshold: 0.1 },
    )

    const currentRef = countRef.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [end, duration, hasAnimated])

  const animateCounter = () => {
    const startTime = Date.now()
    const endTime = startTime + duration

    const updateCounter = () => {
      const now = Date.now()
      const remaining = Math.max(endTime - now, 0)
      const progress = 1 - remaining / duration

      // Use easeOutQuad for smoother animation
      const easedProgress = -progress * (progress - 2)

      // For numbers with decimals, keep 1 decimal place
      // For whole numbers, round to integers
      const currentCount = Number.isInteger(end)
        ? Math.round(easedProgress * end)
        : Number.parseFloat((easedProgress * end).toFixed(1))

      setCount(currentCount)

      if (now < endTime) {
        requestAnimationFrame(updateCounter)
      } else {
        setCount(end)
      }
    }

    requestAnimationFrame(updateCounter)
  }

  // Format the number with commas for thousands
  const formattedCount = count.toLocaleString()

  return (
    <div ref={countRef} className="counter-animation">
      {prefix}
      {formattedCount}
      {suffix}
    </div>
  )
}
