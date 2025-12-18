import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0A0A0A',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Background glows */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle, rgba(0,245,212,0.3) 0%, transparent 70%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle, rgba(255,46,99,0.3) 0%, transparent 70%)',
          }}
        />
        
        
        {/* MapChat text with gradient and 3D effect */}
        <div
          style={{
            fontSize: 160,
            fontWeight: 900,
            background: 'linear-gradient(90deg, #00F5D4 0%, #04D9FF 50%, #FF2E63 100%)',
            backgroundClip: 'text',
            color: 'transparent',
            letterSpacing: '4px',
            textShadow: '4px 4px 0 #000, 5px 5px 0 #000, 6px 6px 0 #000, 7px 7px 0 #000, 8px 8px 15px rgba(0,0,0,0.9)',
          }}
        >
          MapChat
        </div>
        
        {/* Tagline */}
        <div
          style={{
            display: 'flex',
            fontSize: 56,
            marginTop: 30,
            gap: '12px',
          }}
        >
          <span style={{ color: '#9CA3AF' }}>Connect Anywhere,</span>
          <span
            style={{
              fontWeight: 800,
              background: 'linear-gradient(90deg, #00F5D4 0%, #04D9FF 50%, #FF2E63 100%)',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            Anytime
          </span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
