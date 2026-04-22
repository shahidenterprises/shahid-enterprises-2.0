'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import styles from '../app/Home.module.css';
import AnimatedSection from './AnimatedSection';
import CertificateModal from './CertificateModal';
import ContactForm from './ContactForm';

export default function WhyChooseUsGrid() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const cards = [
    {
      delay: 0,
      href: '/certifications',
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      ),
      title: 'Certified Quality',
      desc: 'EU approved, HACCP certified, and Halal compliant products meeting the strictest international standards.',
    },
    {
      delay: 100,
      href: '/about',
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
        </svg>
      ),
      title: '50+ Years Experience',
      desc: 'Since the 1970s, we have refined our processes and built lasting relationships with buyers in Europe and the Gulf.',
    },
    {
      delay: 200,
      href: '/export-markets',
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
        </svg>
      ),
      title: 'Global Reach',
      desc: 'Exporting to countries across Europe and the Gulf states with reliable logistics.',
    },
    {
      delay: 300,
      onClick: () => setIsContactModalOpen(true),
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/>
        </svg>
      ),
      title: 'Custom Packaging',
      desc: 'Export-grade packaging with OEM options, custom calibers, and bulk supply solutions for every need.',
    },
  ];

  return (
    <>
      <div className={styles.whyGrid}>
        {cards.map((card, index) => (
          <AnimatedSection key={index} delay={card.delay}>
            {card.href ? (
              <Link href={card.href} className={styles.whyCard}>
                <div className={styles.whyIcon}>{card.icon}</div>
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
              </Link>
            ) : (
              <button onClick={card.onClick} className={styles.whyCard}>
                <div className={styles.whyIcon}>{card.icon}</div>
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
              </button>
            )}
          </AnimatedSection>
        ))}
      </div>

      <CertificateModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)}
      >
        <div className={styles.modalBody}>
          <h2 className={styles.modalTitle}>Custom Packaging Inquiry</h2>
          <ContactForm />
        </div>
      </CertificateModal>
    </>
  );
}
