import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import './globals.css'

const jb = JetBrains_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Klendar',
  description: 'Calendar for Noswork module',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={jb.className}>{children}</body>
    </html>
  )
}
