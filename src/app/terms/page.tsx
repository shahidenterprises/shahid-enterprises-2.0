import type { Metadata } from 'next';
import styles from '../Legal.module.css';
import heroStyles from '../PageHero.module.css';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Shahid Enterprises Pakistan',
  description: 'Standard export terms and conditions for ordering natural sheep and goat casings from Shahid Enterprises. Governing law, payment terms, and delivery estimates.',
};

export default function TermsPage() {
  return (
    <>
      <section className={heroStyles.pageHero}>
        <div className={heroStyles.heroBg}>
          <Image 
            src="/images/banner_terms_8k.webp" 
            alt="Terms & Conditions" 
            fill 
            className={heroStyles.heroImage}
            sizes="100vw"
            priority
          />
        </div>
        <div className={heroStyles.heroOverlay} />
        <div className={`container ${heroStyles.heroContent}`}>
          <h1>Terms &amp; Conditions</h1>
          <p>The standard terms governing our international export agreements.</p>
        </div>
      </section>

      <section className={styles.legalContainer}>
        <div className="container">
          <div className={styles.legalContent}>
            <h2>1. Orders and Agreements</h2>
            <p>All orders are subject to a formal written agreement or Purchase Order (PO). An order is only considered confirmed once Shahid Enterprises provides a Proforma Invoice and the agreed payment terms are met.</p>

            <h2>2. Pricing</h2>
            <p>Unless stated otherwise in writing, all prices quoted are Ex-Works (EXW) Multan, Pakistan. Freight, insurance, and other shipping costs are the responsibility of the buyer unless CFR or CIF terms are specifically agreed upon.</p>

            <h2>3. Payment Terms</h2>
            <p>Payment terms are mutually agreed upon per purchase order. We typically accept:</p>
            <ul>
              <li>Irrevocable Letter of Credit (L/C) at sight</li>
              <li>Telegraphic Transfer (T/T)</li>
              <li>Advance payment for sample or trial orders</li>
            </ul>

            <h2>4. Delivery and Shipping</h2>
            <p>Delivery timelines provided are estimates based on standard production and shipping schedules. Shahid Enterprises is not liable for delays caused by shipping lines, port congestion, or customs procedures in the destination country.</p>

            <h2>5. Quality and Disputes</h2>
            <p>We take immense pride in our quality. Any disputes regarding product specifications or quality must be raised in writing within 7 days of the delivery of the goods at the destination port, accompanied by relevant inspection reports.</p>

            <h2>6. Governing Law</h2>
            <p>These terms and any export agreements are governed by the laws of the Islamic Republic of Pakistan.</p>

            <h2>7. Contact Information</h2>
            <p>For any questions regarding our terms, please contact our export team at <strong>contact@shahid-enterprises.com</strong>.</p>
          </div>
        </div>
      </section>
    </>
  );
}
