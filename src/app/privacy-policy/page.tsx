import type { Metadata } from 'next';
import styles from '../Legal.module.css';
import heroStyles from '../PageHero.module.css';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Privacy Policy | Shahid Enterprises — Natural Casings Exporter',
  description: 'Learn how Shahid Enterprises collects, uses, and protects your data. GDPR compliant privacy practices for our international B2B partners.',
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className={heroStyles.pageHero}>
        <div className={heroStyles.heroBg}>
          <Image 
            src="/images/hero_bg.webp" 
            alt="Privacy Policy" 
            fill 
            className={heroStyles.heroImage}
            sizes="100vw"
          />
        </div>
        <div className={heroStyles.heroOverlay} />
        <div className={`container ${heroStyles.heroContent}`}>
          <h1>Privacy Policy</h1>
          <p>Your privacy is important to us. Here is how we handle your data.</p>
        </div>
      </section>

      <section className={styles.legalContainer}>
        <div className="container">
          <div className={styles.legalContent}>
            <h2>1. Information We Collect</h2>
            <p>We collect information that you provide directly to us when you fill out our contact form or communicate with us via WhatsApp. This may include:</p>
            <ul>
              <li>Name and Job Title</li>
              <li>Email Address</li>
              <li>Phone Number (WhatsApp)</li>
              <li>Company Name</li>
              <li>Country</li>
              <li>Product Requirements and Inquiries</li>
            </ul>

            <h2>2. How We Use Your Information</h2>
            <p>We use the collected information solely to:</p>
            <ul>
              <li>Respond to your business inquiries and provide quotes</li>
              <li>Arrange product samples and manage orders</li>
              <li>Provide customer support and export documentation</li>
              <li>Comply with international trade regulations</li>
            </ul>

            <h2>3. Data Sharing and Disclosure</h2>
            <p>Shahid Enterprises does not sell, trade, or share your personal information with third parties for marketing purposes. Your data is only shared with essential logistics partners (shipping lines, freight forwarders) and regulatory authorities when necessary to complete your export order.</p>

            <h2>4. Data Deletion</h2>
            <p>You have the right to request the deletion of your personal data at any time. If you would like us to remove your information from our records, please email us at <strong>contact@shahidenterprises.com</strong>.</p>

            <h2>5. Cookies</h2>
            <p>Our website uses functional cookies to ensure the contact form and basic site features work correctly. We do not use advertising or tracking cookies from third-party networks.</p>

            <h2>6. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at:</p>
            <p>Email: <strong>contact@shahidenterprises.com</strong></p>
          </div>
        </div>
      </section>
    </>
  );
}
