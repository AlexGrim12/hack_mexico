'use client'
import React, { ChangeEvent, useState, FormEvent } from 'react'
import {
  Button,
  Container,
  Typography,
  Box,
  TextField,
  Card,
  CardContent,
} from '@mui/material'

export default function ImageAnalyzer() {
  const [image, setImage] = useState<string>('')
  const [openAIResponse, setOpenAIResponse] = useState<string>('')

  function handleFileChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0]
    if (!file) return

    const reader = new FileReader()
    reader.readAsDataURL(file)

    reader.onload = () => {
      if (typeof reader.result === 'string') {
        setImage(reader.result)
      }
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!image) {
      alert('Upload an image.')
      return
    }

    try {
      const response = await fetch('api/analyze-image', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ image }),
      })
      const reader = response.body?.getReader()
      setOpenAIResponse('')
      while (true) {
        const readResult = await reader?.read()
        if (readResult?.done) break

        let currentChunk = new TextDecoder().decode(readResult?.value)
        console.log('currentChunk:', currentChunk) // Print currentChunk

        let matches = (currentChunk as string).match(/"([^"]*)"/g)!
        console.log('matches:', matches) // Print matches

        if (matches) {
          let result = matches
            .map(function (val) {
              return val.replace(/"/g, '')
            })
            .join(' ')
          console.log('result:', result) // Print result
          setOpenAIResponse((prev) => prev + result)
        }
      }
    } catch (error) {
      console.error('Error:', error)
      alert('An error occurred while analyzing the image.')
    }
  }

  return (
    <Container maxWidth="sm">
      <Box mt={8}>
        <Card>
          <CardContent>
            <Typography variant="h5" component="h2" gutterBottom>
              Uploaded Image
            </Typography>
            {image ? (
              <Box mb={4}>
                <img
                  src={image}
                  alt="Uploaded"
                  style={{
                    width: '100%',
                    maxHeight: '300px',
                    objectFit: 'contain',
                  }}
                />
              </Box>
            ) : (
              <Box p={8} textAlign="center">
                <Typography>No image uploaded yet.</Typography>
              </Box>
            )}
            <form onSubmit={handleSubmit}>
              <Box mb={4}>
                <TextField type="file" onChange={handleFileChange} fullWidth />
              </Box>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Analyze The Image
              </Button>
            </form>
            {openAIResponse && (
              <Box mt={4} borderTop={1} borderColor="grey.300" pt={2}>
                <Typography variant="h5" component="h2" gutterBottom>
                  AI Response
                </Typography>
                <Typography variant="body1">{openAIResponse}</Typography>
              </Box>
            )}
          </CardContent>
        </Card>
      </Box>
    </Container>
  )
}
