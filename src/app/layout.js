'use client'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ChatLine',
  description: 'Chat with people around the world!',
}

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body className={inter.className + " w-screen h-screen text-zinc-200"}>
          {children}
      </body>
    </html>
  )
}
