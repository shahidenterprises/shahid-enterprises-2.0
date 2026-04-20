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
    images: [{ url: '/images/hero_home_8k.png', width: 1200, height: 630 }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shahid Enterprises | Premium Natural Casings Exporter',
    description: 'Pakistan\'s trusted name in natural casings manufacturing and export.',
    images: ['/images/hero_home_8k.png'],
  },
};
import Image from 'next/image';
import styles from './Home.module.css';
import SectionHeading from '@/components/SectionHeading';
import AnimatedSection from '@/components/AnimatedSection';
import StatCounter from '@/components/StatCounter';
import TestimonialCard from '@/components/TestimonialCard';

const testimonials = [
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
            src="/images/hero_home_8k.png" 
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
              <Link href="/contact" className="btn btn--accent btn--large">
                Get a Quote →
              </Link>
              <Link href="/products" className="btn btn--secondary btn--large">
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
        <div className={styles.statsGrid}>
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
          <div className={styles.whyGrid}>
            <AnimatedSection delay={0}>
              <div className={styles.whyCard}>
                <div className={styles.whyIcon}>
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                </div>
                <h3>Certified Quality</h3>
                <p>EU approved, HACCP certified, and Halal compliant products meeting the strictest international standards.</p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={100}>
              <div className={styles.whyCard}>
                <div className={styles.whyIcon}>
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
                  </svg>
                </div>
                <h3>50+ Years Experience</h3>
                <p>Since the 1970s, we have refined our processes and built lasting relationships with buyers in Europe and the Gulf.</p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <div className={styles.whyCard}>
                <div className={styles.whyIcon}>
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
                  </svg>
                </div>
                <h3>Global Reach</h3>
                <p>Exporting to countries across Europe and the Gulf states with reliable logistics.</p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={300}>
              <div className={styles.whyCard}>
                <div className={styles.whyIcon}>
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/>
                  </svg>
                </div>
                <h3>Custom Packaging</h3>
                <p>Export-grade packaging with OEM options, custom calibers, and bulk supply solutions for every need.</p>
              </div>
            </AnimatedSection>
          </div>
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
          <div className={styles.productsGrid}>
            <AnimatedSection delay={0}>
              <Link href="/products" className={styles.productCard}>
                <div className={styles.productCardImage}>
                  <Image src="/images/afghani_sheep.png" alt="High-quality natural sheep casings processed for European export" fill sizes="(max-width: 1024px) 100vw, 33vw" />
                </div>
                <div className={styles.productCardContent}>
                  <h3>Natural Sheep Casings</h3>
                  <p>Premium quality, sorted by caliber. Available in salted and dry-salted variants for sausage production.</p>
                  <span className={styles.productCardLink}>Learn More →</span>
                </div>
              </Link>
            </AnimatedSection>
            <AnimatedSection delay={100}>
              <Link href="/products" className={styles.productCard}>
                <div className={styles.productCardImage}>
                  <Image src="/images/goat_casings.png" alt="Halal certified natural goat casings for international meat processors" fill sizes="(max-width: 1024px) 100vw, 33vw" />
                </div>
                <div className={styles.productCardContent}>
                  <h3>Goat Casings</h3>
                  <p>High-quality natural goat casings, processed to international food safety standards for specialized products.</p>
                  <span className={styles.productCardLink}>Learn More →</span>
                </div>
              </Link>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <Link href="/products" className={styles.productCard}>
                <div className={styles.productCardImage}>
                  <Image src="/images/packaging.png" alt="Export-grade salted sausage casings in professional packaging" fill sizes="(max-width: 1024px) 100vw, 33vw" />
                </div>
                <div className={styles.productCardContent}>
                  <h3>Sausage Casings</h3>
                  <p>Ready-to-use processed casings with consistent caliber, ideal for automated filling lines and artisan production.</p>
                  <span className={styles.productCardLink}>Learn More →</span>
                </div>
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ---- CERTIFICATIONS STRIP ---- */}
      <section className={styles.certStrip} id="certs-strip">
        <div className="container">
          <div className={styles.certStripGrid}>
            <div className={styles.certStripItem}>
              <div className={styles.certStripIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/>
                </svg>
              </div>
              <span>EU Export Licensed</span>
            </div>
            <div className={styles.certStripItem}>
              <div className={styles.certStripIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <span>HACCP Approved</span>
            </div>
            <div className={styles.certStripItem}>
              <div className={styles.certStripIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <span>Halal Certified</span>
            </div>
            <div className={styles.certStripItem}>
              <div className={styles.certStripIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect width="18" height="18" x="3" y="3" rx="2"/><path d="m9 12 2 2 4-4"/>
                </svg>
              </div>
              <span>FBR Approved</span>
            </div>
          </div>
        </div>
      </section>

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
          <div className={styles.marketsGrid}>
            <AnimatedSection delay={0}>
              <div className={styles.marketCard}>
                <div className={styles.marketEmoji}>🇪🇺</div>
                <h4>Europe</h4>
                <p>Germany, Netherlands, UK, France, Italy, Spain, Poland & more</p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={100}>
              <div className={styles.marketCard}>
                <div className={styles.marketEmoji}>🇦🇪</div>
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
          <div className={styles.testimonialsGrid}>
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
              <Link href="/contact" className="btn btn--accent btn--large">
                Request a Quote →
              </Link>
              <Link href="/products" className="btn btn--secondary btn--large">
                Browse Products
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
