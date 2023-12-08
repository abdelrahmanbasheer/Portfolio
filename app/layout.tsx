import './globals.scss'
import type { Metadata } from 'next'
export const metadata: Metadata = {
    openGraph: {
      title: 'Abdelrahman basheer portfolio',
      description: 'A/B software developer portfolio',
      url: 'https://www.besheer.me/',
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
