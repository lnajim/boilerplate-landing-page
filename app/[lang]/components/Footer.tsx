// components/Footer.tsx

interface FooterProps {
	dictionary: {
		copyright: string;
	}
}

const Footer: React.FC<FooterProps> = ({ dictionary }) => {
	return (
		<footer className="bg-purple-600 text-white py-8">
			<div className="container mx-auto text-center">
				<p>{dictionary.copyright.replace('{year}', new Date().getFullYear().toString())}</p>
			</div>
		</footer>
	)
}

export default Footer