"use client"
import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import useTranslationStore from "@/stores/TranslationStore";

const CarouselServiceSection: React.FC = () => {
	const { dictionary } = useTranslationStore();
	const [currentIndex, setCurrentIndex] = useState(0);
	const [visibleServices, setVisibleServices] = useState<Array<{ title: string; description: string }>>([]);

	const services = useMemo(() => [
		{
			title: dictionary.ServicesSection.haircuts.title,
			description: dictionary.ServicesSection.haircuts.description,
		},
		{
			title: dictionary.ServicesSection.coloring.title,
			description: dictionary.ServicesSection.coloring.description,
		},
		{
			title: dictionary.ServicesSection.styling.title,
			description: dictionary.ServicesSection.styling.description,
		},
		{
			title: dictionary.ServicesSection.treatments.title,
			description: dictionary.ServicesSection.treatments.description,
		},
	], [dictionary.ServicesSection]);

	const updateVisibleServices = () => {
		const windowWidth = window.innerWidth;
		let visibleCount = 1;
		if (windowWidth >= 1024) visibleCount = 3;
		else if (windowWidth >= 768) visibleCount = 2;

		const startIndex = currentIndex % services.length;
		const endIndex = (startIndex + visibleCount) % services.length;

		if (startIndex < endIndex) {
			setVisibleServices(services.slice(startIndex, endIndex));
		} else {
			setVisibleServices([...services.slice(startIndex), ...services.slice(0, endIndex)]);
		}
	};

	useEffect(() => {
		updateVisibleServices();
		window.addEventListener('resize', updateVisibleServices);
		return () => window.removeEventListener('resize', updateVisibleServices);
	}, [currentIndex, services]);

	const nextSlide = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
	};

	const prevSlide = () => {
		setCurrentIndex((prevIndex) => (prevIndex - 1 + services.length) % services.length);
	};

	return (
		<section className="py-16 bg-background">
			<div className="container mx-auto">
				<h2 className="text-3xl font-bold text-center mb-12 text-foreground">{dictionary.ServicesSection.sectionTitle}</h2>
				<div className="relative">
					<div className="flex justify-center gap-4">
						{visibleServices.map((service, index) => (
							<motion.div
								key={index}
								className="bg-card p-6 rounded-lg shadow-md w-full md:w-1/2 lg:w-1/3"
								initial={{ opacity: 0, scale: 0.9 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{ duration: 0.5 }}
							>
								<h3 className="text-xl font-semibold mb-3 text-card-foreground">{service.title}</h3>
								<p className="text-muted-foreground">{service.description}</p>
							</motion.div>
						))}
					</div>
					<button
						className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-primary text-primary-foreground p-2 rounded-full shadow-md"
						onClick={prevSlide}
					>
						&#8592;
					</button>
					<button
						className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-primary text-primary-foreground p-2 rounded-full shadow-md"
						onClick={nextSlide}
					>
						&#8594;
					</button>
				</div>
			</div>
		</section>
	);
};

export default CarouselServiceSection;