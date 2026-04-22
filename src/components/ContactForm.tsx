'use client';

import { useState, FormEvent } from 'react';
import styles from './ContactForm.module.css';

const countries = [
  'Select Country', 'Germany', 'Netherlands', 'United Kingdom', 'France', 'Italy', 'Spain', 'Poland',
  'Belgium', 'Czech Republic', 'Greece',
  'United Arab Emirates', 'Saudi Arabia', 'Qatar', 'Kuwait', 'Bahrain', 'Oman',
  'Turkey', 'Jordan',
  'Pakistan', 'India', 'Bangladesh', 'Other'
];

const products = [
  'Select Product Interest',
  'Afghani Casings',
  'Goat Casings',
  'Bulk Supply',
  'OEM / Custom Sizing',
  'Other'
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget; // Capture the form reference
    setError('');
    setLoading(true);

    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const result = await res.json();
        throw new Error(result.error || 'Something went wrong');
      }

      form.reset(); // Use the captured reference
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to send. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className={styles.success}>
        <div className={styles.successIcon}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3>Inquiry Sent Successfully!</h3>
        <p>Thank you for reaching out. Our export team will respond within 24 hours.</p>
        <button 
          onClick={() => setSubmitted(false)} 
          id="contact-success-reset-btn"
          className="btn btn--outline btn--large"
          style={{ marginTop: '2rem' }}
        >
          ← Send Another Inquiry
        </button>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} id="contact-form">
      {error && <div className={styles.error} id="contact-form-error">{error}</div>}

      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="contact-name">Full Name</label>
          <input type="text" id="contact-name" name="name" placeholder="Name" required />
        </div>
        <div className={styles.field}>
          <label htmlFor="contact-email">Email Address</label>
          <input type="email" id="contact-email" name="email" placeholder="Email" required />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="contact-phone">Phone Number</label>
          <input type="tel" id="contact-phone" name="phone" placeholder="Phone" />
        </div>
        <div className={styles.field}>
          <label htmlFor="contact-company">Company Name</label>
          <input type="text" id="contact-company" name="company" placeholder="Company" />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="contact-country">Country</label>
          <select id="contact-country" name="country" required defaultValue="">
            <option value="" disabled>Select Country</option>
            {countries.slice(1).map(c => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>
        <div className={styles.field}>
          <label htmlFor="contact-product">Product Interest</label>
          <select id="contact-product" name="product" required defaultValue="">
            <option value="" disabled>Select Interest</option>
            {products.slice(1).map(p => (
              <option key={p} value={p}>{p}</option>
            ))}
          </select>
        </div>
      </div>

      <div className={styles.field} style={{ display: 'none' }} aria-hidden="true">
        <label htmlFor="contact-website-url">Website URL</label>
        <input type="text" id="contact-website-url" name="website_url" tabIndex={-1} autoComplete="off" />
      </div>

      <div className={styles.field}>
        <label htmlFor="contact-message">Message</label>
        <textarea
          id="contact-message"
          name="message"
          placeholder="How can we help you?"
          required
        />
      </div>

      <button
        type="submit"
        id="contact-form-submit-btn"
        className={`btn btn--primary btn--large ${styles.submitBtn}`}
        disabled={loading}
      >
        {loading ? 'Sending...' : 'Send Inquiry →'}
      </button>
    </form>
  );
}
