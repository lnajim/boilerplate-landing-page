'use client'

import { useState, useEffect } from 'react'
import { auth } from '@/auth'
import AdminSidebar from '@/components/components-customs/AdminSidebar'
import TanstackProvider from '@/providers/tanstack-provider'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
	const [sidebarExpanded, setSidebarExpanded] = useState(false)

	useEffect(() => {
		const handleSidebarToggle = (event: CustomEvent) => {
			setSidebarExpanded(event.detail.isExpanded)
		}

		window.addEventListener('sidebarToggle', handleSidebarToggle as EventListener)

		return () => {
			window.removeEventListener('sidebarToggle', handleSidebarToggle as EventListener)
		}
	}, [])

	return (
		<TanstackProvider>
			<div className="flex h-screen bg-slate-100">
				<AdminSidebar />
				<div className={`flex-grow overflow-auto transition-all duration-300 ease-in-out ${sidebarExpanded ? 'ml-64' : 'ml-16'}`}>
					<main className="p-5 mt-16 md:mt-24">{children}</main>
				</div>
			</div>
		</TanstackProvider>
	)
}