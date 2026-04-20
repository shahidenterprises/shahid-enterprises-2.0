import type { Metadata } from 'next';
import Image from 'next/image';
import styles from './FAQ.module.css';
import heroStyles from '../PageHero.module.css';
import AnimatedSection from '@/components/AnimatedSection';

export const metadata: Metadata = {
  title: 'FAQ | Natural Casings Export — Shahid Enterprises Pakistan',
  description: 'Answers to common questions about ordering natural sheep and goat casings from Shahid Enterprises — MCQ, lead times, payment terms, shipping, and samples.',
};

const faqSections = [
  {
    title: 'Ordering & MOQ',
    items: [
      {
        q: 'What is your minimum order quantity (MOQ)?',
        a: 'Our standard MOQ is [X] kg per shipment. We also offer trial/sample orders for new buyers. Contact us to discuss your specific requirements.',
      },
      {
        q: 'Can I request product samples before placing a bulk order?',
        a: 'Yes. We offer sample orders for qualified buyers. Please contact our export team with your company details and we will arrange samples.',
      },
    ],
  },
  {
    title: 'Products & Specifications',
    items: [
      {
        q: 'What calibers of sheep casings do you offer?',
        a: 'We supply sheep casings in all standard calibers from 14/16mm up to 26/28mm, sorted by quality grades: AA, A, AB, B, and C.',
      },
      {
        q: 'Do you offer custom caliber sorting or private label packaging?',
        a: 'Yes. We offer OEM and custom sizing options. Contact us with your specifications and we will provide a tailored quote.',
      },
      {
        q: 'Are your products Halal certified?',
        a: 'Yes. All our products are sourced and processed under full Halal compliance, certified throughout the supply chain from sourcing to final packaging.',
      },
    ],
  },
  {
    title: 'Export & Shipping',
    items: [
      {
        q: 'Which countries do you export to?',
        a: 'We currently export to Germany, Netherlands, UK, France, Italy, Spain, Poland, UAE, Saudi Arabia, Qatar, Kuwait, Bahrain, Oman, and more. Contact us if your country is not listed.',
      },
      {
        q: 'What are your payment terms?',
        a: 'We accept Letter of Credit (LC), Telegraphic Transfer (T/T), and advance payment. Terms are discussed and agreed upon per order.',
      },
      {
        q: 'How long does shipping take?',
        a: 'Sea freight to Europe typically takes 25–35 days. Gulf shipments take approximately 10–20 days. Air freight is available for urgent orders.',
      },
      {
        q: 'What shipping and export documents do you provide?',
        a: 'We provide: Commercial Invoice, Packing List, Certificate of Origin, Health Certificate, Halal Certificate, Phytosanitary Certificate, and Bill of Lading.',
      },
    ],
  },
  {
    title: 'Quality & Certifications',
    items: [
      {
        q: 'Are you EU approved for export?',
        a: 'Yes. Our facility holds a valid EU Export License for natural casings of animal origin, compliant with EU food safety regulations.',
      },
      {
        q: 'Can I visit or audit your facility?',
        a: 'Yes. We welcome facility visits and third-party audits. Please contact us to schedule in advance.',
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <>
      <section className={heroStyles.pageHero}>
        <div className={heroStyles.heroBg}>
          <Image 
            src="/images/logistics_global.webp" 
            alt="Shahid Enterprises FAQ" 
            fill 
            priority 
            className={heroStyles.heroImage}
            sizes="100vw"
          />
        </div>
        <div className={heroStyles.heroOverlay} />
        <div className={`container ${heroStyles.heroContent}`}>
          <div className="accent-line accent-line--center" style={{ marginBottom: '1.25rem' }}></div>
          <h1>Frequently Asked Questions</h1>
          <p>Everything you need to know about ordering and importing premium natural casings.</p>
        </div>
      </section>

      <section className={styles.faqList}>
        <div className="container">
          {faqSections.map((section, idx) => (
            <div key={idx} className={styles.faqGroup}>
              <AnimatedSection delay={idx * 100}>
                <h2>{section.title}</h2>
              </AnimatedSection>
              {section.items.map((item, i) => (
                <AnimatedSection key={i} delay={(idx * 100) + (i * 50)}>
                  <div className={styles.faqItem}>
                    <div className={styles.question}>
                      <span className={styles.qIcon}>Q:</span>
                      <h3>{item.q}</h3>
                    </div>
                    <div className={styles.answer}>
                      <p>{item.a}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
