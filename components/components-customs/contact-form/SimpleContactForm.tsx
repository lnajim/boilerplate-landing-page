import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '../../ui/input';
import { Textarea } from '../../ui/textarea';
import useTranslationStore from "@/stores/TranslationStore";

const SimpleContactForm: React.FC = () => {
	const { dictionary } = useTranslationStore();

	return (
		<section className="py-16 bg-background">
			<div className="container mx-auto max-w-md">
				<h2 className="text-3xl font-bold text-center mb-8 text-foreground">
					{dictionary.ContactForm.title}
				</h2>
				<form className="space-y-4">
					<Input
						type="text"
						placeholder={dictionary.ContactForm.namePlaceholder}
						className="w-full p-2 border border-input rounded bg-background text-foreground"
					/>
					<Input
						type="email"
						placeholder={dictionary.ContactForm.emailPlaceholder}
						className="w-full p-2 border border-input rounded bg-background text-foreground"
					/>
					<Textarea
						placeholder={dictionary.ContactForm.messagePlaceholder}
						rows={4}
						className="w-full p-2 border border-input rounded bg-background text-foreground"
					/>
					<Button type="submit" className="w-full bg-primary text-primary-foreground">
						{dictionary.ContactForm.submitButton}
					</Button>
				</form>
			</div>
		</section>
	);
};

export default SimpleContactForm;