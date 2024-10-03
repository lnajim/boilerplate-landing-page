import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface ServiceProps {
	title: string;
	services: { title: string; description: string }[];
}

const CarouselServiceSection: React.FC<ServiceProps> = ({ title, services }) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [visibleServices, setVisibleServices] = useState<typeof services>([]);

	useEffect(() => {
		const updateVisibleServices = () => {
			const windowWidth = window.innerWidth;
			let visibleCount = 1;
			if (windowWidth >= 1024) visibleCount = 3;
			else if (windowWidth >= 768) visibleCount = 2;

			const startIndex = currentIndex % services?.length;
			const endIndex = (startIndex + visibleCount) % services?.length;

			if (startIndex < endIndex) {
				setVisibleServices(services.slice(startIndex, endIndex));
			} else {
				setVisibleServices([...services.slice(startIndex), ...services.slice(0, endIndex)]);
			}
		};

		updateVisibleServices();
		window.addEventListener('resize', updateVisibleServices);
		return () => window.removeEventListener('resize', updateVisibleServices);
	}, [currentIndex, services]);

	const nextSlide = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % services?.length);
	};

	const prevSlide = () => {
		setCurrentIndex((prevIndex) => (prevIndex - 1 + services?.length) % services?.length);
	};

	return (
		<section className="py-16 bg-background">
			<div className="container mx-auto">
				<h2 className="text-3xl font-bold text-center mb-12 text-foreground">{title}</h2>
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
								<h3 className="text-xl font-semibold mb-3 text-card-foreground">{service.name}</h3>
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