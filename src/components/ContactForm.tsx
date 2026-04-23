'use client';

import { useState, FormEvent, useEffect, useRef } from 'react';
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

interface CustomSelectProps {
  options: string[];
  name: string;
  placeholder: string;
  required?: boolean;
  columns?: number;
}

function CustomSelect({ options, name, placeholder, required, columns = 1 }: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState('');
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className={`${styles.customSelectWrapper} ${isOpen ? styles.isOpen : ''} ${columns > 1 ? styles.hasColumns : ''}`} ref={wrapperRef}>
      <div 
        className={styles.customSelect} 
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span className={`${styles.customSelectValue} ${!selected ? styles.placeholder : ''}`}>
          {selected || placeholder}
        </span>
        <svg className={styles.arrow} width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      
      {isOpen && (
        <div className={`${styles.optionsList} ${columns > 1 ? styles.wideList : ''}`} role="listbox">
          <div className={`${styles.optionsScroll} ${columns === 2 ? styles.grid2 : ''}`}>
            {options.map((option) => (
              <div
                key={option}
                className={`${styles.option} ${selected === option ? styles.selected : ''}`}
                onClick={() => {
                  setSelected(option);
                  setIsOpen(false);
                }}
                role="option"
                aria-selected={selected === option}
              >
                {option}
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* Hidden input for form submission */}
      <input type="hidden" name={name} value={selected} required={required} />
    </div>
  );
}

interface ContactFormProps {
  theme?: 'light' | 'dark';
  compact?: boolean;
}

export default function ContactForm({ theme = 'light', compact = false }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setError('');
    setLoading(true);

    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    // Validation for custom selects
    if (!data.country || data.country === 'Select Country') {
      setError('Please select a country');
      setLoading(false);
      return;
    }
    if (!data.product || data.product === 'Select Product Interest') {
      setError('Please select a product interest');
      setLoading(false);
      return;
    }

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

      form.reset();
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
    <form 
      className={`${styles.form} ${theme === 'dark' ? styles.darkTheme : ''} ${compact ? styles.compact : ''}`} 
      onSubmit={handleSubmit} 
      id="contact-form"
    >
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
          <CustomSelect 
            options={countries.slice(1)} 
            name="country" 
            placeholder="Select Country" 
            required 
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="contact-product">Product Interest</label>
          <CustomSelect 
            options={products.slice(1)} 
            name="product" 
            placeholder="Select Interest" 
            required 
          />
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
