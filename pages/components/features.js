import styles from '@/styles/Home.module.css'
import { Container } from 'reactstrap'

export default function Features() {
  const features = [
    {
      title: 'Fast Performance',
      description: 'Optimized for speed and reliability.',
    },
    {
      title: 'Scalable Architecture',
      description: 'Easily scale with our robust infrastructure.',
    },
    {
      title: 'Customizable',
      description: 'Tailor the app to your needs with our flexible design.',
    },
  ]

  return (
    <Container>
      <section className={styles.featuresSection}>
        <h2>Key Features</h2>
        <div className={styles.featuresGrid}>
          {features.map((feature, index) => (
            <div key={index} className={styles.featureCard}>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    </Container>
  )
}
