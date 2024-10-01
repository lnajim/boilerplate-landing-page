'use client'

import Link from 'next/link'
import React from 'react'
import AuthenticationButton from './AuthenticationButton'
import LanguageSelector from './LanguageSelector'

interface MobileMenuProps {
	isOpen: boolean
	closeMenu: () => void
	navItems: Array<string>
	dictionary: any
	headerConfig: any
	showAuthentication: boolean
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, closeMenu, navItems, dictionary, headerConfig, showAuthentication }) => {
	if (!isOpen) return null

	return (
		<div className="lg:hidden fixed inset-0 z-50 bg-purple-500 bg-opacity-95">
			<div className="flex flex-col items-center justify-center h-full">
				<ul className="space-y-4 text-center">
					{navItems.map((item) => (
						<li key={item}>
							<Link href={headerConfig.find((config: { key: string }) => config.key === item)?.path || '#'} className="text-white text-xl hover:text-purple-200" onClick={closeMenu}>
								{dictionary.Header[item]}
							</Link>
						</li>
					))}
					{showAuthentication && (
						<li>
							<AuthenticationButton />
						</li>
					)}
				</ul>
				<div className="mt-8">
					<LanguageSelector />
				</div>
				<button onClick={closeMenu} className="mt-8 text-white">
					Close
				</button>
			</div>
		</div>
	)
}

export default MobileMenu