import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Certifications.module.css';
import heroStyles from '../PageHero.module.css';
import SectionHeading from '@/components/SectionHeading';
import AnimatedSection from '@/components/AnimatedSection';
import CertsList from '@/components/CertsList';

export const metadata: Metadata = {
  title: "EU Approved & HACCP Certified Natural Casings | Shahid Enterprises",
  description: "Shahid Enterprises holds EU Export License, HACCP certification, Halal compliance, and FBR approval.",
  openGraph: {
    title: "EU Approved & HACCP Certified Natural Casings | Shahid Enterprises",
    description: "Shahid Enterprises holds EU Export License, HACCP certification, Halal compliance, and FBR approval.",
    url: "https://www.shahid-enterprises.com/certifications",
    images: [{ url: "https://www.shahid-enterprises.com/images/cert_eu_8k.webp", width: 1200, height: 630 }],
  }
};

export default function CertificationsPage() {
  return (
    <>
      {/* Hero */}
      <section className={heroStyles.pageHero}>
        <div className={heroStyles.heroBg}>
          <Image 
            src="/images/banner_certifications.webp" 
            alt="Shahid Enterprises Certifications" 
            fill 
            priority 
            className={heroStyles.heroImage}
            sizes="100vw"
          />
        </div>
        <div className={heroStyles.heroOverlay} />
        <div className={`container ${heroStyles.heroContent}`}>
          <h1>Certifications &amp; Quality</h1>
          <p>International certifications that guarantee the highest standards of quality, safety, and global compliance.</p>
        </div>
      </section>

      {/* Certifications Grid */}
      <section>
        <div className="container">
          <CertsList />
        </div>
      </section>

      {/* QA Standards */}
      <section className={styles.qaSection}>
        <div className="container">
          <AnimatedSection>
            <SectionHeading
              label="Quality Assurance"
              title="Rigorous Standards at Every Step"
              subtitle="Our commitment to quality goes beyond certifications — it's embedded in every aspect of our operations."
            />
          </AnimatedSection>
          <div className={styles.qaGrid}>
            {[
              {
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
                ),
                title: 'Documentation',
                desc: 'Complete batch traceability with certificates of analysis, health certificates, and export documentation.',
              },
              {
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                ),
                title: 'Laboratory Testing',
                desc: 'Regular microbiological and physical testing to ensure products meet the strictest safety parameters.',
              },
              {
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 3v18h18"/><polyline points="18 17 12 11 8 15 3 10"/></svg>
                ),
                title: 'Continuous Monitoring',
                desc: 'Temperature, humidity, and process parameters monitored 24/7 throughout production and storage.',
              },
              {
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>
                ),
                title: 'Trained Workforce',
                desc: 'All staff undergo regular training on food safety protocols, hygiene, and quality control procedures.',
              },
              {
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/></svg>
                ),
                title: 'Proper Storage',
                desc: 'Cold chain management and controlled storage ensure product integrity from production to delivery.',
              },
              {
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
                ),
                title: 'Regular Audits',
                desc: 'Internal and third-party audits ensure our systems remain current and effective at all times.',
              },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 80}>
                <div className={styles.qaCard}>
                  <div className={styles.qaIcon}>{item.icon}</div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Trust CTA */}
      <section className={styles.trustBar}>
        <div className="container">
          <AnimatedSection>
            <h2>Quality You Can Trust</h2>
            <p>Partner with a certified, experienced supplier. Request documentation or schedule a facility review.</p>
            <div className={styles.trustBtns}>
              <Link href="/contact" id="certs-footer-cta-contact" className="btn btn--accent btn--large">Contact Our Team →</Link>
              <Link href="/products" id="certs-footer-cta-products" className="btn btn--secondary btn--large">View Products</Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
