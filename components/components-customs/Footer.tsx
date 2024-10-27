'use client'
import useTranslationStore from "@/stores/TranslationStore"

interface FooterProps {

}

const Footer: React.FC<FooterProps> = () => {
	const { dictionary } = useTranslationStore()

	return (
		<footer className="bg-purple-600 text-white py-8">
			<div className="container mx-auto text-center">
				<p>{dictionary.Footer.copyright.replace('{year}', new Date().getFullYear().toString())}</p>
			</div>
		</footer>
	)
}

export default Footer