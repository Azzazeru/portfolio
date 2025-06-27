'use client';

import { motion } from 'framer-motion';

const duocCerts = [
	{
		title: 'Programación de Software',
		items: [
			'Programación de algoritmos en Python',
			'Backend con Django',
			'Mobile con Ionic/Angular y JSON-Server',
		],
		url: '#'
	},
	{
		title: 'Arquitectura de Software',
		items: [
			'Desarrollo de microservicios',
			'Integración y creación de APIs Rest',
			'Seguridad en aplicaciones',
		],
		url: '#'

	},
];

//? Sacar imagenes de aca futuro Azza: https://www.svgrepo.com/vectors/
const otherCerts = [
	{
		title: 'Backend y APIs',
		url: 'https://www.freecodecamp.org/certification/dev-azzazel/back-end-development-and-apis',
		image: 'https://www.svgrepo.com/show/349367/freecodecamp.svg'
	},
	{
		title: 'JavaScript',
		url: 'https://www.credly.com/badges/bca63042-7971-4563-8ebf-66f80ed6c5b2',
		image: 'https://www.svgrepo.com/show/353925/javascript.svg',
	},
	{
		title: 'Python',
		url: 'https://www.credly.com/badges/1eb0c45e-9008-45e3-b05b-6accce613cbc',
		image: 'https://www.svgrepo.com/show/376344/python.svg',
	},
	{
		title: 'Linux',
		url: 'https://www.credly.com/badges/7434a13b-110f-4b28-8d94-0468bf2589ab',
		image: 'https://www.svgrepo.com/show/448236/linux.svg'
	},
];

export default function Certifications() {
	return (
		<section className="py-20 px-4 bg-gray-900/50">
			<div className="max-w-6xl mx-auto">
				<motion.h2
					initial={{ opacity: 0, y: -10 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="text-3xl font-bold mb-16 text-center text-green-400"
				>
					Cursos y Certificaciones
				</motion.h2>

				{/* Duoc UC - Tarjetas grandes */}
				<div className="mb-20">
					<h3 className="text-2xl font-semibold mb-8 text-green-300 border-l-4 border-green-500 pl-4">
						Duoc UC
					</h3>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						{duocCerts.map(({ title, url, items }) => (
							<motion.a
								key={title}
								href={url}
								target="_blank"
								rel="noopener noreferrer"
								initial={{ opacity: 0, scale: 0.95 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								whileHover={{ scale: 1.05, backgroundColor: 'rgba(16,185,129,0.2)' }}
								className="block bg-gray-800/60 rounded-lg p-4 border border-gray-700 shadow-md transition-transform no-underline"
							>
								<h4 className="text-lg font-semibold text-gray-300 mb-2 flex items-center gap-2">
									{title}
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth={2}
										stroke="currentColor"
										className="w-4 h-4 text-green-400"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M13.828 10.172a4 4 0 015.656 5.656l-4.828 4.828a4 4 0 01-5.656-5.656M9 15L4 20"
										/>
									</svg>
								</h4>
								<ul className="text-gray-400 text-sm list-disc list-inside space-y-1">
									{items.map((item, i) => (
										<li key={i}>{item}</li>
									))}
								</ul>
							</motion.a>
						))}
					</div>
				</div>

				{/* Otras Certificaciones - Cuadradas / Por ahora certificaciones e insignias, mas adelante seccion para cada una */}
				<div>
					<h3 className="text-2xl font-semibold mb-8 text-green-300 border-l-4 border-green-500 pl-4">
						Certificaciones e Insignias
					</h3>
					<div className="grid grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-x-2 gap-y-2 justify-items-center mx-auto max-w-5xl">
						{otherCerts.map(({ title, url, image }) => (
							<motion.a
								key={title}
								href={url}
								target="_blank"
								rel="noopener noreferrer"
								initial={{ opacity: 0, scale: 0.95 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								whileHover={{
									scale: 1.1,
									backgroundColor: 'rgba(16,185,129,0.2)',
								}}
								className="aspect-square w-[100px] h-[100px] flex flex-col items-center justify-center bg-gray-800/60 rounded-lg border border-gray-700 shadow-md text-green-400 font-medium text-center p-2 text-xs transition-transform no-underline overflow-hidden"
							>
								{image && (
									<img
										src={image}
										alt={`${title} logo`}
										className="w-6 h-6 mb-1 object-contain"
										loading="lazy"
									/>
								)}
								<span className="leading-tight">{title}</span>
							</motion.a>

						))}
					</div>
				</div>
			</div>
		</section>
	);
}
