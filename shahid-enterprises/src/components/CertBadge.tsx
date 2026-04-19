import styles from './CertBadge.module.css';

interface CertBadgeProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function CertBadge({ icon, title, description }: CertBadgeProps) {
  return (
    <div className={styles.badge}>
      <div className={styles.iconWrap}>
        {icon}
      </div>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
}
