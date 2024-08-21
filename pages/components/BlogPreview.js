import styles from '@/styles/Home.module.css'
import { Container } from 'reactstrap'

export default function BlogPreview() {
  const posts = [
    {
      title: 'Building Scalable Apps',
      date: 'August 1, 2024',
      excerpt: 'Learn how to scale your applications with best practices...',
    },
    {
      title: 'Next.js Best Practices',
      date: 'July 21, 2024',
      excerpt: 'Optimize your Next.js apps with these tips...',
    },
  ]

  return (
    <section className={styles.blogPreviewSection}>
      <h2>Latest from the Blog</h2>
      <div className={styles.blogGrid}>
        {posts.map((post, index) => (
          <div key={index} className={styles.blogCard}>
            <h3>{post.title}</h3>
            <p>{post.date}</p>
            <p>{post.excerpt}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
