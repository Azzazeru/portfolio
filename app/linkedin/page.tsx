'use client';

import { useEffect } from 'react';

const LINKEDIN_URL = 'https://www.linkedin.com/in/aaron-fuentes-diocares';

export default function LinkedinRedirectPage() {
	useEffect(() => {
		window.location.replace(LINKEDIN_URL);
	}, []);

	return (
		<main className="min-h-screen flex items-center justify-center px-4 text-center">
			<div>
				<p className="text-gray-300 mb-3">Redirigiendo a LinkedIn...</p>
				<a href={LINKEDIN_URL} className="text-green-400 underline">
					Haz clic aqui si no redirige automaticamente
				</a>
			</div>
		</main>
	);
}
