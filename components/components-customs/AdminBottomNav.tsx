'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AlertCircle } from 'lucide-react'
import { appConfig } from '@/app.config'
import { cn } from '@/lib/utils'
import useTranslationStore from '@/stores/TranslationStore'
import { useState, useRef, useEffect, TouchEvent } from 'react'

export default function AdminBottomNav() {
	const { dictionary } = useTranslationStore()
	const pathname = usePathname()
	const scrollContainerRef = useRef<HTMLDivElement>(null)
	const [touchStart, setTouchStart] = useState<number | null>(null)
	const [touchEnd, setTouchEnd] = useState<number | null>(null)

	const adminMenuItems = appConfig.backendMenu.filter(item => item.path.startsWith('(administration)'))

	const getTranslation = (key: string) => {
		if (!dictionary || !dictionary.Menu) {
			return key // Fallback to the key if translation is not available
		}
		const translation = dictionary.Menu[key as keyof typeof dictionary.Menu]
		return translation || key
	}

	const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
		setTouchEnd(null) // Reset touchEnd
		setTouchStart(e.targetTouches[0].clientX)
	}

	const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
		setTouchEnd(e.targetTouches[0].clientX)
	}

	const handleTouchEnd = () => {
		if (!touchStart || !touchEnd) return
		const distance = touchStart - touchEnd
		const container = scrollContainerRef.current
		if (!container) return

		const scrollAmount = Math.abs(distance) > 50 ? distance : 0 // Minimum swipe distance
		container.scrollBy({ left: scrollAmount, behavior: 'smooth' })
	}

	useEffect(() => {
		const container = scrollContainerRef.current
		if (container) {
			container.scrollLeft = 0 // Reset scroll position on component mount
		}
	}, [])

	return (
		<nav className="fixed bottom-0 left-0 right-0 bg-secondary border-t z-50 md:hidden w-full ">
			<div className="relative h-full">
				<div
					ref={scrollContainerRef}
					className="flex items-center h-full overflow-x-auto scrollbar-hide"
					onTouchStart={handleTouchStart}
					onTouchMove={handleTouchMove}
					onTouchEnd={handleTouchEnd}
				>
					{adminMenuItems.map((item) => {
						const Icon = item.icon || AlertCircle
						const href = item.path.replace('(administration)', '')
						return (
							<Link
								key={item.key}
								href={href}
								className={cn(
									"flex flex-col items-center justify-center py-2 px-4 transition-colors min-w-[80px]",
									pathname.includes(href)
										? "activeButton" // Apply the activeButton class
										: "text-gray-200 hover:text-white"
								)}
							>
								<Icon size={24} className="mb-1" />
								<span className="text-xs whitespace-nowrap">{getTranslation(item.key)}</span>
							</Link>
						)
					})}
				</div>
			</div>
		</nav>
	)
}
