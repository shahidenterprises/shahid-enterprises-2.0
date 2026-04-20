import Link from 'next/link';
import Image from 'next/image';
import Logo from './Logo';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer} id="site-footer">
      <div className={styles.footerGrid}>
        {/* Company Info */}
        <div className={`${styles.footerCol} ${styles.footerAbout}`}>
          <div className={styles.footerLogo}>
            <Logo width={40} height={40} />
          </div>
          <h4>Shahid Enterprises</h4>
          <p>
            A trusted name in natural casing manufacturing and export since the 1970s.
            We deliver premium quality sheep and goat casings to meat processors in Europe and the Gulf,
            backed by decades of expertise and international certifications.
          </p>
          <div className={styles.socialLinks}>
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="https://www.linkedin.com/in/shahid-enterprises-multan/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
            </a>
            <a href="https://wa.me/923059312383" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className={styles.footerCol}>
          <h4>Quick Links</h4>
          <div className={styles.footerLinks}>
            <Link href="/">Home</Link>
            <Link href="/about">About Us</Link>
            <Link href="/products">Our Products</Link>
            <Link href="/certifications">Certifications</Link>
            <Link href="/testimonials">Testimonials</Link>
          </div>
        </div>

        {/* Legal & Support */}
        <div className={styles.footerCol}>
          <h4>Legal & Support</h4>
          <div className={styles.footerLinks}>
            <Link href="/faq">FAQ</Link>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms">Terms & Conditions</Link>
            <Link href="/export-markets">Global Reach</Link>
            <Link href="/contact">Contact Us</Link>
          </div>
        </div>

        {/* Contact */}
        <div className={styles.footerCol}>
          <h4>Contact Us</h4>
          <a 
            href="https://www.google.com/maps/search/?api=1&query=Behind+Dream+Land+Cinema,+Jilani+Road,+Multan,+Pakistan" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.contactItem}
          >
            <div className={styles.contactIcon}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <p>
              <strong>Address</strong>
              Behind Dream Land Cinema, Jilani Road, Multan, Pakistan
            </p>
          </a>
          <a href="mailto:contact@shahidenterprises.com" className={styles.contactItem}>
            <div className={styles.contactIcon}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </div>
            <p>
              <strong>Email</strong>
              contact@shahidenterprises.com
            </p>
          </a>
          <a href="tel:+923059312383" className={styles.contactItem}>
            <div className={styles.contactIcon}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
              </svg>
            </div>
            <p>
              <strong>Phone</strong>
              +92-3059312383
            </p>
          </a>
        </div>
      </div>

      {/* Certifications Row */}
      <div className={styles.certRow}>
        <div className={styles.certItem}>
          <span className={styles.certDot}></span> EU Export Licensed
        </div>
        <div className={styles.certItem}>
          <span className={styles.certDot}></span> HACCP Approved
        </div>
        <div className={styles.certItem}>
          <span className={styles.certDot}></span> Halal Certified
        </div>
        <div className={styles.certItem}>
          <span className={styles.certDot}></span> FBR Approved
        </div>
      </div>

      {/* Bottom */}
      <div className={styles.footerBottom}>
        <div className="container">
          <p>© {currentYear} Shahid Enterprises. All rights reserved. Premium Natural Casings Exporter from Pakistan.</p>
        </div>
      </div>
    </footer>
  );
}
