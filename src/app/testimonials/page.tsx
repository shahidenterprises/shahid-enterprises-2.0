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
    canonical: 'https://www.shahid-enterprises.com/testimonials',
  },
  openGraph: {
    title: 'Customer Satisfaction & Reviews | Shahid Enterprises',
    description: 'Hear from our international partners about their long-term supply experience with us.',
    url: 'https://www.shahid-enterprises.com/testimonials',
    images: [{ url: '/images/goat_casings.webp' }],
  },
};
const testimonials = [
  {
    text: "Shahid Enterprises has been our trusted supplier for over 8 years. Their casings are consistently high quality and meet all EU standards. The caliber consistency is exceptional, which is vital for our high-speed production lines. Highly recommended for any serious meat processor seeking reliability.",
    author: "Hans Mueller",
    company: "Mueller Fleisch GmbH",
    country: "Germany",
    rating: 5,
  },
  {
    text: "We switched to Shahid Enterprises two years ago and have never looked back. Their halal-certified casings are perfect for our market requirements, and their specialized export packaging ensures products arrive in pristine condition every time. Their team understands the unique needs of the Gulf region perfectly.",
    author: "Ahmed Al-Rashid",
    company: "Gulf Meat Industries",
    country: "UAE",
    rating: 5,
  },
  {
    text: "Excellent product quality and very professional export team. They handle all complex documentation seamlessly, making international procurement a breeze. A truly reliable partner that we can count on for consistent supply throughout the year, even during peak seasons.",
    author: "Pierre Dubois",
    company: "Charcuterie Artisanale",
    country: "France",
    rating: 5,
  },
  {
    text: "The consistency of their sheep casings is remarkable and has significantly improved our efficiency. Every shipment matches our technical specifications perfectly, which is critical for our automated production environment. Their attention to detail in sorting is superior to other suppliers we've used.",
    author: "Jan van der Berg",
    company: "Dutch Sausage Co.",
    country: "Netherlands",
    rating: 5,
  },
  {
    text: "Best natural casing supplier we have worked with from Pakistan. Their internal quality control systems are on par with major European producers, providing us with premium products at significantly more competitive pricing. They are a valuable asset to our supply chain.",
    author: "Marco Rossi",
    company: "Salumificio Rossi",
    country: "Italy",
    rating: 5,
  },
  {
    text: "We have been sourcing goat casings from Shahid Enterprises for our specialty snack products. The products are reliable, affordable, and the logistics team ensures they are always delivered on time. They are a great partner for growing businesses that require a scalable supply of high-quality materials.",
    author: "Fatima Al-Saud",
    company: "Saudi Food Processing",
    country: "Saudi Arabia",
    rating: 5,
  },
  {
    text: "Their team is highly responsive, professional, and easy to communicate with. When we needed custom caliber sorting for a new premium product line, they were able to adapt their process and delivered exactly what we needed within our strict timeline. Truly impressive customer service.",
    author: "Robert Williams",
    company: "British Meat Co.",
    country: "United Kingdom",
    rating: 5,
  },
  {
    text: "As a procurement manager, I value transparency and rigorous documentation. Shahid Enterprises provides complete batch traceability and all necessary health certificates with every single shipment. Their professionalism makes my job much easier. Outstanding service from a top-tier exporter.",
    author: "Kenji Tanaka",
    company: "Tokyo Foods International",
    country: "Japan",
    rating: 4,
  },
  {
    text: "We placed our first trial order 5 years ago and they are now our primary natural casing supplier for our entire range. Competitive prices, excellent quality, and a dedicated team that truly understands the nuances of the international meat industry. We look forward to many more years of partnership.",
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
            src="/images/banner_testimonials.webp" 
            alt="Shahid Enterprises Client Testimonials" 
            fill 
            priority 
            className={heroStyles.heroImage}
            sizes="100vw"
          />
        </div>
        <div className={heroStyles.heroOverlay} />
        <div className={`container ${heroStyles.heroContent}`}>
          <h1>Client Testimonials</h1>
          <p>Hear from our international partners about their long-term trust in Shahid Enterprises.</p>
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
              subtitle="Read genuine feedback from our international partners across Europe and the Gulf regions. We take pride in building long-term relationships based on quality and trust."
            />
            <div className={styles.introText}>
              <p>
                At Shahid Enterprises, we believe that our success is directly tied to the success of our partners. For over five decades, we have been more than just a supplier; we have been a strategic partner to meat processors, distributors, and artisanal producers worldwide. Our commitment to maintaining the highest standards of quality, safety, and transparency is reflected in the long-term relationships we have cultivated.
              </p>
              <p>
                From the bustling markets of Europe to the specialized meat processing industries in the Gulf, our natural sheep and goat casings are recognized for their exceptional quality and reliability. Below is a collection of feedback from some of our valued clients who have experienced the Shahid Enterprises difference.
              </p>
            </div>
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
            <Link href="/contact" id="testimonials-footer-cta-contact" className="btn btn--primary btn--large">
              Start a Conversation →
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
