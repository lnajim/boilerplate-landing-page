'use client'

import { SessionProvider } from "next-auth/react"
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import useTranslationStore from '@/stores/TranslationStore'
import { appConfig } from '@/app.config'
import { Menu, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import DesktopMenu from "../DesktopMenu"
import MobileMenu from "../MobileMenu"

interface BaseHeaderProps {
	isGradient?: boolean;
}

const BaseHeader: React.FC<BaseHeaderProps> = ({ isGradient = false }) => {
	const { language, dictionary, setLanguage } = useTranslationStore()
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
	const [scrolled, setScrolled] = useState(false)
	const [hovered, setHovered] = useState(false)

	useEffect(() => {
		const loadTranslations = async () => {
			setLanguage(language)
		}
		loadTranslations()

		if (isGradient) {
			const handleScroll = () => {
				setScrolled(window.scrollY > 0)
			}

			window.addEventListener('scroll', handleScroll)
			return () => window.removeEventListener('scroll', handleScroll)
		}
	}, [setLanguage, language, isGradient])

	const navItems = appConfig.menu.map((item) => item.key) as Array<keyof typeof dictionary.Header>

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen)
	}

	const headerClass = isGradient
		? `fixed top-0 left-0 w-full text-primary-foreground p-4 transition-colors duration-300 z-50 ${scrolled || hovered ? 'bg-primary' : 'bg-transparent'
		}`
		: "fixed top-0 left-0 w-full text-primary-foreground p-4 bg-primary z-50"

	const headerProps = isGradient
		? {
			onMouseEnter: () => setHovered(true),
			onMouseLeave: () => setHovered(false),
		}
		: {}

	return (
		<SessionProvider>
			<header className={headerClass} {...headerProps}>
				<div className="container mx-auto flex justify-between items-center">
					<Link href="/" className="flex items-center text-primary-foreground text-2xl font-cursive">
						{appConfig.header.logo ? (
							<Image src={appConfig.header.logo} alt="Logo" width={240} height={61} className='mr-2' />
						) : appConfig.header.applicationName}
					</Link>
					<DesktopMenu
						navItems={navItems}
						dictionary={dictionary}
						headerConfig={appConfig.menu}
						showAuthentication={true}
					/>
					<Button className="lg:hidden relative w-10 h-10 flex items-center justify-center overflow-hidden text-primary-foreground" onClick={toggleMobileMenu}>
						<div className={`transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-180' : 'rotate-0'}`}>
							<Menu className={`transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
							<X className={`absolute top-0 left-0 transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0'}`} />
						</div>
					</Button>
				</div>
			</header>
			<MobileMenu
				isOpen={isMobileMenuOpen}
				closeMenu={() => setIsMobileMenuOpen(false)}
				navItems={navItems}
				dictionary={dictionary}
				headerConfig={appConfig.menu}
				showAuthentication={true}
			/>
		</SessionProvider>
	)
}

export default BaseHeader
