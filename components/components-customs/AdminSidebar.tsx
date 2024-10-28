'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AlertCircle } from 'lucide-react'
import { appConfig } from '@/app.config'
import { cn } from '@/lib/utils'
import useTranslationStore from '@/stores/TranslationStore';
import { useEffect, useState } from 'react'

interface AdminSidebarProps {
	isExpanded: boolean;
}

export default function AdminSidebar({ isExpanded }: AdminSidebarProps) {
	const { dictionary } = useTranslationStore()
	const pathname = usePathname()
	const [isMobile, setIsMobile] = useState(false)

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < 768)
		}

		handleResize()
		window.addEventListener('resize', handleResize)

		return () => window.removeEventListener('resize', handleResize)
	}, [])

	const adminMenuItems = appConfig.backendMenu.filter(item => item.path.startsWith('(administration)'))

	const getTranslation = (key: string) => {
		if (!dictionary || !dictionary.Menu) {
			return `[Loading Translation: ${key}]`
		}
		const translation = dictionary.Menu[key as keyof typeof dictionary.Menu]
		return translation || `[Missing Translation: ${key}]`
	}

	return (
		<aside className={cn(
			"fixed left-0 top-16 z-40 h-[calc(100vh-4rem)] transition-all duration-300 ease-in-out bg-white border-r",
			isExpanded && !isMobile ? "w-64" : "w-16"
		)}>
			<nav className="mt-5 px-2">
				{adminMenuItems.map((item) => {
					const Icon = item.icon || AlertCircle
					return (
						<div key={item.key} className="relative group">
							<Link
								href={item.path.replace('(administration)', '')}
								className={cn(
									"flex items-center justify-center py-2 px-4 rounded-md transition-colors",
									isExpanded && !isMobile ? "justify-start" : "justify-center",
									pathname.includes(item.path.replace('(administration)', ''))
										? "bg-primary text-primary-foreground"
										: "text-gray-600 hover:bg-gray-100"
								)}
							>
								<Icon size={24} className={cn("flex-shrink-0", isExpanded && !isMobile && "mr-3")} />
								{isExpanded && !isMobile && <span>{getTranslation(item.key)}</span>}
							</Link>
							{(!isExpanded || isMobile) && (
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
