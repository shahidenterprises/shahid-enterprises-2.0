import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Testimonials.module.css';
import heroStyles from '../PageHero.module.css';
import SectionHeading from '@/components/SectionHeading';
import AnimatedSection from '@/components/AnimatedSection';
import TestimonialCard from '@/components/TestimonialCard';

export const metadata: Metadata = {
  title: 'Client Reviews & Case Studies | Global Casing Export — Shahid Enterprises',
  description: 'Read what international buyers say about Shahid Enterprises. Trusted by meat processors across Europe, Gulf countries, and Asia for premium natural casings.',
  keywords: ['natural casing reviews', 'sheep casing supplier testimonials', 'trusted casing exporter Pakistan', 'B2B food supplier reviews'],
  alternates: {
    canonical: 'https://shahidenterprises.com/testimonials',
  },
  openGraph: {
    title: 'Customer Satisfaction & Reviews | Shahid Enterprises',
    description: 'Hear from our international partners about their long-term supply experience with us.',
    url: 'https://shahidenterprises.com/testimonials',
    images: [{ url: '/images/goat_casings.webp' }],
  },
};

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
  {
    text: "The consistency of their sheep casings is remarkable. Every shipment matches our specifications perfectly, which is critical for our automated production lines.",
    author: "Jan van der Berg",
    company: "Dutch Sausage Co.",
    country: "Netherlands",
    rating: 5,
  },
  {
    text: "Best natural casing supplier we have worked with from Pakistan. Their quality control is on par with European producers, at significantly more competitive pricing.",
    author: "Marco Rossi",
    company: "Salumificio Rossi",
    country: "Italy",
    rating: 5,
  },
  {
    text: "We have been sourcing goat casings from Shahid Enterprises for our specialty snack products. Reliable, affordable, and always on time. Great partner for growing businesses.",
    author: "Fatima Al-Saud",
    company: "Saudi Food Processing",
    country: "Saudi Arabia",
    rating: 5,
  },
  {
    text: "Their team is highly responsive and professional. When we needed custom caliber sorting for a new product line, they delivered exactly what we needed within our timeline.",
    author: "Robert Williams",
    company: "British Meat Co.",
    country: "United Kingdom",
    rating: 5,
  },
  {
    text: "As a procurement manager, I value transparency and documentation. Shahid Enterprises provides complete traceability and certificates with every shipment. Outstanding service.",
    author: "Kenji Tanaka",
    company: "Tokyo Foods International",
    country: "Japan",
    rating: 4,
  },
  {
    text: "We placed our first trial order 5 years ago and they are now our primary natural casing supplier. Competitive prices, excellent quality, and a team that truly understands the industry.",
    author: "Andrzej Kowalski",
    company: "Polski Wędliny",
    country: "Poland",
    rating: 5,
  },
];

export default function TestimonialsPage() {
  return (
    <>
      {/* Hero */}
      <section className={heroStyles.pageHero}>
        <div className={heroStyles.heroBg}>
          <Image 
            src="/images/goat_casings.webp" 
            alt="Shahid Enterprises Testimonials" 
            fill 
            priority 
            className={heroStyles.heroImage}
            sizes="100vw"
          />
        </div>
        <div className={heroStyles.heroOverlay} />
        <div className={`container ${heroStyles.heroContent}`}>
          <div className="accent-line accent-line--center" style={{ marginBottom: '1.25rem' }}></div>
          <h1>Client Testimonials</h1>
          <p>Hear from our international partners about their experience with Shahid Enterprises.</p>
        </div>
      </section>

      {/* Stats */}
      <section style={{ padding: 'var(--section-padding) 0' }}>
        <div className="container">
          <div className={styles.statsRow}>
            <div className={styles.statBox}>
              <div className={styles.number}>98%</div>
              <span className={styles.label}>Client Satisfaction</span>
            </div>
            <div className={styles.statBox}>
              <div className={styles.number}>85%</div>
              <span className={styles.label}>Repeat Buyers</span>
            </div>
            <div className={styles.statBox}>
              <div className={styles.number}>4.9/5</div>
              <span className={styles.label}>Average Rating</span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className={styles.testimonialsMain}>
        <div className="container">
          <AnimatedSection>
            <SectionHeading
              label="What Our Clients Say"
              title="Trusted by International Buyers"
              subtitle="Read genuine feedback from our international partners across Europe and the Gulf."
            />
          </AnimatedSection>
          <div className={styles.testimonialsGrid}>
            {testimonials.map((t, i) => (
              <AnimatedSection key={i} delay={(i % 3) * 100}>
                <TestimonialCard {...t} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.testCta}>
        <div className="container">
          <AnimatedSection>
            <h2>Join Our Growing Network</h2>
            <p>Discover why leading meat processors in Europe and the Gulf choose Shahid Enterprises as their preferred supplier.</p>
            <Link href="/contact" className="btn btn--primary btn--large">
              Start a Conversation →
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
