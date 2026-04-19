import styles from './TestimonialCard.module.css';

interface TestimonialCardProps {
  text: string;
  author: string;
  company: string;
  country: string;
  rating?: number;
}

export default function TestimonialCard({ text, author, company, country, rating = 5 }: TestimonialCardProps) {
  const initials = author.split(' ').map(n => n[0]).join('');

  return (
    <div className={styles.card}>
      <span className={styles.quote}>&ldquo;</span>
      <div className={styles.stars}>
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} className={styles.star} style={{ opacity: i < rating ? 1 : 0.25 }}>★</span>
        ))}
      </div>
      <p className={styles.text}>&ldquo;{text}&rdquo;</p>
      <div className={styles.author}>
        <div className={styles.avatar}>{initials}</div>
        <div className={styles.authorInfo}>
          <h4>{author}</h4>
          <p>{company} — {country}</p>
        </div>
      </div>
    </div>
  );
}
