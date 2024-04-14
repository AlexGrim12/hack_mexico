// src/config/firebaseConfig.ts

import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'

// Tipo para la configuración de Firebase
interface FirebaseConfig {
  apiKey: string
  authDomain: string
  projectId: string
  storageBucket: string
  messagingSenderId: string
  appId: string
  measurementId?: string
}

// Configuración de Firebase
const firebaseConfig: FirebaseConfig = {
  apiKey: 'YOUR_API_KEY',
  authDomain: 'YOUR_AUTH_DOMAIN',
  projectId: 'YOUR_PROJECT_ID',
  storageBucket: 'YOUR_STORAGE_BUCKET',
  messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
  appId: 'YOUR_APP_ID',
  measurementId: 'YOUR_MEASUREMENT_ID', // Opcional, si usas Analytics
}

// Inicializar Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)

// Exportar la instancia de la aplicación Firebase
export { app, analytics }
