import React from 'react';
import { Button } from '@/components/ui/button';

interface ContactFormProps {
	title: string;
	namePlaceholder: string;
	emailPlaceholder: string;
	messagePlaceholder: string;
	submitButtonText: string;
}

const SimpleContactForm: React.FC<ContactFormProps> = ({
	title,
	namePlaceholder,
	emailPlaceholder,
	messagePlaceholder,
	submitButtonText,
}) => {
	return (
		<section className="py-16 bg-background">
			<div className="container mx-auto max-w-md">
				<h2 className="text-3xl font-bold text-center mb-8 text-foreground">{title}</h2>
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
			</div>
		</section>
	);
};

export default SimpleContactForm;