"use client"

import { useState } from "react"
import { Send } from "lucide-react"
import SEO from "../components/SEO"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitSuccess(true)
      setFormData({
        name: "",
        phone: "",
        email: "",
        message: "",
      })

      // Reset success message after 3 seconds
      setTimeout(() => {
        setSubmitSuccess(false)
      }, 3000)
    }, 1500)
  }

  return (
    <>
      <SEO
        title="Contact"
        description="Get in touch with the Techphilia 8.0 team. Contact us for event inquiries, registration support, and partnership opportunities at Amity University Patna's technical festival. This website was developed by Ayush, Shubham Choudhary and Aman Verma, Computer Science students at Amity University Patna."
        keywords="techphilia events, techphilia 8, techphilia 8.0, techphilia, AIIT, technical fest competitions, amity university patna workshops, hackathon, coding competition, tech events schedule, technical teams, technology festival events, tech workshops, student competitions, bihar tech fest schedule, Ayush developer, Shubham Choudhary developer, Aman Verma developer"
        image="https://www.aiitpevent.in/contact-og-image.png"
        url="https://www.aiitpevent.in/contact"
        type="website"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": "Contact Techphilia 8.0",
          "description": "Contact information for Techphilia 8.0 - The Annual Technical Festival of Amity University Patna",
          "publisher": {
            "@type": "Organization",
            "name": "Amity University Patna",
            "url": "https://amity.edu/patna/"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "customer service",
            "telephone": "+91-8787062033",
            "email": "techphilia@amity.edu",
            "areaServed": "IN",
            "availableLanguage": ["English", "Hindi"]
          },
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Rupaspur",
            "addressLocality": "Patna",
            "addressRegion": "Bihar",
            "postalCode": "800001",
            "addressCountry": "IN"
          }
        }}
      />
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-primary mb-2 text-center">Contact Us</h1>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Have questions about TECHPHILIA 8.0? Reach out to us and we'll get back to you as soon as possible.
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div className="premium-card p-6 md:p-8">
              <h2 className="text-2xl font-bold text-primary mb-6">Send us a message</h2>

              {submitSuccess && (
                <div className="bg-green-50 text-green-700 p-4 rounded-md mb-6">
                  Thank you for your message! We'll get back to you soon.
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="Hardik Soni"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="+91 9661850789"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="hardiksoni019@gmail.com"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="Write your message here..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="premium-button w-full flex items-center justify-center hover:text-white"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message <Send size={16} className="ml-2" />
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Map */}
            <div className="h-[450px] premium-card overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.7774237684616!2d85.05206687396489!3d25.612311314764654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed56457e773c5d%3A0x26f4637f762e3747!2sAmity%20University%2C%20Patna!5e0!3m2!1sen!2sin!4v1743351573317!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="TECHPHILIA 8.0 Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact

