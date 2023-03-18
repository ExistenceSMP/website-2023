'use client';

import { IconType } from 'react-icons';
import { SiYoutube, SiTwitter, SiDiscord, SiPatreon } from 'react-icons/si';

export default function SocialMedia() {
	return (
		<div
			style={{
				display: 'flex',
				width: 'min(calc((var(--page-width) + 1em) * 0.75), calc(100vw - 3em))',
				margin: 'auto',
				marginTop: '1em',
				justifyContent: 'start',
				gap: '1em 1em',
				flexWrap: 'wrap',
			}}
		>
			<SocialMediaIcon
				color="#FF0000"
				Icon={SiYoutube}
				path="https://youtube.com/ExistenceSMP"
			/>
			<SocialMediaIcon
				color="#1D9BF0"
				Icon={SiTwitter}
				path="https://twitter.com/ExistenceSMP"
			/>
			<SocialMediaIcon
				color="#5865F2"
				Icon={SiDiscord}
				path="https://existencesmp.com/discord"
			/>
			<SocialMediaIcon
				color="#F1465A"
				Icon={SiPatreon}
				path="https://patreon.com/ExistenceSMP"
			/>
		</div>
	);
}

interface Props {
	color: string;
	Icon: IconType;
	path: string;
}

function SocialMediaIcon({ color, Icon, path }: Props) {
	return (
		<div
			style={{
				backgroundColor: color,
				flexGrow: 1,
				aspectRatio: '1 / 1',
				borderRadius: '1em',
				padding: '1em',
				color: 'var(--bg)',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
			className={'socialLink'}
			onClick={() =>
				setTimeout(() => {
					window.open(path);
				}, 50)
			}
		>
			<Icon style={{ width: '4em', height: '4em' }} />
		</div>
	);
}
