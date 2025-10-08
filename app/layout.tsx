import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Portfolio | Sai Sandeep Madasu',
  description: 'Full-Stack & Cloud Developer specializing in React, Node.js and AWS.',
  keywords: ['Sai Sandeep Madasu', 'Software Engineer', 'Full-Stack Developer', 'Cloud Developer', 'React', 'Node.js', 'AWS'],
  authors: [{ name: 'Sai Sandeep Madasu' }],
  creator: 'Sai Sandeep Madasu',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://saisandeep-portfolio.vercel.app',
    title: 'Portfolio | Sai Sandeep Madasu',
    description: 'Full-Stack & Cloud Developer specializing in React, Node.js and AWS.',
    siteName: 'Sai Sandeep Madasu Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio | Sai Sandeep Madasu',
    description: 'Full-Stack & Cloud Developer specializing in React, Node.js and AWS.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      </head>
      <body className={`${inter.className} bg-gray-900 text-white min-h-screen`}>
        <div className="relative">
          {children}
        </div>
      </body>
    </html>
  )
}
