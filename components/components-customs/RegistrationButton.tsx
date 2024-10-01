'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import RegistrationForm from '@/app/[lang]/components/auth/RegistrationForm'
import useTranslationStore from '@/stores/TranslationStore'

const RegistrationButton = () => {
	const [showRegisterDialog, setShowRegisterDialog] = useState(false)
	const { dictionary } = useTranslationStore()

	return (
		<Dialog open={showRegisterDialog} onOpenChange={setShowRegisterDialog}>
			<DialogTrigger>
				<Button variant="link" className="text-white hover:text-purple-200 hover:bg-transparent ">
					{dictionary.Header.register}
				</Button>
			</DialogTrigger>
			<DialogContent className='flex flex-col'>
				<DialogHeader>
					<DialogTitle>{dictionary.RegistrationForm.title}</DialogTitle>
					<DialogDescription>
						{dictionary.RegistrationForm.description}
					</DialogDescription>
				</DialogHeader>
				<RegistrationForm />
				<DialogFooter>
					<Button variant="outline" onClick={() => setShowRegisterDialog(false)}>
						{dictionary.Header.close}
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	)
}

export default RegistrationButton