import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      {/* quitar el margen con tailwind */}
      <body
        className={
          inter.className + ' mg-0 bg-gray-100 text-gray-800 font-sans  p-0'
        }
      >
        {children}
      </body>
    </html>
  )
}
