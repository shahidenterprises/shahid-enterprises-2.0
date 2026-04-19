import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

// Optimized Fonts
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
  title: {
    default: "Shahid Enterprises — Premium Natural Sheep Casings Exporter from Pakistan",
    template: "%s | Shahid Enterprises",
  },
  description:
    "Shahid Enterprises is a leading Pakistan-based manufacturer and exporter of premium natural sheep casings, goat casings, and sausage casings since the 1970s. EU approved, HACCP certified, Halal compliant. Supplying Europe and the Gulf region.",
  keywords: [
    "sheep casings supplier Europe",
    "halal sheep casing exporter",
    "natural sausage casing Pakistan",
    "sheep casings Gulf supplier",
    "EU approved casing exporter",
    "goat casings manufacturer",
    "natural casings wholesale",
    "Pakistan casings exporter",
  ],
  authors: [{ name: "Shahid Enterprises" }],
  creator: "Shahid Enterprises",
  publisher: "Shahid Enterprises",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Shahid Enterprises — Premium Natural Casings Exporter",
    description:
      "Leading manufacturer and exporter of premium natural sheep and goat casings since the 1970s. EU approved, HACCP certified, serving global markets.",
    url: "https://shahidenterprises.com",
    siteName: "Shahid Enterprises",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Shahid Enterprises - Premium Natural Casings",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shahid Enterprises — Premium Natural Casings Exporter",
    description:
      "Leading manufacturer and exporter of premium natural sheep and goat casings since the 1970s.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GSC_VERIFICATION,
  },
  metadataBase: new URL("https://shahidenterprises.com"),
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Shahid Enterprises",
    "url": "https://shahidenterprises.com",
    "logo": "https://shahidenterprises.com/logo.png",
    "description": "Premium Natural Sheep and Goat Casings Exporter from Pakistan since 1970s.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Behind Dream Land Cinema, Jilani Road",
      "addressLocality": "Multan",
      "addressCountry": "PK"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+923059312383",
      "contactType": "sales",
      "availableLanguage": ["English", "Urdu"]
    },
    "sameAs": [
      "https://www.linkedin.com/in/shahid-enterprises-multan/"
    ]
  };

  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        {gaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}');
              `}
            </Script>
          </>
        )}
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
      </body>
    </html>
  );
}
