import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { TypeAnimation } from 'react-type-animation';

interface HeroProps {
	title: string;
	description: string;
	callToActionButton: string;
}

const TypingAnimationHero: React.FC<HeroProps> = ({ title, description, callToActionButton }) => {
	return (
		<section className="h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600">
			<div className="text-center text-white">
				<h1 className="text-5xl font-bold mb-4">
					<TypeAnimation
						sequence={[title, 1000]}
						wrapper="span"
						cursor={true}
						repeat={Infinity}
					/>
				</h1>
				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.5 }}
					className="mb-8 max-w-2xl mx-auto"
				>
					{description}
				</motion.p>
				<motion.div
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5, delay: 1 }}
				>
					<Button variant="default" size="lg" className="bg-white text-purple-600 hover:bg-purple-100">
						{callToActionButton}
					</Button>
				</motion.div>
			</div>
		</section>
	);
};

export default TypingAnimationHero;