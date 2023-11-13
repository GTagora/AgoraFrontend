import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

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
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
