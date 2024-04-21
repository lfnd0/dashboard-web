import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'A simple dashboard for resource management.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <div className="grid-cols-app grid min-h-screen">
          <aside className="border-r border-zinc-200 px-5 py-8">
            Dashboard
          </aside>
          <main className="px-4 pb-12 pt-8">{children}</main>
        </div>
      </body>
    </html>
  )
}
