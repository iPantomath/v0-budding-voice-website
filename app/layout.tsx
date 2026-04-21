import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'

import './globals.css'

const _inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Budding Voice | Help Your Child Speak with Clarity & Confidence',
  description:
    'Communication coaching for kids & teens who struggle to express themselves socially and on stage. We train presence, clarity, and confidence.',
}

export const viewport: Viewport = {
  themeColor: '#FF9B73',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={_inter.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
