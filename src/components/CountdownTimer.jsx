"use client"

import { useState, useEffect } from "react"

const CountdownTimer = () => {
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

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-100">
      <h3 className="text-xl font-semibold text-primary mb-4 text-center">Event Starts In</h3>
      <div className="grid grid-cols-4 gap-2 md:gap-4">
        <div className="flex flex-col items-center">
          <div className="bg-primary text-white text-2xl md:text-4xl font-bold rounded-lg w-full py-3 md:py-5 text-center">
            {timeLeft.days}
          </div>
          <span className="text-sm md:text-base mt-2 text-gray-600">Days</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-primary text-white text-2xl md:text-4xl font-bold rounded-lg w-full py-3 md:py-5 text-center">
            {timeLeft.hours}
          </div>
          <span className="text-sm md:text-base mt-2 text-gray-600">Hours</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-primary text-white text-2xl md:text-4xl font-bold rounded-lg w-full py-3 md:py-5 text-center">
            {timeLeft.minutes}
          </div>
          <span className="text-sm md:text-base mt-2 text-gray-600">Minutes</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-primary text-white text-2xl md:text-4xl font-bold rounded-lg w-full py-3 md:py-5 text-center">
            {timeLeft.seconds}
          </div>
          <span className="text-sm md:text-base mt-2 text-gray-600">Seconds</span>
        </div>
      </div>
      <div className="text-center mt-4 text-gray-600">
        <p>April 21, 2025</p>
      </div>
    </div>
  )
}

export default CountdownTimer

