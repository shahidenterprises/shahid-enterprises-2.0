import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CookieConsent from "@/components/CookieConsent";

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
  // ... (will update metadata fully in Phase 5, but adding canonical placeholder now)
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
  const gaId = process.env.NEXT_PUBLIC_GA_ID || process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Shahid Enterprises",
    "url": "https://shahidenterprises.com",
    "logo": "https://shahidenterprises.com/images/logo.png",
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
        <CookieConsent />
      </body>
    </html>
  );
}

