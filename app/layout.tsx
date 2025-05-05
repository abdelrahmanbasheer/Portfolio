import './globals.scss'
import type { Metadata } from 'next'
import { Analytics } from "@vercel/analytics/react"

export const metadata: Metadata = {
    openGraph: {
      title: 'Abdelrahman basheer portfolio',
      description: 'A/B software developer portfolio',
      url: 'https://besheer.vercel.app/',
      siteName: 'A/B portfolio',
      images: [
        {
          url: './prtfolio.jpg',
          width: 1000,
          height: 600,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    title: 'A.Basheer portfolio',
    description: 'A/B software developer portfolio',
 }


export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={"bg-[#070707]"}>
      {/* <Navbar></Navbar> */}
      <Analytics/>
        {children}
        </body>
    </html>
  )
}
