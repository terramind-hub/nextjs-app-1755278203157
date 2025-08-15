import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PRD Generator - Comprehensive Product Requirements Documentation',
  description: 'Create detailed Product Requirements Documents for coding applications with comprehensive sections covering introduction, user stories, features, technical requirements, UI/UX, monetization, roadmap, and success metrics.',
  keywords: ['PRD', 'Product Requirements Document', 'Software Development', 'Product Management', 'Technical Specifications'],
  authors: [{ name: 'Terramind' }],
  creator: 'Terramind',
  publisher: 'Terramind',
  openGraph: {
    title: 'PRD Generator - Product Requirements Documentation',
    description: 'Comprehensive tool for creating detailed Product Requirements Documents for coding applications',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PRD Generator - Product Requirements Documentation',
    description: 'Create comprehensive PRDs for coding applications',
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <div className="min-h-screen bg-background">
          <Navigation />
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}