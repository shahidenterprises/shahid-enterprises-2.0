'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../app/certifications/Certifications.module.css';
import AnimatedSection from './AnimatedSection';
import CertificateModal from './CertificateModal';
import HaccpCertificate from './HaccpCertificate';
import HalalCertificate from './HalalCertificate';
import FbrCertificate from './FbrCertificate';
import EuCertificate from './EuCertificate';

const certs = [
  {
    title: 'EU Export License',
    image: '/images/cert_eu_8k.webp',
    desc: 'Our manufacturing facility holds a valid European Union export license (Reg # 06-MINFAL-SHE), enabling us to supply natural casings to all EU member states in full compliance with international food safety standards.',
    tag: 'EU Approved',
    isEu: true,
    icon: (
      <img src="/images/eu_logo.svg" alt="EU Export Licensed" width="20" height="20" />
    ),
  },
  {
    title: 'HACCP Certified',
    image: '/images/cert_haccp_8k.webp',
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
    image: '/images/cert_halal_8k.webp',
    desc: 'All our products are sourced and processed in full compliance with Islamic dietary laws. Our Halal certification covers the entire supply chain from sourcing to final packaging, ensuring complete Halal integrity.',
    tag: 'Halal Compliant',
    isHalal: true,
    icon: (
      <img src="/images/halal_logo_new.png" alt="Halal Certified" width="24" height="24" />
    ),
  },
  {
    title: 'FBR Approved',
    image: '/images/cert_fbr_8k.webp',
    desc: 'Registered and approved by the Federal Board of Revenue of Pakistan. Our operations fully comply with all national regulations for export businesses, ensuring transparent and lawful trade practices.',
    tag: 'Government Approved',
    isFbr: true,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect width="18" height="18" x="3" y="3" rx="2"/><path d="m9 12 2 2 4-4"/>
      </svg>
    ),
  },
];

export default function CertsList() {
  const [activeModal, setActiveModal] = useState<null | 'haccp' | 'halal' | 'fbr' | 'eu'>(null);

  const certOrder: ('eu' | 'haccp' | 'halal' | 'fbr')[] = ['eu', 'haccp', 'halal', 'fbr'];

  const handleNext = () => {
    if (!activeModal) return;
    const currentIndex = certOrder.indexOf(activeModal as any);
    const nextIndex = (currentIndex + 1) % certOrder.length;
    setActiveModal(certOrder[nextIndex]);
  };

  const handlePrev = () => {
    if (!activeModal) return;
    const currentIndex = certOrder.indexOf(activeModal as any);
    const prevIndex = (currentIndex - 1 + certOrder.length) % certOrder.length;
    setActiveModal(certOrder[prevIndex]);
  };

  const renderActiveCertificate = () => {
    switch (activeModal) {
      case 'haccp': return <HaccpCertificate />;
      case 'halal': return <HalalCertificate />;
      case 'fbr': return <FbrCertificate />;
      case 'eu': return <EuCertificate />;
      default: return null;
    }
  };

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
                  {(cert.isHaccp || cert.isHalal || cert.isFbr || cert.isEu) ? (
                    <button 
                      onClick={() => {
                        if (cert.isHaccp) setActiveModal('haccp');
                        if (cert.isHalal) setActiveModal('halal');
                        if (cert.isFbr) setActiveModal('fbr');
                        if (cert.isEu) setActiveModal('eu');
                      }}
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
        isOpen={activeModal !== null} 
        onClose={() => setActiveModal(null)}
        onNext={handleNext}
        onPrev={handlePrev}
      >
        {renderActiveCertificate()}
      </CertificateModal>
    </>
  );
}
