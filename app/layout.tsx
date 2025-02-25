import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Real Outdoor Solutions | Custom Saunas in Montana',
  description: 'Experience authentic Nordic wellness with custom saunas crafted in the Flathead Valley, Montana. Indoor, outdoor, and commercial sauna solutions.',
  keywords: 'sauna, custom sauna, Montana sauna, outdoor sauna, indoor sauna, Flathead Valley, Nordic wellness',
  authors: [{ name: 'Real Outdoor Solutions' }],
  creator: 'Real Outdoor Solutions',
  publisher: 'Real Outdoor Solutions',
  formatDetection: {
    telephone: true,
    email: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://realoutdoorsolutions.com',
    title: 'Real Outdoor Solutions | Custom Saunas in Montana',
    description: 'Experience authentic Nordic wellness with custom saunas crafted in the Flathead Valley, Montana. Indoor, outdoor, and commercial sauna solutions.',
    siteName: 'Real Outdoor Solutions',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Real Outdoor Solutions | Custom Saunas in Montana',
    description: 'Experience authentic Nordic wellness with custom saunas crafted in the Flathead Valley, Montana.',
    creator: '@realoutdoorsolutions',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
