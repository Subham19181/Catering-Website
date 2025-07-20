'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { CheckCircle, Users, Calendar, Star } from 'lucide-react'

export default function Services() {
  const services = [
    {
      title: 'Wedding Catering',
      description: 'Create the perfect wedding day with our comprehensive wedding catering services. From intimate ceremonies to grand receptions.',
      image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&h=400&fit=crop',
      features: [
        'Custom menu planning',
        'Wedding cake included',
        'Professional service staff',
        'Setup and cleanup',
        'Dietary accommodations',
        'Tasting session'
      ],
      price: 'Starting at $45/person'
    },
    {
      title: 'Corporate Events',
      description: 'Professional catering for meetings, conferences, seminars, and corporate celebrations.',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&h=400&fit=crop',
      features: [
        'Breakfast and lunch options',
        'Coffee and refreshments',
        'Professional presentation',
        'Dietary restrictions handled',
        'On-time delivery',
        'Flexible scheduling'
      ],
      price: 'Starting at $25/person'
    },
    {
      title: 'Private Parties',
      description: 'Intimate gatherings, birthday celebrations, anniversaries, and special family occasions.',
      image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&h=400&fit=crop',
      features: [
        'Personalized menus',
        'Intimate service',
        'Special dietary needs',
        'Decor coordination',
        'Flexible guest counts',
        'Home delivery available'
      ],
      price: 'Starting at $35/person'
    },
    {
      title: 'Holiday Catering',
      description: 'Make your holidays special with our festive catering options for Thanksgiving, Christmas, and more.',
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&h=400&fit=crop',
      features: [
        'Traditional holiday menus',
        'Family-style service',
        'Leftover packaging',
        'Holiday decorations',
        'Extended service hours',
        'Special dietary options'
      ],
      price: 'Starting at $40/person'
    },
    {
      title: 'BBQ & Outdoor Events',
      description: 'Perfect for summer parties, backyard gatherings, and outdoor celebrations.',
      image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&h=400&fit=crop',
      features: [
        'Grilled specialties',
        'Outdoor setup',
        'Weather contingency',
        'Portable equipment',
        'Casual atmosphere',
        'Extended service'
      ],
      price: 'Starting at $30/person'
    },
    {
      title: 'Specialty Catering',
      description: 'Unique events require unique solutions. We specialize in themed events and special dietary requirements.',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop',
      features: [
        'Themed menus',
        'Vegan/vegetarian options',
        'Gluten-free alternatives',
        'Cultural cuisine',
        'Custom presentations',
        'Expert consultation'
      ],
      price: 'Starting at $50/person'
    }
  ]

  const process = [
    {
      step: '01',
      title: 'Consultation',
      description: 'We discuss your event details, guest count, dietary needs, and vision.',
      icon: Users
    },
    {
      step: '02',
      title: 'Menu Planning',
      description: 'Our chefs create a customized menu that fits your taste and budget.',
      icon: Calendar
    },
    {
      step: '03',
      title: 'Tasting Session',
      description: 'Sample our dishes and make adjustments to perfect your menu.',
      icon: Star
    },
    {
      step: '04',
      title: 'Event Execution',
      description: 'We handle everything from setup to cleanup, ensuring a flawless experience.',
      icon: CheckCircle
    }
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1920&h=400&fit=crop"
            alt="Services Banner"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl max-w-2xl mx-auto"
          >
            Comprehensive catering solutions for every occasion
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What We Offer
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From intimate gatherings to grand celebrations, we have the perfect catering solution for your event
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative h-64">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">What's Included:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-primary-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="text-primary-500 font-semibold text-lg">
                    {service.price}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Simple steps to create your perfect catering experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your event and get a personalized quote
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-primary-500 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get a Quote
              </a>
              <a
                href="tel:+15551234567"
                className="border-2 border-white text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-primary-500 transition-colors"
              >
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 