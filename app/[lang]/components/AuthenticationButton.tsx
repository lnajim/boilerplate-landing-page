'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import LoginForm from '@/app/[lang]/components/auth/LoginForm'
import useTranslationStore from '@/stores/TranslationStore'

const AuthenticationButton = () => {
	const [showLoginDialog, setShowLoginDialog] = useState(false)
	const { dictionary } = useTranslationStore()

	return (
		<Dialog open={showLoginDialog} onOpenChange={setShowLoginDialog}>
			<DialogTrigger>
				<Button variant="link" className="text-white hover:text-purple-200 hover:bg-transparent ">
					{dictionary.Header.login}
				</Button>
			</DialogTrigger>
			<DialogContent className='flex flex-col'>
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
	)
}

export default AuthenticationButton