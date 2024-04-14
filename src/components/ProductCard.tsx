'use client'
import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { CardActionArea } from '@mui/material'

interface Product {
  image: string
  name: string
  description: string
  price: number
}

interface ProductCardProps {
  product: Product
  onAddToCart: () => void // Función para manejar la acción de agregar al carrito
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const handleAddToCart = () => {
    // Llama a la función proporcionada por el padre para agregar el producto al carrito
    onAddToCart()
  }

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={product.image}
          alt={product.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.description}
          </Typography>
          <Typography variant="h6" color="text.primary">
            ${product.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      {/* Botón para agregar al carrito */}
      <Button onClick={handleAddToCart} variant="contained" color="primary">
        Agregar al carrito
      </Button>
    </Card>
  )
}
