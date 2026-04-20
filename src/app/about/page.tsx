import type { Metadata } from 'next';
import Image from 'next/image';
import styles from './About.module.css';
import heroStyles from '../PageHero.module.css';
import SectionHeading from '@/components/SectionHeading';
import AnimatedSection from '@/components/AnimatedSection';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Shahid Enterprises — Pakistan\'s trusted natural casing manufacturer and exporter since the 1970s. Decades of quality, expertise, and global reach.',
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className={heroStyles.pageHero}>
        <div className="container">
          <div className="accent-line accent-line--center" style={{ marginBottom: '1.25rem' }}></div>
          <h1>Our Legacy of Excellence</h1>
          <p>Five decades of manufacturing premium natural casings, trusted by meat processors across Europe and the Gulf.</p>
        </div>
      </section>

      {/* Story */}
      <section className={styles.storySection}>
        <div className="container">
          <div className={styles.storyGrid}>
            <AnimatedSection>
              <div className={styles.storyImage}>
                <Image 
                  src="/images/factory.png" 
                  alt="Shahid Enterprises Processing Facility" 
                  fill 
                  className={styles.stImg}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </AnimatedSection>
            <AnimatedSection delay={100}>
              <div className={styles.storyContent}>
                <h3>A Heritage of Quality Since the 1970s</h3>
                <p>
                  Shahid Enterprises was founded in the 1970s with a vision to bring Pakistan&apos;s finest 
                  natural casings to the international market. What began as a small family operation has grown 
                  into one of Pakistan&apos;s most trusted names in the natural casing industry.
                </p>
                <p>
                  With over five decades of expertise, we have perfected our sourcing, processing, and 
                  export capabilities. Our deep understanding of the industry, combined with a commitment 
                  to international quality standards, has made us the preferred supplier for leading meat 
                  processors across Europe and the Gulf.
                </p>
                <p>
                  Today, Shahid Enterprises stands as a symbol of reliability, quality, and trust — 
                  values instilled by our founders and upheld by every member of our team.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className={styles.timeline}>
        <div className="container">
          <AnimatedSection>
            <SectionHeading
              label="Our Journey"
              title="Milestones That Define Us"
            />
          </AnimatedSection>
          <div className={styles.timelineList}>
            {[
              { year: '1970s', title: 'Foundation', desc: 'Shahid Enterprises established as a family business, processing and supplying natural casings locally.' },
              { year: '1980s', title: 'Regional Growth', desc: 'Expanded operations to serve regional markets across Pakistan and neighboring countries.' },
              { year: '1990s', title: 'International Expansion', desc: 'Began exporting to Gulf countries and established our first European trade partnerships.' },
              { year: '2000s', title: 'Quality Certifications', desc: 'Achieved EU export license, HACCP certification, and Halal compliance to access premium markets.' },
              { year: '2010s', title: 'Expanded Reach', desc: 'Grown our international presence with modern processing facilities and advanced quality control in key export markets.' },
              { year: 'Present', title: 'Industry Leader', desc: 'Recognized as one of Pakistan\'s leading natural casing exporters with a focus on sustainability and innovation.' },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 80}>
                <div className={styles.timelineItem}>
                  <div className={styles.timelineYear}>{item.year}</div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className={styles.valuesSection}>
        <div className="container">
          <AnimatedSection>
            <SectionHeading
              label="Our Values"
              title="What Drives Us Every Day"
              subtitle="Our core values guide every aspect of our operations — from sourcing to delivery."
            />
          </AnimatedSection>
          <div className={styles.valuesGrid}>
            {[
              {
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                ),
                title: 'Uncompromising Quality',
                desc: 'Every batch is tested and inspected against rigorous international standards before shipment.',
              },
              {
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>
                ),
                title: 'Customer Partnership',
                desc: 'We build long-term relationships with our clients, treating each supplier partnership with care.',
              },
              {
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>
                ),
                title: 'Global Standards',
                desc: 'EU, HACCP, and Halal compliance ensures our products meet the highest regulatory benchmarks in our target markets.',
              },
              {
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                ),
                title: 'Integrity',
                desc: 'Honest business practices, transparent pricing, and reliable delivery — always.',
              },
              {
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
                ),
                title: 'Continuous Improvement',
                desc: 'We invest in technology, training, and process optimization to stay at the industry forefront.',
              },
              {
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/></svg>
                ),
                title: 'Sustainable Practices',
                desc: 'Responsible sourcing and eco-conscious processing methods for a better industry future.',
              },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 80}>
                <div className={styles.valueCard}>
                  <div className={styles.valueIcon}>{item.icon}</div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Process */}
      <section className={styles.qualitySection}>
        <div className="container">
          <AnimatedSection>
            <SectionHeading
              label="Quality Assurance"
              title="Our 4-Step Quality Process"
              subtitle="Every casing goes through a rigorous quality control process before it reaches your facility."
              dark
            />
          </AnimatedSection>
          <div className={styles.qualityGrid}>
            {[
              { num: '01', title: 'Sourcing', desc: 'Premium raw materials selected from certified slaughterhouses under strict veterinary supervision.' },
              { num: '02', title: 'Processing', desc: 'State-of-the-art cleaning, grading, and caliber sorting using modern equipment and techniques.' },
              { num: '03', title: 'Inspection', desc: 'Multi-point quality checks at every stage — visual, measurement, and laboratory testing.' },
              { num: '04', title: 'Packaging', desc: 'Export-grade packaging with proper salting, sealing, and temperature-controlled storage.' },
            ].map((step, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div className={styles.qualityStep}>
                  <div className={styles.qualityNumber}>{step.num}</div>
                  <h4>{step.title}</h4>
                  <p>{step.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
