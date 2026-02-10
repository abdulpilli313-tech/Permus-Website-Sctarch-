import React from "react"
import type { Metadata, Viewport } from 'next'
import { Montserrat } from 'next/font/google'
import localFont from 'next/font/local'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const montserrat = Montserrat({ 
  subsets: ["latin"],
  variable: '--font-montserrat',
  display: 'swap',
});

const nextSphere = localFont({
  src: [
    { path: '../public/fonts/NextSphereLight.woff2', weight: '300', style: 'normal' },
    { path: '../public/fonts/NextSphereRegular.woff2', weight: '400', style: 'normal' },
    { path: '../public/fonts/NextSphereMedium.woff2', weight: '500', style: 'normal' },
    { path: '../public/fonts/NextSphereBold.woff2', weight: '700', style: 'normal' },
  ],
  variable: '--font-nextsphere',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Permus Software House | Enterprise AI & Digital Transformation | Dubai',
  description: 'Permus is a Dubai-based enterprise software house specializing in AI Solutions, Digital Transformation, Full-Stack Development, and Scalable Enterprise Products.',
  keywords: ['AI Solutions', 'Digital Transformation', 'Enterprise Software', 'Dubai', 'Software Development', 'MyndLab', 'AssetGo', 'EquiDesk'],
  authors: [{ name: 'Permus Software House' }],
  icons: {
    icon: '/Permus%20icon.svg',
  },
  openGraph: {
    title: 'Permus Software House | Enterprise AI & Digital Transformation',
    description: 'Engineering Intelligent Digital Futures - Enterprise AI solutions, digital transformation, and scalable software products built in Dubai.',
    type: 'website',
    locale: 'en_AE',
    siteName: 'Permus Software House',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Permus Software House | Enterprise AI & Digital Transformation',
    description: 'Engineering Intelligent Digital Futures - Enterprise AI solutions built in Dubai.',
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: '#0D1433',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${nextSphere.variable}`}>
      <body className="font-sans antialiased bg-midnight-navy text-interface-grey overflow-x-hidden">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
