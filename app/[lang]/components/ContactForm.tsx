// components/ContactForm.tsx
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Phone } from 'lucide-react'

interface ContactFormProps {
	dictionary: {
		sectionTitle: string;
		callButton: string;
		namePlaceholder: string;
		emailPlaceholder: string;
		subjectPlaceholder: string;
		messagePlaceholder: string;
		submitButton: string;
	}
}

const ContactForm: React.FC<ContactFormProps> = ({ dictionary }) => {
	return (
		<section className="py-20 bg-purple-100">
			<div className="container mx-auto">
				<h2 className="text-3xl font-bold text-center mb-12">{dictionary.sectionTitle}</h2>
				<div className="flex flex-col md:flex-row gap-8">
					<div className="flex-1 flex items-center justify-center">
						<Button variant="outline" size="lg" className="text-xl">
							<Phone className="mr-2 h-6 w-6" /> {dictionary.callButton}
						</Button>
					</div>
					<form className="flex-1 space-y-4">
						<Input placeholder={dictionary.namePlaceholder} />
						<Input type="email" placeholder={dictionary.emailPlaceholder} />
						<Input placeholder={dictionary.subjectPlaceholder} />
						<Textarea placeholder={dictionary.messagePlaceholder} />
						<Button type="submit">{dictionary.submitButton}</Button>
					</form>
				</div>
			</div>
		</section>
	)
}

export default ContactForm