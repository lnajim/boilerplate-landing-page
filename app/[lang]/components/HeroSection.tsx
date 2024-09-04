// components/Hero.tsx
import { Button } from '@/components/ui/button'

interface HeroProps {
	dictionary: {
		title: string;
		description: string;
		buttonText: string;
	}
}

const Hero: React.FC<HeroProps> = ({ dictionary }) => {
	return (
		<section className="bg-purple-200 py-20 text-center">
			<h1 className="text-4xl font-bold mb-4">{dictionary.title}</h1>
			<p className="mb-8 max-w-2xl mx-auto">
				{dictionary.description}
			</p>
			<Button variant="default" size="lg">
				{dictionary.buttonText}
			</Button>
		</section>
	)
}

export default Hero