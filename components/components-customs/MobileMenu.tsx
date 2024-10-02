'use client'

import Link from 'next/link'
import React from 'react'
import LanguageSelector from './LanguageSelector'
import { Button } from "@/components/ui/button"

// Define an interface for the header config item
interface HeaderConfigItem {
	key: string;
	path: string;
}

interface MobileMenuProps {
	isOpen: boolean
	closeMenu: () => void
	navItems: Array<string>
	dictionary: any
	headerConfig: HeaderConfigItem[]
	showAuthentication: boolean
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, closeMenu, navItems, dictionary, headerConfig, showAuthentication }) => {
	return (
		<div className={`lg:hidden fixed inset-x-0 top-[72px] z-40 mt-5 bg-primary bg-opacity-95 transition-all duration-300 ${isOpen ? 'max-h-screen opacity-100 ' : 'max-h-0 opacity-0 overflow-hidden'}`}>
			<div className="flex flex-col items-center py-4">
				<ul className="space-y-4 text-center">
					{navItems.map((item) => (
						<li key={item}>
							<Link href={headerConfig.find((config: HeaderConfigItem) => config.key === item)?.path || '#'} className="text-primary-foreground text-xl hover:text-secondary" onClick={closeMenu}>
								{dictionary.Header[item]}
							</Link>
						</li>
					))}
					{showAuthentication && (
						<>
							<li>
								<Button variant="link" className="w-full text-primary-foreground hover:text-secondary">
									<Link href="/login" onClick={closeMenu}>
										{dictionary.Header.login}
									</Link>
								</Button>
							</li>
							<li>
								<Button variant="link" className="w-full text-primary-foreground hover:text-secondary">
									<Link href="/register" onClick={closeMenu}>
										{dictionary.Header.register}
									</Link>
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