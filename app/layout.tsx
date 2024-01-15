import type { Metadata } from 'next'

import { Inter } from 'next/font/google'

import Script from 'next/script';

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Gold CTF',
  description: 'Мероприятие Gold CTF',
  keywords: "Gold CTF,  gold ctf, Голд СТФ, голд стф, CTF, СТФ, Attack/Defence, attack/defence, Атак/Дефенс, атак/дефенс"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <Script src="/static/scripts/metrica.js" strategy="lazyOnload" />

        {children}
      </body>
    </html>
  )
}
