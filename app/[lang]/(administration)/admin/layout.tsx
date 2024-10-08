'use client'

import { useState, useEffect } from 'react'
import AdminSidebar from '@/components/components-customs/AdminSidebar'
import AdminHeader from '@/components/components-customs/AdminHeader'
import TanstackProvider from '@/providers/tanstack-provider'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
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
		<TanstackProvider>
			<div className="flex flex-col h-screen bg-slate-100">
				<AdminHeader toggleSidebar={toggleSidebar} isExpanded={sidebarExpanded} />
				<div className="flex flex-1 pt-16">
					<AdminSidebar isExpanded={sidebarExpanded} />
					<div
						className={`
							flex-grow 
							overflow-auto 
							transition-all 
							duration-300 
							ease-in-out
							${sidebarExpanded && !isMobile ? 'ml-64' : 'ml-16'}
						`}
					>
						<main className="p-5">{children}</main>
					</div>
				</div>
			</div>
		</TanstackProvider>
	)
}