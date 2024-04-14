'use client'
import * as React from 'react'
import { Container, Typography, TextField, Button } from '@mui/material'
import NavBar from '@/components/NavBar'
import ImageAnalyzerClient from '@/components/ImageAnalyzer'

const SellPage: React.FC = () => {
  const [productName, setProductName] = React.useState('')
  const [productDescription, setProductDescription] = React.useState('')
  const [productPrice, setProductPrice] = React.useState('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // Aquí puedes enviar los datos del producto al servidor para su procesamiento
    console.log('Nombre del producto:', productName)
    console.log('Descripción del producto:', productDescription)
    console.log('Precio del producto:', productPrice)
    // Aquí podrías hacer una solicitud a tu API para guardar los datos del producto en la base de datos
  }

  return (
    <>
      <NavBar />
      <Container maxWidth="sm">
        <Typography variant="h4" gutterBottom>
          Vender Producto
        </Typography>
        <ImageAnalyzerClient />
        <form onSubmit={handleSubmit}>
          <TextField
            label="Nombre del Producto"
            variant="outlined"
            fullWidth
            margin="normal"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
          <TextField
            label="Descripción del Producto"
            variant="outlined"
            fullWidth
            margin="normal"
            multiline
            rows={4}
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
          />
          <TextField
            label="Precio del Producto"
            variant="outlined"
            fullWidth
            margin="normal"
            type="number"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
          />
          <Button type="submit" variant="contained" color="primary">
            Vender
          </Button>
        </form>
      </Container>
    </>
  )
}

export default SellPage
