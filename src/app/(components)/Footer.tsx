import dayjs from 'dayjs';
import Link from 'next/link';

import ThemeSwitcher from './ThemeSwitcher';

export default function Footer() {
	return (
		<div
			style={{
				maxWidth: 'var(--page-width)',
				display: 'flex',
				marginLeft: 'auto',
				marginRight: 'auto',
				marginBottom: '1.75em',
				justifyContent: 'center',
				paddingTop: '1.5em',
				position: 'relative',
			}}
		>
			<p
				style={{
					fontSize: '1.125rem',
					color: 'var(--fg)',
					textAlign: 'center',
					maxWidth: '600px',
				}}
			>
				<strong style={{ fontWeight: 600 }}>
					© {dayjs().year()} Existence SMP <ThemeSwitcher />
				</strong>
				<br />
				<br />
				<span
					style={{
						fontSize: '14px',
					}}
				>
					"Minecraft" is a trademark of Mojang AB and any usage of the Minecraft
					brand on this site is used in accordance with Mojang Studios'{' '}
					<Link
						href="https://www.minecraft.net/en-us/terms#terms-brand_guidelines"
						target="_blank"
						className="footerLink legal"
					>
						Brand and Asset Guidelines
					</Link>
					.
					<br />
					<br />
					All logos used on this site are the property of their respective
					owners.
					<br />
					<br />
					<strong>
						Website by{' '}
						<Link
							href="https://igalaxy.dev"
							target="_blank"
							className="footerLink igalaxy"
						>
							iGalaxy
						</Link>{' '}
						and{' '}
						<Link
							href="https://jipfr.nl"
							target="_blank"
							className="footerLink jip"
						>
							Jip Fr
						</Link>
					</strong>
				</span>
			</p>
		</div>
	);
}
