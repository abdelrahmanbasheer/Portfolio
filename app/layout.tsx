
import './globals.scss'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AB Portfolio',
  description: 'Generated by create next app',
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={"bg-gradient-to-l from-gray-200 to-cyan-100"}>
      {/* <Navbar></Navbar> */}
        {children}
        </body>
    </html>
  )
}
