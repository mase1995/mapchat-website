'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Loading() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,245,212,0.15),transparent_70%)]" />
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-[#00F5D4]/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#FF2E63]/10 rounded-full blur-[120px] animate-pulse" />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative z-10 flex flex-col items-center"
      >
        {/* Logo with pulse animation */}
        <motion.div
          animate={{ 
            scale: [1, 1.05, 1],
            opacity: [0.9, 1, 0.9]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="w-40 h-40 rounded-3xl flex items-center justify-center mb-8 shadow-2xl shadow-[#00F5D4]/30"
        >
          <Image
            src="/logo.png"
            alt="MapChat Logo"
            width={160}
            height={160}
            className="rounded-3xl"
            priority
          />
        </motion.div>
        
        {/* Loading dots */}
        <div className="flex gap-2 mb-4">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{
                y: [-4, 4, -4],
                opacity: [0.3, 1, 0.3]
              }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                delay: i * 0.15,
                ease: "easeInOut"
              }}
              className="w-3 h-3 rounded-full bg-gradient-to-r from-[#00F5D4] to-[#04D9FF]"
            />
          ))}
        </div>
        
        {/* Loading text */}
        <motion.p
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-gray-400 text-sm font-medium"
        >
          Loading MapChat...
        </motion.p>
      </motion.div>
    </div>
  )
}
