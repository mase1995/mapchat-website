'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { 
  MapPin, 
  MessageCircle, 
  Users, 
  Shield, 
  Zap, 
  Globe,
  Star,
  Smartphone,
  ArrowRight,
  Check,
  Play
} from 'lucide-react'
import AppDemo from '@/components/AppDemo'
import WaitlistForm from '@/components/WaitlistForm'
import LiveCounter from '@/components/LiveCounter'
import LaunchCountdown from '@/components/LaunchCountdown'

export default function Home() {
  const features = [
    {
      icon: MapPin,
      title: 'Drop Pins & Create Rooms',
      description: 'Drop a pin anywhere on the map to spawn your own custom chat room. Any location becomes a meeting place.'
    },
    {
      icon: Globe,
      title: 'Join Location Rooms',
      description: 'Chat with people at landmarks, stadiums, parks, and popular spots worldwide. Jump into thousands of active rooms.'
    },
    {
      icon: MessageCircle,
      title: 'Real-Time Chat',
      description: 'Lightning-fast messaging with photos, voice messages, and reactions. See who\'s online at any location instantly.'
    },
    {
      icon: Users,
      title: 'Build Communities',
      description: 'Create private or public rooms at your favorite spots. Invite friends, host events, and grow your network.'
    },
    {
      icon: Shield,
      title: 'Privacy & Safety',
      description: 'End-to-end encrypted DMs, advanced moderation tools, and full control over your presence and privacy.'
    },
    {
      icon: Zap,
      title: 'Level Up & Earn',
      description: 'Gain XP for activity, unlock achievements, earn badges, and level up your profile as you explore.'
    }
  ]

  const stats = [
    { value: '50K+', label: 'Waitlist Members' },
    { value: '100+', label: 'Locations & Countries' },
    { value: '2026', label: 'Launching Soon' },
    { value: '24/7', label: 'Community Support' }
  ]

  const plans = [
    {
      name: 'Free',
      price: '$0',
      features: [
        'Join unlimited rooms',
        'Send text messages',
        'Basic profile customization',
        'Access to landmarks',
        'Community features'
      ]
    },
    {
      name: 'Premium',
      price: '$4.99',
      period: '/month',
      popular: true,
      features: [
        'Everything in Free',
        'Send photos & videos',
        'Custom username colors',
        'Profile themes',
        'No ads',
        'Priority support',
        'Advanced moderation tools'
      ]
    }
  ]

  return (
    <main className="min-h-screen bg-black">
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-gray-800"
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="flex justify-between items-center h-14 sm:h-16">
            <div className="flex items-center gap-2 sm:gap-3">
              <Image src="/logo.png" alt="MapChat" width={32} height={32} className="rounded-lg sm:w-10 sm:h-10" />
              <span className="text-lg sm:text-xl font-bold text-gradient">MapChat</span>
            </div>
            <div className="flex md:hidden">
              <a href="#features" className="text-gray-300 hover:text-white transition text-sm px-3">Menu</a>
            </div>
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              <a href="#features" className="text-gray-300 hover:text-white transition text-sm lg:text-base">Features</a>
              <a href="#pricing" className="text-gray-300 hover:text-white transition text-sm lg:text-base">Pricing</a>
              <a href="#about" className="text-gray-300 hover:text-white transition text-sm lg:text-base">About</a>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Launch Countdown Banner */}
      <div className="pt-14 sm:pt-16">
        <LaunchCountdown />
      </div>

      {/* Hero Section */}
      <section className="relative pt-8 sm:pt-12 lg:pt-16 pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,245,212,0.15),transparent_50%)]" />
        <div className="absolute top-1/4 left-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-primary/10 rounded-full blur-[80px] sm:blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-secondary/10 rounded-full blur-[80px] sm:blur-[120px] animate-pulse" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="order-2 lg:order-1"
            >
              <div className="flex flex-wrap items-center gap-3 mb-3 sm:mb-4">
                <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/10 border border-primary/20 rounded-full">
                  <span className="text-primary text-xs sm:text-sm font-semibold">Launching Soon - Join the Waitlist</span>
                </div>
                <LiveCounter />
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
                Drop a Pin, <span className="text-gradient">Start Chatting</span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-gray-400 mb-6 sm:mb-8 leading-relaxed">
                Create custom chat rooms anywhere on the map. Join thousands of location-based rooms at landmarks, events, and hidden gems worldwide.
              </p>
              <div className="max-w-lg">
                <WaitlistForm variant="hero" />
              </div>
              <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 border border-primary/30 rounded-xl sm:rounded-2xl">
                <p className="text-white text-xs sm:text-sm font-semibold mb-2">Early Access Perks</p>
                <ul className="text-gray-300 text-xs sm:text-sm space-y-1 sm:space-y-1.5">
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span className="leading-snug">Lifetime MapChat+ Premium (worth $59.99/year)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span className="leading-snug">Exclusive Founder Badge & Profile Theme</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span className="leading-snug">Early access to new features & beta testing</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            <div className="relative flex items-center justify-center order-1 lg:order-2 mb-8 lg:mb-0">
              <AppDemo />
            </div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mt-12 sm:mt-16 lg:mt-20"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center px-2">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gradient mb-1 sm:mb-2">{stat.value}</div>
                <div className="text-gray-400 text-xs sm:text-sm lg:text-base">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-12 lg:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
              Everything You Need to <span className="text-gradient">Connect</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto px-4">
              Powerful features designed to bring people together through location-based communities
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="relative bg-gradient-to-br from-dark-light to-dark border border-gray-800 rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 hover:border-primary/50 transition-all group overflow-hidden"
              >
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Icon */}
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="relative w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-primary to-accent rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-5 lg:mb-6 shadow-lg shadow-primary/20 group-hover:shadow-primary/40 transition-shadow"
                >
                  <feature.icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-black" strokeWidth={2.5} />
                </motion.div>
                
                {/* Content */}
                <h3 className="relative text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 text-white group-hover:text-primary transition-colors">{feature.title}</h3>
                <p className="relative text-sm sm:text-base text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">{feature.description}</p>
                
                {/* Accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Simple, <span className="text-gradient">Transparent</span> Pricing
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Start for free, upgrade when you're ready for more features
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative bg-dark-light border rounded-2xl p-8 ${
                  plan.popular 
                    ? 'border-primary shadow-xl shadow-primary/20' 
                    : 'border-gray-800'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-primary text-black px-6 py-1 rounded-full text-sm font-bold">
                    Most Popular
                  </div>
                )}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-bold text-gradient">{plan.price}</span>
                    {plan.period && <span className="text-gray-400">{plan.period}</span>}
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-4 rounded-full font-bold text-lg transition ${
                  plan.popular
                    ? 'bg-gradient-primary text-black hover:shadow-lg hover:shadow-primary/50'
                    : 'bg-dark border border-gray-700 text-white hover:border-primary'
                }`}>
                  {plan.price === '$0' ? 'Get Started' : 'Upgrade Now'}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,245,212,0.15),transparent_70%)]" />
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Be the First to <span className="text-gradient">Connect</span>
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Join 50,000+ people on the waitlist for early access
            </p>
            <div className="max-w-md mx-auto">
              <WaitlistForm variant="hero" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer id="about" className="border-t border-gray-800 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Image src="/logo.png" alt="MapChat" width={32} height={32} className="rounded-lg" />
                <span className="text-lg font-bold text-gradient">MapChat</span>
              </div>
              <p className="text-gray-400 text-sm">
                Connecting people through location-based communities worldwide.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#features" className="hover:text-primary transition">Features</a></li>
                <li><a href="#pricing" className="hover:text-primary transition">Pricing</a></li>
                <li><a href="/download" className="hover:text-primary transition">Download</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="/about" className="hover:text-primary transition">About</a></li>
                <li><a href="/blog" className="hover:text-primary transition">Blog</a></li>
                <li><a href="/careers" className="hover:text-primary transition">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="/privacy" className="hover:text-primary transition">Privacy</a></li>
                <li><a href="/terms" className="hover:text-primary transition">Terms</a></li>
                <li><a href="/support" className="hover:text-primary transition">Support</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2024 MapChat. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
