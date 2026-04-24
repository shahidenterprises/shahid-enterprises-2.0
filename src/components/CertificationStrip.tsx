'use client';

import React, { useState } from 'react';
import styles from '../app/Home.module.css';
import CertificateModal from './CertificateModal';
import HaccpCertificate from './HaccpCertificate';
import HalalCertificate from './HalalCertificate';
import FbrCertificate from './FbrCertificate';
import EuCertificate from './EuCertificate';

export default function CertificationStrip() {
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

  const renderCertificate = () => {
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
      <section className={styles.certStrip} id="certs-strip">
        <div className="container">
          <div className={styles.certStripGrid}>
            <button 
              className={styles.certStripItem} 
              onClick={() => setActiveModal('eu')}
              style={{ cursor: 'pointer', background: 'none', border: 'none', padding: 0 }}
            >
              <div className={styles.certStripIcon}>
                <img src="/images/eu_logo.svg" alt="EU Export Licensed" width="40" height="40" />
              </div>
              <span>EU Export Licensed</span>
            </button>
            
            <button 
              className={styles.certStripItem} 
              onClick={() => setActiveModal('haccp')}
              style={{ cursor: 'pointer', background: 'none', border: 'none', padding: 0 }}
            >
              <div className={styles.certStripIcon}>
                <svg width="48" height="48" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M70 60 L150 30 L230 60 V160 C230 210 150 250 150 250 C150 250 70 210 70 160 V60Z" fill="#0A2540"/>
                  <path d="M110 90 V170 M190 90 V170 M110 130 H190" stroke="#FFFFFF" strokeWidth="14" strokeLinecap="square" />
                  <circle cx="215" cy="75" r="18" fill="#00D4FF"/>
                  <path d="M207 75 L212 80 L223 69" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                </svg>
              </div>
              <span>HACCP Approved</span>
            </button>

            <button 
              className={styles.certStripItem} 
              onClick={() => setActiveModal('halal')}
              style={{ cursor: 'pointer', background: 'none', border: 'none', padding: 0 }}
            >
              <div className={styles.certStripIcon}>
                <img src="/images/halal_logo_new.webp" alt="Halal Certified" width="48" height="48" />
              </div>
              <span>Halal Certified</span>
            </button>
            
            <button 
              className={styles.certStripItem} 
              onClick={() => setActiveModal('fbr')}
              style={{ cursor: 'pointer', background: 'none', border: 'none', padding: 0 }}
            >
              <div className={styles.certStripIcon}>
                <img src="/images/fbr_logo.svg" alt="FBR Approved" width="40" height="40" />
              </div>
              <span>FBR Approved</span>
            </button>
          </div>
        </div>
      </section>

      <CertificateModal 
        isOpen={activeModal !== null} 
        onClose={() => setActiveModal(null)}
        onNext={handleNext}
        onPrev={handlePrev}
      >
        {renderCertificate()}
      </CertificateModal>
    </>
  );
}
