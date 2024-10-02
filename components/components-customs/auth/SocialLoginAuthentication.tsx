import { Button } from "@/components/ui/button"
import { Icons } from '@/components/ui/icons'
import useTranslationStore from '@/stores/TranslationStore'
import { signIn } from "next-auth/react"

interface SocialLoginAuthenticationProps {
	isLoading?: boolean;
}

const SocialLoginAuthentication: React.FC<SocialLoginAuthenticationProps> = ({ isLoading }) => {
	const { dictionary } = useTranslationStore()

	return (
		<>
			<div className="relative">
				<div className="absolute inset-0 flex items-center">
					<span className="w-full border-t" />
				</div>
				<div className="relative flex justify-center text-xs uppercase">
					<span className="bg-background px-2 text-muted-foreground">
						{dictionary?.LoginForm.orContinueWith}
					</span>
				</div>
			</div>
			<div className="grid grid-cols-1 gap-6">

				<Button className="bg-red-600 hover:bg-red-400 text-white" onClick={() => signIn("google")} disabled={isLoading}>
					<Icons.google className="mr-2 h-4 w-4  fill-white text-white" />
					{dictionary?.LoginForm.googleButton}
				</Button>
			</div>
		</>
	)
}

export default SocialLoginAuthentication