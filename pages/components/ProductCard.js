import styles from '@/styles/Home.module.css'
import Image from 'next'
export default function ProductCard({ product, onAddToCart }) {
  return (
    <div className={styles.productCard}>
      <Image
        src={product.image}
        alt={product.name}
        className={styles.productImage}
      />
      <h2 className={styles.productName}>{product.name}</h2>
      <p className={styles.productPrice}>${product.price.toFixed(2)}</p>
      <button
        className={styles.addToCartButton}
        onClick={() => onAddToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  )
}
