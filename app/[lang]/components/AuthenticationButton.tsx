'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import LoginForm from '@/app/[lang]/components/auth/LoginForm'

interface AuthenticationButtonProps {
	dictionary: {
		login: string;
		loginDescription: string;
		close: string;
	};
	loginFormDictionary: {
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
	};
}

const AuthenticationButton: React.FC<AuthenticationButtonProps> = ({ dictionary, loginFormDictionary }) => {
	const [showLoginDialog, setShowLoginDialog] = useState(false)

	return (
		<Dialog open={showLoginDialog} onOpenChange={setShowLoginDialog}>
			<DialogTrigger>
				<Button variant="link" className="text-white hover:text-purple-200 hover:bg-transparent ">
					{dictionary.login}
				</Button>
			</DialogTrigger>
			<DialogContent className='flex flex-col'>
				<DialogHeader>
					<DialogTitle>{dictionary.login}</DialogTitle>
					<DialogDescription>
						{dictionary.loginDescription}
					</DialogDescription>
				</DialogHeader>
				<LoginForm dictionary={loginFormDictionary} />
				<DialogFooter>
					<Button variant="outline" onClick={() => setShowLoginDialog(false)}>
						{dictionary.close}
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	)
}

export default AuthenticationButton