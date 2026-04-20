import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Certifications.module.css';
import heroStyles from '../PageHero.module.css';
import SectionHeading from '@/components/SectionHeading';
import AnimatedSection from '@/components/AnimatedSection';

export const metadata: Metadata = {
  title: 'Global Certifications | EU Export, HACCP & Halal — Shahid Enterprises',
  description: 'Shahid Enterprises holds EU Export License, HACCP, Halal, and FBR certifications. Our quality assurance ensures the highest international food safety standards.',
  keywords: ['EU export license natural casings', 'HACCP certified casings exporter', 'Halal casing certification Pakistan', 'food safety export standards'],
  alternates: {
    canonical: 'https://shahidenterprises.com/certifications',
  },
  openGraph: {
    title: 'Certified Quality Standards | Shahid Enterprises',
    description: 'Verifiable international certifications ensuring safe and compliant natural casing production.',
    url: 'https://shahidenterprises.com/certifications',
    images: [{ url: '/images/packaging.png' }],
  },
};

const certs = [
  {
    title: 'EU Export License',
    image: '/images/cert_eu.png',
    desc: 'Our manufacturing facility holds a valid European Union export license, enabling us to supply natural casings to all EU member states. Our processes comply with EU Regulation standards for food products of animal origin.',
    tag: 'EU Approved',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/>
      </svg>
    ),
  },
  {
    title: 'HACCP Certified',
    image: '/images/cert_haccp.png',
    desc: 'Our Hazard Analysis and Critical Control Points (HACCP) certification demonstrates our systematic approach to food safety. Every step of our process is monitored and documented to prevent contamination.',
    tag: 'Food Safety',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
  {
    title: 'Halal Certified',
    image: '/images/cert_halal.png',
    desc: 'All our products are sourced and processed in full compliance with Islamic dietary laws. Our Halal certification covers the entire supply chain from sourcing to final packaging, ensuring complete Halal integrity.',
    tag: 'Halal Compliant',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
      </svg>
    ),
  },
  {
    title: 'FBR Approved',
    image: '/images/cert_fbr.png',
    desc: 'Registered and approved by the Federal Board of Revenue of Pakistan. Our operations fully comply with all national regulations for export businesses, ensuring transparent and lawful trade practices.',
    tag: 'Government Approved',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect width="18" height="18" x="3" y="3" rx="2"/><path d="m9 12 2 2 4-4"/>
      </svg>
    ),
  },
];

export default function CertificationsPage() {
  return (
    <>
      {/* Hero */}
      <section className={heroStyles.pageHero}>
        <div className={heroStyles.heroBg}>
          <Image 
            src="/images/packaging.png" 
            alt="Shahid Enterprises Certifications" 
            fill 
            priority 
            className={heroStyles.heroImage}
            sizes="100vw"
          />
        </div>
        <div className={heroStyles.heroOverlay} />
        <div className={`container ${heroStyles.heroContent}`}>
          <div className="accent-line accent-line--center" style={{ marginBottom: '1.25rem' }}></div>
          <h1>Certifications &amp; Quality</h1>
          <p>International certifications that guarantee the highest standards of quality, safety, and compliance.</p>
        </div>
      </section>

      {/* Certifications Grid */}
      <section>
        <div className="container">
          <div className={styles.certsGrid}>
            {certs.map((cert, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div className={styles.certCard}>
                  <div className={styles.certPreview}>
                    <Image 
                      src={cert.image} 
                      alt={`${cert.title} Document`} 
                      fill 
                      className={styles.certImg}
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                  <div className={styles.certContent}>
                    <div className={styles.certHeader}>
                      <div className={styles.certIconSmall}>{cert.icon}</div>
                      <h3>{cert.title}</h3>
                    </div>
                    <p>{cert.desc}</p>
                    <div className={styles.certFooter}>
                      <span className={styles.certTag}>{cert.tag}</span>
                      <Link href="/contact" className="btn btn--outline btn--small">
                        View Document
                      </Link>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
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
              <Link href="/contact" className="btn btn--accent btn--large">Contact Our Team →</Link>
              <Link href="/products" className="btn btn--secondary btn--large">View Products</Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
