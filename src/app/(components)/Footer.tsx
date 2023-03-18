import dayjs from 'dayjs';
import Link from 'next/link';

export default function Footer() {
	return (
		<div
			style={{
				maxWidth: 'var(--page-width)',
				display: 'flex',
				margin: 'auto',
				justifyContent: 'center',
				paddingTop: '1.5em',
				paddingBottom: '2em',
			}}
		>
			<p
				style={{
					fontSize: '1.125rem',
					color: 'var(--fg)',
					textAlign: 'center',
				}}
			>
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
				<br />
				<strong style={{ fontWeight: 600 }}>
					© {dayjs().year()} Existence SMP
				</strong>
			</p>
		</div>
	);
}
