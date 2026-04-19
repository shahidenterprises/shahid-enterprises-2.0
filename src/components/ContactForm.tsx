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
  'Natural Sheep Casings',
  'Goat Casings',
  'Sausage Casings',
  'Bulk Supply',
  'OEM / Custom Sizing',
  'Export Packaging',
  'Multiple Products',
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
        <div className={styles.successIcon}>✓</div>
        <h3>Inquiry Sent Successfully!</h3>
        <p>Thank you for reaching out. Our export team will respond within 24 hours.</p>
        <button 
          onClick={() => setSubmitted(false)} 
          className="btn btn--outline"
          style={{ marginTop: '1.5rem' }}
        >
          ← Send Another Inquiry
        </button>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} id="contact-form">
      {error && <div className={styles.error}>{error}</div>}

      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="name">Full Name *</label>
          <input type="text" id="name" name="name" placeholder="Your full name" required />
        </div>
        <div className={styles.field}>
          <label htmlFor="email">Email Address *</label>
          <input type="email" id="email" name="email" placeholder="your@email.com" required />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="phone">Phone Number</label>
          <input type="tel" id="phone" name="phone" placeholder="+1 234 567 890" />
        </div>
        <div className={styles.field}>
          <label htmlFor="company">Company Name</label>
          <input type="text" id="company" name="company" placeholder="Your company" />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="country">Country *</label>
          <select id="country" name="country" required defaultValue="">
            <option value="" disabled>Select Country</option>
            {countries.slice(1).map(c => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>
        <div className={styles.field}>
          <label htmlFor="product">Product Interest *</label>
          <select id="product" name="product" required defaultValue="">
            <option value="" disabled>Select Product Interest</option>
            {products.slice(1).map(p => (
              <option key={p} value={p}>{p}</option>
            ))}
          </select>
        </div>
      </div>

      <div className={styles.field} style={{ display: 'none' }} aria-hidden="true">
        <label htmlFor="website_url">Website URL</label>
        <input type="text" id="website_url" name="website_url" tabIndex={-1} autoComplete="off" />
      </div>

      <div className={styles.field}>
        <label htmlFor="message">Message *</label>
        <textarea
          id="message"
          name="message"
          placeholder="Tell us about your requirements — quantities, specifications, delivery schedule..."
          required
        />
      </div>

      <button
        type="submit"
        className={`btn btn--primary btn--large ${styles.submitBtn}`}
        disabled={loading}
      >
        {loading ? 'Sending...' : 'Send Inquiry →'}
      </button>
    </form>
  );
}
