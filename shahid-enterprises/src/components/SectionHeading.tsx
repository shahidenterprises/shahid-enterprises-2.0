import styles from './SectionHeading.module.css';

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: 'center' | 'left';
  dark?: boolean;
}

export default function SectionHeading({ label, title, subtitle, align = 'center', dark = false }: SectionHeadingProps) {
  return (
    <div className={`${styles.sectionHeading} ${align === 'left' ? styles.left : ''} ${dark ? styles.dark : ''}`}>
      {label && <span className={styles.label}>{label}</span>}
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.accentLine}></div>
      {subtitle && <p className={styles.subtitle} style={{ marginTop: '1rem' }}>{subtitle}</p>}
    </div>
  );
}
