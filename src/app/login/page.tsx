'use client'
// pages/login.tsx
import { TextField, Button, Container } from '@mui/material'
import NavBar from '@/components/NavBar'

const LoginPage = () => {
  return (
    <>
      <NavBar />
      <Container maxWidth="sm">
        <h2>Iniciar sesión</h2>
        <TextField label="Nombre de usuario" fullWidth margin="normal" />
        <TextField
          label="Contraseña"
          type="password"
          fullWidth
          margin="normal"
        />
        <Button variant="contained" color="primary">
          Iniciar sesión
        </Button>
      </Container>
    </>
  )
}
export default LoginPage
