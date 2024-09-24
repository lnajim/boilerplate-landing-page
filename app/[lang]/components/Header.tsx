'use client'

import Link from 'next/link'
import { useEffect } from 'react'
import useTranslationStore from '@/stores/TranslationStore'
import LanguageSelector from './LanguageSelector'
import { headerConfig } from '@/app/config/headerConfig'
import AuthenticationButton from './AuthenticationButton'
import { appConfig } from '@/app.config'

const Header: React.FC = () => {
	const { language, dictionary, setLanguage } = useTranslationStore()

	useEffect(() => {
		const loadTranslations = async () => {
			setLanguage(language)
		}
		loadTranslations()
	}, [setLanguage, language])

	// Define the type of navItems more explicitly
	const navItems = headerConfig.map((item) => item.key) as Array<keyof typeof dictionary.Header>

	return (
		<header className="bg-gradient-to-r from-purple-500 to-pink-500 p-4" data-header-id="main-header">
			<div className="container mx-auto flex justify-between items-center">
				<Link href="/" className="text-white text-2xl font-cursive">
					{appConfig.header.applicationName}
				</Link>
				<nav className="flex items-center space-x-4">
					<ul className="flex items-center space-x-4">
						{navItems.map((item) => (
							<li key={item}>
								<Link href={headerConfig.find((config) => config.key === item)?.path || '#'} className="text-white hover:text-purple-200">
									{dictionary.Header[item]}
								</Link>
							</li>
						))}
						{appConfig.header.authentifcation && (
							<li>
								<AuthenticationButton />
							</li>
						)}
					</ul>
					<LanguageSelector />
				</nav>
			</div>
		</header>
	)
}

export default Header