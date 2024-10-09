import CallToActionButton from '@/components/components-customs/CallToActionButton';
import useTranslationStore from '@/stores/TranslationStore';
import { useCallback } from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import type { Engine } from "tsparticles-engine";

interface HeroProps {
	title: string;
	description: string;
	callToActionButton: string;
}

const InteractiveParticlesHero = () => {
	const { dictionary } = useTranslationStore();

	const particlesInit = useCallback(async (engine: Engine) => {
		//@ts-ignore
		await loadFull(engine);
	}, []);

	return (
		<section className="relative h-screen flex items-center justify-center overflow-hidden bg-gray-900">
			<Particles
				id="tsparticles"
				init={particlesInit}
				options={{
					fullScreen: { enable: false },
					background: {
						color: {
							value: "transparent",
						},
					},
					fpsLimit: 120,
					interactivity: {
						events: {
							onClick: {
								enable: true,
								mode: "push",
							},
							onHover: {
								enable: true,
								mode: "repulse",
							},
							resize: true,
						},
						modes: {
							push: {
								quantity: 4,
							},
							repulse: {
								distance: 200,
								duration: 0.4,
							},
						},
					},
					particles: {
						color: {
							value: "#ffffff",
						},
						links: {
							color: "#ffffff",
							distance: 150,
							enable: true,
							opacity: 0.5,
							width: 1,
						},
						move: {
							direction: "none",
							enable: true,
							outModes: {
								default: "bounce",
							},
							random: false,
							speed: 6,
							straight: false,
						},
						number: {
							density: {
								enable: true,
								area: 800,
							},
							value: 80,
						},
						opacity: {
							value: 0.5,
						},
						shape: {
							type: "circle",
						},
						size: {
							value: { min: 1, max: 5 },
						},
					},
					detectRetina: true,
				}}
			/>
			<div className="relative z-10 text-center text-white">
				<h1 className="text-5xl font-bold mb-4">{dictionary.HeroSection.title}</h1>
				<p className="mb-8 max-w-2xl mx-auto">{dictionary.HeroSection.description}</p>
				<CallToActionButton />
			</div>
		</section>
	);
};

export default InteractiveParticlesHero;