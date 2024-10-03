
"use client"
import useTranslationStore from '@/stores/TranslationStore';
import { appConfig } from '@/app.config';
import React from 'react';

const SimpleFooter: React.FC = () => {
	const { dictionary } = useTranslationStore();
	const { companyName, menu } = appConfig;

	return (
		<footer className="bg-secondary text-secondary-foreground py-8">
			<div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
				<div className="mb-4 md:mb-0">
					<p>&copy; {new Date().getFullYear()} {companyName}. {dictionary.Footer.copyright}</p>
				</div>
				<nav>
					<ul className="flex space-x-4">
						{menu.map((link, index) => (
							<li key={index}>
								<a href={link.path} className="hover:text-primary">
									{link.key}
								</a>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</footer>
	);
};

export default SimpleFooter;