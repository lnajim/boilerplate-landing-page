import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

interface HeroProps {
	title: string;
	description: string;
	callToActionButton: string;
}

const AnimatedSvgHero: React.FC<HeroProps> = ({ title, description, callToActionButton }) => {
	return (
		<section className="relative h-screen flex items-center justify-center overflow-hidden bg-gray-900">
			<svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
				<defs>
					<linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
						<stop offset="0%" style={{ stopColor: '#8B5CF6', stopOpacity: 1 }} />
						<stop offset="100%" style={{ stopColor: '#EC4899', stopOpacity: 1 }} />
					</linearGradient>
				</defs>
				<motion.circle
					cx="10%"
					cy="10%"
					r="10%"
					fill="url(#grad1)"
					initial={{ scale: 0 }}
					animate={{ scale: [0, 1.5, 1] }}
					transition={{ duration: 5, repeat: Infinity, repeatType: 'reverse' }}
				/>
				<motion.circle
					cx="90%"
					cy="90%"
					r="15%"
					fill="url(#grad1)"
					initial={{ scale: 0 }}
					animate={{ scale: [0, 1.2, 1] }}
					transition={{ duration: 6, repeat: Infinity, repeatType: 'reverse', delay: 0.5 }}
				/>
			</svg>
			<div className="relative z-10 text-center text-white">
				<motion.h1
					initial={{ opacity: 0, y: -50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className="text-5xl font-bold mb-4"
				>
					{title}
				</motion.h1>
				<motion.p
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.2 }}
					className="mb-8 max-w-2xl mx-auto"
				>
					{description}
				</motion.p>
				<motion.div
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5, delay: 0.4 }}
				>
					<Button variant="default" size="lg" className="bg-white text-purple-600 hover:bg-purple-100">
						{callToActionButton}
					</Button>
				</motion.div>
			</div>
		</section>
	);
};

export default AnimatedSvgHero;