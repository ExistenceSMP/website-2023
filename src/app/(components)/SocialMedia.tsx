'use client';

import Link from 'next/link';
import {
	SimpleIcon,
	siYoutube,
	siTwitter,
	siDiscord,
	siPatreon,
	siMastodon,
} from 'simple-icons';

export default function SocialMedia() {
	return (
		<div>
			<h2
				style={{
					marginBottom: '1em',
					textAlign: 'center',
					width: '100%',
					display: 'inline-block',
					fontSize: '1.25rem',
				}}
			>
				Follow the Community
			</h2>
			<div
				style={{
					display: 'flex',
					justifyContent: 'start',
					gap: '1em 1em',
					flexWrap: 'wrap',
				}}
			>
				<SocialMediaIcon
					icon={siYoutube}
					path="https://youtube.com/ExistenceSMP"
					title="YouTube"
				/>
				<SocialMediaIcon
					icon={siTwitter}
					path="https://twitter.com/ExistenceSMP"
					title="Twitter"
				/>
				<SocialMediaIcon
					icon={siMastodon}
					path="https://farlands.cafe/@ExistenceSMP"
					title="Mastodon"
				/>
				<SocialMediaIcon
					icon={siDiscord}
					path="https://existencesmp.com/discord"
					title="Discord"
				/>
				<SocialMediaIcon
					icon={siPatreon}
					path="https://patreon.com/ExistenceSMP"
					title="Patreon"
				/>
			</div>
		</div>
	);
}

interface Props {
	icon: SimpleIcon;
	path: string;
	title: string;
}

function SocialMediaIcon({ icon, path, title }: Props) {
	return (
		<Link
			style={{
				backgroundColor: `#${icon.title != 'Patreon' ? icon.hex : 'F1465A'}`,
			}}
			className={'socialLink'}
			target="_blank"
			href={path}
			title={title}
		>
			<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
				<path d={icon.path} fill="#ffffff"></path>
			</svg>
		</Link>
	);
}
