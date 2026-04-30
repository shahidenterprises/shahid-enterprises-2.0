import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import styles from './ExportMarkets.module.css';
import heroStyles from '../PageHero.module.css';
import SectionHeading from '@/components/SectionHeading';
import AnimatedSection from '@/components/AnimatedSection';

export const metadata: Metadata = {
  title: 'Global Export Markets | Supplying Europe & the Gulf — Shahid Enterprises',
  description: 'Shahid Enterprises exports premium natural casings to countries across Europe and the Gulf region. Discover our international supply capabilities.',
  openGraph: {
    title: 'Global Export Markets | Supplying Europe & the Gulf — Shahid Enterprises',
    description: 'Shahid Enterprises exports premium natural casings to countries across Europe and the Gulf region. Discover our international supply capabilities.',
    url: 'https://www.shahid-enterprises.com/export-markets',
    images: [{ url: 'https://www.shahid-enterprises.com/images/logistics_global.webp', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://www.shahid-enterprises.com/export-markets',
  },
};

const regions = [
  {
    flag: '/images/flag_eu.svg',
    title: 'Europe',
    desc: 'Our largest export market. We supply EU-licensed natural casings to major meat processors and distributors across Western and Eastern Europe.',
    countries: ['Germany', 'Netherlands', 'United Kingdom', 'France', 'Italy', 'Spain', 'Poland', 'Belgium', 'Czech Republic', 'Greece'],
    features: ['EU Export License compliant', 'Full documentation & traceability', 'Temperature-controlled shipping', 'Consistent supply schedules'],
  },
  {
    flag: '/images/flag_uae.svg',
    title: 'Gulf & Middle East',
    desc: 'A rapidly growing market for our Halal-certified casings. We serve major food processors and distributors across the GCC and wider Middle East.',
    countries: ['UAE', 'Saudi Arabia', 'Qatar', 'Kuwait', 'Bahrain', 'Oman', 'Turkey', 'Jordan'],
    features: ['100% Halal certified', 'Arabic documentation available', 'Fast shipping via sea & air', 'Competitive Gulf pricing'],
  },


];

export default function ExportMarketsPage() {
  return (
    <>
      {/* Hero */}
      <section className={heroStyles.pageHero}>
        <div className={heroStyles.heroBg}>
          <Image 
            src="/images/logistics_global.webp" 
            alt="Shahid Enterprises international export network covering Europe, Middle East and beyond" 
            fill 
            priority 
            className={heroStyles.heroImage}
            sizes="100vw"
          />
        </div>
        <div className={heroStyles.heroOverlay} />
        <div className={`container ${heroStyles.heroContent}`}>
          <div className="accent-line accent-line--center" style={{ marginBottom: '1.25rem' }}></div>
          <h1>Export Markets & Reach</h1>
          <p>Supplying premium natural casings to buyers across Europe and the Gulf &amp; Middle East.</p>
        </div>
      </section>

      {/* Main Content */}
      <section className={styles.marketsMain}>
        <div className="container">
          {/* World Map Image */}
          <AnimatedSection>
            <div className={styles.worldMapImage}>
              <Image 
                src="/images/logistics_global.webp" 
                alt="Global logistics and supply chain map for Shahid Enterprises natural casings" 
                fill 
                className={styles.mImg}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1100px"
                priority
              />
              <div className={styles.mapOverlay}>
                <span>Global Reach</span>
              </div>
            </div>
          </AnimatedSection>

          {/* Region Cards */}
          <SectionHeading
            label="Our Markets"
            title="Where Our Casings Reach"
            subtitle="From Europe to the Gulf — our premium casings are trusted by meat processors in key international markets."
          />
          <div className={styles.regionsGrid}>
            {regions.map((region, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div className={styles.regionCard}>
                  <div className={styles.regionHeader}>
                    <div className={styles.regionFlag}>
                      <Image 
                        src={region.flag} 
                        alt={`${region.title} Flag`} 
                        width={40} 
                        height={28} 
                        className={styles.fImg}
                      />
                    </div>
                    <h3>{region.title}</h3>
                  </div>
                  <p>{region.desc}</p>
                  <div className={styles.countryTags}>
                    {region.countries.map((c) => (
                      <span key={c} className={styles.countryTag}>{c}</span>
                    ))}
                  </div>
                  <ul className={styles.regionFeatures}>
                    {region.features.map((f, j) => (
                      <li key={j}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className={styles.capSection}>
        <div className="container">
          <AnimatedSection>
            <SectionHeading
              label="Export Capabilities"
              title="End-to-End Export Solutions"
              subtitle="We handle everything — from production to documentation to delivery at your doorstep."
            />
          </AnimatedSection>
          <div className={styles.capGrid}>
            {[
              {
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                ),
                title: 'Documentation',
                desc: 'Health certificates, phytosanitary docs, COA, and customs paperwork handled seamlessly.',
              },
              {
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="20" height="8" x="2" y="14" rx="2"/><path d="M6 14V4a2 2 0 012-2h8a2 2 0 012 2v10"/></svg>
                ),
                title: 'Logistics',
                desc: 'Sea and air freight options with temperature-controlled containers for long-distance shipments.',
              },
              {
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                ),
                title: 'Compliance',
                desc: 'We meet regulatory requirements for every destination market, including EU and GCC standards.',
              },
              {
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>
                ),
                title: 'Dedicated Support',
                desc: 'Assigned export liaison for every client — responsive, knowledgeable, and always available.',
              },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div className={styles.capCard}>
                  <div className={styles.capIcon}>{item.icon}</div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.marketsCta}>
        <div className="container">
          <AnimatedSection>
            <h2>Become a Partner</h2>
            <p>Whether you&apos;re an established buyer or entering a new market, we&apos;re ready to supply premium casings to your region.</p>
            <div className={styles.ctaBtns}>
              <Link href="/contact" id="markets-footer-cta-contact" className="btn btn--accent btn--large">Contact Export Team →</Link>
              <Link href="/products" id="markets-footer-cta-products" className="btn btn--secondary btn--large">View Products</Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
