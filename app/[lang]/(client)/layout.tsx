import { Inter } from 'next/font/google'
import '@/app/globals.css'
import TanstackProvider from '@/providers/tanstack-provider';
import { Toaster } from '@/components/ui/toaster';
import AuthModalsProvider from '@/components/components-customs/AuthModalsProvider';
import { SessionProvider } from "next-auth/react";
import { i18n } from '@/i18n-config';
import { appConfig } from '@/app.config';

import { Footer } from "@/components/components-customs"
import Header from "@/components/components-customs/headers/Header"

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
	// Filter navItems for the (client) group
	const clientNavItems = appConfig.menu
		.filter(item => item.path.startsWith('(client)'))
		.map(item => item.key);

	return (
		<html lang={params.lang}>
			<body className={inter.className}>
				<SessionProvider>
					<TanstackProvider>
						<AuthModalsProvider>
							<Header navItems={clientNavItems} />
							{children}
							<Toaster />
							<Footer />
						</AuthModalsProvider>
					</TanstackProvider>
				</SessionProvider>
			</body>
		</html>
	)
}
