'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { MapPin, MessageCircle, Users, Send, MoreVertical, Camera, Mic } from 'lucide-react'
import { useState, useEffect, useRef, useCallback } from 'react'

const messagePool = [
  { user: 'Alex Chen', avatar: 'https://i.pravatar.cc/150?img=12', message: 'yo anyone here rn?', color: '#00F5D4' },
  { user: 'Sarah Miller', avatar: 'https://i.pravatar.cc/150?img=45', message: 'just walked past, looks packed', color: '#04D9FF' },
  { user: 'Mike Johnson', avatar: 'https://i.pravatar.cc/150?img=33', message: 'first time visiting, this is sick', color: '#FF2E63' },
  { user: 'Emma Davis', avatar: 'https://i.pravatar.cc/150?img=47', message: 'the view from the top is insane', color: '#FFB800' },
  { user: 'James Wilson', avatar: 'https://i.pravatar.cc/150?img=52', message: 'anyone tryna explore?', color: '#9D4EDD' },
  { user: 'Lisa Anderson', avatar: 'https://i.pravatar.cc/150?img=32', message: 'omg i come here all the time', color: '#00F5D4' },
  { user: 'David Lee', avatar: 'https://i.pravatar.cc/150?img=68', message: 'weather is perfect today', color: '#FF6B6B' },
  { user: 'Jessica Brown', avatar: 'https://i.pravatar.cc/150?img=23', message: 'met so many cool people already', color: '#4ECDC4' },
  { user: 'Ryan Martinez', avatar: 'https://i.pravatar.cc/150?img=59', message: 'taking pics if anyone wants in', color: '#95E1D3' },
  { user: 'Olivia Taylor', avatar: 'https://i.pravatar.cc/150?img=29', message: 'this app is a vibe', color: '#F38181' },
  { user: 'Marcus Johnson', avatar: 'https://i.pravatar.cc/150?img=14', message: 'grabbing food, who wants to come', color: '#FFC312' },
  { user: 'Sophia Rodriguez', avatar: 'https://i.pravatar.cc/150?img=42', message: 'never knew this spot existed', color: '#C44569' },
  { user: 'Tyler Chen', avatar: 'https://i.pravatar.cc/150?img=15', message: 'where is everyone at?', color: '#00D9FF' },
  { user: 'Maya Patel', avatar: 'https://i.pravatar.cc/150?img=38', message: 'brb getting coffee', color: '#FF6B9D' },
  { user: 'Jordan Kim', avatar: 'https://i.pravatar.cc/150?img=51', message: 'yo this is my first time using this', color: '#A8E6CF' },
  { user: 'Nina Santos', avatar: 'https://i.pravatar.cc/150?img=24', message: 'anyone know good photo spots?', color: '#FFD93D' },
  { user: 'Chris Anderson', avatar: 'https://i.pravatar.cc/150?img=56', message: 'just got off work, heading over now', color: '#6BCF7F' },
  { user: 'Zoe Williams', avatar: 'https://i.pravatar.cc/150?img=41', message: 'this place hits different at night', color: '#B4A7D6' },
  { user: 'Ethan Moore', avatar: 'https://i.pravatar.cc/150?img=13', message: 'who else is here solo?', color: '#FF8B94' },
  { user: 'Ava Martinez', avatar: 'https://i.pravatar.cc/150?img=28', message: 'literally love the energy here', color: '#00CFC1' },
  { user: 'Noah Clark', avatar: 'https://i.pravatar.cc/150?img=62', message: 'anyone down to walk around?', color: '#FFA07A' },
  { user: 'Mia Johnson', avatar: 'https://i.pravatar.cc/150?img=35', message: 'been here for an hour already lol', color: '#98D8C8' },
  { user: 'Lucas Brown', avatar: 'https://i.pravatar.cc/150?img=54', message: 'where yall at im by the fountain', color: '#F7DC6F' },
  { user: 'Isabella Garcia', avatar: 'https://i.pravatar.cc/150?img=44', message: 'this is way cooler than i expected', color: '#BB8FCE' },
  { user: 'Mason Taylor', avatar: 'https://i.pravatar.cc/150?img=67', message: 'just arrived, looks lit', color: '#85C1E2' },
  { user: 'Harper Lee', avatar: 'https://i.pravatar.cc/150?img=26', message: 'anyone been to the rooftop?', color: '#F8B500' },
  { user: 'Logan White', avatar: 'https://i.pravatar.cc/150?img=58', message: 'meeting new people is so easy here', color: '#52B788' },
  { user: 'Ella Davis', avatar: 'https://i.pravatar.cc/150?img=31', message: 'ngl this app is addicting', color: '#E63946' },
  { user: 'Jack Wilson', avatar: 'https://i.pravatar.cc/150?img=19', message: 'vibes are immaculate rn', color: '#06FFA5' },
  { user: 'Sofia Lopez', avatar: 'https://i.pravatar.cc/150?img=48', message: 'taking a break, anyone wanna chat?', color: '#FF006E' }
]

