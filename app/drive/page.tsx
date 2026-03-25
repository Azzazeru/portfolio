'use client';

import { useEffect } from 'react';

const DRIVE_URL = 'https://drive.google.com/drive/folders/1q4fPFrRL2q1wM3d7XHRFbOIC6UX6yMAO?usp=drive_link';

export default function DriveRedirectPage() {
	useEffect(() => {
		window.location.replace(DRIVE_URL);
	}, []);

	return (
		<main className="min-h-screen flex items-center justify-center px-4 text-center">
			<div>
				<p className="text-gray-300 mb-3">Redirigiendo a Google Drive...</p>
				<a href={DRIVE_URL} className="text-green-400 underline">
					Haz clic aqui si no redirige automaticamente
				</a>
			</div>
		</main>
	);
}
