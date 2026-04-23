'use client';

import React, { useEffect, useState } from 'react';
import styles from './CertificateModal.module.css';

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNext?: () => void;
  onPrev?: () => void;
  children: React.ReactNode;
}

export default function CertificateModal({ isOpen, onClose, onNext, onPrev, children }: CertificateModalProps) {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      document.body.style.overflow = 'hidden';
    } else {
      const timer = setTimeout(() => {
        setShouldRender(false);
        document.body.style.overflow = '';
      }, 300); // Match transition duration (0.3s)
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' && onNext) {
        onNext();
      } else if (e.key === 'ArrowLeft' && onPrev) {
        onPrev();
      } else if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onNext, onPrev, onClose]);

  if (!shouldRender && !isOpen) return null;

  return (
    <div 
      className={`${styles.overlay} ${isOpen ? styles.visible : ''}`} 
      onClick={onClose}
    >
      <button 
        className={styles.closeButton} 
        onClick={onClose}
        aria-label="Close certificate"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>

      {onPrev && (
        <button 
          className={`${styles.navButton} ${styles.prevButton}`}
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          aria-label="Previous certificate"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
      )}

      {onNext && (
        <button 
          className={`${styles.navButton} ${styles.nextButton}`}
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          aria-label="Next certificate"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      )}
      
      <div 
        className={styles.modalContent} 
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}