type Message = {
  id: number
  user: string
  avatar: string
  message: string
  color: string
  time: string
}

export default function PhoneMockup() {
  const [messages, setMessages] = useState<Message[]>([])
  const [isTyping, setIsTyping] = useState(false)
  const [onlineCount, setOnlineCount] = useState(234)
  const messageIdRef = useRef(0)
  const scrollRef = useRef<HTMLDivElement>(null)
  const typingTimeoutRef = useRef<NodeJS.Timeout>()
  const usedIndicesRef = useRef<Set<number>>(new Set())

  const scrollToBottom = useCallback(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [])

  const getRandomUniqueMessage = useCallback(() => {
    // Reset if we've used all messages
    if (usedIndicesRef.current.size >= messagePool.length) {
      usedIndicesRef.current.clear()
    }
    
    // Get unused index
    let randomIndex: number
    do {
      randomIndex = Math.floor(Math.random() * messagePool.length)
    } while (usedIndicesRef.current.has(randomIndex))
    
    usedIndicesRef.current.add(randomIndex)
    return messagePool[randomIndex]
  }, [])

  useEffect(() => {
    // Initialize with first 4 unique messages
    const initialMessages = messagePool.slice(0, 4).map((msg, idx) => {
      usedIndicesRef.current.add(idx)
      return {
        ...msg,
        id: messageIdRef.current++,
        time: new Date(Date.now() - (4 - idx) * 120000).toLocaleTimeString('en-US', { 
          hour: 'numeric', 
          minute: '2-digit' 
        })
      }
    })
    setMessages(initialMessages)
    
    // Scroll to bottom after initial render
    requestAnimationFrame(() => scrollToBottom())

    // Add new messages continuously
    const addMessage = () => {
      setIsTyping(true)
      
      typingTimeoutRef.current = setTimeout(() => {
        const randomMsg = getRandomUniqueMessage()
        const newMessage = {
          ...randomMsg,
          id: messageIdRef.current++,
          time: new Date().toLocaleTimeString('en-US', { 
            hour: 'numeric', 
            minute: '2-digit' 
          })
        }
        
        setMessages(prev => {
          const updated = [...prev, newMessage]
          // Keep last 5 messages for optimal performance
          return updated.slice(-5)
        })
        setIsTyping(false)
        
        // Update online count
        setOnlineCount(prev => Math.max(200, prev + Math.floor(Math.random() * 5) - 2))
        
        // Instant scroll to bottom
        requestAnimationFrame(() => scrollToBottom())
      }, 600)
    }

    // Add message every 3.5 seconds
    const interval = setInterval(addMessage, 3500)

    return () => {
      clearInterval(interval)
      if (typingTimeoutRef.current) {
        clearTimeout(typingTimeoutRef.current)
      }
    }
  }, [scrollToBottom, getRandomUniqueMessage])

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative"
    >
      {/* Phone Frame */}
      <div className="relative mx-auto w-[340px] h-[680px]">
        {/* Glow Effect */}
        <motion.div 
          animate={{ 
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-0 bg-gradient-to-br from-primary/30 via-accent/20 to-secondary/30 rounded-[3.5rem] blur-2xl"
        />
        
        {/* Phone Body */}
        <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-[3.5rem] p-2.5 shadow-2xl border-[5px] border-gray-800 h-full">
          {/* Dynamic Island */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-full z-10" />
          
          {/* Screen */}
          <div className="relative bg-black rounded-[3rem] h-full overflow-hidden">
            {/* Status Bar */}
            <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-black/80 to-transparent z-20 px-8 pt-3 flex justify-between items-center">
              <span className="text-white text-xs font-semibold">9:41</span>
              <div className="flex gap-1 items-center">
                <svg className="w-3.5 h-2.5" fill="white" viewBox="0 0 24 24">
                  <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"/>
                </svg>
                <div className="w-4 h-2.5 border-[1.5px] border-white rounded-sm relative">
                  <div className="absolute inset-0.5 bg-white rounded-[1px]" />
                  <div className="absolute -right-[2px] top-1/2 -translate-y-1/2 w-[1.5px] h-1.5 bg-white rounded-r-sm" />
                </div>
              </div>
            </div>

            {/* App Content - Chat Room Interface */}
            <div className="absolute inset-0 pt-12 pb-16">
              {/* Header */}
              <motion.div 
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.3 }}
                className="bg-gradient-to-b from-[#1a1a1a] to-[#1a1a1a]/98 backdrop-blur-xl border-b border-gray-800/50 px-3.5 py-2.5"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="relative w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-lg">
                      <MapPin className="w-4.5 h-4.5 text-black" fill="currentColor" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white font-bold text-sm tracking-tight">Times Square</h3>
                      <div className="text-gray-400 text-[11px] flex items-center gap-1.5">
                        <motion.span 
                          animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="w-1.5 h-1.5 bg-green-400 rounded-full"
                        />
                        <span>{onlineCount} online</span>
                      </div>
                    </div>
                  </div>
                  <button className="text-gray-400 p-1">
                    <MoreVertical className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>

              {/* Messages */}
              <div 
                ref={scrollRef}
                className="h-full overflow-y-scroll px-3.5 py-3 bg-gradient-to-b from-[#0a0a0a] via-[#0d0d0d] to-[#111111] [&::-webkit-scrollbar]:hidden"
                style={{ 
                  scrollbarWidth: 'none',
                  WebkitOverflowScrolling: 'touch'
                }}
              >
                
                <AnimatePresence initial={false} mode="popLayout">
                  {messages.map((msg, index) => (
                    <motion.div
                      key={msg.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ 
                        duration: 0.25,
                        ease: "easeOut"
                      }}
                      className="flex gap-2.5 items-start mb-3"
                    >
                      <div className="relative flex-shrink-0 mt-0.5">
                        <Image
                          src={msg.avatar}
                          alt={msg.user}
                          width={34}
                          height={34}
                          className="rounded-full ring-2 ring-gray-800/80"
                          priority={index < 3}
                        />
                        <div 
                          className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full border-2 border-[#0a0a0a]"
                          style={{ backgroundColor: msg.color }}
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-baseline gap-2 mb-0.5">
                          <span 
                            className="text-xs font-bold tracking-tight"
                            style={{ color: msg.color }}
                          >
                            {msg.user}
                          </span>
                          <span className="text-[10px] text-gray-500">
                            {msg.time}
                          </span>
                        </div>
                        <div className="bg-[#1a1a1a] border border-gray-800/50 rounded-2xl rounded-tl-sm px-3 py-2 inline-block max-w-[90%]">
                          <p className="text-white text-[13px] leading-relaxed">
                            {msg.message}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>

                {/* Typing Indicator */}
                <AnimatePresence>
                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      transition={{ duration: 0.2 }}
                      className="flex gap-2.5 items-center mb-3"
                    >
                      <div className="w-[34px] h-[34px] rounded-full bg-gradient-to-br from-gray-700 to-gray-800 ring-2 ring-gray-800/80" />
                      <div className="bg-[#1a1a1a] border border-gray-800/50 rounded-2xl px-4 py-2.5 flex gap-1.5">
                        {[0, 1, 2].map((i) => (
                          <motion.div
                            key={i}
                            animate={{
                              y: [-1, 2, -1],
                              opacity: [0.5, 1, 0.5]
                            }}
                            transition={{
                              duration: 0.6,
                              repeat: Infinity,
                              delay: i * 0.1,
                              ease: "easeInOut"
                            }}
                            className="w-1.5 h-1.5 bg-gray-500 rounded-full"
                          />
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Input Bar */}
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.3 }}
                className="absolute bottom-0 left-0 right-0 bg-[#1a1a1a]/98 backdrop-blur-xl border-t border-gray-800/50 px-3 py-2.5"
              >
                <div className="flex gap-2 items-center">
                  <button className="text-gray-400 p-1.5">
                    <Camera className="w-5 h-5" />
                  </button>
                  <div className="flex-1 bg-[#0f0f0f] border border-gray-800/50 rounded-full px-3.5 py-2 flex items-center">
                    <input 
                      type="text" 
                      placeholder="Message Times Square..." 
                      className="bg-transparent text-white text-xs flex-1 outline-none placeholder:text-gray-600"
                      disabled
                    />
                  </div>
                  <button className="text-gray-400 p-1.5">
                    <Mic className="w-5 h-5" />
                  </button>
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-lg"
                  >
                    <Send className="w-3.5 h-3.5 text-black translate-x-[1px]" fill="currentColor" />
                  </motion.button>
                </div>
              </motion.div>
            </div>

            {/* Bottom Navigation */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.3 }}
              className="absolute bottom-0 left-0 right-0 h-16 bg-[#0a0a0a]/98 backdrop-blur-xl border-t border-gray-800/50 flex justify-around items-center px-6 pb-1"
            >
              <motion.button 
                whileTap={{ scale: 0.85 }}
                className="flex flex-col items-center gap-0.5 py-1"
              >
                <div className="w-9 h-9 bg-primary/15 rounded-2xl flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" fill="currentColor" />
                </div>
                <div className="w-1 h-1 bg-primary rounded-full" />
              </motion.button>
              
              <motion.button 
                whileTap={{ scale: 0.85 }}
                className="flex flex-col items-center gap-1 py-1"
              >
                <MessageCircle className="w-6 h-6 text-gray-600" strokeWidth={2} />
              </motion.button>
              
              <motion.button 
                whileTap={{ scale: 0.85 }}
                className="flex flex-col items-center gap-1 py-1"
              >
                <Users className="w-6 h-6 text-gray-600" strokeWidth={2} />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
