"use client"

import { useState, useEffect, useRef } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X } from "lucide-react"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()
  const navRef = useRef(null)
  const buttonRef = useRef(null)

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false)
  }, [location])

  const toggleMenu = (e) => {
    // Stop propagation to prevent the document click handler from firing
    e.stopPropagation()
    setIsMenuOpen(!isMenuOpen)
  }

  // Function to check if a link is active
  const isActive = (path) => {
    return location.pathname === path
  }

  // Add these event listeners in the useEffect hook to handle outside clicks and scrolling
  useEffect(() => {
    // Function to close menu when clicking outside
    const handleOutsideClick = (e) => {
      // Only close if menu is open and click is outside nav AND not on the toggle button
      if (
        isMenuOpen &&
        navRef.current &&
        !navRef.current.contains(e.target) &&
        buttonRef.current !== e.target &&
        !buttonRef.current.contains(e.target)
      ) {
        setIsMenuOpen(false)
      }
    }

    // Function to close menu when scrolling
    const handleScroll = () => {
      if (isMenuOpen) {
        setIsMenuOpen(false)
      }
    }

    // Add event listeners
    document.addEventListener("click", handleOutsideClick)
    window.addEventListener("scroll", handleScroll)

    // Clean up event listeners on unmount
    return () => {
      document.removeEventListener("click", handleOutsideClick)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [isMenuOpen]) // Add isMenuOpen as a dependency

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100"
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-primary transition-transform hover:scale-105">
            TECHPHILIA <span className="text-secondary">8.0</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className={`nav-link relative group ${isActive("/") ? "active" : ""}`}>
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/events" className={`nav-link relative group ${isActive("/events") ? "active" : ""}`}>
              Events
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/gallery" className={`nav-link relative group ${isActive("/gallery") ? "active" : ""}`}>
              Gallery
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/about" className={`nav-link relative group ${isActive("/about") ? "active" : ""}`}>
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/contact" className={`nav-link relative group ${isActive("/contact") ? "active" : ""}`}>
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>

          {/* Mobile Navigation Button */}
          <button
            ref={buttonRef}
            className="md:hidden text-primary focus:outline-none transition-transform hover:scale-110"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="pt-2 pb-4 space-y-2">
            <Link
              to="/"
              className={`block py-2 px-4 rounded-md transition-colors duration-300 ${
                isActive("/") ? "bg-gray-50 text-primary font-medium" : "text-primary hover:bg-gray-50"
              }`}
            >
              Home
            </Link>
            <Link
              to="/events"
              className={`block py-2 px-4 rounded-md transition-colors duration-300 ${
                isActive("/events") ? "bg-gray-50 text-primary font-medium" : "text-primary hover:bg-gray-50"
              }`}
            >
              Events
            </Link>
            <Link
              to="/gallery"
              className={`block py-2 px-4 rounded-md transition-colors duration-300 ${
                isActive("/gallery") ? "bg-gray-50 text-primary font-medium" : "text-primary hover:bg-gray-50"
              }`}
            >
              Gallery
            </Link>
            <Link
              to="/about"
              className={`block py-2 px-4 rounded-md transition-colors duration-300 ${
                isActive("/about") ? "bg-gray-50 text-primary font-medium" : "text-primary hover:bg-gray-50"
              }`}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`block py-2 px-4 rounded-md transition-colors duration-300 ${
                isActive("/contact") ? "bg-gray-50 text-primary font-medium" : "text-primary hover:bg-gray-50"
              }`}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

