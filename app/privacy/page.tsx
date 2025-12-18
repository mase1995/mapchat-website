'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function Privacy() {
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

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Privacy Policy</h1>
            <p className="text-gray-400 mb-8">Last updated: December 17, 2024</p>

            <div className="prose prose-invert max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">1. Information We Collect</h2>
                <p className="text-gray-300 leading-relaxed">
                  MapChat collects information to provide better services to our users. We collect:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li>Account information (email, username, profile details)</li>
                  <li>Location data when you join location-based rooms</li>
                  <li>Messages and content you create</li>
                  <li>Usage data and analytics</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">2. How We Use Your Information</h2>
                <p className="text-gray-300 leading-relaxed">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li>Provide and maintain MapChat services</li>
                  <li>Connect you with location-based chat rooms</li>
                  <li>Improve and personalize your experience</li>
                  <li>Send you notifications and updates</li>
                  <li>Ensure safety and security</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">3. Data Security</h2>
                <p className="text-gray-300 leading-relaxed">
                  We take data security seriously. MapChat implements:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li>End-to-end encryption for direct messages</li>
                  <li>Secure data storage and transmission</li>
                  <li>Regular security audits</li>
                  <li>Industry-standard encryption protocols</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">4. Your Rights</h2>
                <p className="text-gray-300 leading-relaxed">
                  You have the right to:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li>Access your personal data</li>
                  <li>Request data deletion</li>
                  <li>Opt out of certain data collection</li>
                  <li>Export your data</li>
                  <li>Update your information</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">5. Contact Us</h2>
                <p className="text-gray-300 leading-relaxed">
                  If you have questions about this Privacy Policy, please contact us at:
                  <br />
                  <a href="mailto:privacy@mapchat.com" className="text-primary hover:text-accent transition">
                    privacy@mapchat.com
                  </a>
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
