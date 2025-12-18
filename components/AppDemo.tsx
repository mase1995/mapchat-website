'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, MessageCircle, Users, Send, X, Plus, Sparkles, Settings } from 'lucide-react'
import { useState, useEffect } from 'react'
import Image from 'next/image'

type Screen = 'map' | 'createPin' | 'chat' | 'feed' | 'dm'

// Unique chat messages - no duplicates
const uniqueMessages = [
  { id: 1, user: 'Alex Chen', text: 'yo anyone down to explore?', avatar: 'https://i.pravatar.cc/150?img=12' },
  { id: 2, user: 'Sarah Miller', text: 'just got here, where is everyone?', avatar: 'https://i.pravatar.cc/150?img=45' },
  { id: 3, user: 'Mike Torres', text: 'grabbing coffee anyone want to join', avatar: 'https://i.pravatar.cc/150?img=33' },
  { id: 4, user: 'Emma Davis', text: 'this spot is amazing', avatar: 'https://i.pravatar.cc/150?img=47' },
  { id: 5, user: 'Jordan Lee', text: 'first time here what should i check out', avatar: 'https://i.pravatar.cc/150?img=51' },
]

// DM conversation
const dmMessages = [
  { id: 1, text: 'hey! are you free to meet up?', sent: false },
  { id: 2, text: 'yeah definitely! where at?', sent: true },
  { id: 3, text: 'lets do times square in 20?', sent: false },
  { id: 4, text: 'perfect see you there', sent: true },
]

