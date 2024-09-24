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

const languages = [
	{ code: 'en', name: 'English', flag: '🇬🇧' },
	{ code: 'fr', name: 'Français', flag: '🇫🇷' },
]

const LanguageSelector: React.FC = () => {
	const router = useRouter()
	const pathname = usePathname()
	const { language, setLanguage, dictionary } = useTranslationStore()

	const changeLanguage = (langCode: string) => {
		setLanguage(langCode)
		const newPathname = pathname.replace(`/${language}`, `/${langCode}`)
		router.push(newPathname)
	}

	return (
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
	)
}

export default LanguageSelector