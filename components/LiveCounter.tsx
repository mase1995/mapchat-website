'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { TrendingUp } from 'lucide-react'

export default function LiveCounter() {
  const [count, setCount] = useState(847)
  const [showPulse, setShowPulse] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    // Increment counter every 8-15 seconds randomly
    const interval = setInterval(() => {
      const increment = Math.floor(Math.random() * 3) + 1 // 1-3 signups
      setCount(prev => prev + increment)
      setShowPulse(true)
      setTimeout(() => setShowPulse(false), 1000)
    }, Math.random() * 7000 + 8000) // 8-15 seconds

    return () => clearInterval(interval)
  }, [])

  if (!mounted) {
    return (
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full">
        <TrendingUp className="w-4 h-4 text-primary" />
        <span className="text-primary text-sm font-semibold">
          847 joined in the last 24h
        </span>
      </div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ 
        opacity: 1, 
        scale: showPulse ? [1, 1.05, 1] : 1 
      }}
      transition={{ duration: 0.3 }}
      className="relative inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full overflow-hidden"
    >
      <TrendingUp className="w-4 h-4 text-primary animate-pulse" />
      <span className="text-primary text-sm font-semibold">
        <motion.span
          key={count}
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="inline-block"
        >
          {count.toLocaleString()}
        </motion.span>
        {' '}joined in the last 24h
      </span>
    </motion.div>
  )
}
