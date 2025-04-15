import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Events from "./pages/Events"
import Gallery from "./pages/Gallery"
import Leadership from "./pages/Leadership"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import ScrollToTop from "./components/ScrollToTop"
import PageTransition from "./components/PageTransition"
import { Link } from "react-router-dom"

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      
      {/* Marquee Announcement for Hackathon */}
      <div className="bg-primary text-white py-2 overflow-hidden shadow-md" style={{ marginTop: "60px" }}>
        <div className="overflow-hidden">
          <div className="flex" style={{ width: "max-content" }}>
            <div className="animate-marquee px-4 whitespace-nowrap">
              <Link 
                to="/events#hackathon-university"
                className="text-white hover:text-yellow-200 transition-colors font-medium"
              >
                🚀 Click here to view the Hackathon (UG/PG) Problem Statements - Get Ready to Code Your Way to Victory! 🏆
              </Link>
            </div>
            {/* Duplicate content for seamless loop */}
            <div className="animate-marquee px-4 whitespace-nowrap">
              <Link 
                to="/events#hackathon-university"
                className="text-white hover:text-yellow-200 transition-colors font-medium"
              >
                🚀 Click here to view the Hackathon (UG/PG) Problem Statements - Get Ready to Code Your Way to Victory! 🏆
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <main className="pt-4">
        <PageTransition>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/leadership" element={<Leadership />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </PageTransition>
      </main>
      <Footer />
    </>
  )
}

export default App

