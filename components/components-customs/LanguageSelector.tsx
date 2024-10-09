'use client'

import { useRouter, usePathname } from 'next/navigation'
import { Button } from "@/components/ui/button"
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown } from 'lucide-react'
import useTranslationStore from '@/stores/TranslationStore'
import { useEffect, useState } from 'react'

const languages = [
	{ code: 'en', name: 'English', flag: '🇬🇧' },
	{ code: 'fr', name: 'Français', flag: '🇫🇷' },
]

const LanguageSelector: React.FC = () => {
	const router = useRouter()
	const pathname = usePathname()
	const { language, setLanguage } = useTranslationStore()
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		setMounted(true)
		const urlLang = pathname.split('/')[1]
		if (urlLang && urlLang !== language) {
			setLanguage(urlLang)
		}
	}, [pathname, setLanguage, language])

	const changeLanguage = (langCode: string) => {
		setLanguage(langCode)
		const newPathname = pathname.replace(`/${language}`, `/${langCode}`)
		router.push(newPathname)
	}

	if (!mounted) {
		return null // or a loading placeholder
	}

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="ghost" className="text-primary-foreground hover:text-secondary hover:bg-transparent outline-none active:outline-none focus:outline-none focus-visible:outline-none">
					<span className="mr-2">{languages.find(l => l.code === language)?.flag}</span>
					<span>{language?.toUpperCase()}</span>
					<ChevronDown className="ml-2 h-4 w-4 text-primary-foreground" />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="bg-primary border-none shadow-none">
				{languages.map((lang) => (
					<DropdownMenuItem
						key={lang.code}
						onSelect={() => changeLanguage(lang.code)}
						className="hover:bg-secondary hover:text-primary-foreground focus:bg-secondary focus:text-primary-foreground outline-none border-none"
					>
						<span className="mr-2">{lang.flag}</span>
						<span>{lang.name}</span>
					</DropdownMenuItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	)
}

export default LanguageSelector