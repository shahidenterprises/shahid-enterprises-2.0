'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../app/certifications/Certifications.module.css';
import AnimatedSection from './AnimatedSection';
import CertificateModal from './CertificateModal';
import HaccpCertificate from './HaccpCertificate';

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
    image: '/images/cert_haccp_8k.png',
    desc: 'Our Hazard Analysis and Critical Control Points (HACCP) certification demonstrates our systematic approach to food safety. Every step of our process is monitored and documented to prevent contamination.',
    tag: 'Food Safety',
    isHaccp: true,
    icon: (
      <svg width="24" height="24" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M70 60 L150 30 L230 60 V160 C230 210 150 250 150 250 C150 250 70 210 70 160 V60Z" fill="#0A2540"/>
        <path d="M110 90 V170 M190 90 V170 M110 130 H190" stroke="#FFFFFF" strokeWidth="14" strokeLinecap="square" />
        <circle cx="215" cy="75" r="18" fill="#00D4FF"/>
        <path d="M207 75 L212 80 L223 69" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
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

export default function CertsList() {
  const [isHaccpModalOpen, setIsHaccpModalOpen] = useState(false);

  return (
    <>
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
                  {cert.isHaccp ? (
                    <button 
                      onClick={() => setIsHaccpModalOpen(true)}
                      className="btn btn--outline btn--small"
                    >
                      View Document
                    </button>
                  ) : (
                    <Link href="/contact" className="btn btn--outline btn--small">
                      Request Verification
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>

      <CertificateModal 
        isOpen={isHaccpModalOpen} 
        onClose={() => setIsHaccpModalOpen(false)}
      >
        <HaccpCertificate />
      </CertificateModal>
    </>
  );
}
