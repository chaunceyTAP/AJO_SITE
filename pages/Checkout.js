import { useState } from 'react'
import CheckoutForm from './components/CheckoutForm'
import CartSummary from './components/CartSummary'
import styles from '@/styles/CheckoutPage.module.css'
import MyNav from './components/MyNav'
import OrderFinalization from './components/OrderFinalization'
export default function CheckoutPage() {
  const [orderSubmitted, setOrderSubmitted] = useState(false)
  const [customerInfo, setCustomerInfo] = useState({})

  const cartItems = [
    { id: 1, name: 'Smartphone', price: 699.99, quantity: 1 },
    { id: 2, name: 'Headphones', price: 199.99, quantity: 2 },
  ]

  const handleOrderSubmit = (info) => {
    setCustomerInfo(info)
    setOrderSubmitted(true)
  }

  return (
    <div className={styles.container}>
      <MyNav />
      <h1 className={styles.pageTitle}>Checkout</h1>
      {!orderSubmitted ? (
        <>
          <CheckoutForm onSubmit={handleOrderSubmit} />
          <CartSummary cartItems={cartItems} />
        </>
      ) : (
        <OrderFinalization customerInfo={customerInfo} cartItems={cartItems} />
      )}
    </div>
  )
}
