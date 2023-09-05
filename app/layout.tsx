
import './globals.scss'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AB Portfolio',
  description: 'this is abdelrahman basheer"s portfolio, have a look around the place ! ',
  keywords:"portfolio , abdelrahman basheer",
  robots:"index,follow",
  abstract:"",
  classification:"Personal website",
  category:"Portfolio",
  

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
