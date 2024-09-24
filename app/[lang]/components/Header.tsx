'use client'

import Link from 'next/link'
import { headerConfig } from '@/app/config/headerConfig'
import { appConfig } from '@/app.config'
import LanguageSelector from './LanguageSelector'
import AuthenticationButton from './AuthenticationButton'

interface HeaderProps {
	dictionary: {
		Header: {
			salonName: string;
			languageSelector: string;
			login: string;
			loginDescription: string;
			close: string;
		},
		LoginForm: {
			title: string;
			description: string;
			emailLabel: string;
			passwordLabel: string;
			signInButton: string;
			orContinueWith: string;
			githubButton: string;
			googleButton: string;
			noAccountText: string;
			signUpLink: string;
		}
	}
	lang: string;
}

const Header: React.FC<HeaderProps> = ({ dictionary, lang }) => {
	return (
		<header className="bg-gradient-to-r from-purple-500 to-pink-500 p-4">
			<div className="container mx-auto flex justify-between items-center">
				<Link href="/" className="text-white text-2xl font-cursive">
					{dictionary.Header.salonName}
				</Link>
				<nav className="flex items-center">
					<ul className="flex items-center space-x-4">
						{headerConfig.map((item) => (
							<li key={item.key}>
								<Link href={`/${lang}${item.path}`} className="text-white hover:text-purple-200">
									{dictionary.Header[item.key as keyof typeof dictionary.Header]}
								</Link>
							</li>
						))}
						{appConfig.header.authentifcation && (
							<li>
								<AuthenticationButton
									dictionary={dictionary.Header}
									loginFormDictionary={dictionary.LoginForm}
								/>
							</li>
						)}
						{appConfig.header.i18n && (
							<li>
								<LanguageSelector dictionary={dictionary.Header} lang={lang} />
							</li>
						)}
					</ul>
				</nav>
			</div>
		</header>
	)
}

export default Header