'use client'

import { ChevronLeft } from 'lucide-react'
import Image from 'next/image'
import AuthenticationButton from './AuthenticationButton'
import { appConfig } from '@/app.config'

interface AdminHeaderProps {
	toggleSidebar: () => void;
	isExpanded: boolean;
}

export default function AdminHeader({ toggleSidebar, isExpanded }: AdminHeaderProps) {
	return (
		<header className="fixed top-0 left-0 right-0 bg-white border-b z-30">
			<div className="flex items-center justify-between h-16 px-4">
				<div className="flex items-center">
					<button
						onClick={toggleSidebar}
						className="hidden md:block p-2 rounded-md hover:bg-gray-100 mr-2 transition-all duration-300 ease-in-out"
						aria-label={isExpanded ? "Close sidebar" : "Open sidebar"}
					>
						<div className={` transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
							<ChevronLeft size={24} />
						</div>
					</button>
					<Image
						src={appConfig.header.logo}
						alt={appConfig.header.applicationName}
						width={150}
						height={40}
						className="max-w-[100px] md:max-w-[150px]"
					/>
				</div>
				<AuthenticationButton isAdminArea={true} />
			</div>
		</header>
	)
}