import { useState } from 'react'
import styles from '@/styles/CheckoutPage.module.css'

export default function CheckoutForm({ onSubmit }) {
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    paymentMethod: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setCustomerInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(customerInfo)
  }

  return (
    <form className={styles.checkoutForm} onSubmit={handleSubmit}>
      <h2>Customer Information</h2>
      <div className={styles.formGroup}>
        <label htmlFor='name'>Name:</label>
        <input
          type='text'
          id='name'
          name='name'
          value={customerInfo.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor='email'>Email:</label>
        <input
          type='email'
          id='email'
          name='email'
          value={customerInfo.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor='address'>Address:</label>
        <input
          type='text'
          id='address'
          name='address'
          value={customerInfo.address}
          onChange={handleChange}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor='city'>City:</label>
        <input
          type='text'
          id='city'
          name='city'
          value={customerInfo.city}
          onChange={handleChange}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor='state'>State:</label>
        <input
          type='text'
          id='state'
          name='state'
          value={customerInfo.state}
          onChange={handleChange}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor='zip'>ZIP Code:</label>
        <input
          type='text'
          id='zip'
          name='zip'
          value={customerInfo.zip}
          onChange={handleChange}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor='paymentMethod'>Payment Method:</label>
        <select
          id='paymentMethod'
          name='paymentMethod'
          value={customerInfo.paymentMethod}
          onChange={handleChange}
          required
        >
          <option value=''>Select Payment Method</option>
          <option value='creditCard'>Credit Card</option>
          <option value='paypal'>PayPal</option>
        </select>
      </div>
      <button type='submit' className={styles.submitButton}>
        Submit Order
      </button>
    </form>
  )
}
