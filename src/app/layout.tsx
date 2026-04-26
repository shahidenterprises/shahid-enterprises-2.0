import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CookieConsent from "@/components/CookieConsent";

// Optimized Typography Configuration
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.shahid-enterprises.com"),
  title: {
    default: "Shahid Enterprises | Premium Natural Sheep & Goat Casings Exporter",
    template: "%s | Shahid Enterprises",
  },
  description: "Leading Pakistan-based manufacturer and exporter of premium natural sheep and goat casings since 1970. EU approved, HACCP certified, and Halal compliant.",
  keywords: ["natural sheep casings", "goat casings", "sausage casings exporter", "Pakistan casings manufacturer", "EU approved casings", "Halal casings"],
  authors: [{ name: "Shahid Enterprises" }],
  creator: "Shahid Enterprises",
  publisher: "Shahid Enterprises",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: '/icon.png', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.shahid-enterprises.com",
    siteName: "Shahid Enterprises",
    title: "Shahid Enterprises | Premium Natural Casings Exporter",
    description: "Premium Natural Sheep and Goat Casings from Pakistan. EU approved, HACCP certified exporter serving global food industries with quality since 1970.",
    images: [
      {
        url: "/images/hero_home_8k.webp",
        width: 1200,
        height: 630,
        alt: "Shahid Enterprises Premium Natural Casings",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shahid Enterprises | Premium Natural Casings Exporter",
    description: "Premium Natural Sheep and Goat Casings from Pakistan. EU approved, HACCP certified exporter serving global food industries with quality since 1970.",
    images: ["/images/hero_home_8k.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID || process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Shahid Enterprises",
    "url": "https://www.shahid-enterprises.com",
    "logo": "https://www.shahid-enterprises.com/images/logo.png",
    "description": "Premium Natural Sheep and Goat Casings Exporter from Pakistan since 1970s. EU approved, HACCP certified.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Behind Dream Land Cinema, Jilani Road",
      "addressLocality": "Multan",
      "addressRegion": "Punjab",
      "postalCode": "60000",
      "addressCountry": "PK"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+923059312383",
      "contactType": "sales",
      "availableLanguage": ["English", "Urdu"]
    },
    "sameAs": [
      "https://www.linkedin.com/in/shahid-enterprises-multan/",
      "https://wa.me/923059312383"
    ]
  };

  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        {/* Google Search Console Verification */}
        <meta name="google-site-verification" content="QCUSA14Kebt7Xq4tGVM5TCPO9FLJL__7AOKPKLXPW7E" />

        {/* Google Analytics GA4 — loaded in <head> */}
        {gaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="beforeInteractive"
            />
            <Script id="google-analytics" strategy="beforeInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}');
              `}
            </Script>
          </>
        )}

        {/* Structured Data / JSON-LD */}
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <CookieConsent />
      </body>
    </html>
  );
}

