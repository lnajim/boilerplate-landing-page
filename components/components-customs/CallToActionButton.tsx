import React from 'react';
import { Button } from '@/components/ui/button';
import useTranslationStore from "@/stores/TranslationStore";

const CallToActionButton: React.FC = () => {
	const { dictionary } = useTranslationStore();

	return (
		<Button variant="default" size="lg" className="bg-white text-purple-600 hover:bg-purple-100">
			{dictionary.HeroSection.buttonText}
		</Button>
	);
};

export default CallToActionButton;