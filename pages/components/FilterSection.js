import { useState } from 'react'
import styles from '@/styles/ShopPage.module.css'

export default function FilterSection({ onFilter }) {
  const [priceRange, setPriceRange] = useState([0, 1000])
  const [category, setCategory] = useState('')

  const handleFilter = () => {
    onFilter({ priceRange, category })
  }

  return (
    <div className={styles.filterSection}>
      <div className={styles.filterGroup}>
        <label htmlFor='category'>Category:</label>
        <select
          id='category'
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className={styles.filterSelect}
        >
          <option value=''>All</option>
          <option value='electronics'>Electronics</option>
          <option value='fashion'>Fashion</option>
          <option value='accessories'>Accessories</option>
        </select>
      </div>

      <div className={styles.filterGroup}>
        <label>Price Range:</label>
        <input
          type='range'
          min='0'
          max='1000'
          value={priceRange[1]}
          onChange={(e) => setPriceRange([0, e.target.value])}
          className={styles.filterRange}
        />
        <span>
          ${priceRange[0]} - ${priceRange[1]}
        </span>
      </div>

      <button onClick={handleFilter} className={styles.filterButton}>
        Apply Filters
      </button>
    </div>
  )
}
