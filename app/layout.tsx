import { Inter } from 'next/font/google'
import './globals.css'
import { i18n } from '../i18n-config'
import { AuthModalsProvider } from '@/app/[lang]/components/AuthModalsProvider'

const inter = Inter({ subsets: ['latin'] })

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: string }
}) {
  return (
    <html lang={params.lang}>
      <body className={inter.className}>
        <AuthModalsProvider>
          {children}
        </AuthModalsProvider>
      </body>
    </html>
  )
}