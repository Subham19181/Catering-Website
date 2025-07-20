'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All Events' },
    { id: 'weddings', name: 'Weddings' },
    { id: 'corporate', name: 'Corporate' },
    { id: 'parties', name: 'Private Parties' },
    { id: 'holidays', name: 'Holiday Events' },
  ]

  const galleryItems = [
    {
      id: 1,
      title: 'Elegant Wedding Reception',
      category: 'weddings',
      image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&h=400&fit=crop',
      description: 'A beautiful outdoor wedding with elegant table settings and gourmet cuisine.'
    },
    {
      id: 2,
      title: 'Corporate Conference Lunch',
      category: 'corporate',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&h=400&fit=crop',
      description: 'Professional catering for a major corporate conference with diverse menu options.'
    },
    {
      id: 3,
      title: 'Birthday Celebration',
      category: 'parties',
      image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&h=400&fit=crop',
      description: 'Intimate birthday party with personalized menu and beautiful presentation.'
    },
    {
      id: 4,
      title: 'Holiday Family Dinner',
      category: 'holidays',
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&h=400&fit=crop',
      description: 'Traditional holiday feast with all the family favorites and festive decorations.'
    },
    {
      id: 5,
      title: 'Summer Garden Wedding',
      category: 'weddings',
      image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&h=400&fit=crop',
      description: 'Outdoor garden wedding with fresh seasonal ingredients and elegant service.'
    },
    {
      id: 6,
      title: 'Business Meeting Catering',
      category: 'corporate',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop',
      description: 'Professional breakfast and lunch service for executive meetings.'
    },
    {
      id: 7,
      title: 'Anniversary Party',
      category: 'parties',
      image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&h=400&fit=crop',
      description: 'Romantic anniversary celebration with champagne service and gourmet appetizers.'
    },
    {
      id: 8,
      title: 'Thanksgiving Feast',
      category: 'holidays',
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&h=400&fit=crop',
      description: 'Traditional Thanksgiving dinner with all the classic dishes and family-style service.'
    },
    {
      id: 9,
      title: 'Beach Wedding Reception',
      category: 'weddings',
      image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&h=400&fit=crop',
      description: 'Stunning beachfront wedding with seafood specialties and tropical flavors.'
    },
    {
      id: 10,
      title: 'Product Launch Event',
      category: 'corporate',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&h=400&fit=crop',
      description: 'Sophisticated catering for a major product launch with international cuisine.'
    },
    {
      id: 11,
      title: 'Graduation Party',
      category: 'parties',
      image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&h=400&fit=crop',
      description: 'Celebratory graduation party with fun finger foods and dessert stations.'
    },
    {
      id: 12,
      title: 'Christmas Celebration',
      category: 'holidays',
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&h=400&fit=crop',
      description: 'Festive Christmas dinner with traditional holiday dishes and warm hospitality.'
    }
  ]

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory)

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1920&h=400&fit=crop"
            alt="Gallery Banner"
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
            Our Gallery
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl max-w-2xl mx-auto"
          >
            A showcase of our finest catering events and memorable moments
          </motion.p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-primary-500 text-white'
                    : 'bg-white text-gray-700 hover:bg-primary-50'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-lg shadow-lg">
                  <div className="relative h-64">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-300"></div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-center text-white p-4">
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-sm">{item.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filteredItems.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-gray-500 text-lg">No events found in this category.</p>
            </motion.div>
          )}
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
              Ready to Create Your Own Memories?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let us help you create an unforgettable event that will be remembered for years to come
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-primary-500 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Started
              </a>
              <a
                href="/services"
                className="border-2 border-white text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-primary-500 transition-colors"
              >
                View Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 