"use client"

import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

// export const metadata = {
//   title: 'IVS Donations',
// }

export default function RootLayout({ children }) {

  return (

      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>

  )
}
