"use client"

import { useState, useEffect } from "react"

const CountdownTimer = ({ unit }) => {
  const targetDate = new Date("April 21, 2025 00:00:00").getTime()
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime()
      const distance = targetDate - now

      if (distance < 0) {
        clearInterval(interval)
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        return
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24))
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((distance % (1000 * 60)) / 1000)

      setTimeLeft({ days, hours, minutes, seconds })
    }, 1000)

    return () => clearInterval(interval)
  }, [targetDate])

  const getValue = () => {
    switch (unit) {
      case "days":
        return timeLeft.days
      case "hours":
        return timeLeft.hours
      case "minutes":
        return timeLeft.minutes
      case "seconds":
        return timeLeft.seconds
      default:
        return timeLeft.days
    }
  }

  return (
    <div className="relative group">
      <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-yellow-500 rounded-xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
      <div className="relative bg-white dark:bg-gray-800 rounded-xl p-4 md:p-6 text-center border border-green-100 dark:border-green-900/30 hover:border-green-200 dark:hover:border-green-800 transition-all duration-300">
        <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-500 to-yellow-500 bg-clip-text text-transparent mb-2">
          {getValue()}
        </div>
        <div className="text-sm text-gray-600 dark:text-gray-400 font-medium capitalize">
          {unit}
        </div>
      </div>
    </div>
  )
}

export default CountdownTimer

