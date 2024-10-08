'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { appConfig } from '@/app.config'
import { cn } from '@/lib/utils'

export default function AdminSidebar() {
	const [isExpanded, setIsExpanded] = useState(false)
	const pathname = usePathname()

	const toggleSidebar = () => setIsExpanded(!isExpanded)

	const adminMenuItems = appConfig.menu.filter(item => item.path.startsWith('(administration)'))
	return (
		<aside className={cn(
			"fixed left-0 top-0 z-40 h-screen transition-width duration-300 ease-in-out bg-white border-r",
			isExpanded ? "w-64" : "w-20"
		)}>
			<div className="flex items-center justify-between h-16 px-4">
				{isExpanded ? (
					<Image src={appConfig.header.logo} alt="Logo" width={150} height={40} />
				) : (
					<Image src={appConfig.header.logo} alt="Logo" width={40} height={40} />
				)}
				<button onClick={toggleSidebar} className="p-2 rounded-md hover:bg-gray-100">
					{isExpanded ? <X size={24} /> : <Menu size={24} />}
				</button>
			</div>
			<nav className="mt-5 px-2">
				{adminMenuItems.map((item) => {
					const Icon = item.icon || (() => null)
					return (
						<Link
							key={item.key}
							href={item.path.replace('(administration)', '')}
							className={cn(
								"flex items-center py-2 px-4 rounded-md transition-colors",
								pathname.includes(item.path.replace('(administration)', ''))
									? "bg-primary text-primary-foreground"
									: "text-gray-600 hover:bg-gray-100"
							)}
						>
							<Icon size={24} className={cn("flex-shrink-0", isExpanded && "mr-3")} />
							{isExpanded && <span>{item.key.charAt(0).toUpperCase() + item.key.slice(1)}</span>}
						</Link>
					)
				})}
			</nav>
		</aside>
	)
}