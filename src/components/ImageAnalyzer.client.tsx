'use client'
import React, { useState } from 'react'
import Resizer from 'react-image-file-resizer'
import {
  Button,
  Typography,
  Container,
  CircularProgress,
  createTheme,
  ThemeProvider,
  Box,
  Paper,
  Grid,
  IconButton,
  Stack,
} from '@mui/material'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'

const theme = createTheme({
  palette: {
    primary: {
      main: '#56CCF2',
    },
  },
})

const ImageAnalyzerClient: React.FC = () => {
  const [imageBase64, setImageBase64] = useState('')
  const [description, setDescription] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const handleImageChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0]
    if (!file) return

    // Resizing the image before converting it to base64
    Resizer.imageFileResizer(
      file, // Image file
      800, // Max width
      600, // Max height
      'JPEG', // Output format
      70, // Quality
      0, // Rotation
      (uri) => {
        setImageBase64(uri as string)
      },
      'base64' // Output format
    )
  }

  const analyzeImage = async () => {
    setIsLoading(true)
    try {
      const response = await fetch('/api/analyzeImage', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ image: imageBase64 }),
      })

      if (!response.ok) {
        throw new Error('Error al analizar la imagen')
      }

      const data = await response.json()
      setDescription(data.map((text: string) => text.replace(/^0:"|\"$/g, '')))
    } catch (error) {
      console.error(error)
      setDescription(['Error al analizar la imagen'])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md" style={{ marginTop: '2rem' }}>
        <Paper elevation={3} style={{ padding: '2rem' }}>
          <Grid container direction="column" spacing={3} alignItems="center">
            <Grid item>
              <Typography variant="h4" gutterBottom>
                Analizador de imágenes
              </Typography>
            </Grid>
            <Grid item>
              <label htmlFor="contained-button-file">
                <input
                  style={{ display: 'none' }}
                  id="contained-button-file"
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                />
                <Button
                  variant="contained"
                  color="primary"
                  component="span"
                  startIcon={<CloudUploadIcon />}
                >
                  Choose File
                </Button>
              </label>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                onClick={analyzeImage}
                disabled={!imageBase64 || isLoading}
              >
                {isLoading ? (
                  <CircularProgress size={24} color="inherit" />
                ) : (
                  'Analizar imagen'
                )}
              </Button>
            </Grid>
            <Grid item>
              {description.length > 0 && (
                <Box mt={2}>
                  {description.map((text, index) => (
                    <Typography key={index} variant="body1">
                      {text}
                    </Typography>
                  ))}
                </Box>
              )}
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </ThemeProvider>
  )
}

export default ImageAnalyzerClient
