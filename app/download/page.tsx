'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Apple, PlaySquare, QrCode } from 'lucide-react'

export default function Download() {
  return (
    <main className="min-h-screen bg-black">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center gap-3">
              <Image src="/logo.png" alt="MapChat" width={40} height={40} className="rounded-lg" />
              <span className="text-xl font-bold text-gradient">MapChat</span>
            </Link>
            <Link href="/" className="text-gray-300 hover:text-primary transition">
              ← Back to Home
            </Link>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,245,212,0.15),transparent_70%)]" />
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
        
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Download <span className="text-gradient">MapChat</span>
            </h1>
            <p className="text-xl text-gray-400 mb-12">
              Available on iOS and Android. Start connecting today!
            </p>

            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-12">
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-dark-light border border-gray-800 rounded-2xl p-8 hover:border-primary transition group"
              >
                <Apple className="w-16 h-16 text-primary mx-auto mb-4 group-hover:scale-110 transition" />
                <h3 className="text-2xl font-bold mb-2">App Store</h3>
                <p className="text-gray-400">Download for iOS</p>
              </motion.a>

              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-dark-light border border-gray-800 rounded-2xl p-8 hover:border-primary transition group"
              >
                <PlaySquare className="w-16 h-16 text-primary mx-auto mb-4 group-hover:scale-110 transition" />
                <h3 className="text-2xl font-bold mb-2">Google Play</h3>
                <p className="text-gray-400">Download for Android</p>
              </motion.a>
            </div>

            <div className="bg-dark-light border border-gray-800 rounded-2xl p-8 max-w-md mx-auto">
              <QrCode className="w-24 h-24 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Scan to Download</h3>
              <p className="text-gray-400 text-sm">
                Scan this QR code with your phone to download MapChat
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-dark-light border border-gray-800 rounded-2xl p-8"
          >
            <h2 className="text-2xl font-bold mb-6 text-center">System Requirements</h2>
            <div className="grid md:grid-cols-2 gap-8 text-gray-300">
              <div>
                <h3 className="font-bold text-primary mb-3">iOS</h3>
                <ul className="space-y-2 text-sm">
                  <li>• iOS 14.0 or later</li>
                  <li>• iPhone 6s or newer</li>
                  <li>• iPad (5th generation) or newer</li>
                  <li>• 100 MB free storage</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-primary mb-3">Android</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Android 8.0 or later</li>
                  <li>• 2GB RAM minimum</li>
                  <li>• 100 MB free storage</li>
                  <li>• Google Play Services</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
