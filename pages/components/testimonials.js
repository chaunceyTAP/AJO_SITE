import styles from '@/styles/Home.module.css'
import { Container } from 'reactstrap'
export default function Testimonials() {
  const testimonials = [
    {
      name: 'Jane Doe',
      text: 'This app has transformed our business!',
      company: 'Tech Innovators',
    },
    {
      name: 'John Smith',
      text: 'A must-have tool for any modern business.',
      company: 'Enterprise Solutions',
    },
  ]

  return (
    <Container>
      <section className={styles.testimonialsSection}>
        <h2>What Our Users Say</h2>
        <div className={styles.testimonialsGrid}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className={styles.testimonialCard}>
              <p>"{testimonial.text}"</p>
              <p>
                - {testimonial.name}, {testimonial.company}
              </p>
            </div>
          ))}
        </div>
      </section>
    </Container>
  )
}
