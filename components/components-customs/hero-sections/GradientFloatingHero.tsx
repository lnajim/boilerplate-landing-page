import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import useTranslationStore from "@/stores/TranslationStore";

const GradientFloatingHero: React.FC = () => {
	const { dictionary } = useTranslationStore();

	return (
		<section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-gradient-x">
			<div className="text-center z-10">
				<motion.h1
					initial={{ opacity: 0, y: -50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className="text-5xl font-bold mb-4 text-white"
				>
					{dictionary.HeroSection.title}
				</motion.h1>
				<motion.p
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.2 }}
					className="mb-8 max-w-2xl mx-auto text-white"
				>
					{dictionary.HeroSection.description}
				</motion.p>
				<motion.div
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5, delay: 0.4 }}
				>
					<Button variant="default" size="lg" className="bg-white text-purple-600 hover:bg-purple-100">
						{dictionary.HeroSection.buttonText}
					</Button>
				</motion.div>
			</div>
			{[...Array(20)].map((_, i) => (
				<motion.div
					key={i}
					className="absolute w-4 h-4 bg-white rounded-full opacity-50"
					animate={{
						x: Math.random() * window.innerWidth,
						y: Math.random() * window.innerHeight,
						scale: [1, 1.5, 1],
					}}
					transition={{
						duration: Math.random() * 10 + 10,
						repeat: Infinity,
						repeatType: "reverse",
					}}
				/>
			))}
		</section>
	);
};

export default GradientFloatingHero;