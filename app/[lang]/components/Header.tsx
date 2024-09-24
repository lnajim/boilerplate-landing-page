'use client'

import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'
import { Button } from "@/components/ui/button"
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown } from 'lucide-react'
import { useLanguageStore } from '@/stores/LanguageStore'
import { useEffect, useState } from 'react'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import LoginForm from '@/app/[lang]/components/auth/LoginForm'
import { headerConfig } from '@/app/config/headerConfig'

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

const languages = [
	{ code: 'en', name: 'English', flag: '🇬🇧' },
	{ code: 'fr', name: 'Français', flag: '🇫🇷' },
]

const Header: React.FC<HeaderProps> = ({ dictionary, lang }) => {
	const router = useRouter()
	const pathname = usePathname()
	const { language, setLanguage } = useLanguageStore()
	const [showLoginDialog, setShowLoginDialog] = useState(false)

	const navItems = ['home', 'services', 'about', 'contact'] as const;

	useEffect(() => {
		setLanguage(lang)
	}, [lang, setLanguage])

	const changeLanguage = (langCode: string) => {
		setLanguage(langCode)
		const newPathname = pathname.replace(`/${language}`, `/${langCode}`)
		router.push(newPathname)
	}

	return (
		<header className="bg-gradient-to-r from-purple-500 to-pink-500 p-4">
			<div className="container mx-auto flex justify-between items-center">
				<Link href="/" className="text-white text-2xl font-cursive">
					{dictionary.Header.salonName}
				</Link>
				<nav className="flex items-center">
					<ul className="flex space-x-4 mr-4">
						{headerConfig.map((item) => (
							<li key={item.key}>
								<Link href={`/${lang}${item.path}`} className="text-white hover:text-purple-200">
									{dictionary.Header[item.key as keyof typeof dictionary.Header]}
								</Link>
							</li>
						))}
						<li>
							<Dialog open={showLoginDialog} onOpenChange={setShowLoginDialog}>
								<DialogTrigger>
									<Button variant="ghost" className="text-white hover:text-purple-200 hover:bg-transparent">
										{dictionary.Header.login}
									</Button>
								</DialogTrigger>
								<DialogContent className='flex  flex-col'>
									<DialogHeader>
										<DialogTitle>{dictionary.Header.login}</DialogTitle>
										<DialogDescription>
											{dictionary.Header.loginDescription}
										</DialogDescription>
									</DialogHeader>
									<LoginForm dictionary={dictionary.LoginForm} />
									<DialogFooter>
										<Button variant="outline" onClick={() => setShowLoginDialog(false)}>
											{dictionary.Header.close}
										</Button>
									</DialogFooter>
								</DialogContent>
							</Dialog>
						</li>
					</ul>
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button variant="ghost" className="text-white hover:text-purple-200 hover:bg-transparent">
								<span className="mr-2">{languages.find(l => l.code === language)?.flag}</span>
								<span>{language?.toUpperCase()}</span>
								<ChevronDown className="ml-2 h-4 w-4" />
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent>
							{languages.map((lang) => (
								<DropdownMenuItem key={lang.code} onSelect={() => changeLanguage(lang.code)}>
									<span className="mr-2">{lang.flag}</span>
									<span>{lang.name}</span>
									<span className="ml-2 text-xs text-gray-500">({lang.code.toUpperCase()})</span>
								</DropdownMenuItem>
							))}
						</DropdownMenuContent>
					</DropdownMenu>
				</nav>
			</div>
		</header>
	)
}

export default Header