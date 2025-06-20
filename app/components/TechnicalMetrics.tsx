'use client';

import { motion } from 'framer-motion';

export default function TechnicalMetrics() {
	return (
		<section className="py-20 px-4 bg-gray-900/50">
			<div className="max-w-6xl mx-auto">
				<motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl font-bold mb-12 text-center">
					Cursos y Certificaciones
				</motion.h2>

				<div className="grid grid-cols-1 gap-12">
					{/* System Performance */}
					<div>
						<h3 className="text-xl font-semibold mb-6 text-green-400">Duoc UC</h3>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<motion.div
								initial={{ opacity: 0, scale: 0.95 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
							>
								<h4 className="text-lg font-semibold text-gray-300">Programacion de Software</h4>
								<ul className="mt-2 space-y-2 text-gray-400">
									<li>• Programacion de algoritmos en Python</li>
									<li>• Backend con Django</li>
									<li>• Mobile con Ionic/Angular y JSON-Server</li>
								</ul>
							</motion.div>
							<motion.div
								initial={{ opacity: 0, scale: 0.95 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
							>
								<h4 className="text-lg font-semibold text-gray-300">Arquitectura de Software</h4>
								<ul className="mt-2 space-y-2 text-gray-400">
									<li>• Desarrollo de microservicios</li>
									<li>• Integracion y creacion de APIs Rest</li>
									<li>• Seguridad en aplicaciones</li>
								</ul>
							</motion.div>
						</div>
					</div>

					<div>
						<h3 className="text-xl font-semibold mb-6 text-green-400">Desarrollo</h3>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<motion.div
								initial={{ opacity: 0, scale: 0.95 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
							>
								<h4 className="text-lg font-semibold text-gray-300">Desarrollo Back End y APIs Free Code Camp</h4>
								<ul className="mt-2 space-y-2 text-gray-400">
									<li>• Desarrollo de diferentes APIs</li>
									<li>• API de extraccion de propiedades tecnicas y metadatos de archivos</li>
									<li>• Herramienta para debugging y/o personalizacion de contenido</li>
								</ul>
							</motion.div>
							<motion.div
								initial={{ opacity: 0, scale: 0.95 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
							>
								<h4 className="text-lg font-semibold text-gray-300">Cisco</h4>
								<ul className="mt-2 space-y-2 text-gray-400">
									<li>• Esenciales de JavaScript</li>
									<li>• Esenciales de Python</li>
									<li>• Linux</li>
								</ul>
							</motion.div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
