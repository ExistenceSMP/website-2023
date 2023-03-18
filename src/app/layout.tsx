import Footer from './(components)/Footer';
import Nav from './(components)/Nav';

import './globals.scss';

export const metadata = {
	title: 'Existence SMP',
	keywords: [
		'Existence',
		'SMP',
		'Community',
		'Minecraft',
		'Existence SMP Community',
		'Existence Minecraft server',
		'Existence Server',
		'mcpeachpies',
		'mcpeachpies server',
		'Minecraft SMP',
		'Minecraft Community',
	],
	authors: [
		{
			name: 'iGalaxy',
			url: 'https://igalaxy.dev',
		},
		{
			name: 'Jip',
			url: 'https://jipfr.nl',
		},
		{
			name: 'mcpeachpies',
			url: 'https://mcpeachpies.com',
		},
		{
			name: 'SugarCaney',
			url: 'https://github.com/SugarCaney',
		},
	],
	description: 'Official Website of the Existence SMP Minecraft Community',
	viewport: 'width=device-width, initial-scale=1',
	icons: {
		icon: '/favicon.png',
	},
	openGraph: {
		type: 'website',
		url: 'https://existencesmp.com',
		title: 'Existence SMP',
		siteName: 'Existence SMP',
		description: 'Official Website of the Existence SMP Minecraft Community',
		images: [
			'https://existencesmp.com/images/titles/existence-title-shadow-1920px-slim.png',
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Existence SMP Community',
		description: 'Official Website of the Existence SMP Minecraft Community',
		images: [
			'https://existencesmp.com/images/titles/existence-title-shadow-1920px-slim.png',
		],
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>
				<div
					style={{ width: '100%', height: '100%', backdropFilter: 'blur(2px)' }}
				>
					<Nav />
					{children}
					<Footer />
				</div>
			</body>
		</html>
	);
}
