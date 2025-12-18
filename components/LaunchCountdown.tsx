'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Clock } from 'lucide-react'

export default function LaunchCountdown() {
  const [mounted, setMounted] = useState(false)
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    setMounted(true)
    
    const targetDate = new Date('2026-02-01T00:00:00').getTime()

    const updateCountdown = () => {
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        })
      }
    }

    updateCountdown()
    const interval = setInterval(updateCountdown, 1000)

    return () => clearInterval(interval)
  }, [])

  if (!mounted) {
    return (
      <div className="w-full bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 border-y border-primary/20 py-4 sm:py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary" />
              <span className="text-white font-semibold text-sm sm:text-base">Launching in</span>
            </div>
            
            <div className="flex gap-2 sm:gap-4">
              {[
                { value: 45, label: 'Days' },
                { value: 0, label: 'Hours' },
                { value: 0, label: 'Mins' },
                { value: 0, label: 'Secs' }
              ].map((unit) => (
                <div key={unit.label} className="flex flex-col items-center">
                  <div className="bg-dark-light border border-primary/30 rounded-lg sm:rounded-xl px-3 py-2 sm:px-4 sm:py-3 min-w-[60px] sm:min-w-[80px]">
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gradient text-center">
                      {String(unit.value).padStart(2, '0')}
                    </div>
                  </div>
                  <span className="text-gray-400 text-xs sm:text-sm mt-1 sm:mt-2">{unit.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 border-y border-primary/20 py-4 sm:py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-primary" />
            <span className="text-white font-semibold text-sm sm:text-base">Launching in</span>
          </div>
          
          <div className="flex gap-2 sm:gap-4">
            {[
              { value: timeLeft.days, label: 'Days' },
              { value: timeLeft.hours, label: 'Hours' },
              { value: timeLeft.minutes, label: 'Mins' },
              { value: timeLeft.seconds, label: 'Secs' }
            ].map((unit, index) => (
              <motion.div
                key={unit.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center"
              >
                <div className="bg-dark-light border border-primary/30 rounded-lg sm:rounded-xl px-3 py-2 sm:px-4 sm:py-3 min-w-[60px] sm:min-w-[80px]">
                  <motion.div
                    key={unit.value}
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gradient text-center"
                  >
                    {String(unit.value).padStart(2, '0')}
                  </motion.div>
                </div>
                <span className="text-gray-400 text-xs sm:text-sm mt-1 sm:mt-2">{unit.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
