import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'New Subham Caterer - Premium Catering Services',
  description: 'Professional catering services for weddings, corporate events, and special occasions. Delicious food, exceptional service, and unforgettable experiences.',
  keywords: 'catering, wedding catering, corporate catering, event catering, food services',
  authors: [{ name: 'New Subham Caterer' }],
  openGraph: {
    title: 'New Subham Caterer - Premium Catering Services',
    description: 'Professional catering services for weddings, corporate events, and special occasions.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow lg:pt-4">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
} 