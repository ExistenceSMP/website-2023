import dayjs from 'dayjs';
import Link from 'next/link';

import ThemeSwitcher from './ThemeSwitcher';

export default function Footer() {
	const year = dayjs().year();

	return (
		<div
			style={{
				maxWidth: 'var(--page-width)',
				display: 'flex',
				marginLeft: 'auto',
				marginRight: 'auto',
				marginBottom: '1.5em',
				justifyContent: 'center',
				paddingTop: '1.5em',
				position: 'relative',
			}}
		>
			<p
				style={{
					color: 'var(--fg)',
					textAlign: 'center',
					maxWidth: '600px',
				}}
			>
				Copyright © 2023{year != 2023 ? ` — ${year}` : ''}{' '}
				<strong style={{ fontWeight: 600 }}>Existence Community</strong>
				<br />
				<br />
				<span>
					"Minecraft" is a trademark of Mojang AB and any usage of the Minecraft
					brand on this site is used in accordance with Mojang Studios'{' '}
					<Link
						href="https://www.minecraft.net/en-us/usage-guidelines"
						target="_blank"
						className="footerLink legal"
					>
						Minecraft Usage Guidelines
					</Link>
					.
					<br />
					<br />
					All logos used on this site are the property of their respective
					owners.
				</span>
			</p>
		</div>
	);
}
