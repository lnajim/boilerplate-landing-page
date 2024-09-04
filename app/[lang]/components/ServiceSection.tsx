// components/Service.tsx
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

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
	dictionary: {
		sectionTitle: string;
		haircuts: { title: string; description: string };
		coloring: { title: string; description: string };
		styling: { title: string; description: string };
		treatments: { title: string; description: string };
	}
}

const Service: React.FC<ServiceProps> = ({ dictionary }) => {
	const services = [
		{ key: 'haircuts', ...dictionary.haircuts },
		{ key: 'coloring', ...dictionary.coloring },
		{ key: 'styling', ...dictionary.styling },
		{ key: 'treatments', ...dictionary.treatments },
	];
	return (
		<section className="py-20">
			<h2 className="text-3xl font-bold text-center mb-12">{dictionary.sectionTitle}</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
				{services.map((service) => (
					<ServiceItem key={service.key} title={service.title} description={service.description} />
				))}
			</div>
		</section>
	)
}

export default Service