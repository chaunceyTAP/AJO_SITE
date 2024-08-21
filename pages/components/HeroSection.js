import styles from '@/styles/Home.module.css'

export default function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        <h1>Your Modern Web App Solution</h1>
        <p>Build, deploy, and scale your applications with ease.</p>
        <button className={styles.primaryButton}>Get Started</button>
      </div>
    </section>
  )
}
