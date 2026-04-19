import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with API Key
const resend = new Resend(process.env.RESEND_API_KEY);

// Basic in-memory rate limiting (IP-based)
// Note: For production on Vercel Edge/Serverless, consider using Vercel KV or Upstash
const ipCache = new Map<string, number>();
const RATE_LIMIT_MS = 60 * 1000; // 1 minute window
const MAX_REQUESTS = 2; // Max 2 requests per minute per IP

export async function POST(request: Request) {
  try {
    const ip = request.headers.get('x-forwarded-for') || '127.0.0.1';
    const now = Date.now();
    
    // Rate Limiting Check
    const lastRequest = ipCache.get(ip);
    if (lastRequest && (now - lastRequest < RATE_LIMIT_MS)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again in a minute.' },
        { status: 429 }
      );
    }
    ipCache.set(ip, now);

    const body = await request.json();
    const { name, email, phone, company, country, product, message, website_url } = body;

    // Honeypot validation
    if (website_url) {
      console.warn('🤖 Bot detected via honeypot field');
      return NextResponse.json(
        { success: true, message: 'Your inquiry has been received.' }, 
        { status: 200 }
      );
    }

    // Validation
    if (!name || !email || !country || !product || !message) {
      return NextResponse.json(
        { error: 'Please fill in all required fields.' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Shahid Enterprises Inquiry <onboarding@resend.dev>',
      to: process.env.TO_EMAIL || 'shahidenterprises35@gmail.com',
      subject: `New Inquiry from ${name} (${country})`,
      replyTo: email,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <h2 style="color: #0B5D1E; border-bottom: 2px solid #C8962E; padding-bottom: 10px;">New Export Inquiry</h2>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;"><strong>Name:</strong></td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;"><strong>Email:</strong></td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;"><strong>Phone:</strong></td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;">${phone || 'N/A'}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;"><strong>Company:</strong></td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;">${company || 'N/A'}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;"><strong>Country:</strong></td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;">${country}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;"><strong>Product Interest:</strong></td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;">${product}</td>
            </tr>
          </table>

          <div style="margin-top: 30px; padding: 15px; background-color: #f9f9f9; border-radius: 4px;">
            <p style="margin-top: 0; color: #666;"><strong>Message:</strong></p>
            <p style="line-height: 1.6; color: #333;">${message}</p>
          </div>

          <p style="font-size: 12px; color: #999; margin-top: 40px; text-align: center;">
            This email was sent from the contact form on shahidenterprises.com
          </p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend Error:', error);
      return NextResponse.json(
        { error: 'Failed to send your inquiry. Please try again later.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Your inquiry has been received. We will respond within 24 hours.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again later.' },
      { status: 500 }
    );
  }
}
