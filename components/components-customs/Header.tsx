'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import useTranslationStore from '@/stores/TranslationStore'
import { appConfig } from '@/app.config'
import MobileMenu from './MobileMenu'
import { Menu, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import DesktopMenu from './DesktopMenu'
import { headerConfig } from '@/app/config/headerConfig'

const Header: React.FC = () => {
	const { language, dictionary, setLanguage } = useTranslationStore()
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

	useEffect(() => {
		const loadTranslations = async () => {
			setLanguage(language)
		}
		loadTranslations()
	}, [setLanguage, language])

	const navItems = headerConfig.map((item) => item.key) as Array<keyof typeof dictionary.Header>

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen)
	}

	return (
		<header className="bg-gradient-to-r from-purple-500 to-pink-500 p-4" data-header-id="main-header">
			<div className="container mx-auto flex justify-between items-center">
				<Link href="/" className="flex items-center text-white text-2xl font-cursive">
					<Image src={appConfig.header.logo} alt="Logo" width={240} height={61} className='mr-2' />
					{appConfig.header.applicationName}
				</Link>
				<DesktopMenu
					navItems={navItems}
					dictionary={dictionary}
					headerConfig={headerConfig}
					showAuthentication={appConfig.header.authentifcation}
				/>
				<Button variant="ghost" className="lg:hidden text-white" onClick={toggleMobileMenu}>
					{isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
				</Button>
			</div>
			<MobileMenu
				isOpen={isMobileMenuOpen}
				closeMenu={() => setIsMobileMenuOpen(false)}
				navItems={navItems}
				dictionary={dictionary}
				headerConfig={headerConfig}
				showAuthentication={appConfig.header.authentifcation}
			/>
		</header>
	)
}

export default Header