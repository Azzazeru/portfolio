import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import VisitLogger from './components/VisitLogger';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	metadataBase: new URL('https://azzazeru.is-a.dev/'),
	title: 'Azzazeru - Desarrollador Fullstack',
	keywords: [
		'Desarrollador Fullstack',
		'Ingeniero de Software',
		'Arquitectura de Sistemas',
		'Desarrollo de API',
		'Computación en la Nube',
		'Microservicios',
		'DevOps',
		'Azzazeru',
		'Node.js',
		'Python',
		'Java',
		'Sistemas Distribuidos',
		'Diseño de Sistemas',
		'Azzazeru',
		'Azzazel',
		'Aaron Israel Fuentes Diocares',
		'Ingeniero de Software',
	],
	authors: [{ name: 'Azzazeru' }],
	creator: 'Azzazeru',
	openGraph: {
		title: 'Azzazeru - Portafolio',
		description: 'Desarrollador fullstack apasionado, creando arquitecturas escalables y eficientes. Explora mis proyectos y experiencia técnica.',
		url: '/',
		siteName: 'Azzazeru - Portafolio',
		images: [
			{
				url: '/logo.png',
				width: 512,
				height: 512,
				alt: 'Azzazeru - Logo',
			},
		],
		locale: 'es_ES',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Azzazeru - Desarrollador Fullstack',
		description: 'Desarrollador fullstack apasionado, creando arquitecturas escalables y eficientes. Explora mis proyectos y experiencia técnica.',
		creator: '@yourusername',
		images: ['/logo.png'],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="es">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<VisitLogger />
				{children}
			</body>
		</html>
	);
}
