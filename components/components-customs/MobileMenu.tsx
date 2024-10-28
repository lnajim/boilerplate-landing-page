'use client'

import Link from 'next/link'
import React from 'react'
import LanguageSelector from './LanguageSelector'
import { Button } from "@/components/ui/button"
import useAuthModalsStore from "@/stores/authModalsStore"
import useTranslationStore from '@/stores/TranslationStore'

// Define an interface for the header config item


interface MobileMenuProps {
	isOpen: boolean
	closeMenu: () => void
	navItems: Array<string>
	dictionary: any
	showAuthentication: boolean
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, closeMenu, navItems, dictionary, showAuthentication }) => {
	const { setShowLoginDialog, setShowRegisterDialog } = useAuthModalsStore()
	const { language } = useTranslationStore()

	const handleLoginClick = () => {
		setShowLoginDialog(true)
		closeMenu()
	}

	const handleRegisterClick = () => {
		setShowRegisterDialog(true)
		closeMenu()
	}

	return (
		<div className={`lg:hidden fixed inset-x-0 top-[68px] z-40  bg-primary bg-opacity-95 transition-all duration-300 ${isOpen ? 'max-h-screen opacity-100 ' : 'max-h-0 opacity-0 overflow-hidden'}`}>
			<div className="flex flex-col items-center ">
				<ul className="space-y-4 text-center">
					{navItems.map((item) => (
						<li key={item}>
							<Link href={`/${language}/${item}`} className="text-primary-foreground text-xl hover:text-secondary" onClick={closeMenu}>
								{dictionary.Header[item]}
							</Link>
						</li>
					))}
					{showAuthentication && (
						<>
							<li>
								<Button variant="link" className="w-full text-primary-foreground hover:text-secondary" onClick={handleLoginClick}>
									{dictionary.Header.login}
								</Button>
							</li>
							<li>
								<Button variant="link" className="w-full text-primary-foreground hover:text-secondary" onClick={handleRegisterClick}>
									{dictionary.Header.register}
								</Button>
							</li>
						</>
					)}
				</ul>
				<div className="mt-8">
					<LanguageSelector />
				</div>
			</div>
		</div>
	)
}

export default MobileMenu