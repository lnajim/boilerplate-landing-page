import React from 'react';

interface FooterProps {
	companyName: string;
	links: { name: string; url: string }[];
}

const SimpleFooter: React.FC<FooterProps> = ({ companyName, links }) => {
	return (
		<footer className="bg-secondary text-secondary-foreground py-8">
			<div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
				<div className="mb-4 md:mb-0">
					<p>&copy; {new Date().getFullYear()} {companyName}. All rights reserved.</p>
				</div>
				<nav>
					<ul className="flex space-x-4">
						{links.map((link, index) => (
							<li key={index}>
								<a href={link.url} className="hover:text-primary">
									{link.name}
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