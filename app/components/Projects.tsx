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
	return (
		<section className="py-20 px-4">
			<div className="max-w-6xl mx-auto">
				<motion.h2
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					className="text-3xl font-bold mb-12 text-center"
				>
					Proyectos
				</motion.h2>

				<div className={`grid gap-8 ${projects.length > 1 ? 'md:grid-cols-2' : 'grid-cols-1'}`}>
					{projects.map((project, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.2 }}
							className="bg-gray-900/60 rounded-2xl p-6 border border-gray-800 shadow-md hover:shadow-lg transition-shadow duration-300"
						>
							<h3 className="text-2xl font-bold mb-4 text-gray-100">{project.title}</h3>
							<p className="text-gray-400 mb-6">{project.description}</p>

							<div className="mb-6">
								<h4 className="text-lg font-semibold mb-2 text-green-400">Puntos Clave:</h4>
								<ul className="list-disc list-inside space-y-2 text-gray-300 text-sm">
									{project.details.map((detail, i) => (
										<li key={i}>{detail}</li>
									))}
								</ul>
							</div>

							<div className="flex flex-wrap gap-2">
								{project.tech.map((tech, i) => (
									<span
										key={i}
										className="text-xs px-2 py-1 bg-gray-700/40 text-gray-200 rounded-md border border-gray-600"
									>
										{tech}
									</span>
								))}
							</div>

							{project.repo && (
								<a
									href={project.repo}
									target="_blank"
									rel="noopener noreferrer"
									className="inline-block mt-4 text-sm text-blue-400 hover:underline"
								>
									Ver repositorio →
								</a>
							)}
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
