'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function Terms() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Terms of Service</h1>
            <p className="text-gray-400 mb-8">Last updated: December 17, 2024</p>

            <div className="prose prose-invert max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">1. Acceptance of Terms</h2>
                <p className="text-gray-300 leading-relaxed">
                  By accessing and using MapChat, you accept and agree to be bound by the terms and provision of this agreement. 
                  If you do not agree to these terms, please do not use MapChat.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">2. Use License</h2>
                <p className="text-gray-300 leading-relaxed">
                  MapChat grants you a personal, non-exclusive, non-transferable license to use the application. You agree not to:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for commercial purposes</li>
                  <li>Attempt to decompile or reverse engineer the software</li>
                  <li>Remove any copyright or proprietary notations</li>
                  <li>Transfer the materials to another person</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">3. User Conduct</h2>
                <p className="text-gray-300 leading-relaxed">
                  You agree to use MapChat responsibly and not to:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li>Post harmful, offensive, or illegal content</li>
                  <li>Harass, abuse, or harm other users</li>
                  <li>Impersonate others or misrepresent your identity</li>
                  <li>Spam or distribute malware</li>
                  <li>Violate any applicable laws or regulations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">4. Content Ownership</h2>
                <p className="text-gray-300 leading-relaxed">
                  You retain ownership of content you post on MapChat. By posting content, you grant MapChat a worldwide, 
                  non-exclusive license to use, reproduce, and distribute your content in connection with the service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">5. Termination</h2>
                <p className="text-gray-300 leading-relaxed">
                  We may terminate or suspend your account immediately, without prior notice, for conduct that we believe 
                  violates these Terms of Service or is harmful to other users, us, or third parties.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">6. Premium Subscriptions</h2>
                <p className="text-gray-300 leading-relaxed">
                  Premium subscriptions are billed monthly or annually. Subscriptions automatically renew unless cancelled 
                  at least 24 hours before the end of the current period. Refunds are not provided for partial subscription periods.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">7. Disclaimer</h2>
                <p className="text-gray-300 leading-relaxed">
                  MapChat is provided "as is" without warranties of any kind. We do not guarantee that the service will be 
                  uninterrupted, secure, or error-free.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">8. Contact</h2>
                <p className="text-gray-300 leading-relaxed">
                  Questions about the Terms of Service? Contact us at:
                  <br />
                  <a href="mailto:legal@mapchat.com" className="text-primary hover:text-accent transition">
                    legal@mapchat.com
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
