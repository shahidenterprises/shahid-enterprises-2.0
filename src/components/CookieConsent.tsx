'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './CookieConsent.module.css';

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie_consent', 'true');
    // Also set a real cookie for server-side if needed, but localStorage is requested
    document.cookie = "cookie_consent=true; max-age=" + 365 * 24 * 60 * 60 + "; path=/";
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className={styles.banner}>
      <div className={styles.container}>
        <p className={styles.text}>
          We use functional cookies to process your inquiry form. By using this site you agree to our{' '}
          <Link href="/privacy-policy" className={styles.link}>
            Privacy Policy
          </Link>.
        </p>
        <div className={styles.actions}>
          <Link href="/privacy-policy" className={`btn btn--secondary btn--small ${styles.hideMobile}`}>
            View Privacy Policy
          </Link>
          <button onClick={acceptCookies} className="btn btn--accent btn--small">
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
