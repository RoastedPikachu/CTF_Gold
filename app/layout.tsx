import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CTF Gold',
  description: 'Мероприятие ',
  keywords: "CTF Gold, ctf gold, СТФ Голд, стф голд, CTF, СТФ, Attack/Defence, attack/defence, Аттак/Дефенс, аттак/дефенс"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
