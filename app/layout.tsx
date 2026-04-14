import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'PestMaster | Professional Pest Control | Free Inspection',
  description: 'Professional pest control with free inspections, same-day service, and plans starting at $79/month. Licensed & insured. Call (555) 123-4567.',
  keywords: 'pest control, exterminator, ant control, roach treatment, rodent control, termite inspection',
  openGraph: {
    title: 'PestMaster | Professional Pest Control',
    description: 'Professional pest control with free inspections and same-day service. Licensed & insured.',
    url: 'https://nopests.com',
    siteName: 'PestMaster',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/dist/twemoji.min.js" crossOrigin="anonymous" defer></script>
      </head>
      <body className="min-h-screen bg-white text-gray-900 antialiased">
        {/* Skip to main content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-brand-600 focus:text-white focus:rounded-lg focus:font-semibold focus:outline-none focus:ring-2 focus:ring-brand-400 focus:ring-offset-2"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  )
}
