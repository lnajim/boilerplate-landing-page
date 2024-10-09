import useTranslationStore from '@/stores/TranslationStore';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import CallToActionButton from '../CallToActionButton';

const TypingAnimationHero = () => {
	const { dictionary } = useTranslationStore();
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');

	useEffect(() => {
		if (dictionary.HeroSection) {
			setTitle(dictionary.HeroSection.title || '');
			setDescription(dictionary.HeroSection.description || '');
		}
	}, [dictionary.HeroSection]);

	if (!title || !description) {
		return <div>Loading...</div>; // Or any loading indicator
	}

	return (
		<section className="h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600">
			<div className="text-center text-white">
				<h1 className="text-5xl font-bold mb-4">
					<TypeAnimation
						sequence={[
							title,
							1000,
							'', // Add an empty string to clear the text
							500, // Add a delay before restarting
						]}
						wrapper="span"
						cursor={true}
						repeat={Infinity}
						style={{ display: 'inline-block' }}
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
					<CallToActionButton />
				</motion.div>
			</div>
		</section>
	);
};

export default TypingAnimationHero;