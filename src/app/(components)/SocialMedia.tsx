'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import {
	SimpleIcon,
	siYoutube,
	siTwitter,
	siX,
	siDiscord,
	siPatreon,
	siMastodon,
} from 'simple-icons';

export default function SocialMedia() {
	const [shiftHeld, setShiftHeld] = useState(false);

	function downHandler({ key }: { key: string }) {
		if (key === 'Shift') {
			setShiftHeld(true);
		}
	}

	function upHandler({ key }: { key: string }) {
		if (key === 'Shift') {
			setShiftHeld(false);
		}
	}

	useEffect(() => {
		window.addEventListener('keydown', downHandler);
		window.addEventListener('keyup', upHandler);
		return () => {
			window.removeEventListener('keydown', downHandler);
			window.removeEventListener('keyup', upHandler);
		};
	}, []);

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
					icon={shiftHeld ? siX : siTwitter}
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
					shiftHeld={shiftHeld}
				/>
			</div>
		</div>
	);
}

interface Props {
	icon: SimpleIcon;
	path: string;
	title: string;
	shiftHeld?: boolean;
}

function SocialMediaIcon({ icon, path, title, shiftHeld }: Props) {
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
				<path
					d={
						icon.title != 'Patreon'
							? icon.path
							: shiftHeld
							? 'M0 .48v23.04h4.22V.48zm15.385 0c-4.764 0-8.641 3.88-8.641 8.65 0 4.755 3.877 8.623 8.641 8.623 4.75 0 8.615-3.868 8.615-8.623C24 4.36 20.136.48 15.385.48z'
							: icon.path
					}
					fill="#ffffff"
				></path>
			</svg>
		</Link>
	);
}
