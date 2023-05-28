import { Inter } from 'next/font/google'
import "./styles/style.scss";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Abraham J. Ahn',
  description: 'Portfolio Website',
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