'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Check, Loader2 } from 'lucide-react'

export default function WaitlistForm({ variant = 'default' }: { variant?: 'default' | 'hero' }) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus('success')
        setMessage('You\'re on the list! We\'ll notify you when we launch.')
        setEmail('')

        setTimeout(() => {
          setStatus('idle')
          setMessage('')
        }, 5000)
      } else {
        setStatus('error')
        setMessage(data.error || 'Failed to join waitlist. Please try again.')
        
        setTimeout(() => {
          setStatus('idle')
          setMessage('')
        }, 5000)
      }
    } catch (error) {
      setStatus('error')
      setMessage('Network error. Please check your connection and try again.')
      
      setTimeout(() => {
        setStatus('idle')
        setMessage('')
      }, 5000)
    }
  }

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className={`flex items-center gap-3 ${
          variant === 'hero' 
            ? 'bg-primary/10 border border-primary/20 text-primary px-6 py-4 rounded-full' 
            : 'bg-green-500/10 border border-green-500/20 text-green-400 px-4 py-3 rounded-lg'
        }`}
      >
        <Check className="w-5 h-5" />
        <span className="font-semibold">{message}</span>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className={`flex ${variant === 'hero' ? 'flex-col sm:flex-row' : 'flex-col'} gap-3`}>
        <div className="relative flex-1">
          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            disabled={status === 'loading'}
            className={`w-full bg-dark-light border border-gray-700 text-white pl-12 pr-4 rounded-full outline-none focus:border-primary transition disabled:opacity-50 ${
              variant === 'hero' ? 'py-4' : 'py-3'
            }`}
          />
        </div>
        <button
          type="submit"
          disabled={status === 'loading'}
          className={`bg-gradient-primary text-black font-bold rounded-full hover:shadow-lg hover:shadow-primary/50 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 whitespace-nowrap ${
            variant === 'hero' ? 'px-8 py-4 text-lg' : 'px-6 py-3'
          }`}
        >
          {status === 'loading' ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Joining...
            </>
          ) : (
            'Join Waitlist'
          )}
        </button>
      </div>
      {status === 'error' && (
        <p className="text-red-400 text-sm mt-2">{message}</p>
      )}
    </form>
  )
}
