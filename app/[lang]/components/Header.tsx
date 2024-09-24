'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import useTranslationStore from '@/stores/TranslationStore'
import LanguageSelector from './LanguageSelector'
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import LoginForm from '@/app/[lang]/components/auth/LoginForm'

const Header: React.FC = () => {
	const { language, dictionary, setLanguage } = useTranslationStore()
	const [isLoading, setIsLoading] = useState(true)
	const [showLoginDialog, setShowLoginDialog] = useState(false)

	useEffect(() => {
		const loadTranslations = async () => {
			await setLanguage(language)
			setIsLoading(false)
		}
		loadTranslations()
	}, [setLanguage, language])

	if (isLoading) {
		return <div>Loading...</div>
	}

	const navItems = ['home', 'services', 'about', 'contact'] as const;

	return (
		<header className="bg-gradient-to-r from-purple-500 to-pink-500 p-4" data-header-id="main-header">
			<div className="container mx-auto flex justify-between items-center">
				<Link href="/" className="text-white text-2xl font-cursive">
					{dictionary.Header.salonName || "Lumina"}
				</Link>
				<nav className="flex items-center">
					<ul className="flex space-x-4 mr-4">
						{navItems.map((item) => (
							<li key={item}>
								<Link href={`#`} className="text-white hover:text-purple-200">
									{dictionary.Header[item]}
								</Link>
							</li>
						))}
						<li>
							<Dialog open={showLoginDialog} onOpenChange={setShowLoginDialog}>
								<DialogTrigger asChild>
									<Button variant="ghost" className="text-white hover:text-purple-200 hover:bg-transparent">
										{dictionary.Header.login}
									</Button>
								</DialogTrigger>
								<DialogContent>
									<DialogHeader>
										<DialogTitle>{dictionary.LoginForm.title}</DialogTitle>
										<DialogDescription>
											{dictionary.LoginForm.description}
										</DialogDescription>
									</DialogHeader>
									<LoginForm />
									<DialogFooter>
										<Button variant="outline" onClick={() => setShowLoginDialog(false)}>
											{dictionary.Header.close}
										</Button>
									</DialogFooter>
								</DialogContent>
							</Dialog>
						</li>
					</ul>
					<LanguageSelector dictionary={dictionary.Header} lang={language} />
				</nav>
			</div>
		</header>
	)
}

export default Header