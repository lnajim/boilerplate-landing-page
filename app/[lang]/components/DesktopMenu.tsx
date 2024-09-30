import Link from 'next/link'
import LanguageSelector from './LanguageSelector'
import AuthenticationButton from './AuthenticationButton'

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
	return (
		<nav className="hidden lg:flex items-center space-x-4">
			<ul className="flex items-center space-x-4">
				{navItems.map((item) => (
					<li key={item}>
						<Link href={headerConfig.find((config: HeaderConfigItem) => config.key === item)?.path || '#'} className="text-white hover:text-purple-200">
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
			<LanguageSelector />
		</nav>
	)
}

export default DesktopMenu