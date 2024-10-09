'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import useTranslationStore from '@/stores/TranslationStore'
import useAuthModalsStore from "@/stores/authModalsStore"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { AlignJustify, User } from 'lucide-react'
import MenuItem from './MenuItem'
import { appConfig } from '@/app.config'

interface AuthenticationButtonProps {
	isAdminArea?: boolean;
}

const AuthenticationButton = ({ isAdminArea = false }: AuthenticationButtonProps) => {
	const router = useRouter()
	const { dictionary } = useTranslationStore()
	const { setShowLoginDialog, setShowRegisterDialog } = useAuthModalsStore()
	const { data: session, status } = useSession()
	const menuRef = useRef<HTMLDivElement | null>(null)
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
		const cleanedRoute = route.replace(/\([^)]*\)\//g, '')
		router.push(cleanedRoute)
		setIsOpen(false)
	}

	const userMenuItems = appConfig.menu.filter(item =>
		item.isUserMenu && (!isAdminArea || item.showInAdminArea)
	)

	return (
		<div className="relative" ref={menuRef}>
			<div className="flex flex-row items-center gap-3">
				<div
					onClick={toggleOpen}
					className="
						p-2
						sm:p-4
						sm:py-1
						sm:px-2
						border-[1px] 
						border-neutral-200 
						flex 
						flex-row 
						items-center 
						gap-1
						sm:gap-3 
						rounded-full 
						cursor-pointer 
						hover:shadow-md 
						transition
					"
				>
					<div className="hidden sm:block">
						<AlignJustify size={20} />
					</div>
					<Avatar className="h-6 w-6 sm:h-8 sm:w-8">
						{status === 'loading' ? (
							<AvatarFallback>
								<User className="h-3 w-3 sm:h-4 sm:w-4" />
							</AvatarFallback>
						) : status === 'authenticated' && session?.user?.image ? (
							<AvatarImage src={session.user.image} alt="User avatar" />
						) : (
							<AvatarFallback>
								<User className="h-3 w-3 sm:h-4 sm:w-4" />
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
							w-full
							sm:w-3/4 
							text-primary-foreground
							bg-primary
							overflow-hidden 
							right-0 
							top-12 
							text-sm
						"
				>
					<div className="flex flex-col cursor-pointer">
						{status === 'loading' ? (
							<MenuItem label="Loading..." onClick={() => { }} />
						) : status === 'authenticated' ? (
							<>
								{userMenuItems.map((item) => (
									<MenuItem
										key={item.key}
										label={dictionary.Header[item.key as keyof typeof dictionary.Header] || item.key}
										onClick={() => handleRouting(item.path)}
									/>
								))}
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

