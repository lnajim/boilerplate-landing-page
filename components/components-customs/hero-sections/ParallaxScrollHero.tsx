"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { appConfig } from '@/app.config';
import useTranslationStore from "@/stores/TranslationStore";

const ParallaxScrollHero: React.FC = () => {
	const [offset, setOffset] = useState(0);
	const { dictionary } = useTranslationStore();

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
					{dictionary.HeroSection.title}
				</h1>
				<p className="mb-8 max-w-2xl mx-auto text-xl" style={{ transform: `translateY(${offset * 0.1}px)` }}>
					{dictionary.HeroSection.description}
				</p>
				<Button variant="default" size="lg" className="bg-white text-purple-600 hover:bg-purple-100">
					{dictionary.HeroSection.buttonText}
				</Button>
			</div>
		</section>
	);
};

export default ParallaxScrollHero;