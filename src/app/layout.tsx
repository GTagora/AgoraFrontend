import type { Metadata } from 'next'
import { EB_Garamond, Playfair_Display_SC, Cormorant_Garamond, Playfair_Display } from 'next/font/google'
import Header from './components/header'
import Footer from './components/footer'
import './globals.css'

const eb_garamond = EB_Garamond( {
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-ebgaramond',
  display: 'swap'
})

const playfairDisplaySC = Playfair_Display_SC({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-playfair-sc',
  display: 'swap'
})

const playfairDisplay = Playfair_Display({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap'
})

const cormorant = Cormorant_Garamond({
  weight: ['400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-cormorant',
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'Agora Website',
  description: 'Agora seeks to glorify God as an ecumenical forum and journal of Christian thought. By creating and curating pieces that reflect the vibrant beauty of God’s nature, we offer a collective Christian perspective to the campus dialogue.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${eb_garamond.variable} ${playfairDisplaySC.variable} ${playfairDisplay.variable} ${cormorant.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
