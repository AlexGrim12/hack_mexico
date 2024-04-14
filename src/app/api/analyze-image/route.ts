import { Configuration, OpenAIApi } from 'openai-edge'
import { OpenAIStream, StreamingTextResponse } from 'ai'
import { getOpenAI } from '@/utils/openai'

export const runtime = 'edge'

// Definición de la interfaz para la información de la imagen
interface ImageData {
  image: string // Base64 string
}

// Route Handler
export async function POST(request: Request) {
  const openai = getOpenAI()
  const { image }: ImageData = await request.json()

  const response = await openai.createChatCompletion({
    model: 'gpt-4-vision-preview',
    stream: true,
    max_tokens: 4096,
    messages: [
      {
        role: 'user',
        content: JSON.stringify([
          { type: 'text', text: 'Describe the image' },
          { type: 'image_url', image_url: image },
        ]),
      },
    ],
  })

  const stream = OpenAIStream(response)
  return new StreamingTextResponse(stream)
}
