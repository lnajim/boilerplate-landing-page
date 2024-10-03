import React from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

interface ContactFormProps {
	title: string;
	namePlaceholder: string;
	emailPlaceholder: string;
	messagePlaceholder: string;
	submitButtonText: string;
}

const TwoColumnContactForm: React.FC<ContactFormProps> = ({
	title,
	namePlaceholder,
	emailPlaceholder,
	messagePlaceholder,
	submitButtonText,
}) => {
	return (
		<section className="py-16 bg-background">
			<div className="container mx-auto">
				<h2 className="text-3xl font-bold text-center mb-12 text-foreground">{title}</h2>
				<div className="flex flex-col md:flex-row gap-8">
					<motion.div
						className="flex-1"
						initial={{ opacity: 0, x: -50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5 }}
					>
						<h3 className="text-xl font-semibold mb-4 text-foreground">Get in touch</h3>
						<p className="mb-4 text-muted-foreground">
							We'd love to hear from you. Please fill out this form and we will get in touch with you shortly.
						</p>
						<div className="space-y-2 text-muted-foreground">
							<p>Email: contact@example.com</p>
							<p>Phone: +1 (123) 456-7890</p>
							<p>Address: 123 Main St, City, Country</p>
						</div>
					</motion.div>
					<motion.div
						className="flex-1"
						initial={{ opacity: 0, x: 50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
					>
						<form className="space-y-4">
							<input
								type="text"
								placeholder={namePlaceholder}
								className="w-full p-2 border border-input rounded bg-background text-foreground"
							/>
							<input
								type="email"
								placeholder={emailPlaceholder}
								className="w-full p-2 border border-input rounded bg-background text-foreground"
							/>
							<textarea
								placeholder={messagePlaceholder}
								rows={4}
								className="w-full p-2 border border-input rounded bg-background text-foreground"
							></textarea>
							<Button type="submit" className="w-full bg-primary text-primary-foreground">
								{submitButtonText}
							</Button>
						</form>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default TwoColumnContactForm;