// components/Service.tsx
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import useTranslationStore from '@/stores/TranslationStore';

interface ServiceItemProps {
	title: string;
	description: string;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ title, description }) => (
	<Card>
		<CardHeader>
			<CardTitle>{title}</CardTitle>
		</CardHeader>
		<CardContent>
			<CardDescription>{description}</CardDescription>
		</CardContent>
	</Card>
)

interface ServiceProps {

}

const Service: React.FC<ServiceProps> = () => {
	const { dictionary } = useTranslationStore()

	const services = [
		{ key: 'haircuts', ...dictionary.ServicesSection.haircuts },
		{ key: 'coloring', ...dictionary.ServicesSection.coloring },
		{ key: 'styling', ...dictionary.ServicesSection.styling },
		{ key: 'treatments', ...dictionary.ServicesSection.treatments },
	];
	return (
		<section className="py-20">
			<h2 className="text-3xl font-bold text-center mb-12">{dictionary.ServicesSection.sectionTitle}</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
				{services.map((service) => (
					<ServiceItem key={service.key} title={service.title} description={service.description} />
				))}
			</div>
		</section>
	)
}

export default Service