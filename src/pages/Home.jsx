"use client"

import { Link } from "react-router-dom"
import CountdownTimer from "../components/CountdownTimer"
import PartnersMarquee from "../components/PartnersMarquee"
import SEO from "../components/SEO"
import StructuredData from "../components/StructuredData"
import { useEffect } from "react"

const Home = () => {
  // Add CSS for marquee animation and to hide the original heading
  useEffect(() => {
    // Create a style element
    const style = document.createElement("style")

    // Define the CSS for the marquee animation and to hide the original heading
    style.textContent = `
      @keyframes marquee {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(-50%);
        }
      }
      
      .animate-marquee {
        animation: marquee 90s linear infinite;
        display: flex;
        width: max-content;
      }
      
      /* Hide the original "Our Partners" heading in PartnersMarquee */
      .overflow-hidden.py-10.bg-gray-50 > h2 {
        display: none;
      }
      
      /* Fix for the marquee container to prevent horizontal scrollbar */
      .overflow-hidden.py-10.bg-gray-50 {
        width: 100%;
        max-width: 100vw;
        overflow-x: hidden;
      }
      
      /* Center the yellow line under section titles */
      .section-title::after {
        left: 50% !important;
        transform: translateX(-50%) !important;
        margin-left: 0 !important;
        margin-right: 0 !important;
      }
    `

    // Append the style to the document head
    document.head.appendChild(style)

    // Clean up on component unmount
    return () => {
      document.head.removeChild(style)
    }
  }, [])

  // Inside your Home component, add this before the return statement
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
      {" "}
      {/* Add overflow-x-hidden to the main container */}
      {/* Hero Section - Centered */}
      <section className="bg-hero-pattern bg-cover bg-center py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4 animate-fade-up">
              TECHPHILIA <span className="text-secondary">8.0</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              The Annual Technical Extravaganza - Where Innovation Meets Excellence. Join us for three days of
              cutting-edge technology, competitions, workshops, and networking opportunities.
            </p>
            <Link
              to="/events"
              className="premium-button inline-block animate-fade-up"
              style={{ animationDelay: "0.2s" }}
            >
              Explore Events
            </Link>
          </div>
        </div>
      </section>
      {/* About Techphilia 8.0 Section - Replacing "What is Techphilia?" */}
      <section className="py-16 md:py-24 gradient-bg">
        <div className="container mx-auto px-4">
          {/* Heading in a row - Centered */}
          <div className="w-full text-center mb-8">
            <h2 className="section-title inline-block mx-auto">ABOUT TECHPHILIA 8.0</h2>
          </div>

          {/* Main content */}
          <div className="flex flex-col space-y-6 max-w-4xl mx-auto mb-12">
            <div className="text-gray-700">
            The Amity Institute of Information Technology, Amity University, Patna, Bihar is happy to host its
                Annual Technology Fest "Techphilia 8.0", to be held on 19th, 21st and 22nd April– 2025. The event will
                give opportunity to many students to learn, compete and gain exposure with a tinge of enjoyment.
            </div>
            <div className="text-gray-700">
            This year 13 events are planned with a dream to make it a platform for a Grand Technological
                Spectacular. We are excited to welcome all the Tech-Savvy students throughout the globe and hope to make
                it an unforgettable experience for each one of them.
            </div>
            <div className="text-gray-700 font-semibold">KEY POINTS:</div>
            <div className="text-gray-700">
              TECHPHILIA ATTRACTION: MR. AND MRS. TECHPHILA 8.0. Those who win maximum events will be our MR. And MRS.
              TECHPHILA 8.0.
            </div>
            <div className="text-gray-700">
              Students interested in participation may kindly carry their Identity Card of University with them at the
              competition.
            </div>
          </div>

          {/* Stats with responsive grid - 1 column on mobile, 2 on tablet, 3 on desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="premium-card p-6 text-center">
              <div className="text-4xl font-bold text-primary mb-2">20+</div>
              <div className="text-secondary font-medium">Events</div>
            </div>
            <div className="premium-card p-6 text-center">
              <div className="text-4xl font-bold text-primary mb-2">5000+</div>
              <div className="text-secondary font-medium">Participants</div>
            </div>
            <div className="premium-card p-6 text-center">
              <div className="text-4xl font-bold text-primary mb-2">₹2,000</div>
              <div className="text-secondary font-medium">Prizes</div>
            </div>
          </div>
        </div>
      </section>
      {/* Countdown Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="w-full text-center mb-12">
            <h2 className="section-title inline-block mx-auto">Mark Your Calendar</h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <CountdownTimer />
          </div>
        </div>
      </section>
      {/* Partners Section - With properly aligned heading */}
      <section className="py-16">
        <div className="container mx-auto px-4 mb-12">
          <div className="w-full text-center">
            <h2 className="section-title inline-block mx-auto">Our Partners</h2>
          </div>
        </div>
        {/* PartnersMarquee outside the container for full width */}
        <div className="overflow-hidden">
          {" "}
          {/* Add overflow-hidden wrapper */}
          <PartnersMarquee />
        </div>
      </section>
    </div>
    </>
  )
}

export default Home

