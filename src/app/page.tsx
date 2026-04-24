import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Shahid Enterprises | Premium Natural Sheep & Goat Casings Exporter Pakistan',
  description: 'Leading Pakistan-based manufacturer and exporter of premium natural sheep casings, goat casings, and sausage casings since the 1970s. EU approved, HACCP certified, Halal compliant.',
  keywords: ['natural sheep casings exporter', 'halal sausage casings supplier', 'goat casings Pakistan', 'EU approved casings exporter', 'natural casings wholesale Europe', 'sheep casings Gulf market'],
  alternates: {
    canonical: 'https://shahidenterprises.com/',
  },
  openGraph: {
    title: 'Shahid Enterprises | Premium Natural Casings Exporter',
    description: 'Supplying top-grade natural sheep and goat casings to Europe & the Gulf since 1970.',
    url: 'https://shahidenterprises.com',
    siteName: 'Shahid Enterprises',
    images: [{ url: '/images/hero_home_8k.webp', width: 1200, height: 630 }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shahid Enterprises | Premium Natural Casings Exporter',
    description: 'Pakistan\'s trusted name in natural casings manufacturing and export.',
    images: ['/images/hero_home_8k.webp'],
  },
};
import Image from 'next/image';
import styles from './Home.module.css';
import SectionHeading from '@/components/SectionHeading';
import AnimatedSection from '@/components/AnimatedSection';
import StatCounter from '@/components/StatCounter';
import TestimonialCard from '@/components/TestimonialCard';
import CertificationStrip from '@/components/CertificationStrip';
import { EUFlag, UAEFlag } from '@/components/MarketIcons';
import WhyChooseUsGrid from '@/components/WhyChooseUsGrid';const testimonials = [
  {
    text: "Shahid Enterprises has been our trusted supplier for over 8 years. Their casings are consistently high quality and meet all EU standards. Highly recommended for any serious meat processor.",
    author: "Hans Mueller",
    company: "Mueller Fleisch GmbH",
    country: "Germany",
    rating: 5,
  },
  {
    text: "We switched to Shahid Enterprises two years ago and have never looked back. Their halal-certified casings are perfect for our market, and their export packaging ensures products arrive in pristine condition.",
    author: "Ahmed Al-Rashid",
    company: "Gulf Meat Industries",
    country: "UAE",
    rating: 5,
  },
  {
    text: "Excellent product quality and very professional export team. They handle all documentation seamlessly, making international procurement a breeze. A truly reliable partner.",
    author: "Pierre Dubois",
    company: "Charcuterie Artisanale",
    country: "France",
    rating: 5,
  },
];

