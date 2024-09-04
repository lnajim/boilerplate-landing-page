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
import { useEffect } from 'react'

interface HeaderProps {
	dictionary: {
		salonName: string;
		home: string;
		services: string;
		about: string;
		contact: string;
		languageSelector: string;
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
					{dictionary.salonName}
				</Link>
				<nav className="flex items-center">
					<ul className="flex space-x-4 mr-4">
						{navItems.map((item) => (
							<li key={item}>
								<Link href={`#`} className="text-white hover:text-purple-200">
									{dictionary[item]}
								</Link>
							</li>
						))}
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