'use client'

import Link from 'next/link'
import LanguageSelector from './LanguageSelector'
import AuthenticationButton from './AuthenticationButton'
import useTranslationStore from '@/stores/TranslationStore';

// Define an interface for the header config item
interface HeaderConfigItem {
	key: string;
	path: string;
}

interface DesktopMenuProps {
	navItems: Array<string>
	dictionary: any
	headerConfig: HeaderConfigItem[]
	showAuthentication: boolean
}

const DesktopMenu: React.FC<DesktopMenuProps> = ({ navItems, dictionary, headerConfig, showAuthentication }) => {
	const { language } = useTranslationStore()

	return (
		<nav className="hidden lg:flex items-center space-x-4">
			<ul className="flex items-center space-x-4">
				{navItems?.map((item) => (
					<li key={item}>
						<Link href={`/${language}/${item}`} className="text-primary-foreground hover:text-secondary">
							{dictionary.Header[item]}
						</Link>
					</li>
				))}
			</ul>
			<LanguageSelector />
			{showAuthentication && <AuthenticationButton />}
		</nav>
	)
}

export default DesktopMenu
