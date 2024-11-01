import { appConfig } from '@/app.config';
import '@/app/globals.css';
import AuthModalsProvider from '@/components/components-customs/AuthModalsProvider';
import { Toaster } from '@/components/ui/toaster';
import { i18n } from '@/i18n-config';
import TanstackProvider from '@/providers/tanstack-provider';
import { SessionProvider } from "next-auth/react";
import { Inter } from 'next/font/google';

import { Footer } from "@/components/components-customs";
import Header from "@/components/components-customs/headers/Header";
import Container from '@/components/components-customs/Container';

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
	const clientNavItems = appConfig.frontendMenu
		.filter(item => item.path.startsWith('(client)'))
		.map(item => item.key);


	return (
		<html lang={params.lang}>
			<body className={inter.className}>
				<SessionProvider>
					<TanstackProvider>
						<AuthModalsProvider>
							<Header navItems={clientNavItems} />
							<div className="pt-[90px]  min-h-screen ">
								<Container>
									{children}
								</Container>
							</div>
							<Toaster />
						</AuthModalsProvider>
					</TanstackProvider>
				</SessionProvider>
				<Footer />
			</body>
		</html>
	)
}
