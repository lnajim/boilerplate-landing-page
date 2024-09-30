'use client'

import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import LoginForm from '@/app/[lang]/components/auth/LoginForm'
import RegistrationForm from '@/app/[lang]/components/auth/RegistrationForm'
import ResetPasswordForm from '@/app/[lang]/components/auth/ResetPasswordForm'
import { Button } from "@/components/ui/button"
import useTranslationStore from '@/stores/TranslationStore'
import useAuthModalsStore from '@/stores/authModalsStore'

export const AuthModalsProvider = ({ children }: { children: React.ReactNode }) => {
	const { dictionary } = useTranslationStore()
	const {
		showLoginDialog,
		showRegisterDialog,
		showResetPasswordDialog,
		setShowLoginDialog,
		setShowRegisterDialog,
		setShowResetPasswordDialog,
		closeDialogs
	} = useAuthModalsStore()

	return (
		<>
			{children}
			<Dialog open={showLoginDialog} onOpenChange={setShowLoginDialog}>
				<DialogContent className='flex flex-col'>
					<DialogHeader>
						<DialogTitle>{dictionary?.LoginForm?.title || 'Login'}</DialogTitle>
						<DialogDescription>
							{dictionary?.LoginForm?.description || 'Enter your credentials to login'}
						</DialogDescription>
					</DialogHeader>
					<LoginForm />
					<DialogFooter>
						<Button variant="outline" onClick={closeDialogs}>
							{dictionary?.Header?.close || 'Close'}
						</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>
			<Dialog open={showRegisterDialog} onOpenChange={setShowRegisterDialog}>
				<DialogContent className='flex flex-col'>
					<DialogHeader>
						<DialogTitle>{dictionary?.RegistrationForm?.title || 'Register'}</DialogTitle>
						<DialogDescription>
							{dictionary?.RegistrationForm?.description || 'Create a new account'}
						</DialogDescription>
					</DialogHeader>
					<RegistrationForm />
					<DialogFooter>
						<Button variant="outline" onClick={closeDialogs}>
							{dictionary?.Header?.close || 'Close'}
						</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>
			<Dialog open={showResetPasswordDialog} onOpenChange={setShowResetPasswordDialog}>
				<DialogContent className='flex flex-col'>
					<DialogHeader>
						<DialogTitle>{dictionary?.ResetPasswordForm?.title || 'Reset Password'}</DialogTitle>
						<DialogDescription>
							{dictionary?.ResetPasswordForm?.description || 'Enter your email to reset your password'}
						</DialogDescription>
					</DialogHeader>
					<ResetPasswordForm />
					<DialogFooter>
						<Button variant="outline" onClick={closeDialogs}>
							{dictionary?.Header?.close || 'Close'}
						</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</>
	)
}

export default AuthModalsProvider