'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Star, Users, Calendar, Award } from 'lucide-react'

export default function Hero() {
  const services = [
    {
      title: 'Wedding Catering',
      description: 'Create unforgettable wedding experiences with our premium catering services.',
      image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=500&h=300&fit=crop',
    },
    {
      title: 'Corporate Events',
      description: 'Professional catering for corporate meetings, conferences, and business events.',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=500&h=300&fit=crop',
    },
    {
      title: 'Private Parties',
      description: 'Intimate gatherings and celebrations with personalized menu options.',
      image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=500&h=300&fit=crop',
    },
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Bride',
      content: 'New Subham Caterer made our wedding day absolutely perfect. The food was exceptional and the service was impeccable.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Corporate Client',
      content: 'Professional, reliable, and delicious. Our corporate event was a huge success thanks to their outstanding catering.',
      rating: 5,
    },
    {
      name: 'Emily Rodriguez',
      role: 'Event Planner',
      content: 'I\'ve worked with many caterers, but New Subham Caterer consistently delivers excellence. Highly recommended!',
      rating: 5,
    },
  ]

  const stats = [
    { number: '500+', label: 'Events Catered', icon: Calendar },
    { number: '50+', label: 'Happy Clients', icon: Users },
    { number: '5', label: 'Years Experience', icon: Award },
    { number: '4.9', label: 'Star Rating', icon: Star },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1920&h=1080&fit=crop"
            alt="Catering Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Exceptional Catering
            <br />
            <span className="text-primary-400">For Every Occasion</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto"
          >
            From intimate gatherings to grand celebrations, we create memorable dining experiences
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="bg-primary-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-primary-600 transition-colors">
              Book Now
            </button>
            <Link
              href="/services"
              className="border-2 border-white text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors"
            >
              Our Services
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  <stat.icon className="h-8 w-8 text-primary-500" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* ...rest of the sections (About, Services, Testimonials, CTA) can be moved here as needed ... */}
    </>
  )
} 