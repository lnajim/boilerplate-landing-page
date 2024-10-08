'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { Menu, X, AlertCircle } from 'lucide-react'
import { appConfig } from '@/app.config'
import { cn } from '@/lib/utils'
import useTranslationStore from '@/stores/TranslationStore';

export default function AdminSidebar() {
	const { dictionary } = useTranslationStore()

	const [isExpanded, setIsExpanded] = useState(false)
	const pathname = usePathname()

	const toggleSidebar = () => {
		setIsExpanded(!isExpanded)
		// Dispatch a custom event when the sidebar state changes
		window.dispatchEvent(new CustomEvent('sidebarToggle', { detail: { isExpanded: !isExpanded } }))
	}

	const adminMenuItems = appConfig.menu.filter(item => item.path.startsWith('(administration)'))

	const getTranslation = (key: string) => {
		if (!dictionary || !dictionary.Menu) {
			return `[Loading Translation: ${key}]`
		}
		const translation = dictionary.Menu[key as keyof typeof dictionary.Menu]
		return translation || `[Missing Translation: ${key}]`
	}

	return (
		<aside className={cn(
			"fixed left-0 top-0 z-40 h-screen transition-width duration-300 ease-in-out bg-white border-r",
			isExpanded ? "w-64" : "w-16"  // Changed from w-20 to w-16 for collapsed state
		)}>
			<div className="flex items-center justify-between h-16 px-4">
				{isExpanded ? (
					<Image src={appConfig.header.logo} alt={appConfig.header.applicationName} width={150} height={40} />
				) : (
					<Image src={appConfig.header.logo} alt={appConfig.header.applicationName} width={40} height={40} />
				)}
				<button onClick={toggleSidebar} className="p-2 rounded-md hover:bg-gray-100">
					{isExpanded ? <X size={24} /> : <Menu size={24} />}
				</button>
			</div>
			<nav className="mt-5 px-2">
				{adminMenuItems.map((item) => {
					const Icon = item.icon || AlertCircle
					console.log(item.key)
					return (
						<div key={item.key} className="relative group">
							<Link
								href={item.path.replace('(administration)', '')}
								className={cn(
									"flex items-center justify-center py-2 px-4 rounded-md transition-colors",
									isExpanded ? "justify-start" : "justify-center",
									pathname.includes(item.path.replace('(administration)', ''))
										? "bg-primary text-primary-foreground"
										: "text-gray-600 hover:bg-gray-100"
								)}
							>
								<Icon size={24} className={cn("flex-shrink-0", isExpanded && "mr-3")} />
								{isExpanded && <span>{getTranslation(item.key)}</span>}
							</Link>
							{!isExpanded && (
								<div className="absolute left-full top-1/2 -translate-y-1/2 ml-2 px-2 py-1 bg-gray-800 text-white text-sm rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity">
									{getTranslation(item.key)}
								</div>
							)}
						</div>
					)
				})}
			</nav>
		</aside>
	)
}