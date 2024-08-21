import styles from '@/styles/Home.module.css'
import { Container } from 'reactstrap'

export default function CTASection() {
  return (
    <section className={styles.ctaSection}>
      <h2>Ready to Get Started?</h2>
      <p>Join thousands of users who are building the future.</p>
      <button className={styles.primaryButton}>Sign Up Now</button>
    </section>
  )
}
