import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './Products.module.css';
import heroStyles from '../PageHero.module.css';
import SectionHeading from '@/components/SectionHeading';
import AnimatedSection from '@/components/AnimatedSection';

export const metadata: Metadata = {
  title: 'Products & Services',
  description: 'Explore our range of premium natural sheep casings, goat casings, and sausage casings. Bulk supply, OEM solutions, and export packaging available.',
};

const products = [
  {
    title: 'Afghani Sheep Casings',
    desc: 'Our flagship product — premium natural sheep casings sourced from certified livestock, processed under strict quality controls, and available in all standard calibers.',
    features: [
      'Available calibers: 14/16mm to 26/28mm',
      'Salted and dry-salted variants',
      'Sorted by quality grades: AA, A, AB, B, C',
      'Ideal for fresh sausages, frankfurters, and wieners',
      'Consistent length and caliber uniformity',
      'EU and Halal compliant processing',
    ],
    image: 'Afghani Sheep Casings',
  },
  {
    title: 'Goat Casings',
    desc: 'High-quality natural goat casings, carefully processed and graded for specialized sausage products. Perfect for snack sticks, chorizo, and regional specialty sausages.',
    features: [
      'Smaller diameter for specialty products',
      'Available calibers: 14/16mm to 26/28mm',
      'Sorted by quality grades: AA, A, AB, B, C',
      'Processed under HACCP guidelines',
      'Halal certified sourcing',
      'Custom caliber sorting available',
    ],
    image: 'Goat Casings',
    reverse: true,
  },
  {
    title: 'Sausage Casings Processing',
    desc: 'Ready-to-use processed casings for automated and artisan production lines. We offer casings that are pre-flushed, measured, and ready for immediate filling.',
    features: [
      'Pre-flushed and ready-to-stuff',
      'Uniform caliber for automated lines',
      'Available on tubes, in hanks, or bundles',
      'Custom length cutting available',
      'Temperature-controlled processing',
      'Consistent quality batch after batch',
    ],
    image: 'Sausage Casings',
  },
];

export default function ProductsPage() {
  return (
    <>
      {/* Hero */}
      <section className={heroStyles.pageHero}>
        <div className="container">
          <div className="accent-line accent-line--center" style={{ marginBottom: '1.25rem' }}></div>
          <h1>Products &amp; Services</h1>
          <p>Premium natural casings, bulk supply solutions, and custom packaging for global meat processors.</p>
        </div>
      </section>

      {/* Products List */}
      <section className={styles.productsMain}>
        <div className="container">
          <div className={styles.productsList}>
            {products.map((product, i) => (
              <AnimatedSection key={i}>
                <div className={`${styles.productItem} ${product.reverse ? styles.reverse : ''}`}>
                  <div className={styles.productImagePlaceholder}>
                    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                      <circle cx="9" cy="9" r="2" />
                      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                    </svg>
                    <span>{product.image} Image</span>
                  </div>
                  <div className={styles.productInfo}>
                    <h3>{product.title}</h3>
                    <p>{product.desc}</p>
                    <ul className={styles.productFeatures}>
                      {product.features.map((f, j) => (
                        <li key={j}>
                          <span className={styles.featureCheck}>
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                          </span>
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Link href="/contact" className="btn btn--primary">
                      Request Quote →
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Export Packaging */}
      <section className={styles.packagingSection}>
        <div className="container">
          <AnimatedSection>
            <SectionHeading
              label="Export Solutions"
              title="Packaging & Bulk Supply"
              subtitle="We handle everything from processing to packaging, ensuring your casings arrive in perfect condition."
            />
          </AnimatedSection>
          <div className={styles.packagingGrid}>
            {[
              {
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" /></svg>
                ),
                title: 'Export Packaging',
                desc: 'Properly salted, sealed in food-grade barrels and drums, labeled per international standards.',
              },
              {
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="20" height="20" x="2" y="2" rx="2" /><path d="M7 2v20M17 2v20M2 12h20M2 7h5M2 17h5M17 7h5M17 17h5" /></svg>
                ),
                title: 'Bulk Supply',
                desc: 'Large volume orders with flexible MOQ, competitive pricing, and reliable supply schedules.',
              },
              {
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" /></svg>
                ),
                title: 'OEM / Custom Sizing',
                desc: 'Custom calibers, lengths, and private label packaging tailored to your specific requirements.',
              },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div className={styles.packagingCard}>
                  <div className={styles.packagingIcon}>{item.icon}</div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.productsCta}>
        <div className="container">
          <AnimatedSection>
            <h2>Need a Custom Solution?</h2>
            <p>Our export team is ready to discuss your specific requirements and provide competitive quotes.</p>
            <div className={styles.ctaBtns}>
              <Link href="/contact" className="btn btn--accent btn--large">Get a Quote →</Link>
              <Link href="/certifications" className="btn btn--secondary btn--large">View Certifications</Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
