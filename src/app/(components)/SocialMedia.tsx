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
					shiftHeld={shiftHeld}
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
	const COLOR_OVERRIDES: {
		[keyof: string]: string;
	} = {
		Patreon: 'F1465A',
	};

	const SHIFT_PATH_OVERRIDES: {
		[keyof: string]: string;
	} = {
		Patreon:
			'M0 .48v23.04h4.22V.48zm15.385 0c-4.764 0-8.641 3.88-8.641 8.65 0 4.755 3.877 8.623 8.641 8.623 4.75 0 8.615-3.868 8.615-8.623C24 4.36 20.136.48 15.385.48z',
		Discord:
			'M20.222 0c1.406 0 2.54 1.137 2.607 2.475V24l-2.677-2.273-1.47-1.338-1.604-1.398.67 2.205H3.71c-1.402 0-2.54-1.065-2.54-2.476V2.48C1.17 1.142 2.31.003 3.715.003h16.5L20.222 0zm-6.118 5.683h-.03l-.202.2c2.073.6 3.076 1.537 3.076 1.537-1.336-.668-2.54-1.002-3.744-1.137-.87-.135-1.74-.064-2.475 0h-.2c-.47 0-1.47.2-2.81.735-.467.203-.735.336-.735.336s1.002-1.002 3.21-1.537l-.135-.135s-1.672-.064-3.477 1.27c0 0-1.805 3.144-1.805 7.02 0 0 1 1.74 3.743 1.806 0 0 .4-.533.805-1.002-1.54-.468-2.14-1.404-2.14-1.404s.134.066.335.2h.06c.03 0 .044.015.06.03v.006c.016.016.03.03.06.03.33.136.66.27.93.4.466.202 1.065.403 1.8.536.93.135 1.996.2 3.21 0 .6-.135 1.2-.267 1.8-.535.39-.2.87-.4 1.397-.737 0 0-.6.936-2.205 1.404.33.466.795 1 .795 1 2.744-.06 3.81-1.8 3.87-1.726 0-3.87-1.815-7.02-1.815-7.02-1.635-1.214-3.165-1.26-3.435-1.26l.056-.02zm.168 4.413c.703 0 1.27.6 1.27 1.335 0 .74-.57 1.34-1.27 1.34-.7 0-1.27-.6-1.27-1.334.002-.74.573-1.338 1.27-1.338zm-4.543 0c.7 0 1.266.6 1.266 1.335 0 .74-.57 1.34-1.27 1.34-.7 0-1.27-.6-1.27-1.334 0-.74.57-1.338 1.27-1.338z',
	};

	const SHIFT_COLOR_OVERRIDES: {
		[keyof: string]: string;
	} = {
		Discord: '7388D9',
	};

	return (
		<Link
			style={{
				backgroundColor: `#${
					shiftHeld && Object.keys(SHIFT_COLOR_OVERRIDES).includes(icon.title)
						? SHIFT_COLOR_OVERRIDES[icon.title]
						: Object.keys(COLOR_OVERRIDES).includes(icon.title)
						? COLOR_OVERRIDES[icon.title]
						: icon.hex
				}`,
			}}
			className={'socialLink'}
			target="_blank"
			href={path}
			title={title}
		>
			<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
				<path
					d={
						shiftHeld && Object.keys(SHIFT_PATH_OVERRIDES).includes(icon.title)
							? SHIFT_PATH_OVERRIDES[icon.title]
							: icon.path
					}
					fill="#ffffff"
				></path>
			</svg>
		</Link>
	);
}