// Feed posts with photos
const feedPosts = [
  { id: 1, user: 'Nina Santos', avatar: 'https://i.pravatar.cc/150?img=24', text: 'best sunset view in the city 🌅', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop', likes: 234 },
  { id: 2, user: 'Chris Anderson', avatar: 'https://i.pravatar.cc/150?img=56', text: 'coffee shop vibes ☕', image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800&h=600&fit=crop', likes: 189 },
  { id: 3, user: 'Maya Patel', avatar: 'https://i.pravatar.cc/150?img=38', text: 'exploring times square rn', image: 'https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?w=800&h=600&fit=crop', likes: 421 },
]

export default function AppDemo() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('map')
  const [showPinPrompt, setShowPinPrompt] = useState(false)
  const [messages, setMessages] = useState<Array<{ id: number; user: string; text: string; avatar: string }>>([])
  const [visiblePosts, setVisiblePosts] = useState<number>(0)
  const [visibleDMs, setVisibleDMs] = useState<number>(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    // Animation sequence
    const sequence = async () => {
      // Reset state at the start of each cycle
      setMessages([])
      setVisiblePosts(0)
      setVisibleDMs(0)
      
      // Start on map
      setCurrentScreen('map')
      await new Promise(resolve => setTimeout(resolve, 2500))
      
      // Show FAB press hint
      setShowPinPrompt(true)
      await new Promise(resolve => setTimeout(resolve, 1800))
      
      // Transition to create pin
      setCurrentScreen('createPin')
      setShowPinPrompt(false)
      await new Promise(resolve => setTimeout(resolve, 2800))
      
      // Transition to chat room
      setCurrentScreen('chat')
      await new Promise(resolve => setTimeout(resolve, 800))
      
      // Add messages one by one
      for (let i = 0; i < uniqueMessages.length; i++) {
        await new Promise(resolve => setTimeout(resolve, 1400))
        setMessages([...uniqueMessages.slice(0, i + 1)])
      }
      
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Show DM conversation
      setCurrentScreen('dm')
      await new Promise(resolve => setTimeout(resolve, 500))
      
      // Load DMs one by one
      for (let i = 1; i <= dmMessages.length; i++) {
        await new Promise(resolve => setTimeout(resolve, 1000))
        setVisibleDMs(i)
      }
      
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Show feed at the end
      setCurrentScreen('feed')
      await new Promise(resolve => setTimeout(resolve, 500))
      
      // Load feed posts one by one
      for (let i = 1; i <= feedPosts.length; i++) {
        await new Promise(resolve => setTimeout(resolve, 800))
        setVisiblePosts(i)
      }
      
      // Wait then restart
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Restart sequence
      sequence()
    }
    
    sequence()
  }, [])

  if (!mounted) {
    return (
      <div className="w-full max-w-[320px] mx-auto aspect-[9/19.5] bg-black rounded-[3rem] p-3 shadow-2xl border border-[#A6FFF4]/20">
        <div className="w-full h-full bg-black rounded-[2.5rem] overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-br from-[#A6FFF4]/10 to-[#FF2E63]/10" />
        </div>
      </div>
    )
  }

  return (
    <div className="w-full max-w-[320px] mx-auto">
      {/* Phone Frame */}
      <div className="relative aspect-[9/19.5] bg-black rounded-[3rem] p-3 shadow-2xl border border-[#A6FFF4]/20">
        {/* Screen */}
        <div className="relative w-full h-full bg-black rounded-[2.5rem] overflow-hidden">
          {/* Status Bar */}
          <div className="absolute top-0 left-0 right-0 h-12 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-between px-6">
            <span className="text-white text-xs font-medium">9:41</span>
            <div className="flex items-center gap-1">
              <div className="w-0.5 h-3 bg-[#A6FFF4] rounded-full" />
              <div className="w-0.5 h-4 bg-[#A6FFF4] rounded-full" />
              <div className="w-0.5 h-5 bg-[#A6FFF4] rounded-full" />
            </div>
          </div>

          <AnimatePresence mode="wait">
            {/* FEED SCREEN */}
            {currentScreen === 'feed' && (
              <motion.div
                key="feed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 bg-[#0a0a0a]"
              >
                {/* Header */}
                <div className="h-16 bg-black/90 backdrop-blur-xl border-b border-[#A6FFF4]/20 flex items-center justify-between px-4 mt-12">
                  <span className="text-white font-bold text-lg">Feed</span>
                  <div className="flex items-center gap-3">
                    <Plus className="w-6 h-6 text-[#A6FFF4]" />
                  </div>
                </div>

                {/* Feed Content */}
                <div className="h-[calc(100%-144px)] overflow-hidden">
                  <div className="p-4 space-y-4">
                    <AnimatePresence>
                      {feedPosts.slice(0, visiblePosts).map((post, idx) => (
                        <motion.div
                          key={post.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4 }}
                          className="bg-[#1a1a1a] border border-[#A6FFF4]/10 rounded-2xl overflow-hidden"
                        >
                          {/* Post Header */}
                          <div className="flex items-center gap-3 p-3">
                            <Image
                              src={post.avatar}
                              alt={post.user}
                              width={40}
                              height={40}
                              className="rounded-full border-2 border-[#A6FFF4]/30"
                            />
                            <div className="flex-1">
                              <div className="text-[#A6FFF4] text-sm font-bold">{post.user}</div>
                              <div className="text-gray-500 text-xs">2h ago • Times Square</div>
                            </div>
                          </div>

                          {/* Post Image */}
                          <div className="w-full aspect-[4/3] bg-gray-900">
                            <Image
                              src={post.image}
                              alt="Post"
                              width={800}
                              height={600}
                              className="w-full h-full object-cover"
                            />
                          </div>

                          {/* Post Actions */}
                          <div className="p-3 space-y-2">
                            <div className="flex items-center gap-4">
                              <div className="flex items-center gap-1.5">
                                <div className="w-5 h-5 rounded-full bg-[#FF2E63] flex items-center justify-center">
                                  <span className="text-white text-xs">❤</span>
                                </div>
                                <span className="text-gray-400 text-xs font-semibold">{post.likes}</span>
                              </div>
                              <MessageCircle className="w-5 h-5 text-gray-500" />
                              <Send className="w-5 h-5 text-gray-500" />
                            </div>
                            <div className="text-white text-sm">
                              <span className="text-[#A6FFF4] font-bold">{post.user}</span>
                              {' '}{post.text}
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Bottom Navigation */}
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-black/90 backdrop-blur-xl border-t border-[#A6FFF4]/20 flex items-center justify-around px-6">
                  <MessageCircle className="w-6 h-6 text-[#A6FFF4]" />
                  <MapPin className="w-6 h-6 text-gray-500" />
                  <Users className="w-6 h-6 text-gray-500" />
                  <Settings className="w-6 h-6 text-gray-500" />
                </div>
              </motion.div>
            )}

            {/* MAP SCREEN */}
            {currentScreen === 'map' && (
              <motion.div
                key="map"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 bg-[#0a0a0a]"
              >
                {/* Realistic Map Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
                  {/* Grid lines for roads */}
                  <svg className="absolute inset-0 w-full h-full opacity-20">
                    {[...Array(20)].map((_, i) => (
                      <line
                        key={`h-${i}`}
                        x1="0"
                        y1={i * 30}
                        x2="100%"
                        y2={i * 30}
                        stroke="#666"
                        strokeWidth="0.5"
                      />
                    ))}
                    {[...Array(15)].map((_, i) => (
                      <line
                        key={`v-${i}`}
                        x1={i * 25}
                        y1="0"
                        x2={i * 25}
                        y2="100%"
                        stroke="#666"
                        strokeWidth="0.5"
                      />
                    ))}
                  </svg>

                  {/* Map labels */}
                  <div className="absolute top-20 left-8 text-xs text-gray-600 font-semibold">Times Square</div>
                  <div className="absolute top-32 right-12 text-xs text-gray-600">Broadway</div>
                  <div className="absolute bottom-40 left-16 text-xs text-gray-600">7th Ave</div>
                </div>

                {/* User location indicator (center) */}
                <motion.div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <div className="relative">
                    <div className="w-4 h-4 bg-[#A6FFF4] rounded-full border-2 border-white shadow-lg shadow-[#A6FFF4]/50" />
                    <div className="absolute inset-0 w-4 h-4 bg-[#A6FFF4] rounded-full animate-ping opacity-75" />
                  </div>
                </motion.div>

                {/* Active room pins scattered */}
                {[
                  { top: '25%', left: '35%', active: 12 },
                  { top: '45%', left: '65%', active: 8 },
                  { top: '60%', left: '30%', active: 23 },
                  { top: '35%', left: '75%', active: 5 },
                  { top: '70%', left: '55%', active: 15 },
                ].map((pos, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: i * 0.15 + 0.5 }}
                    className="absolute"
                    style={{ top: pos.top, left: pos.left }}
                  >
                    <div className="relative">
                      <MapPin className="w-7 h-7 text-[#A6FFF4] fill-[#A6FFF4]/20 drop-shadow-[0_0_8px_rgba(166,255,244,0.6)]" />
                      <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#FF2E63] rounded-full flex items-center justify-center text-[8px] font-bold text-white border border-black">
                        {pos.active}
                      </div>
                    </div>
                  </motion.div>
                ))}

                {/* FAB Button (bottom right) */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="absolute bottom-24 right-4"
                >
                  <motion.div
                    animate={showPinPrompt ? { scale: [1, 1.1, 1] } : {}}
                    transition={{ duration: 0.6, repeat: showPinPrompt ? Infinity : 0 }}
                    className="relative"
                  >
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#A6FFF4] via-[#8FE8DD] to-[#FF2E63] p-0.5 shadow-lg shadow-[#A6FFF4]/50">
                      <div className="w-full h-full bg-black rounded-full flex items-center justify-center">
                        <Plus className="w-7 h-7 text-[#A6FFF4]" strokeWidth={3} />
                      </div>
                    </div>
                    {showPinPrompt && (
                      <motion.div
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="absolute right-16 top-1/2 -translate-y-1/2 bg-[#A6FFF4] px-4 py-2 rounded-full whitespace-nowrap"
                      >
                        <span className="text-black font-bold text-xs">Tap to create room</span>
                      </motion.div>
                    )}
                  </motion.div>
                </motion.div>

                {/* Stats counter */}
                <motion.div
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="absolute top-16 left-4 right-4 flex items-center justify-between"
                >
                  <div className="bg-black/60 backdrop-blur-md border border-[#A6FFF4]/30 rounded-full px-3 py-2 flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#A6FFF4] rounded-full animate-pulse" />
                    <span className="text-white text-xs font-semibold">63 rooms nearby</span>
                  </div>
                </motion.div>

                {/* Bottom Navigation */}
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-black/90 backdrop-blur-xl border-t border-[#A6FFF4]/20 flex items-center justify-around px-6">
                  <MapPin className="w-6 h-6 text-[#A6FFF4]" />
                  <MessageCircle className="w-6 h-6 text-gray-500" />
                  <Users className="w-6 h-6 text-gray-500" />
                  <Settings className="w-6 h-6 text-gray-500" />
                </div>
              </motion.div>
            )}

            {/* CREATE PIN SCREEN */}
            {currentScreen === 'createPin' && (
              <motion.div
                key="createPin"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 bg-[#0a0a0a]"
              >
                {/* Header */}
                <div className="h-16 bg-black/90 backdrop-blur-xl border-b border-[#A6FFF4]/20 flex items-center justify-between px-4 mt-12">
                  <X className="w-6 h-6 text-gray-500" />
                  <span className="text-white font-bold">Create Room</span>
                  <div className="w-6" />
                </div>

                {/* Form */}
                <div className="p-5 space-y-5">
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="space-y-2"
                  >
                    <label className="text-[#A6FFF4] text-xs font-semibold">ROOM NAME</label>
                    <motion.div 
                      className="bg-[#1a1a1a] border rounded-xl px-4 py-3"
                      initial={{ borderColor: 'rgba(166,255,244,0.3)' }}
                      animate={{ borderColor: ['rgba(166,255,244,0.3)', 'rgba(166,255,244,0.6)', 'rgba(166,255,244,0.3)'] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <motion.span 
                        className="text-white font-medium"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                      >
                        Times Square Hangout
                      </motion.span>
                    </motion.div>
                  </motion.div>

                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="space-y-2"
                  >
                    <label className="text-[#A6FFF4] text-xs font-semibold">LOCATION</label>
                    <div className="bg-[#1a1a1a] border border-[#A6FFF4]/20 rounded-xl px-4 py-3 flex items-center gap-3">
                      <MapPin className="w-4 h-4 text-[#A6FFF4]" />
                      <span className="text-gray-300 text-sm">Times Square, NYC</span>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="space-y-2"
                  >
                    <label className="text-[#A6FFF4] text-xs font-semibold">DESCRIPTION (OPTIONAL)</label>
                    <div className="bg-[#1a1a1a] border border-[#A6FFF4]/20 rounded-xl px-4 py-3">
                      <span className="text-gray-500 text-sm">Come hang out and meet people!</span>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1.8 }}
                    className="pt-6"
                  >
                    <div className="bg-gradient-to-r from-[#A6FFF4] to-[#8FE8DD] p-0.5 rounded-xl">
                      <button className="w-full bg-[#A6FFF4] py-3.5 rounded-xl text-black font-bold text-sm flex items-center justify-center gap-2">
                        <Plus className="w-4 h-4" />
                        Create & Join Room
                      </button>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            )}

            {/* CHAT SCREEN */}
            {currentScreen === 'chat' && (
              <motion.div
                key="chat"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 bg-[#0a0a0a]"
              >
                {/* Chat Header */}
                <div className="h-16 bg-black/90 backdrop-blur-xl border-b border-[#A6FFF4]/20 flex items-center justify-between px-4 mt-12">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-[#A6FFF4]" />
                    <div>
                      <div className="text-white font-bold text-sm">Times Square Hangout</div>
                      <div className="flex items-center gap-1.5 text-xs text-[#A6FFF4]">
                        <div className="w-1.5 h-1.5 bg-[#A6FFF4] rounded-full animate-pulse" />
                        <span>23 online</span>
                      </div>
                    </div>
                  </div>
                  <Users className="w-5 h-5 text-gray-500" />
                </div>

                {/* Messages */}
                <div className="flex-1 p-4 space-y-3 h-[calc(100%-180px)] overflow-hidden">
                  <AnimatePresence>
                    {messages.map((msg) => (
                      <motion.div
                        key={msg.id}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex items-start gap-2.5"
                      >
                        <div className="relative">
                          <Image
                            src={msg.avatar}
                            alt={msg.user}
                            width={36}
                            height={36}
                            className="rounded-full border-2 border-[#A6FFF4]/30"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-[#A6FFF4] text-xs font-bold">{msg.user}</span>
                            <span className="text-gray-600 text-[10px]">now</span>
                          </div>
                          <div className="bg-[#1a1a1a] border border-[#A6FFF4]/10 rounded-2xl rounded-tl-sm px-3.5 py-2.5 max-w-[85%]">
                            <span className="text-white text-sm leading-relaxed">{msg.text}</span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>

                {/* Input */}
                <div className="absolute bottom-0 left-0 right-0 bg-black/90 backdrop-blur-xl border-t border-[#A6FFF4]/20 p-4">
                  <div className="bg-[#1a1a1a] border border-[#A6FFF4]/30 rounded-full px-4 py-3 flex items-center gap-3">
                    <span className="text-gray-600 text-sm flex-1">Message...</span>
                    <div className="w-7 h-7 bg-[#A6FFF4] rounded-full flex items-center justify-center">
                      <Send className="w-4 h-4 text-black" />
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* DM SCREEN */}
            {currentScreen === 'dm' && (
              <motion.div
                key="dm"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 bg-[#0a0a0a]"
              >
                {/* DM Header */}
                <div className="h-16 bg-black/90 backdrop-blur-xl border-b border-[#A6FFF4]/20 flex items-center justify-between px-4 mt-12">
                  <div className="flex items-center gap-3">
                    <Image
                      src="https://i.pravatar.cc/150?img=45"
                      alt="Sarah Miller"
                      width={40}
                      height={40}
                      className="rounded-full border-2 border-[#A6FFF4]/30"
                    />
                    <div>
                      <div className="text-white font-bold text-sm">Sarah Miller</div>
                      <div className="flex items-center gap-1.5 text-xs text-[#A6FFF4]">
                        <div className="w-1.5 h-1.5 bg-[#A6FFF4] rounded-full animate-pulse" />
                        <span>Active now</span>
                      </div>
                    </div>
                  </div>
                  <MessageCircle className="w-5 h-5 text-gray-500" />
                </div>

                {/* DM Messages */}
                <div className="flex-1 p-4 space-y-2 h-[calc(100%-180px)] overflow-hidden flex flex-col justify-end">
                  <AnimatePresence>
                    {dmMessages.slice(0, visibleDMs).map((msg) => (
                      <motion.div
                        key={msg.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className={`flex ${msg.sent ? 'justify-end' : 'justify-start'}`}
                      >
                        <div
                          className={`max-w-[75%] px-4 py-2.5 rounded-2xl ${
                            msg.sent
                              ? 'bg-gradient-to-br from-[#A6FFF4] to-[#8FE8DD] text-black rounded-br-sm'
                              : 'bg-[#1a1a1a] border border-[#A6FFF4]/10 text-white rounded-bl-sm'
                          }`}
                        >
                          <span className="text-sm">{msg.text}</span>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>

                {/* DM Input */}
                <div className="absolute bottom-0 left-0 right-0 bg-black/90 backdrop-blur-xl border-t border-[#A6FFF4]/20 p-4">
                  <div className="bg-[#1a1a1a] border border-[#A6FFF4]/30 rounded-full px-4 py-3 flex items-center gap-3">
                    <span className="text-gray-600 text-sm flex-1">Message Sarah...</span>
                    <div className="w-7 h-7 bg-[#A6FFF4] rounded-full flex items-center justify-center">
                      <Send className="w-4 h-4 text-black" />
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Home indicator */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/30 rounded-full" />
      </div>
    </div>
  )
}
