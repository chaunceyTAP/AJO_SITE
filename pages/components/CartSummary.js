import { useRouter } from 'next/router'
import styles from '@/styles/ShopPage.module.css'
import { Button } from 'reactstrap'

export default function CartSummary({ cartItems }) {
  const router = useRouter()
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0)
  const totalPrice = cartItems
    .reduce((sum, item) => sum + item.price * item.quantity, 0)
    .toFixed(2)

  return (
    <div className={styles.cartSummary}>
      <h2>Cart Summary</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} x {item.quantity} - ${item.price.toFixed(2)} each
          </li>
        ))}
      </ul>
      <p>Total Items: {totalItems}</p>
      <p>Total Price: ${totalPrice}</p>
      {/* <Button
        className={styles.checkoutButton}
        // onClick={() => router.push('/checkout')}
        href='/Checkout'
      >
        Checkout
      </Button> */}
      <button href='/Checkout' onClick={() => router.push('/Checkout')}>
        Checkout
      </button>
    </div>
  )
}
