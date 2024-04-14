'use client'
import * as React from 'react'
import ProductCard from '@/components/ProductCard'
import Grid from '@mui/material/Grid'

interface Product {
  id: string
  name: string
  image: string
  description: string
  price: number
}

interface HomeScreenProps {
  products: Product[]
}

const HomeScreen: React.FC<HomeScreenProps> = ({ products }) => {
  return (
    <>
      <Grid container spacing={2}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <ProductCard product={product} onAddToCart={function (): void {}} />
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export default HomeScreen
