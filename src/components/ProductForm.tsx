import * as React from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

export default function ProductForm() {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="outlined-required"
          label="Nombre"
          defaultValue="Nombre del producto"
        />
        <TextField
          required
          id="outlined-required"
          label="Precio"
          defaultValue="$0.00"
        />
      </div>
      <Button variant="contained">Guardar</Button>
    </Box>
  )
}
