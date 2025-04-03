"use client"

import { Link } from "react-router-dom"
import CountdownTimer from "../components/CountdownTimer"
import PartnersMarquee from "../components/PartnersMarquee"
import SEO from "../components/SEO"
import StructuredData from "../components/StructuredData"
import { useEffect } from "react"

const Home = () => {
  useEffect(() => {
    const style = document.createElement("style")
    style.textContent = `
      @keyframes marquee {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      
      .animate-marquee {
        animation: marquee 90s linear infinite;
        display: flex;
        width: max-content;
      }
      
      .section-title {
        position: relative;
        display: inline-block;
        padding-bottom: 0.5rem;
        margin-bottom: 2rem;
        color: var(--tw-text-opacity);
      }

      .section-title::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 60px;
        height: 3px;
        background: linear-gradient(to right, #eab308, #22c55e);
        border-radius: 2px;
      }

      .premium-card {
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.2);
        transition: all 0.3s ease;
      }

      .dark .premium-card {
        background: rgba(30, 41, 59, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.1);
      }

      .premium-button {
        background: linear-gradient(135deg, #22c55e, #eab308);
        color: white;
        padding: 0.75rem 2rem;
        border-radius: 9999px;
        font-weight: 600;
        transition: all 0.3s ease;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
      }

      .premium-button:hover {
        transform: translateY(-2px);
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
      }
    `
    document.head.appendChild(style)
    return () => document.head.removeChild(style)
  }, [])

  const eventStructuredData = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "Techphilia 8.0",
    description: "Annual Technical Festival of Amity University Patna. This website developed by Ayush, Aman Verma and Shubham Choudhary",
    startDate: "2025-04-19T09:00:00+05:30",
    endDate: "2025-04-22T18:00:00+05:30",
    location: {
      "@type": "Place",
      name: "Amity University Patna",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Rupaspur",
        addressLocality: "Patna",
        addressRegion: "Bihar",
        postalCode: "800001",
        addressCountry: "IN",
      },
    },
    image: ["https://aiitpevent.in/logo.png"],
    offers: {
      "@type": "Offer",
      url: "https://aiitpevent.in/events",
      price: "0",
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
    },
    organizer: {
      "@type": "Organization",
      name: "Amity University Patna",
      url: "https://amity.edu/patna/",
    },
  }

  return (
    <>
      <SEO
        title="Home"
        description="Techphilia 8.0 - The Annual Technical Extravaganza at Amity University Patna. This website developed by Ayush, Aman Verma and Shubham Choudhary"
        url="/"
      />
      <StructuredData data={eventStructuredData} />
      <div className="overflow-x-hidden">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background Image with Overlay */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('https://example.com/event-bg.jpg')",
              filter: "brightness(0.7)",
            }}
          >
            {/* Animated Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50 animate-gradient"></div>
            
            {/* Animated Grid Pattern */}
            <div className="absolute inset-0 bg-grid-pattern opacity-10 animate-pulse-slow"></div>
          </div>

          {/* Content */}
          <div className="container relative mx-auto px-4 py-20 md:py-32">
            <div className="max-w-4xl mx-auto text-center">
              {/* Event Badge */}
              <div className="inline-block mb-6 px-4 py-2 rounded-full bg-primary/20 dark:bg-primary/30 backdrop-blur-sm border border-primary/30 dark:border-primary/50">
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  Annual Technical Event 2025
                </span>
              </div>

              {/* Main Title */}
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-up">
                TECHPHILIA <span className="text-secondary">8.0</span>
              </h1>

              {/* Subtitle */}
              <p className="text-lg md:text-xl text-gray-900 dark:text-white mb-8 animate-fade-up" style={{ animationDelay: "0.1s" }}>
                The Annual Technical Extravaganza - Where Innovation Meets Excellence
              </p>

              {/* Description */}
              <p className="text-base md:text-lg text-gray-900 dark:text-white mb-12 animate-fade-up" style={{ animationDelay: "0.2s" }}>
                Join us for three days of cutting-edge technology, competitions, workshops, and networking opportunities.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.3s" }}>
                <Link
                  to="/events"
                  className="premium-button bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
                >
                  Explore Events
                </Link>
                <Link
                  to="/register"
                  className="premium-button bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-lg font-medium backdrop-blur-sm transition-all duration-300 transform hover:scale-105"
                >
                  Register Now
                </Link>
              </div>

              {/* Event Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 animate-fade-up" style={{ animationDelay: "0.4s" }}>
                {[
                  { number: "3", label: "Days" },
                  { number: "20+", label: "Events" },
                  { number: "1000+", label: "Participants" },
                  { number: "50+", label: "Workshops" },
                ].map((stat, index) => (
                  <div key={index} className="bg-white/5 dark:bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                    <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">{stat.number}</div>
                    <div className="text-sm text-gray-900 dark:text-white">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
          <div className="container mx-auto px-4">
            {/* Section Header */}
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-sm font-medium mb-4">
                About Us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                TECHPHILIA <span className="text-yellow-500">8.0</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-yellow-500 mx-auto rounded-full"></div>
            </div>

            {/* Main Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              {/* Left Column - Text Content */}
              <div className="space-y-6">
                <div className="prose prose-lg dark:prose-invert">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    The Amity Institute of Information Technology, Amity University, Patna, Bihar is happy to host its
                    Annual Technology Fest "Techphilia 8.0", to be held on 19th, 21st and 22nd April– 2025. The event will
                    give opportunity to many students to learn, compete and gain exposure with a tinge of enjoyment.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    This year 13 events are planned with a dream to make it a platform for a Grand Technological
                    Spectacular. We are excited to welcome all the Tech-Savvy students throughout the globe and hope to make
                    it an unforgettable experience for each one of them.
                  </p>
                </div>

                {/* Key Points */}
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    Key Highlights
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <span className="text-green-500 mt-1">•</span>
                      <span className="text-gray-700 dark:text-gray-300">
                        <span className="font-semibold text-green-500">MR. AND MRS. TECHPHILIA 8.0:</span> Win maximum events to become the face of Techphilia 8.0
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-green-500 mt-1">•</span>
                      <span className="text-gray-700 dark:text-gray-300">
                        <span className="font-semibold text-green-500">ID Required:</span> Students must carry their University Identity Card
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right Column - Stats Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="group">
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <div className="text-4xl font-bold bg-gradient-to-r from-green-500 to-yellow-500 bg-clip-text text-transparent mb-2">
                      20+
                    </div>
                    <div className="text-gray-700 dark:text-gray-300 font-medium">Events</div>
                  </div>
                </div>
                <div className="group">
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <div className="text-4xl font-bold bg-gradient-to-r from-green-500 to-yellow-500 bg-clip-text text-transparent mb-2">
                      5000+
                    </div>
                    <div className="text-gray-700 dark:text-gray-300 font-medium">Participants</div>
                  </div>
                </div>
                <div className="group sm:col-span-2">
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <div className="text-4xl font-bold bg-gradient-to-r from-green-500 to-yellow-500 bg-clip-text text-transparent mb-2">
                      ₹2,000
                    </div>
                    <div className="text-gray-700 dark:text-gray-300 font-medium">Prize Pool</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="mt-16 text-center">
              <Link
                to="/register"
                className="inline-flex items-center px-8 py-3 rounded-lg bg-gradient-to-r from-green-500 to-yellow-500 text-white font-medium hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl"
              >
                Register Now
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Countdown Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10"></div>
          
          {/* Animated Circles */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-green-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>

          <div className="container relative mx-auto px-4">
            {/* Section Header */}
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-sm font-medium mb-4">
                Event Countdown
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Mark Your <span className="text-yellow-500">Calendar</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-yellow-500 mx-auto rounded-full"></div>
            </div>

            {/* Countdown Timer */}
            <div className="max-w-4xl mx-auto">
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12 backdrop-blur-sm border border-gray-100 dark:border-gray-700">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                  {/* Days */}
                  <div className="group">
                    <div className="bg-gradient-to-b from-green-50 to-white dark:from-gray-700 dark:to-gray-800 rounded-xl p-4 md:p-6 text-center border border-green-100 dark:border-green-900/30 hover:border-green-200 dark:hover:border-green-800 transition-all duration-300">
                      <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-500 to-yellow-500 bg-clip-text text-transparent mb-2">
                        <CountdownTimer unit="days" />
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">Days</div>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="group">
                    <div className="bg-gradient-to-b from-green-50 to-white dark:from-gray-700 dark:to-gray-800 rounded-xl p-4 md:p-6 text-center border border-green-100 dark:border-green-900/30 hover:border-green-200 dark:hover:border-green-800 transition-all duration-300">
                      <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-500 to-yellow-500 bg-clip-text text-transparent mb-2">
                        <CountdownTimer unit="hours" />
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">Hours</div>
                    </div>
                  </div>

                  {/* Minutes */}
                  <div className="group">
                    <div className="bg-gradient-to-b from-green-50 to-white dark:from-gray-700 dark:to-gray-800 rounded-xl p-4 md:p-6 text-center border border-green-100 dark:border-green-900/30 hover:border-green-200 dark:hover:border-green-800 transition-all duration-300">
                      <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-500 to-yellow-500 bg-clip-text text-transparent mb-2">
                        <CountdownTimer unit="minutes" />
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">Minutes</div>
                    </div>
                  </div>

                  {/* Seconds */}
                  <div className="group">
                    <div className="bg-gradient-to-b from-green-50 to-white dark:from-gray-700 dark:to-gray-800 rounded-xl p-4 md:p-6 text-center border border-green-100 dark:border-green-900/30 hover:border-green-200 dark:hover:border-green-800 transition-all duration-300">
                      <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-500 to-yellow-500 bg-clip-text text-transparent mb-2">
                        <CountdownTimer unit="seconds" />
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">Seconds</div>
                    </div>
                  </div>
                </div>

                {/* Event Date */}
                <div className="mt-8 text-center">
                  <p className="text-gray-600 dark:text-gray-400">
                    Event Date: <span className="font-semibold text-green-600 dark:text-green-400">19th - 22nd April 2025</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="mt-12 text-center">
              <Link
                to="/register"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-green-500 to-yellow-500 text-white font-medium hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl"
              >
                Register Now
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="py-16 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10"></div>
          
          {/* Animated Circles */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-green-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>

          <div className="container relative mx-auto px-4">
            <PartnersMarquee />
          </div>
        </section>
      </div>
    </>
  )
}

export default Home

