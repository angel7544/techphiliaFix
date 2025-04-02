import { useState, useEffect, useRef } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X, Sun, Moon } from "lucide-react"
import { useTheme } from "../context/ThemeContext"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()
  const navRef = useRef(null)
  const buttonRef = useRef(null)
  const { isDarkMode, toggleTheme } = useTheme()

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
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-sm border-b border-gray-100 dark:border-gray-800 transition-all duration-300"
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link 
            to="/" 
            className="text-2xl font-bold bg-gradient-to-r from-green-500 to-yellow-500 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
          >
            TECHPHILIA <span className="text-yellow-500">8.0</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {[
              { path: "/", label: "Home" },
              { path: "/events", label: "Events" },
              { path: "/gallery", label: "Gallery" },
              { path: "/about", label: "About" },
              { path: "/contact", label: "Contact" },
            ].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`
                  relative px-3 py-2 text-sm font-medium transition-all duration-300
                  ${isActive(item.path)
                    ? "text-green-500 dark:text-green-400"
                    : "text-gray-900 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-400"
                  }
                `}
              >
                {item.label}
                <span
                  className={`
                    absolute bottom-0 left-0 w-full h-0.5 bg-green-500 dark:bg-green-400
                    transform scale-x-0 transition-transform duration-300 origin-left
                    ${isActive(item.path) ? "scale-x-100" : "group-hover:scale-x-100"}
                  `}
                />
              </Link>
            ))}
            
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-green-50 dark:bg-green-900/30 hover:bg-green-100 dark:hover:bg-green-900/50 transition-all duration-300"
              aria-label="Toggle theme"
            >
              {isDarkMode ? (
                <Sun size={20} className="text-green-400" />
              ) : (
                <Moon size={20} className="text-green-600" />
              )}
            </button>
          </div>

          {/* Mobile Navigation Button */}
          <div className="flex items-center space-x-4 md:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-green-50 dark:bg-green-900/30 hover:bg-green-100 dark:hover:bg-green-900/50 transition-all duration-300"
              aria-label="Toggle theme"
            >
              {isDarkMode ? (
                <Sun size={20} className="text-green-400" />
              ) : (
                <Moon size={20} className="text-green-600" />
              )}
            </button>
            <button
              ref={buttonRef}
              className="p-2 rounded-full bg-green-50 dark:bg-green-900/30 hover:bg-green-100 dark:hover:bg-green-900/50 transition-all duration-300"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? (
                <X size={20} className="text-green-600 dark:text-green-400" />
              ) : (
                <Menu size={20} className="text-green-600 dark:text-green-400" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`
            md:hidden overflow-hidden transition-all duration-300 ease-in-out
            ${isMenuOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"}
          `}
        >
          <div className="pt-2 pb-4 space-y-2">
            {[
              { path: "/", label: "Home" },
              { path: "/events", label: "Events" },
              { path: "/gallery", label: "Gallery" },
              { path: "/about", label: "About" },
              { path: "/contact", label: "Contact" },
            ].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`
                  block py-2 px-4 rounded-lg text-sm font-medium transition-all duration-300
                  ${isActive(item.path)
                    ? "bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400"
                    : "text-gray-900 dark:text-gray-300 hover:bg-green-50 dark:hover:bg-green-900/30"
                  }
                `}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

