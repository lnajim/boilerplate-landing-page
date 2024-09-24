'use client'

import { useState, createContext, useContext, ReactNode } from 'react'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import LoginForm from '@/app/[lang]/components/auth/LoginForm'
import RegistrationForm from '@/app/[lang]/components/auth/RegistrationForm'
import { Button } from "@/components/ui/button"
import useTranslationStore from '@/stores/TranslationStore'

interface AuthModalsContextProps {
	showLoginDialog: boolean
	showRegisterDialog: boolean
	openLoginDialog: () => void
	openRegisterDialog: () => void
	closeDialogs: () => void
	setShowLoginDialog: (isOpen: boolean) => void // Added setter for showLoginDialog
}

const AuthModalsContext = createContext<AuthModalsContextProps | undefined>(undefined)

export const useAuthModals = () => {
	const context = useContext(AuthModalsContext)
	if (!context) {
		throw new Error('useAuthModals must be used within an AuthModalsProvider')
	}
	return context
}

export const AuthModalsProvider = ({ children }: { children: ReactNode }) => {
	const [showLoginDialog, setShowLoginDialog] = useState(false)
	const [showRegisterDialog, setShowRegisterDialog] = useState(false)
	const { dictionary } = useTranslationStore()

	const openLoginDialog = () => {
		setShowRegisterDialog(false)
		setShowLoginDialog(true)
	}

	const openRegisterDialog = () => {
		setShowLoginDialog(false)
		setShowRegisterDialog(true)
	}

	const closeDialogs = () => {
		setShowLoginDialog(false)
		setShowRegisterDialog(false)
	}

	return (
		<AuthModalsContext.Provider value={{ showLoginDialog, showRegisterDialog, openLoginDialog, openRegisterDialog, closeDialogs, setShowLoginDialog }}>
			{children}
			<Dialog open={showLoginDialog} onOpenChange={(isOpen) => { setShowLoginDialog(isOpen); if (isOpen) setShowRegisterDialog(false); }}>
				<DialogContent className='flex flex-col'>
					<DialogHeader>
						<DialogTitle>{dictionary.LoginForm.title}</DialogTitle>
						<DialogDescription>
							{dictionary.LoginForm.description}
						</DialogDescription>
					</DialogHeader>
					<LoginForm />
					<DialogFooter>
						<Button variant="outline" onClick={closeDialogs}>
							{dictionary.Header.close}
						</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>
			<Dialog open={showRegisterDialog} onOpenChange={(isOpen) => { setShowRegisterDialog(isOpen); if (isOpen) setShowLoginDialog(false); }}>
				<DialogContent className='flex flex-col'>
					<DialogHeader>
						<DialogTitle>{dictionary.RegistrationForm.title}</DialogTitle>
						<DialogDescription>
							{dictionary.RegistrationForm.description}
						</DialogDescription>
					</DialogHeader>
					<RegistrationForm />
					<DialogFooter>
						<Button variant="outline" onClick={closeDialogs}>
							{dictionary.Header.close}
						</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</AuthModalsContext.Provider>
	)
}