// src/app/page.tsx

import ImageAnalyzerClient from '@/components/ImageAnalyzer.client'
import NavBar from '@/components/NavBar'
import HomeScreen from './screens/HomeScreen'

interface Product {
  id: string
  name: string
  image: string
  description: string
  price: number
}

export default function Page() {
  const exampleProducts: Product[] = [
    {
      id: '1',
      name: 'Producto 1',
      image: 'url_de_la_imagen',
      description: 'Descripción del producto 1',
      price: 10.99,
    },
    {
      id: '2',
      name: 'Producto 2',
      image: 'url_de_la_imagen',
      description: 'Descripción del producto 2',
      price: 19.99,
    },
    {
      id: '3',
      name: 'Producto 3',
      image: 'url_de_la_imagen',
      description: 'Descripción del producto 3',
      price: 5.99,
    },
    {
      id: '4',
      name: 'Producto 4',
      image: 'url_de_la_imagen',
      description: 'Descripción del producto 4',
      price: 15.99,
    },
    // Agrega más productos si lo deseas
  ]

  return (
    <div>
      <NavBar />
      <HomeScreen products={exampleProducts} />
      <ImageAnalyzerClient />
    </div>
  )
}
