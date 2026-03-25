'use client';

import { motion } from 'framer-motion';

const projects = [
	{
		title: 'SAGE',
		description: 'Sistema de Administracion y Gestion Escolar, desarrollado como proyecto final de carrera.',
		details: [
			'Desarrollo de una plataforma web para la gestión escolar utilizando NestJS y NextJS.',
			'Implementación de funcionalidades para la administración de estudiantes, profesores y cursos.',
			'Creación de un sistema de autenticación y autorización para diferentes roles de usuario.',
			'Microservicios para manejar distintas partes del sistema de forma independiente.',
			'Doble base de datos con Postgresql y MongoDB para optimizar el rendimiento y la escalabilidad.',
		],
		tech: ['NodeJS', 'NestJS', 'NextJS', 'Postgresql', 'MongoDB']
	},
	{
		title: 'Stack MERN - TODO List',
		description: 'Pequeño proyecto de un TODO list con un stack MERN, como proyecto personal para aprender y practicar.',
		details: [
			'Desarrollo de un sistema de gestión de tareas utilizando el stack MERN.',
			'Implementación de una API RESTful con Node.js y Express para gestionar las tareas.',
			'Integración de MongoDB para el almacenamiento de datos y uso de Mongoose para la manipulación de datos.',
			'Implementación de autenticación y autorización de usuarios utilizando JWT.',
		],
		tech: ['NodeJS', 'Express', 'MongoDB', 'React'],
		repo: 'https://github.com/Azzazeru/Stack-MERN-Project',
	},
];

export default function Projects() {
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
				delayChildren: 0.1,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 30 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.6, ease: 'easeOut' as const },
		},
	};

	return (
		<section className="py-20 px-4 relative overflow-hidden">
			{/* Background decorations */}
			<motion.div
				className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
				animate={{
					opacity: [0.3, 0.6, 0.3],
				}}
				transition={{
					duration: 6,
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
					className="mb-12"
				>
					<motion.p className="text-green-500 mb-2 font-mono text-sm text-center">
						$ cd projects
					</motion.p>
					<motion.p className="text-gray-400 mb-3 font-mono text-xs text-center">
						$ ls -la
					</motion.p>
					<h2 className="text-3xl font-bold text-center bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
						Proyectos
					</h2>
				</motion.div>

				<motion.div
					className={`grid gap-8 ${projects.length > 1 ? 'md:grid-cols-2' : 'grid-cols-1'}`}
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
				>
					{projects.map((project, index) => (
						<motion.div
							key={index}
							variants={itemVariants}
							whileHover={{ y: -8, transition: { duration: 0.2 } }}
							className="group bg-gradient-to-br from-gray-900/60 to-gray-800/60 rounded-2xl p-6 border border-gray-800 shadow-md hover:shadow-lg hover:shadow-green-500/20 hover:border-green-500/50 transition-all duration-300 cursor-pointer"
						>
							<p className="text-green-500/90 font-mono text-xs mb-3">$ cat ./projects/{project.title}.md</p>
							<h3 className="text-2xl font-bold mb-4 text-gray-100 group-hover:text-green-400 transition-colors">
								{project.title}
							</h3>
							<p className="text-gray-400 mb-6 group-hover:text-gray-300 transition-colors">{project.description}</p>

							<div className="mb-6">
								<h4 className="text-lg font-semibold mb-2 text-green-400">Puntos Clave:</h4>
								<motion.ul 
									className="list-disc list-inside space-y-2 text-gray-300 text-sm"
									initial="hidden"
									whileInView="visible"
									viewport={{ once: true }}
									variants={{
										visible: {
											transition: {
												staggerChildren: 0.1,
											},
										},
									}}
								>
									{project.details.map((detail, i) => (
										<motion.li 
											key={i}
											variants={{
												hidden: { opacity: 0, x: -10 },
												visible: { opacity: 1, x: 0 },
											}}
										>
											{detail}
										</motion.li>
									))}
								</motion.ul>
							</div>

							<div className="flex flex-wrap gap-2 mb-4">
								{project.tech.map((tech, i) => (
									<motion.span
										key={i}
										whileHover={{ scale: 1.05 }}
										className="text-xs px-2 py-1 bg-gray-700/40 text-gray-200 rounded-md border border-gray-600 hover:bg-green-500/20 hover:border-green-500/50 transition-all"
									>
										{tech}
									</motion.span>
								))}
							</div>

							{project.repo && (
								<motion.a
									href={project.repo}
									target="_blank"
									rel="noopener noreferrer"
									whileHover={{ x: 5 }}
									className="inline-block mt-2 text-sm text-blue-400 hover:text-blue-300 transition-colors group-hover:underline"
								>
									Ver repositorio →
								</motion.a>
							)}
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
}
