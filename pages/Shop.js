import { useState } from 'react'
import ProductGrid from './components/ProductGrid'
import SearchBar from './components/SearchBar'
import FilterSection from './components/FilterSection'
import CartSummary from './components/CartSummary'
import styles from '@/styles/ShopPage.module.css'

export default function ShopPage() {
  const initialProducts = [
    {
      id: 1,
      name: 'Smartphone',
      price: 699.99,
      image: 'https://source.unsplash.com/800x600/?smartphone',
    },
    {
      id: 2,
      name: 'Headphones',
      price: 199.99,
      image: 'https://source.unsplash.com/800x600/?headphones',
    },
    {
      id: 3,
      name: 'Smartwatch',
      price: 299.99,
      image: 'https://source.unsplash.com/800x600/?smartwatch',
    },
    {
      id: 4,
      name: 'Laptop',
      price: 999.99,
      image: 'https://source.unsplash.com/800x600/?laptop',
    },
    {
      id: 5,
      name: 'Camera',
      price: 549.99,
      image: 'https://source.unsplash.com/800x600/?camera',
    },
    {
      id: 6,
      name: 'Shoes',
      price: 79.99,
      image: 'https://source.unsplash.com/800x600/?shoes',
    },
    {
      id: 7,
      name: 'Backpack',
      price: 49.99,
      image: 'https://source.unsplash.com/800x600/?backpack',
    },
    {
      id: 8,
      name: 'Sunglasses',
      price: 89.99,
      image: 'https://source.unsplash.com/800x600/?sunglasses',
    },
    {
      id: 9,
      name: 'Watch',
      price: 159.99,
      image: 'https://source.unsplash.com/800x600/?watch',
    },
    {
      id: 10,
      name: 'Bluetooth Speaker',
      price: 129.99,
      image: 'https://source.unsplash.com/800x600/?speaker',
    },
  ]

  const [products, setProducts] = useState(initialProducts)
  const [cartItems, setCartItems] = useState([])

  const handleSearch = (searchTerm) => {
    const filteredProducts = initialProducts.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setProducts(filteredProducts)
  }

  const handleFilter = (filters) => {
    const filteredProducts = initialProducts.filter((product) => {
      return (
        product.price >= filters.priceRange[0] &&
        product.price <= filters.priceRange[1] &&
        (filters.category === '' ||
          product.name.toLowerCase().includes(filters.category))
      )
    })
    setProducts(filteredProducts)
  }

  const handleAddToCart = (product) => {
    setCartItems((prevCartItems) => {
      const existingItem = prevCartItems.find((item) => item.id === product.id)

      if (existingItem) {
        // Update quantity if product already in cart
        return prevCartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      } else {
        // Add new product to cart
        return [...prevCartItems, { ...product, quantity: 1 }]
      }
    })
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.pageTitle}>Shop</h1>
      <SearchBar onSearch={handleSearch} />
      <FilterSection onFilter={handleFilter} />
      <ProductGrid products={products} onAddToCart={handleAddToCart} />
      <CartSummary cartItems={cartItems} />
    </div>
  )
}
