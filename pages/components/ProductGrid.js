import { Col, Container, Row } from 'reactstrap'
import ProductCard from './ProductCard'
import styles from '@/styles/Home.module.css'

export default function ProductGrid({ products, onAddToCart }) {
  return (
    <div className={styles.productGrid}>
      <Container>
        <Row>
          {products.map((product) => (
            <Col xs={12} md={6} lg={4} xl={3}>
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}
