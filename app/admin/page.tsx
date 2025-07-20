'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, Calendar, User, MessageSquare } from 'lucide-react'

interface ContactSubmission {
  id: string
  name: string
  email: string
  phone: string | null
  message: string
  created_at: string
}

export default function Admin() {
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchSubmissions()
  }, [])

  const fetchSubmissions = async () => {
    try {
      const response = await fetch('/api/admin/submissions')
      if (response.ok) {
        const data = await response.json()
        setSubmissions(data.submissions)
      } else {
        setError('Failed to fetch submissions')
      }
    } catch (error) {
      setError('Error loading submissions')
    } finally {
      setLoading(false)
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  if (loading) {
    return (
      <div className="pt-16 min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading submissions...</p>
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="pt-16 min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <p className="text-red-600">{error}</p>
            <button
              onClick={fetchSubmissions}
              className="mt-4 bg-primary-500 text-white px-4 py-2 rounded-lg hover:bg-primary-600"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Contact Form Submissions
            </h1>
            <p className="text-gray-600">
              View and manage contact form submissions from your website
            </p>
          </div>

          {submissions.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <MessageSquare className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">No submissions yet.</p>
              <p className="text-gray-400">Contact form submissions will appear here.</p>
            </motion.div>
          ) : (
            <div className="grid gap-6">
              {submissions.map((submission, index) => (
                <motion.div
                  key={submission.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-md p-6"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div className="flex items-center space-x-4 mb-4 lg:mb-0">
                      <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                        <User className="h-5 w-5 text-primary-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">
                          {submission.name}
                        </h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <div className="flex items-center space-x-1">
                            <Mail className="h-4 w-4" />
                            <span>{submission.email}</span>
                          </div>
                          {submission.phone && (
                            <div className="flex items-center space-x-1">
                              <Phone className="h-4 w-4" />
                              <span>{submission.phone}</span>
                            </div>
                          )}
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>{formatDate(submission.created_at)}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-4">
                    <h4 className="font-medium text-gray-900 mb-2">Message:</h4>
                    <p className="text-gray-700 whitespace-pre-wrap">
                      {submission.message}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          <div className="mt-8 text-center">
            <button
              onClick={fetchSubmissions}
              className="bg-primary-500 text-white px-6 py-2 rounded-lg hover:bg-primary-600 transition-colors"
            >
              Refresh
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  )
} 