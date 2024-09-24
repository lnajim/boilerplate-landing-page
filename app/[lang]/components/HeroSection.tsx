// components/Hero.tsx
import { Button } from '@/components/ui/button'
import useTranslationStore from '@/stores/TranslationStore';

interface HeroProps {

}

const Hero: React.FC<HeroProps> = () => {
	const { dictionary } = useTranslationStore()

	return (
		<section className="bg-purple-200 py-20 text-center">
			<h1 className="text-4xl font-bold mb-4">{dictionary.HeroSection.title}</h1>
			<p className="mb-8 max-w-2xl mx-auto">
				{dictionary.HeroSection.description}
			</p>
			<Button variant="default" size="lg">
				{dictionary.HeroSection.buttonText}
			</Button>
		</section>
	)
}

export default Hero