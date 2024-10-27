'use client'
import '@/app/globals.css';

import { useState, useEffect } from 'react'
import AdminSidebar from '@/components/components-customs/AdminSidebar'
import AdminHeader from '@/components/components-customs/AdminHeader'
import TanstackProvider from '@/providers/tanstack-provider'
import AdminBottomNav from '@/components/components-customs/AdminBottomNav'
import { SessionProvider } from 'next-auth/react'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export default function AdminLayout({ children, params }: { children: React.ReactNode, params: { lang: string } }) {
	const [sidebarExpanded, setSidebarExpanded] = useState(false)
	const [isMobile, setIsMobile] = useState(false)

	useEffect(() => {
		const handleResize = () => {
			const mobile = window.innerWidth < 768
			setIsMobile(mobile)
			if (mobile) {
				setSidebarExpanded(false)
			} else {
				setSidebarExpanded(true)  // Automatically expand sidebar on desktop
			}
		}

		handleResize()
		window.addEventListener('resize', handleResize)

		return () => window.removeEventListener('resize', handleResize)
	}, [])

	const toggleSidebar = () => {
		setSidebarExpanded(!sidebarExpanded)
	}

	return (
		<html lang={params.lang}>
			<body className={inter.className}>
				<SessionProvider>
					<TanstackProvider>
						<div className="flex flex-col h-screen bg-slate-100">
							<AdminHeader toggleSidebar={toggleSidebar} isExpanded={sidebarExpanded} />
							<div className="flex flex-1 pt-16">
								{!isMobile && <AdminSidebar isExpanded={sidebarExpanded} />}
								<div
									className={`
							flex-grow 
							overflow-auto 
							transition-all 
							duration-300 
							ease-in-out
							${isMobile ? 'ml-0' : (sidebarExpanded ? 'ml-64' : 'ml-16')}
							${isMobile ? 'mb-16' : 'mb-0'} // Add bottom margin for mobile
						`}
								>
									<main className="p-5">{children}</main>
								</div>
							</div>
							{isMobile && <AdminBottomNav />}
						</div>
					</TanstackProvider>
				</SessionProvider>
			</body>
		</html>
	)
}