export default function HomePage() {
  return (
    <>
      {/* ---- HERO ---- */}
      <section className={styles.hero} id="hero">
        <div className={styles.heroBg}>
          <Image 
            src="/images/hero_home_8k.webp" 
            alt="Premium natural sheep casings and goat casings for export — Shahid Enterprises Pakistan" 
            fill 
            priority 
            className={styles.heroImage}
            sizes="100vw"
          />
        </div>
        <div className={styles.heroPattern} />
        <div className={styles.heroContent}>
          <AnimatedSection>
            <div className={styles.heroBadge}>
              <span></span> Trusted Since the 1970s
            </div>
            <h1>
              Premium Natural Sheep Casings <em>for Europe & the Gulf</em>
            </h1>
            <p className={styles.heroSub}>
              Pakistan&apos;s leading manufacturer and exporter of high-quality natural sheep &amp; goat casings.
              EU approved, HACCP certified, and Halal compliant — serving international meat processing industries for over 50 years.
            </p>
            <div className={styles.heroCtas}>
              <Link href="/contact" id="hero-cta-quote" className="btn btn--accent btn--large">
                Get a Quote →
              </Link>
              <Link href="/products" id="hero-cta-products" className="btn btn--secondary btn--large">
                View Products
              </Link>
            </div>
          </AnimatedSection>
        </div>
        <div className={styles.scrollIndicator}>
          <span>Scroll</span>
          <div className={styles.scrollLine}></div>
        </div>
      </section>

      {/* ---- STATS BAR ---- */}
      <section className={styles.statsBar} id="stats">
        <div className={styles.statsGrid} id="stats-grid">
          <StatCounter end={50} suffix="+" label="Years Experience" />
          <StatCounter end={20} suffix="+" label="Export Countries" />
          <StatCounter end={500} suffix="+" label="Satisfied Clients" />
          <StatCounter end={100} suffix="%" label="Quality Assured" />
        </div>
      </section>

      {/* ---- WHY CHOOSE US ---- */}
      <section className={styles.whySection} id="why-choose-us">
        <div className="container">
          <AnimatedSection>
            <SectionHeading
              label="Why Shahid Enterprises"
              title="Decades of Excellence in Natural Casings"
              subtitle="We combine traditional craftsmanship with modern quality standards to deliver premium casings that meet the highest international benchmarks."
            />
          </AnimatedSection>
          <WhyChooseUsGrid />
        </div>
      </section>

      {/* ---- PRODUCTS PREVIEW ---- */}
      <section className={styles.productsPreview} id="products-preview">
        <div className="container">
          <AnimatedSection>
            <SectionHeading
              label="Our Products"
              title="Premium Natural Casings"
              subtitle="From traditional sheep casings to custom-sized goat casings — we offer a complete range for global meat processors."
            />
          </AnimatedSection>
          <div className={styles.productsGrid} id="products-grid">
            <AnimatedSection delay={0}>
              <Link href="/products" id="product-preview-sheep" className={styles.productCard}>
                <div className={styles.productCardImage}>
                  <Image src="/images/afghani_casings.webp" alt="Premium Afghani sheep casings being processed — natural casings for European and Gulf export" fill sizes="(max-width: 1024px) 100vw, 33vw" />
                </div>
                <div className={styles.productCardContent}>
                  <h3>Afghani Casings</h3>
                  <p>Premium quality Afghani sheep casings, sorted by caliber. Available in salted and dry-salted variants for sausage production.</p>
                  <span className={styles.productCardLink}>Learn More →</span>
                </div>
              </Link>
            </AnimatedSection>
            <AnimatedSection delay={100}>
              <Link href="/products" id="product-preview-goat" className={styles.productCard}>
                <div className={styles.productCardImage}>
                  <Image src="/images/goat_casings.webp" alt="Halal certified natural goat casings for international meat processors" fill sizes="(max-width: 1024px) 100vw, 33vw" />
                </div>
                <div className={styles.productCardContent}>
                  <h3>Goat Casings</h3>
                  <p>High-quality natural goat casings, processed to international food safety standards for specialized products.</p>
                  <span className={styles.productCardLink}>Learn More →</span>
                </div>
              </Link>
            </AnimatedSection>

          </div>
        </div>
      </section>

      {/* ---- CERTIFICATIONS STRIP ---- */}
      <CertificationStrip />

      {/* ---- GLOBAL MARKETS ---- */}
      <section className={styles.marketsSection} id="markets-preview">
        <div className="container">
          <AnimatedSection>
            <SectionHeading
              label="Global Reach"
              title="Exporting Across Europe & the Gulf"
              subtitle="Our casings are trusted by meat processors and food manufacturers across Europe and the Gulf."
            />
          </AnimatedSection>
          <div className={styles.marketsGrid} id="markets-grid">
            <AnimatedSection delay={0}>
              <div className={styles.marketCard} id="market-card-europe">
                <div className={styles.marketEmoji}>
                  <EUFlag className={styles.marketIconSvg} />
                </div>
                <h4>Europe</h4>
                <p>Germany, Netherlands, UK, France, Italy, Spain, Poland & more</p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={100}>
              <div className={styles.marketCard} id="market-card-gulf">
                <div className={styles.marketEmoji}>
                  <UAEFlag className={styles.marketIconSvg} />
                </div>
                <h4>Gulf & Middle East</h4>
                <p>UAE, Saudi Arabia, Qatar, Kuwait, Bahrain, Oman</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ---- TESTIMONIALS ---- */}
      <section className={styles.testimonialsSection} id="testimonials-preview">
        <div className="container">
          <AnimatedSection>
            <SectionHeading
              label="Client Testimonials"
              title="Trusted by International Buyers"
              subtitle="Hear from our international partners about their experience working with Shahid Enterprises."
            />
          </AnimatedSection>
          <div className={styles.testimonialsGrid} id="testimonials-grid">
            {testimonials.map((t, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <TestimonialCard {...t} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ---- CTA BANNER ---- */}
      <section className={styles.ctaBanner} id="cta-banner">
        <div className={styles.ctaContent}>
          <AnimatedSection>
            <h2>Ready to Source Premium Natural Casings?</h2>
            <p>Connect with our export team today. We respond to all inquiries within 24 hours.</p>
            <div className={styles.ctaBtns}>
              <Link href="/contact" id="cta-banner-quote" className="btn btn--accent btn--large">
                Request a Quote →
              </Link>
              <Link href="/products" id="cta-banner-products" className="btn btn--secondary btn--large">
                Browse Products
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
