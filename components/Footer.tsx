import Link from 'next/link'
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">NS</span>
              </div>
              <span className="text-xl font-bold">New Subham Caterer</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              We specialize in creating exceptional dining experiences for weddings, 
              corporate events, and special occasions. Our commitment to quality, 
              creativity, and customer satisfaction sets us apart.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-primary-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-primary-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-primary-500 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-300 hover:text-primary-500 transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-primary-500 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary-500" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary-500" />
                <span className="text-gray-300">info@newsubhamcaterer.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary-500 mt-1" />
                <span className="text-gray-300">
                  123 Catering Street<br />
                  Food City, FC 12345
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 New Subham Caterer. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 