// src/app/page.tsx

import NavBar from '@/components/NavBar'
import HomeScreen from './HomeScreen'
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
      name: 'Lechuga',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Romaine_lettuce.jpg/1200px-Romaine_lettuce.jpg',
      description:
        'Lechuga crujiente. Ideal para ensaladas. Precio por unidad. Peso aproximado: 500g.',
      price: 10.99,
    },
    {
      id: '2',
      name: 'Papas',
      image:
        'data:image/jpeg;base64,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',
      description:
        'Papas de alta calidad. Precio por kilogramo. Peso aproximado: 1kg. Ideal para freír o cocinar al horno.',
      price: 19.99,
    },
    {
      id: '3',
      name: 'Zanahorias',
      image:
        'https://www.cuerpomente.com/medio/2020/10/21/zanahoria_b6b4af96_1200x630.jpg',
      description:
        'Zanahorias. Precio por kilogramo. Peso aproximado: 1kg. Ideal para ensaladas o cocinar al vapor.',
      price: 5.99,
    },
    {
      id: '4',
      name: 'Tomates',
      image:
        'https://imagenes.20minutos.es/files/image_1920_1080/uploads/imagenes/2021/02/10/tomates.jpeg',
      description:
        'Tomates. Precio por kilogramo. Peso aproximado: 1kg. Ideal para ensaladas o salsas.',
      price: 15.99,
    },
    {
      id: '5',
      name: 'Pimientos',
      image:
        'https://www.eluniverso.com/resizer/A1BdHYjpOcv66l8nw2icYMdOBN8=/893x670/smart/filters:quality(70)/cloudfront-us-east-1.images.arcpublishing.com/eluniverso/ZSXKJ6WBFVBETIMJCQQK7VSFGI.jpg',
      description:
        'Pimientos. Precio por kilogramo. Peso aproximado: 1kg. Ideal para asar o cocinar al horno.',
      price: 12.99,
    },
    {
      id: '6',
      name: 'Cebollas',
      image:
        'https://recetasdecocina.elmundo.es/wp-content/uploads/2022/03/cebolla.jpg',
      description:
        'Cebollas. Precio por kilogramo. Peso aproximado: 1kg. Ideal para ensaladas o cocinar al horno.',
      price: 7.99,
    },
    {
      id: '7',
      name: 'Ajos',
      image:
        'https://www.65ymas.com/uploads/s1/19/10/72/bigstock-164524883.jpeg',
      description:
        'Ajos. Precio por kilogramo. Peso aproximado: 1kg. Ideal para condimentar o cocinar al horno.',
      price: 6.99,
    },
    {
      id: '8',
      name: 'Pepinos',
      image: 'https://geneseeds.com.mx/wp-content/uploads/Pepino-Calypso.png',
      description:
        'Pepinos. Precio por kilogramo. Peso aproximado: 1kg. Ideal para ensaladas o cocinar al vapor.',
      price: 9.99,
    },
    // Agrega más productos si lo deseas
  ]

  return (
    <div>
      <NavBar />
      <HomeScreen products={exampleProducts} />
    </div>
  )
}
