"use client"

import { Link } from "react-router-dom"
import { useEffect, useRef } from "react"
import CountdownTimer from "../components/CountdownTimer"
import PartnersMarquee from "../components/PartnersMarquee"
import SEO from "../components/SEO"
import earthLogo from "../assets/gallery/earth-day-logo.webp"
import StructuredData from "../components/StructuredData"
import { Leaf, Droplets, Sun, Wind } from "lucide-react"

const Home = () => {
  const styleRef = useRef(null)

  // Add CSS for marquee animation and to hide the original heading
  useEffect(() => {
    // Create a style element
    const style = document.createElement("style")
    styleRef.current = style

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

  /* Earth Day floating elements */
  .earth-element {
    position: absolute;
    animation: float 6s ease-in-out infinite;
    opacity: 0.7;
    z-index: 1;
  }

  /* Responsive positioning for earth elements */
  @media (max-width: 768px) {
    .earth-element {
      transform: scale(0.6);
    }
    
    .earth-element.top-left {
      top: 2% !important;
      left: 2% !important;
    }
    
    .earth-element.top-right {
      top: 2% !important;
      right: 2% !important;
    }
    
    .earth-element.bottom-left {
      bottom: 2% !important;
      left: 2% !important;
    }
    
    .earth-element.bottom-right {
      bottom: 2% !important;
      right: 2% !important;
    }
  }

  @keyframes float {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-20px);
    }
    100% {
      transform: translateY(0px);
    }
  }

  .earth-element:nth-child(2) {
    animation-delay: 1s;
  }

  .earth-element:nth-child(3) {
    animation-delay: 2s;
  }

  .earth-element:nth-child(4) {
    animation-delay: 3s;
  }
  
  /* Add rotation animation for Earth Day logo */
  @keyframes spin-slow {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  .animate-spin-slow {
    animation: spin-slow 20s linear infinite;
  }
`

    // Append the style to the document head
    document.head.appendChild(style)

    // Clean up on component unmount
    return () => {
      if (styleRef.current && document.head.contains(styleRef.current)) {
        document.head.removeChild(styleRef.current)
      }
    }
  }, [])

  // Inside your Home component, add this before the return statement
  const eventStructuredData = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "Techphilia 8.0",
    description:
      "Annual Technical Festival of Amity University Patna. This website developed by Ayush, Aman Verma and Shubham Choudhary.",
    startDate: "2025-04-21T09:00:00+05:30",
    endDate: "2025-04-23T18:00:00+05:30",
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
        description="Techphilia 8.0 - The Annual Technical Extravaganza at Amity University Patna. This website was developed by Ayush, Shubham Choudhary and Aman Verma, Computer Science students at Amity University Patna."
        keywords="techphilia events, techphilia 8, techphilia 8.0, techphilia, AIIT, technical fest competitions, amity university patna workshops, hackathon, coding competition, tech events schedule, technical teams, technology festival events, tech workshops, student competitions, bihar tech fest schedule, Ayush developer, Shubham Choudhary developer, Aman Verma developer"
        image="https://aiitpevent.in/og-image.png"
        url="https://aiitpevent.in/"
        type="website"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Techphilia 8.0",
          url: "https://aiitpevent.in/",
          description: "The Annual Technical Extravaganza of Amity University Patna",
          potentialAction: {
            "@type": "SearchAction",
            target: "https://aiitpevent.in/search?q={search_term_string}",
            "query-input": "required name=search_term_string",
          },
        }}
      />
      <StructuredData data={eventStructuredData} />
      <main className="overflow-x-hidden">
        {/* Hero Section with Earth Day Elements - White Background */}
        <section className="bg-white py-16 md:py-24 relative" aria-labelledby="hero-heading">
          {/* Floating Earth Day Elements - With responsive positioning classes */}
          <div className="earth-element top-left" style={{ top: "10%", left: "10%" }}>
            <Leaf size={24} className="text-green-400" />
          </div>
          <div className="earth-element top-right" style={{ top: "20%", right: "15%" }}>
            <Droplets size={24} className="text-blue-400" />
          </div>
          <div className="earth-element bottom-left" style={{ bottom: "20%", left: "20%" }}>
            <Sun size={24} className="text-yellow-400" />
          </div>
          <div className="earth-element bottom-right" style={{ bottom: "20%", right: "20%" }}>
            <Wind size={24} className="text-blue-300" />
          </div>

          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <p className="text-secondary font-medium mb-2">Annual Technical Event 2025</p>
              <h1 id="hero-heading" className="text-4xl md:text-6xl font-bold text-primary mb-2">
                TECHPHILIA <span className="text-secondary">8.0</span>
              </h1>
              <p className="text-xl md:text-2xl font-semibold text-primary mb-4">
                IGNITE INNOVATION, EMBRACE THE FUTURE
              </p>
              <p className="text-lg md:text-xl text-gray-700 mb-8">
                The Annual Technical Extravaganza - Where Innovation Meets Excellence. Join us for three days of
                cutting-edge technology, competitions, workshops, and networking opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/events"
                  className="bg-primary hover:bg-primary-700 text-white font-bold py-3 px-8 rounded-md transition-all shadow-lg hover:shadow-xl inline-block"
                  aria-label="Explore all events"
                >
                  Explore Events
                </Link>
                <a
                  href="https://www.amity.edu/nspg/Techphilia2025/"
                  className="bg-secondary hover:bg-yellow-600 text-white font-bold py-3 px-8 rounded-md transition-all shadow-lg hover:shadow-xl inline-block"
                  aria-label="Register for the event"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Registration
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* About Techphilia 8.0 Section */}
        <section className="py-16 md:py-24 gradient-bg" aria-labelledby="about-heading">
          <div className="container mx-auto px-4">
            {/* Heading in a row - Centered */}
            <div className="w-full text-center mb-8">
              <h2 id="about-heading" className="section-title inline-block mx-auto">
                ABOUT TECHPHILIA 8.0
              </h2>
            </div>

            {/* Main content */}
            <div className="flex flex-col space-y-6 max-w-4xl mx-auto mb-12">
              <div className="text-gray-700">
                The Amity Institute of Information Technology, Amity University, Patna, Bihar is happy to host its
                Annual Technology Fest "Techphilia 8.0", to be held on 21st, 22nd and 23rd April– 2025. The event will
                give opportunity to many students to learn, compete and gain exposure with a tinge of enjoyment.
              </div>
              <div className="text-gray-700">
                This year 13 events are planned with a dream to make it a platform for a Grand Technological
                Spectacular. We are excited to welcome all the Tech-Savvy students throughout the globe and hope to make
                it an unforgettable experience for each one of them.
              </div>
              <div className="text-gray-700 font-semibold">KEY POINTS:</div>
              <div className="text-gray-700">
                TECHPHILIA ATTRACTION: MR. AND MS. TECHPHILA 8.0. Those who win maximum events will be our MR. And MS.
                TECHPHILA 8.0.
              </div>
              <div className="text-gray-700">
                EXEMPLARY MENTOR & LEADERSHIP SCHOOL AWARD : School with maximum winners.
              </div>
              <div className="text-gray-700">
                Students interested in participation may kindly carry their Identity Card of University with them at the
                competition.
              </div>
              <div className="text-gray-700">Participation Certificate for all registered participants.</div>
              <div className="text-gray-700">Award, Cash Prize and Merit Certificate for Winners of the event.</div>
              <div className="text-gray-700">Free Entry to ShriKrishna Centre for the registered participants.</div>
            </div>

            {/* Stats with responsive grid - Updated to include 4 boxes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="premium-card p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">3</div>
                <div className="text-secondary font-medium">Days</div>
              </div>
              <div className="premium-card p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">15+</div>
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

        {/* Earth Day Special Section */}
        <section className="py-16 bg-white" aria-labelledby="earth-day-heading">
          <div className="container mx-auto px-4">
            <div className="w-full text-center mb-12">
              <h2 id="earth-day-heading" className="section-title inline-block mx-auto">
                Earth Day Special
              </h2>
            </div>
            <div className="max-w-4xl mx-auto bg-white rounded-lg p-8 shadow-lg">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/3 flex justify-center">
                  <div className="w-48 h-48 rounded-full bg-transparent p-4 flex items-center justify-center shadow-lg">
                    <img
                      src={earthLogo || "/placeholder.svg"}
                      alt="Earth Day Logo"
                      className="w-full h-full object-contain animate-spin-slow"
                      style={{ mixBlendMode: "multiply" }}
                    />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-bold text-primary mb-4">Join Our Green Initiative</h3>
                  <p className="text-gray-700 mb-4">
                    This year, TECHPHILIA 8.0 is proud to celebrate World Earth Day with special events focused on
                    sustainability and environmental innovation. Join us in our commitment to a greener future through
                    technology and innovation.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center">
                      <Leaf className="text-green-600 mr-2" size={20} />
                      <span>Eco-friendly venue</span>
                    </div>
                    <div className="flex items-center">
                      <Droplets className="text-blue-500 mr-2" size={20} />
                      <span>Water conservation</span>
                    </div>
                    <div className="flex items-center">
                      <Sun className="text-yellow-500 mr-2" size={20} />
                      <span>Solar powered demos</span>
                    </div>
                    <div className="flex items-center">
                      <Wind className="text-blue-400 mr-2" size={20} />
                      <span>Clean energy talks</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Countdown Section */}
        <section className="py-16 bg-white" aria-labelledby="countdown-heading">
          <div className="container mx-auto px-4">
            <div className="w-full text-center mb-12">
              <h2 id="countdown-heading" className="section-title inline-block mx-auto">
                Mark Your Calendar
              </h2>
            </div>
            <div className="max-w-3xl mx-auto">
              <CountdownTimer />
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="py-16" aria-labelledby="partners-heading">
          <div className="container mx-auto px-4 mb-12">
            <div className="w-full text-center">
              <h2 id="partners-heading" className="section-title inline-block mx-auto">
                Our Partners
              </h2>
            </div>
          </div>
          {/* PartnersMarquee outside the container for full width */}
          <div className="overflow-hidden">
            <PartnersMarquee />
          </div>
        </section>
      </main>
    </>
  )
}

export default Home

