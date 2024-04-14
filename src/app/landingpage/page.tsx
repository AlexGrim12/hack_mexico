'use client'
// Importa los componentes necesarios de React y Material-UI
import * as React from 'react'
import {
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  Box,
  Paper,
} from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'

// Define el componente de la página de inicio
const LandingPage = () => {
  return (
    <Container maxWidth="lg" sx={{ textAlign: 'center', mt: 4 }}>
      {/* Encabezado principal */}
      <Typography variant="h2" component="h1" gutterBottom>
        ¡Bienvenido a nuestra tienda!
      </Typography>
      {/* Imagen de la tienda */}
      <Box sx={{ position: 'relative', mb: 4 }}>
        <Image src="/store.png" alt="Store" width={981} height={400} />
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          <Typography variant="h4" component="h2" color="white">
            Descubre nuestros productos exclusivos
          </Typography>
          <Link href="/" passHref>
            <Button variant="contained" color="primary" sx={{ mt: 2 }}>
              Explorar Productos
            </Button>
          </Link>
        </Box>
      </Box>
      {/* Sección "Sobre Nosotros" */}
      <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Sobre Nosotros
        </Typography>
        <Grid container spacing={4}>
          {/* Nuestra Historia */}
          <Grid item xs={12} sm={6}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Nuestra Historia
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Somos una tienda comprometida con la calidad y la satisfacción
                  del cliente. Desde nuestro inicio, nos hemos esforzado por
                  ofrecer los mejores productos y un servicio excepcional.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          {/* Nuestra Misión */}
          <Grid item xs={12} sm={6}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Nuestra Misión
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Nuestra misión es proporcionar a nuestros clientes una
                  experiencia de compra inigualable, ofreciendo productos de
                  calidad y un servicio excepcional. Estamos comprometidos con
                  la satisfacción del cliente en cada paso del camino.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  )
}

// Exporta el componente de la página de inicio
export default LandingPage
