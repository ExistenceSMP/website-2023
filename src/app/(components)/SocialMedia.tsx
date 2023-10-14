'use client';

import Link from 'next/link';
import { IconType } from 'react-icons';
import {
	SiYoutube,
	SiTwitter,
	SiDiscord,
	SiPatreon,
	SiMastodon,
} from 'react-icons/si';

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
					color="#6364ff"
					Icon={SiMastodon}
					path="https://farlands.cafe/@ExistenceSMP"
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
		<Link
			style={{
				backgroundColor: color,
			}}
			className={'socialLink'}
			target="_blank"
			href={path}
		>
			<Icon />
		</Link>
	);
}
