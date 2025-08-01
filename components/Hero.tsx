'use client'

import React, { useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Star, Users, Calendar, Award } from 'lucide-react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

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

  const testimonialsData = [
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
      content: "I've worked with many caterers, but New Subham Caterer consistently delivers excellence. Highly recommended!",
      rating: 5,
    },
  ]

  const stats = [
    { number: '500+', label: 'Events Catered', icon: Calendar },
    { number: '50+', label: 'Happy Clients', icon: Users },
    { number: '5', label: 'Years Experience', icon: Award },
    { number: '4.9', label: 'Star Rating', icon: Star },
  ]

  const signatureDishes = [
    { name: 'Dish 1', image: '/placeholder-dish.jpg' },
    { name: 'Dish 2', image: '/placeholder-dish.jpg' },
    { name: 'Dish 3', image: '/placeholder-dish.jpg' },
    { name: 'Dish 4', image: '/placeholder-dish.jpg' },
    { name: 'Dish 5', image: '/placeholder-dish.jpg' },
    { name: 'Dish 6', image: '/placeholder-dish.jpg' },
    { name: 'Dish 7', image: '/placeholder-dish.jpg' },
    { name: 'Dish 8', image: '/placeholder-dish.jpg' },
  ]

  const testimonials = [
    {
      name: 'John Doe',
      picture: '/placeholder-avatar.jpg',
      review: "New Subham Caterer made our event unforgettable! The food was exquisite, and the service was impeccable. Highly recommend them for any occasion. Every guest raved about the quality and presentation. Truly a five-star experience from start to finish."
    },
    {
      name: 'Jane Smith',
      picture: '/placeholder-avatar.jpg',
      review: "Absolutely fantastic catering! From the initial consultation to the last bite, everything was perfect. They truly exceeded our expectations. The attention to detail and personalized menu made all the difference. We will definitely be using them again!"
    },
    {
      name: 'Peter Jones',
      picture: '/placeholder-avatar.jpg',
      review: "The best catering service we have ever used. The food was delicious, fresh, and beautifully presented. Our guests were very impressed. The team was professional, punctual, and incredibly easy to work with. A seamless experience!"
    },
    {
      name: 'Alice Brown',
      picture: '/placeholder-avatar.jpg',
      review: "Outstanding food and service! New Subham Caterer handled our corporate event flawlessly. The variety of dishes was impressive, and everything tasted amazing. Their staff was courteous and efficient, ensuring everything ran smoothly. Thank you!"
    },
    {
      name: 'Michael Green',
      picture: '/placeholder-avatar.jpg',
      review: "Couldn't be happier with the catering for our wedding. The team was so accommodating and helped us create a menu that perfectly suited our tastes. The food was a highlight of the day, and many guests asked for their contact information. Superb!"
    },
  ]

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000, stopOnInteraction: false })])

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const [showModal, setShowModal] = React.useState(false);
  const [selectedTestimonial, setSelectedTestimonial] = React.useState(null);

  const openModal = (testimonial) => {
    setSelectedTestimonial(testimonial);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedTestimonial(null);
  };

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

      {/* Our Signature Dishes Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-center text-gray-900 mb-12"
          >
            Our Signature Dishes
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {signatureDishes.map((dish, index) => (
              <motion.div
                key={dish.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="relative w-full h-48">
                  <Image
                    src={dish.image}
                    alt={dish.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold text-gray-800">{dish.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-center text-gray-900 mb-12"
          >
            What Our Clients Say
          </motion.h2>
        </div>

        <div className="embla overflow-hidden" ref={emblaRef}>
          <div className="embla__container flex touch-pan-y">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="embla__slide flex-none w-full md:w-1/2 lg:w-1/3 px-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-50 p-8 rounded-lg shadow-md flex flex-col items-center text-center h-full cursor-pointer"
                  onClick={() => openModal(testimonial)}
                >
                  <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4">
                    <Image
                      src={testimonial.picture}
                      alt={testimonial.name}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <p className="text-lg font-semibold text-gray-900 mb-2">{testimonial.name}</p>
                  <p className="text-gray-700 italic line-clamp-4">{testimonial.review}</p>
                </motion.div>
              </div>
            ))}
          </div>
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

      {showModal && selectedTestimonial && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="bg-white p-8 rounded-lg shadow-xl max-w-lg w-full relative"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
          >
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-2xl font-bold"
            >
              &times;
            </button>
            <div className="flex flex-col items-center text-center mb-4">
              <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4">
                <Image
                  src={selectedTestimonial.picture}
                  alt={selectedTestimonial.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900">{selectedTestimonial.name}</h3>
            </div>
            <p className="text-gray-700 text-center">{selectedTestimonial.review}</p>
          </motion.div>
        </div>
      )}
    </>
  )
}