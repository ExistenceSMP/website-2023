'use client';

import Image from 'next/image';
import Carousel from 'nuka-carousel';
import { easeExpOut } from 'd3-ease';

export default function ScreenshotCarousel() {
	return (
		<div
			style={{
				width: 'calc(var(--page-width) + 1em)',
				height: 'calc((var(--page-width) + 1em) / 16 ) * 9)',
				marginLeft: 'auto',
				marginRight: 'auto',
				marginTop: '1em',
				position: 'relative',
			}}
		>
			<Carousel
				style={{
					width: 'min(calc(var(--page-width) + 1em), 100vw)',
					height: 'calc((var(--page-width) + 1em) / 16 ) * 9)',
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
					src="https://existence-smp-discord-bot.hop.sh/latest"
					fill={true}
					alt={'Community Server 2'}
				/>
			</Carousel>
		</div>
	);
}
