"use client"

import { HashRouter, Routes, Route, useLocation } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import About from "./pages/About"
import Events from "./pages/Events"
import Gallery from "./pages/Gallery"
import Contact from "./pages/Contact"
import Leadership from "./pages/Leadership"
import PageTransition from "./components/PageTransition"
import SEO from "./components/SEO"
import { useEffect } from "react"

// ScrollToTop component to reset scroll position on page change
function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

// Main app with routes wrapped in PageTransition
function AppContent() {
  return (
    <>
      <SEO /> {/* Default SEO for pages that don't specify their own */}
      <ScrollToTop />
      <Navbar />
      <div className="pt-16">
        {" "}
        {/* Add padding-top to account for fixed navbar */}
        <PageTransition>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/events" element={<Events />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/leadership" element={<Leadership />} />
          </Routes>
        </PageTransition>
      </div>
      <Footer />
    </>
  )
}

// Root component
function App() {
  return (
    <HashRouter>
      <AppContent />
    </HashRouter>
  )
}

export default App

