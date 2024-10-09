import { appConfig } from '@/app.config';
import useTranslationStore from '@/stores/TranslationStore';
import { MenuItem } from '@/types/AppConfigTypes';
import React from 'react';

interface FooterProps {
	links: { category: string; items: MenuItem[] }[];
}

const MultiColumnFooter: React.FC<FooterProps> = ({ links }) => {
	const { dictionary } = useTranslationStore();
	return (
		<footer className="bg-primary text-secondary-foreground py-12">
			<div className="container mx-auto">
				<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
					{links?.map((category, index) => (
						<div key={index}>
							<h3 className="text-lg font-semibold mb-4 text-foreground">{category.category}</h3>
							<ul className="space-y-2">
								{category.items?.map((item, itemIndex) => (
									<li key={itemIndex}>
										<a href={item.path} className="hover:text-primary">
											{item.key}
										</a>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
				<div className="mt-8 pt-8 border-t border-muted text-center">
					<p>&copy; {new Date().getFullYear()} {appConfig.companyName}. {dictionary.Footer.copyright}</p>
				</div>
			</div>
		</footer>
	);
};

export default MultiColumnFooter;