'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const duocCerts = [
	{
		title: 'Programación de Software',
		items: [
			'Programación de algoritmos en Python',
			'Backend con Django',
			'Programacion Orientada a Objetos Java',
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

const otherCerts = [
	{
		title: 'AZ-900',
		url: 'https://www.credly.com/badges/4a5349f4-99c8-487d-8595-e0c72ef8e3c9',
		image: 'https://images.credly.com/size/680x680/images/be8fcaeb-c769-4858-b567-ffaaa73ce8cf/image.png'
	},
	{
		title: 'DevOps Essentials',
		url: 'https://www.credly.com/badges/1205bba8-f1e5-4176-81d4-d2be07cc248b',
		image: 'https://images.credly.com/size/680x680/images/c3f12faf-d477-49f0-8032-32121303dc55/blob'
	},
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
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
				delayChildren: 0.2,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, scale: 0.8 },
		visible: {
			opacity: 1,
			scale: 1,
			transition: { duration: 0.5, ease: 'easeOut' as const },
		},
	};

	const duocItemVariants = {
		hidden: { opacity: 0, x: -20 },
		visible: {
			opacity: 1,
			x: 0,
			transition: { duration: 0.6, ease: 'easeOut' as const },
		},
	};

	return (
		<section className="py-20 px-4 relative overflow-hidden">
			{/* Background glow effects */}
			<motion.div
				className="absolute top-20 right-10 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"
				animate={{
					scale: [1, 1.2, 1],
					opacity: [0.1, 0.3, 0.1],
				}}
				transition={{
					duration: 10,
					repeat: Infinity,
					ease: 'easeInOut',
				}}
			/>
			<motion.div
				className="absolute bottom-20 left-10 w-80 h-80 bg-green-500/5 rounded-full blur-3xl"
				animate={{
					scale: [1.2, 1, 1.2],
					opacity: [0.2, 0.1, 0.2],
				}}
				transition={{
					duration: 12,
					repeat: Infinity,
					ease: 'easeInOut',
				}}
			/>

			<div className="max-w-6xl mx-auto relative z-10">
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
				>
					<motion.p className="text-gray-400 mb-3 font-mono text-xs">$ cd ./certifications</motion.p>
					<motion.p className="text-green-500 mb-2 font-mono text-sm">$ cat certificates.log</motion.p>
					<h2 className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-green-400 via-blue-400 to-green-400 bg-clip-text text-transparent">
						Cursos y Certificaciones
					</h2>
				</motion.div>

				{/* Duoc UC - Tarjetas grandes */}
				<motion.div 
					className="mb-20"
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
				>
					<motion.div 
						variants={duocItemVariants}
						className="mb-8"
					>
						<motion.p className="text-green-500 mb-2 font-mono text-sm">$ ls ./duoc-uc</motion.p>
						<motion.h3 
							className="text-2xl font-semibold text-green-300 border-l-4 border-green-500 pl-4"
							initial={{ opacity: 0, x: -10 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ delay: 0.1 }}
						>
							Duoc UC
						</motion.h3>
					</motion.div>

					<motion.div 
						className="grid grid-cols-1 md:grid-cols-2 gap-6"
						variants={containerVariants}
					>
						{duocCerts.map(({ title, url, items }, certIndex) => (
							<motion.a
								key={title}
								href={url}
								target="_blank"
								rel="noopener noreferrer"
								variants={itemVariants}
								whileHover={{ 
									y: -5, 
									boxShadow: '0 20px 40px rgba(34, 197, 94, 0.15)',
									borderColor: 'rgba(34, 197, 94, 0.5)'
								}}
								className="block bg-gradient-to-br from-gray-800/80 to-gray-800/40 rounded-lg p-6 border border-gray-700/50 shadow-lg transition-all duration-300 group"
							>
								{/* Background blur effect */}
								<motion.div
									className="absolute inset-0 bg-gradient-to-r from-green-500/0 to-blue-500/0 group-hover:from-green-500/5 group-hover:to-blue-500/5 rounded-lg transition-all"
									animate={{ opacity: [0.5, 0.8, 0.5] }}
									transition={{ duration: 4, repeat: Infinity }}
								/>
								<div className="relative z-10">
									<p className="text-green-500/90 font-mono text-xs mb-3">$ open duoc-cert-{certIndex + 1}</p>
									<motion.h4 
										className="text-lg font-semibold text-green-300 mb-4 flex items-center gap-2 group-hover:text-green-200 transition-colors"
										whileHover={{ x: 5 }}
									>
										{title}
										<motion.svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											strokeWidth={2}
											stroke="currentColor"
											className="w-4 h-4 text-green-400"
											animate={{ rotate: [0, 15, 0] }}
											whileHover={{ rotate: 20 }}
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M13.828 10.172a4 4 0 015.656 5.656l-4.828 4.828a4 4 0 01-5.656-5.656M9 15L4 20"
											/>
										</motion.svg>
									</motion.h4>
									<motion.ul 
										className="text-gray-300 text-sm space-y-2"
										variants={containerVariants}
									>
										{items.map((item, i) => (
											<motion.li 
												key={i}
												variants={itemVariants}
												className="flex gap-2 items-start"
											>
												<motion.span 
													className="text-green-400 font-bold mt-1 flex-shrink-0"
													animate={{ scale: [1, 1.2, 1] }}
													transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
												>
													•
												</motion.span>
												<span className="group-hover:text-gray-100 transition-colors">{item}</span>
											</motion.li>
										))}
									</motion.ul>
								</div>
							</motion.a>
						))}
					</motion.div>
				</motion.div>

				{/* Otras Certificaciones - Cuadradas */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ delay: 0.3 }}
				>
					<motion.p className="text-green-500 mb-2 font-mono text-sm">$ ls ./badges --all</motion.p>
					<motion.h3 
						className="text-2xl font-semibold text-green-300 border-l-4 border-green-500 pl-4 mb-8"
						initial={{ opacity: 0, x: -10 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.2 }}
					>
						Certificaciones e Insignias
					</motion.h3>
					<motion.div 
						className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-3 justify-items-center mx-auto max-w-5xl"
						variants={containerVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
					>
						{otherCerts.map(({ title, url, image }, badgeIndex) => (
							<motion.a
								key={title}
								href={url}
								target="_blank"
								rel="noopener noreferrer"
								variants={itemVariants}
								whileHover={{
									scale: 1.15,
									boxShadow: '0 15px 40px rgba(34, 197, 94, 0.25)',
									borderColor: 'rgba(34, 197, 94, 0.8)',
									backgroundColor: 'rgba(34, 197, 94, 0.1)',
								}}
								className="aspect-square w-[100px] h-[100px] flex flex-col items-center justify-center bg-gray-800/60 rounded-lg border border-gray-700/50 shadow-md text-green-400 font-medium text-center p-2 text-xs transition-all duration-300 group"
							>
								{image ? (
									<motion.div 
										className="mb-1 flex items-center justify-center w-full h-12 rounded-lg p-1"
										animate={{ y: [0, -2, 0] }}
										transition={{ duration: 3, repeat: Infinity, delay: badgeIndex * 0.12 }}
									>
										<Image
											src={image}
											alt={`${title} logo`}
											width={32}
											height={32}
											className="w-full h-full object-contain"
											loading="lazy"
											onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
										/>
									</motion.div>
								) : null}
								<motion.span 
									className="leading-tight text-xs group-hover:text-green-300 transition-colors"
									whileHover={{ scale: 1.05 }}
								>
									{title}
								</motion.span>
							</motion.a>

						))}
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
}
