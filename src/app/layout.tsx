import Footer from './(components)/Footer';
import Nav from './(components)/Nav';

import './globals.scss';
import { Providers } from './providers';

export const metadata = {
	title: 'Existence Community',
	keywords: [
		'Existence',
		'SMP',
		'Community',
		'Minecraft',
		'Existence SMP Community',
		'Existence Community',
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
	description: 'Official Website of the Existence Community',
	viewport: 'width=device-width, initial-scale=1',
	icons: {
		icon: '/favicon.png',
	},
	openGraph: {
		type: 'website',
		url: 'https://existencesmp.com',
		title: 'Existence Community',
		siteName: 'Existence Community',
		description: 'Official Website of the Existence Community',
		images: [
			'https://existencesmp.com/images/titles/existence-title-shadow-1920px-slim.png',
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Existence Community',
		description: 'Official Website of the Existence Community',
		images: [
			'https://existencesmp.com/images/titles/existence-title-shadow-1920px-slim.png',
		],
	},
	themeColor: '#22640E',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>
				<Providers>
					<div
						style={{
							width: '100%',
							height: '100%',
						}}
					>
						<Nav />
						{children}
						<Footer />
					</div>
				</Providers>
			</body>
		</html>
	);
}
