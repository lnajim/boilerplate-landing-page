import { Inter } from 'next/font/google'
import './globals.css'
import { i18n } from '../i18n-config'
import { AuthModalsProvider } from '@/app/[lang]/components/AuthModalsProvider'
import TanstackProvider from '@/providers/tanstack-provider';
import { Toaster } from '@/components/ui/toaster';

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
        <TanstackProvider>
          <AuthModalsProvider>
            {children}
            <Toaster />

          </AuthModalsProvider>
        </TanstackProvider>
      </body>
    </html>
  )
}