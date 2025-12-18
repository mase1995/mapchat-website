import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    // Validate email
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // Insert into waitlist table
    const { data, error } = await supabase
      .from('waitlist')
      .insert([
        { 
          email: email.toLowerCase().trim(),
          source: 'website',
          metadata: {
            userAgent: request.headers.get('user-agent'),
            timestamp: new Date().toISOString()
          }
        }
      ])
      .select()

    if (error) {
      // Check for duplicate email (unique constraint violation)
      if (error.code === '23505') {
        return NextResponse.json(
          { error: 'This email is already on the waitlist!' },
          { status: 409 }
        )
      }
      
      console.error('Supabase error:', error)
      return NextResponse.json(
        { error: 'Failed to join waitlist. Please try again.' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { 
        success: true,
        message: 'Successfully joined the waitlist!',
        data 
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Waitlist API error:', error)
    return NextResponse.json(
      { error: 'An unexpected error occurred' },
      { status: 500 }
    )
  }
}
