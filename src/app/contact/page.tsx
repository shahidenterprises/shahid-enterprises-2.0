import type { Metadata } from 'next';
import Image from 'next/image';
import styles from './Contact.module.css';
import heroStyles from '../PageHero.module.css';
import ContactForm from '@/components/ContactForm';
import AnimatedSection from '@/components/AnimatedSection';

export const metadata: Metadata = {
  title: 'Contact Our Export Team | Quotes & Inquiries — Shahid Enterprises',
  description: 'Get in touch with Shahid Enterprises for export inquiries, natural casing quotes, and global partnerships. Responsive support for B2B buyers in Europe & the Gulf.',
  keywords: ['contact natural casing supplier', 'sheep casing export inquiry', 'Shahid Enterprises Multan contact', 'B2B food export Pakistan'],
  alternates: {
    canonical: 'https://www.shahid-enterprises.com/contact',
  },
  openGraph: {
    title: 'Get in Touch | Shahid Enterprises Export Team',
    description: 'Direct lines for international procurement and quality documentation requests.',
    url: 'https://www.shahid-enterprises.com/contact',
    images: [{ url: '/images/hero_bg.webp' }],
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className={heroStyles.pageHero}>
        <div className={heroStyles.heroBg}>
          <Image 
            src="/images/banner_contact.webp" 
            alt="Contact Shahid Enterprises" 
            fill 
            priority 
            className={heroStyles.heroImage}
            sizes="100vw"
          />
        </div>
        <div className={heroStyles.heroOverlay} />
        <div className={`container ${heroStyles.heroContent}`}>
          <h1>Contact Us</h1>
          <p>Ready to place an order or need more information? Our export team is here to help.</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className={styles.contactSection}>
        <div className="container">
          <div className={styles.contactGrid}>
            {/* Form */}
            <AnimatedSection>
              <div className={styles.formWrap}>
                <h3>Send Us an Inquiry</h3>
                <p>Fill out the form below and our export team will respond within 24 hours.</p>
                <ContactForm />
              </div>
            </AnimatedSection>

            {/* Info Sidebar */}
            <div className={styles.contactInfo}>
              <AnimatedSection delay={100}>
                <div className={styles.infoCard}>
                  <h4>Get in Touch</h4>
                  <div className={styles.infoItem}>
                    <div className={styles.infoIcon}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect width="20" height="16" x="2" y="4" rx="2"/>
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                      </svg>
                    </div>
                    <p>
                      <strong>Email</strong>
                      contact@shahidenterprises.com
                    </p>
                  </div>
                  <div className={styles.infoItem}>
                    <div className={styles.infoIcon}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                      </svg>
                    </div>
                    <p>
                      <strong>Phone</strong>
                      +92 305 9312383
                    </p>
                  </div>
                  <div className={styles.infoItem}>
                    <div className={styles.infoIcon}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                        <circle cx="12" cy="10" r="3"/>
                      </svg>
                    </div>
                    <p>
                      <strong>Address</strong>
                      Behind Dream Land Cinema, Jilani Road, Multan, Pakistan
                    </p>
                  </div>

                  <a
                    href="https://wa.me/923059312383?text=Hello%20Shahid%20Enterprises%2C%20I%20am%20interested%20in%20your%20natural%20casings."
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.whatsappInline}
                  >
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Chat on WhatsApp
                  </a>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={200}>
                <div className={styles.hoursCard}>
                  <h4>Business Hours</h4>
                  <div className={styles.hourRow}>
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM (PKT)</span>
                  </div>
                  <div className={styles.hourRow}>
                    <span>Saturday</span>
                    <span>9:00 AM - 2:00 PM (PKT)</span>
                  </div>
                  <div className={styles.hourRow}>
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className={styles.mapSection}>
        <div className="container">
          <AnimatedSection>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.789!2d71.4718!3d30.1984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393b3169eaf060d5%3A0x8c9b5c6b5e8d1b2a!2sJilani%20Rd%2C%20Multan%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2spk!4v1690000000000!5m2!1sen!2spk"
              width="100%"
              height="380"
              style={{ border: 0, borderRadius: 'var(--radius-xl)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Shahid Enterprises Location - Jilani Road, Multan"
            />
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
