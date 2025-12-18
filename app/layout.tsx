import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MapChat - Connect Anywhere, Anytime',
  description: 'Join location-based chat rooms, discover landmarks, and connect with people around the world. MapChat brings social connection to your favorite places.',
  keywords: ['chat', 'location-based', 'social', 'messaging', 'landmarks', 'map', 'community'],
  authors: [{ name: 'MapChat Team' }],
  openGraph: {
    title: 'MapChat - Connect Anywhere, Anytime',
    description: 'Join location-based chat rooms and connect with people around the world',
    type: 'website',
    images: ['/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MapChat - Connect Anywhere, Anytime',
    description: 'Join location-based chat rooms and connect with people around the world',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
