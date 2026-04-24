'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Logo from './Logo';
import styles from './Navbar.module.css';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/products', label: 'Products' },
  { href: '/certifications', label: 'Certifications' },
  { href: '/testimonials', label: 'Testimonials' },
  { href: '/export-markets', label: 'Global Reach' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''} ${mobileOpen ? styles.menuOpen : ''}`} id="main-nav">
      <div className={styles.navInner}>
        {!isHomePage && (
          <button 
            onClick={() => router.back()} 
            className={styles.backButton}
            aria-label="Go back"
            id="nav-back-button"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
          </button>
        )}

        <Link href="/" className={styles.logo} id="nav-logo">
          <div className={styles.logoIcon}>
            <Logo width={42} height={42} />
          </div>
          <span>Shahid Enterprises</span>
        </Link>

        <div className={styles.navLinks} id="desktop-nav-links">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              id={`nav-link-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
              className={`${styles.navLink} ${pathname === item.href ? styles.active : ''}`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <Link 
          href="/contact" 
          id="nav-cta-quote"
          className={`btn btn--accent btn--small ${styles.navCta} ${styles.desktopOnly}`}
        >
          Get a Quote
        </Link>

        <button
          className={`${styles.menuToggle} ${mobileOpen ? styles.open : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          id="mobile-menu-toggle"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div className={`${styles.mobileMenu} ${mobileOpen ? styles.open : ''}`} id="mobile-nav-menu">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            id={`mobile-nav-link-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
            className={`${styles.navLink} ${pathname === item.href ? styles.active : ''}`}
          >
            {item.label}
          </Link>
        ))}
        <Link 
          href="/contact" 
          id="mobile-nav-cta-quote"
          className="btn btn--accent" 
          style={{ marginTop: '1rem' }}
        >
          Get a Quote
        </Link>
      </div>
    </nav>
  );
}
