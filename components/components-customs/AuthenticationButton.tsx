'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import useTranslationStore from '@/stores/TranslationStore'
import useAuthModalsStore from "@/stores/authModalsStore"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { AlignJustify, User } from 'lucide-react'
import MenuItem from './MenuItem'
const AuthenticationButton = () => {
	const router = useRouter()
	const { dictionary } = useTranslationStore()
	const { setShowLoginDialog, setShowRegisterDialog } = useAuthModalsStore()
	const { data: session, status } = useSession()
	const menuRef = useRef<HTMLDivElement | null>(null)
	console.log(session)
	const [isOpen, setIsOpen] = useState(false)

	const toggleOpen = useCallback(() => {
		setIsOpen((value) => !value)
	}, [])

	const handleClickOutside = useCallback((event: MouseEvent) => {
		if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
			setIsOpen(false)
		}
	}, [])

	useEffect(() => {
		document.addEventListener('click', handleClickOutside)
		return () => {
			document.removeEventListener('click', handleClickOutside)
		}
	}, [handleClickOutside])

	const handleRouting = (route: string) => {
		router.push(route)
		setIsOpen(false)
	}

	return (
		<div className="relative" ref={menuRef}>
			<div className="flex flex-row items-center gap-3">
				<div
					onClick={toggleOpen}
					className="
						p-4
						md:py-1
						md:px-2
						border-[1px] 
						border-neutral-200 
						flex 
						flex-row 
						items-center 
						gap-3 
						rounded-full 
						cursor-pointer 
						hover:shadow-md 
						transition
					"
				>
					<div>
						<AlignJustify />

					</div>
					<Avatar className="h-8 w-8">
						{session?.user?.image ? (
							<AvatarImage src={session.user.image} alt="User avatar" />
						) : (
							<AvatarFallback>
								<User className="h-4 w-4" />
							</AvatarFallback>
						)}
					</Avatar>
				</div>
			</div>
			{isOpen && (
				<div
					className="
							absolute 
							rounded-xl 
							shadow-md
							min-w-[160px]
							border-[1px] 
						border-neutral-200 
							md:w-3/4 
							text-primary-foreground
							bg-primary
							overflow-hidden 
							right-0 
							top-12 
							text-sm
						"
				>
					<div className="flex flex-col cursor-pointer">
						{status === 'authenticated' ? (
							<>
								<MenuItem
									label={dictionary.Header.profile!}
									onClick={() => handleRouting('/profile')}
								/>
								<MenuItem
									label={dictionary.Header.settings!}
									onClick={() => handleRouting('/settings')}
								/>
								<hr />
								<MenuItem
									label={dictionary.Header.logout!}
									onClick={() => signOut()}
								/>
							</>
						) : (
							<>
								<MenuItem
									label={dictionary.Header.login}
									onClick={() => {
										setShowLoginDialog(true)
										setIsOpen(false)
									}}
								/>
								<MenuItem
									label={dictionary.Header.register}
									onClick={() => {
										setShowRegisterDialog(true)
										setIsOpen(false)
									}}
								/>
							</>
						)}
					</div>
				</div>
			)}
		</div>
	)

}

export default AuthenticationButton

