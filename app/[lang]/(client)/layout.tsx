import '@/app/globals.css';
import Image from 'next/image';

export const metadata = {
	title: 'Resto-Genius',
	description: 'Restaurant management system'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<div>
			{/* Background Image for Mobile */}
			<Image
				className="block md:hidden"
				src="/login-background.webp"
				alt="Background"
				fill
				objectFit="cover"
				quality={100}
			/>

			<div className="relative min-h-screen flex flex-col justify-center md:flex-row">
				{/* Logo for Desktop */}
				<div className="hidden md:block md:absolute md:w-[240px] md:h-[62px] md:top-[38px] md:left-[41px]">
					<Image src="/logo.svg" alt="Logo" width={240} height={61} />
				</div>

				{/* Unified Layout for Mobile and Desktop */}
				<div className="bg-white h-fit p-12 flex flex-col-reverse items-center rounded-md m-4 shadow-md md:flex-row md:items-center md:justify-center md:h-screen md:w-1/2 md:m-0 md:shadow-none">
					<Image className="md:hidden" src="/logo.svg" alt="Logo" width={240} height={61} />
					<div className="w-full max-w-md">{children}</div>
				</div>

				{/* Background Image for Desktop */}
				<div className="hidden md:block md:w-1/2 md:relative">
					<div className="absolute inset-0">
						<Image src="/login-background.webp" alt="Background" fill objectFit="cover" quality={100} />
					</div>
				</div>
			</div>
		</div>
	);
}
