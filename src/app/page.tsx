import ScreenshotCarousel from './(components)/ScreenshotCarousel';
import SocialMedia from './(components)/SocialMedia';
import YouTubePlaylist from './(components)/YouTubePlaylist';
import YouTubeVideo from './(components)/YouTubeVideo';

import AboutUs from './aboutus.mdx';
import CommunityServer from './communityserver.mdx';
import LegacySeasons from './legacyseasons.mdx';
import Podcast from './podcast.mdx';

export default function Home() {
	return (
		<>
			<ScreenshotCarousel />
			<main>
				<AboutUs />
			</main>
			<SocialMedia />
			<main>
				<CommunityServer />
			</main>
			<div className={'mainEmbed'}>
				<YouTubeVideo id="nuOSlzNgzx4" />
			</div>
			<main>
				<LegacySeasons />
			</main>
			<div className={'mainEmbed'}>
				<YouTubePlaylist id="PLSFAhfRdE2oMIky9dSgsGmQmtFoyTkEmp" />
			</div>
			<main>
				<Podcast />
			</main>
			<div className={'mainEmbed'}>
				<YouTubePlaylist id="PLSFAhfRdE2oPj8DbOOJNOCHMx9JF6M9l3" />
			</div>
		</>
	);
}
