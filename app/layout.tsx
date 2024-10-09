import { Inter } from 'next/font/google'
import './globals.css'
import { i18n } from '../i18n-config'
import TanstackProvider from '@/providers/tanstack-provider';
import { Toaster } from '@/components/ui/toaster';
import AuthModalsProvider from '@/components/components-customs/AuthModalsProvider';
import { SessionProvider } from "next-auth/react";

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
        <SessionProvider>
          <TanstackProvider>
            <AuthModalsProvider>
              {children}
              <Toaster />
            </AuthModalsProvider>
          </TanstackProvider>
        </SessionProvider>
      </body>
    </html>
  )
}