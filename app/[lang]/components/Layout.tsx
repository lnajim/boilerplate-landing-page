// app/[lang]/components/Layout.tsx
import React from 'react';
import Link from 'next/link';
import { Locale } from '../../../i18n-type';

interface LayoutProps {
	children: React.ReactNode;
	params: { lang: Locale };
	dictionary: {
		common: {
			salonName: string;
			services: string;
			team: string;
			gallery: string;
			blog: string;
			contact: string;
			book: string;
			allRightsReserved: string;
		};
	};
}

export default function Layout({ children, params: { lang }, dictionary }: LayoutProps) {
	return (
		<div className="min-h-screen flex flex-col">
			<header className="bg-slate-800 text-white">
				<nav className="container mx-auto px-4 py-6">
					<ul className="flex justify-between items-center">
						<li><Link href={`/${lang}`} className="text-2xl font-bold">{dictionary.common.salonName}</Link></li>
						<li><Link href={`/${lang}/services`}>{dictionary.common.services}</Link></li>
						<li><Link href={`/${lang}/team`}>{dictionary.common.team}</Link></li>
						<li><Link href={`/${lang}/gallery`}>{dictionary.common.gallery}</Link></li>
						<li><Link href={`/${lang}/blog`}>{dictionary.common.blog}</Link></li>
						<li><Link href={`/${lang}/contact`}>{dictionary.common.contact}</Link></li>
						<li><Link href={`/${lang}/booking`} className="bg-pink-500 hover:bg-pink-600 px-4 py-2 rounded">{dictionary.common.book}</Link></li>
					</ul>
				</nav>
			</header>

			<main className="flex-grow container mx-auto px-4 py-8">
				{children}
			</main>

			<footer className="bg-slate-800 text-white py-6">
				<div className="container mx-auto px-4 text-center">
					<p>&copy; {new Date().getFullYear()} {dictionary.common.salonName}. {dictionary.common.allRightsReserved}</p>
				</div>
			</footer>
		</div>
	);
}