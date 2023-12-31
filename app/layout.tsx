import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import '@styles/globals.scss'

const poppins = Poppins({ 
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Learn TailwindCSS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={ poppins.className }>
        { children }
      </body>
    </html>
  )
}
