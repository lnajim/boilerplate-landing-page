import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { appConfig } from '@/app.config';

interface HeroProps {
	title: string;
	description: string;
	callToActionButton: string;
}

const ParallaxScrollHero: React.FC<HeroProps> = ({ title, description, callToActionButton }) => {
	const [offset, setOffset] = useState(0);

	useEffect(() => {
		const handleScroll = () => setOffset(window.pageYOffset);
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<section className="relative h-screen flex items-center justify-center overflow-hidden">
			<div className="absolute inset-0 z-0">
				<Image
					src={appConfig.heroSection.backgroundImage}
					alt="Hero background"
					layout="fill"
					objectFit="cover"
					quality={100}
					priority
				/>
			</div>
			<div
				className="absolute inset-0 z-0"
				style={{
					transform: `translateY(${offset * 0.5}px)`,
				}}
			/>
			<div className="relative z-10 text-center text-white">
				<h1 className="text-6xl font-bold mb-4" style={{ transform: `translateY(${offset * 0.2}px)` }}>
					{title}
				</h1>
				<p className="mb-8 max-w-2xl mx-auto text-xl" style={{ transform: `translateY(${offset * 0.1}px)` }}>
					{description}
				</p>
				<Button variant="default" size="lg" className="bg-white text-purple-600 hover:bg-purple-100">
					{callToActionButton}
				</Button>
			</div>
		</section>
	);
};

export default ParallaxScrollHero;