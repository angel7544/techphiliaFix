import { Link } from "react-router-dom"
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-green-500 to-yellow-500 bg-clip-text text-transparent">
              TECHPHILIA <span className="text-yellow-500">8.0</span>
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              The Annual Technical Extravaganza at Amity University Patna. Join us for three days of innovation, learning, and excitement.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-green-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-green-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-green-500 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { path: "/", label: "Home" },
                { path: "/events", label: "Events" },
                { path: "/gallery", label: "Gallery" },
                { path: "/about", label: "About" },
                { path: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-700 dark:text-gray-300 hover:text-green-500 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <MapPin className="text-green-500" size={18} />
                <span className="text-gray-700 dark:text-gray-300">Amity University Patna, Bihar</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="text-green-500" size={18} />
                <span className="text-gray-700 dark:text-gray-300">+91 1234567890</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="text-green-500" size={18} />
                <span className="text-gray-700 dark:text-gray-300">techphilia@amity.edu</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Stay Updated</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
              Subscribe to our newsletter for the latest updates and event information.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none transition-colors"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 rounded-lg bg-gradient-to-r from-green-500 to-yellow-500 text-white font-medium hover:opacity-90 transition-opacity"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 dark:border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-700 dark:text-gray-300">
              © 2024 Techphilia 8.0. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-sm text-gray-700 dark:text-gray-300 hover:text-green-500 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-gray-700 dark:text-gray-300 hover:text-green-500 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

