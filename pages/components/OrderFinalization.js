import { useEffect, useState } from 'react'
import styles from '@/styles/CheckoutPage.module.css'

export default function OrderFinalization({ customerInfo, cartItems }) {
  const [orderNumber, setOrderNumber] = useState(null)
  const [isProcessing, setIsProcessing] = useState(true)

  useEffect(() => {
    // Simulate order processing delay
    setTimeout(() => {
      const generatedOrderNumber = Math.floor(Math.random() * 1000000)
      setOrderNumber(generatedOrderNumber)
      setIsProcessing(false)
    }, 2000) // 2-second delay for demo purposes
  }, [])

  if (isProcessing) {
    return (
      <div className={styles.processing}>
        <p>Processing your order...</p>
      </div>
    )
  }

  return (
    <div className={styles.orderFinalization}>
      <h2>Order Confirmed!</h2>
      <p>Thank you for your purchase, {customerInfo.name}.</p>
      <p>
        Your order number is <strong>{orderNumber}</strong>.
      </p>
      <p>
        A confirmation email has been sent to{' '}
        <strong>{customerInfo.email}</strong>.
      </p>
      <h3>Order Summary</h3>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} x {item.quantity} - ${item.price.toFixed(2)} each
          </li>
        ))}
      </ul>
      <p>
        Total Price: $
        {cartItems
          .reduce((sum, item) => sum + item.price * item.quantity, 0)
          .toFixed(2)}
      </p>
    </div>
  )
}
