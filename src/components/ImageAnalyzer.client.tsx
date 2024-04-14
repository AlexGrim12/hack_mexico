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
import Resizer from 'react-image-file-resizer'

// Utility function to convert base64 to Blob
const dataURLtoFile = (dataurl: string, filename: string) => {
  const arr = dataurl.split(',')
  const mimeMatch = arr[0].match(/:(.*?);/)
  const mime = mimeMatch ? mimeMatch[1] : ''
  const bstr = atob(arr[1])
  let n = bstr.length
  const u8arr = new Uint8Array(n)
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n)
  }
  return new File([u8arr], filename, { type: mime })
}

export default function ImageAnalyzer() {
  const [image, setImage] = useState<string>('')
  const [openAIResponse, setOpenAIResponse] = useState<string>('')

  function handleFileChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0]
    if (!file) return

    // Resize the image before setting it to state
    Resizer.imageFileResizer(
      file, // The file
      800, // maxWidth
      600, // maxHeight
      'JPEG', // compressFormat
      70, // quality
      0, // rotation
      (uri) => {
        // You can also use the Blob here instead of a base64 string
        // const file = dataURLtoFile(uri, file.name);
        setImage(uri as string) // Cast uri to string
      },
      'base64'
    )
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!image) {
      alert('Upload an image.')
      return
    }

    try {
      // If using Blob, update content-type and send the Blob in the body
      const response = await fetch('/api/analyze-image', {
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
