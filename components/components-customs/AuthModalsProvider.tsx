'use client'

import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from "@/components/ui/button"
import useTranslationStore from '@/stores/TranslationStore'
import useAuthModalsStore from '@/stores/authModalsStore'
import LoginForm from './auth/LoginForm'
import RegistrationForm from './auth/RegistrationForm'
import ResetPasswordForm from './auth/ResetPasswordForm'

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

	const isOpen = showLoginDialog || showRegisterDialog || showResetPasswordDialog

	const getActiveDialog = () => {
		if (showLoginDialog) return 'login'
		if (showRegisterDialog) return 'register'
		if (showResetPasswordDialog) return 'resetPassword'
		return null
	}

	const activeDialog = getActiveDialog()

	const handleOpenChange = (open: boolean) => {
		if (!open) closeDialogs()
	}

	const getDialogContent = () => {
		switch (activeDialog) {
			case 'login':
				return {
					title: dictionary?.LoginForm?.title || 'Login',
					description: dictionary?.LoginForm?.description || 'Enter your credentials to login',
					form: <LoginForm />
				}
			case 'register':
				return {
					title: dictionary?.RegistrationForm?.title || 'Register',
					description: dictionary?.RegistrationForm?.description || 'Create a new account',
					form: <RegistrationForm />
				}
			case 'resetPassword':
				return {
					title: dictionary?.ResetPasswordForm?.title || 'Reset Password',
					description: dictionary?.ResetPasswordForm?.description || 'Enter your email to reset your password',
					form: <ResetPasswordForm />
				}
			default:
				return null
		}
	}

	const dialogContent = getDialogContent()

	return (
		<>
			{children}
			<Dialog open={isOpen} onOpenChange={handleOpenChange}>
				{dialogContent && (
					<DialogContent className='flex flex-col '>
						<DialogHeader>
							<DialogTitle>{dialogContent.title}</DialogTitle>
							<DialogDescription>
								{dialogContent.description}
							</DialogDescription>
						</DialogHeader>
						{dialogContent.form}
						<DialogFooter>
							<Button variant="outline" onClick={closeDialogs}>
								{dictionary?.Header?.close || 'Close'}
							</Button>
						</DialogFooter>
					</DialogContent>
				)}
			</Dialog>
		</>
	)
}

export default AuthModalsProvider