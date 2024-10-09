// components/ContactForm.tsx
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import useTranslationStore from '@/stores/TranslationStore'
import { Phone } from 'lucide-react'

interface ContactFormProps {

}

const ContactForm: React.FC<ContactFormProps> = () => {
	const { dictionary } = useTranslationStore()

	return (
		<section className="py-20 bg-purple-100">
			<div className="container mx-auto">
				<h2 className="text-3xl font-bold text-center mb-12">{dictionary.ContactForm.title}</h2>
				<div className="flex flex-col md:flex-row gap-8">
					<div className="flex-1 flex items-center justify-center">
						<Button variant="outline" size="lg" className="text-xl">
							<Phone className="mr-2 h-6 w-6" /> {dictionary.ContactForm.callButton}
						</Button>
					</div>
					<form className="flex-1 space-y-4">
						<Input placeholder={dictionary.ContactForm.namePlaceholder} />
						<Input type="email" placeholder={dictionary.ContactForm.emailPlaceholder} />
						<Input placeholder={dictionary.ContactForm.subjectPlaceholder} />
						<Textarea placeholder={dictionary.ContactForm.messagePlaceholder} />
						<Button type="submit">{dictionary.ContactForm.submitButton}</Button>
					</form>
				</div>
			</div>
		</section>
	)
}

export default ContactForm