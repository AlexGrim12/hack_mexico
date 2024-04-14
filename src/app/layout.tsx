'use client'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      {/* quitar el margen con tailwind */}
      <body className={inter.className}>{children}</body>
    </html>
  )
}
