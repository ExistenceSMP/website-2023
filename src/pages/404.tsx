import Nav from '~/app/(components)/Nav';
import YouTubeVideo from '~/app/(components)/YouTubeVideo';
import '~/app/globals.scss';

import { ThemeProvider } from 'next-themes';

import { useRouter } from 'next/router';
import Footer from '~/app/(components)/Footer';

export default function NotFound() {
	const router = useRouter();

	return (
		<ThemeProvider disableTransitionOnChange>
			<Nav />
			<main>
				<img
					src="/how_did_we_get_here.png"
					height="64px"
					style={{ marginBottom: '1em' }}
					onClick={router.back}
					title="Go Back"
					id="howDidWeGetHere"
				/>
				<YouTubeVideo id="p3G5IXn0K7A" />
			</main>
			<Footer />
		</ThemeProvider>
	);
}
