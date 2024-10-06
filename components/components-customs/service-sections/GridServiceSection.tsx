import React from 'react';
import { motion } from 'framer-motion';

interface ServiceProps {
	title: string;
	services: { title: string; description: string }[];
}

const GridServiceSection: React.FC<ServiceProps> = ({ title, services }) => {
	return (
		<section className="py-16 bg-background">
			<div className="container mx-auto">
				<h2 className="text-3xl font-bold text-center mb-12 text-foreground">{title}</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{services?.map((service, index) => (
						<motion.div
							key={index}
							className="bg-card p-6 rounded-lg shadow-md"
							initial={{ opacity: 0, y: 50 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
						>
							<h3 className="text-xl font-semibold mb-3 text-card-foreground">{service.title}</h3>
							<p className="text-muted-foreground">{service.description}</p>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default GridServiceSection;