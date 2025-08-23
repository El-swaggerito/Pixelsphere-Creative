import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'
import { Sora, Inter } from 'next/font/google'

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Pixelsphere Creatives',
  description: 'Empowering Businesses Through Tailored Technology Solutions',
  icons: {
    icon: '/images/company-logo.png',
    shortcut: '/images/company-logo.png',
    apple: '/images/company-logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable} ${sora.variable} ${inter.variable}`}>
      <body className={`${inter.className} font-inter`}>{children}</body>
    </html>
  )
}
