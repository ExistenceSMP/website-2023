'use client';

import Image from 'next/image';
import Carousel from 'nuka-carousel';
import { easeExpOut } from 'd3-ease';
import dayjs from 'dayjs';

export default function ScreenshotCarousel() {
	return (
		<div
			style={{
				position: 'relative',
				marginTop: '1em',
			}}
		>
			<Carousel
				style={{
					width: 'calc((var(--page-width) / 5) * 3)',
					aspectRatio: '16 / 9',
				}}
				autoplay
				autoplayInterval={7500}
				autoplayReverse
				wrapAround
				withoutControls
				easing={easeExpOut}
			>
				<Image src="/carousel/s1.png" fill={true} alt={'Legacy Season 1'} />
				<Image src="/carousel/s2.png" fill={true} alt={'Legacy Season 2'} />
				<Image
					src="/carousel/hardcore.png"
					fill={true}
					alt={'Project Hardcore'}
				/>
				<Image src="/carousel/s3.png" fill={true} alt={'Legacy Season 3'} />
				<Image
					src="/carousel/keystone.png"
					fill={true}
					alt={'Project Keystone'}
				/>
				<Image src="/carousel/cs1.png" fill={true} alt={'Community Server 1'} />
				<Image
					src="/carousel/amplified.png"
					fill={true}
					alt={'Project Amplified'}
				/>
				<Image
					src={`https://existence-smp-discord-bot.hop.sh/latest?${dayjs().format(
						'DD-MM-YYYY'
					)}`} // force cache refresh
					fill={true}
					alt={'Community Server 2'}
					style={{ transform: 'scale(2)', overflow: 'hidden' }}
				/>
			</Carousel>
		</div>
	);
}
