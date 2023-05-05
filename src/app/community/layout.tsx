import SidebarLink from '../(components)/SidebarLink';

export default function CommunityLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div
			style={{
				display: 'flex',
				maxWidth: 'calc(var(--page-width) + 1em)',
				marginLeft: 'auto',
				marginRight: 'auto',
				marginTop: '1em',
				gap: '0 1em',
			}}
		>
			<div
				style={{
					backgroundColor: 'var(--bg)',
					borderRadius: '0.5em',
					lineHeight: '1.4em',
					padding: '2em 2em',
					alignSelf: 'start',
				}}
			>
				<p style={{ fontSize: '1rem', marginBottom: '0.25em' }}>Navigation</p>
				<ul style={{ listStyleType: 'none', gap: '0 1em' }}>
					<SidebarLink
						name={'Code of Conduct'}
						path={'/community/code-of-conduct'}
					/>
					<SidebarLink name={'Community'} path={'/community'} />
					<SidebarLink name={'Rules'} path={'/community/rules'} />
				</ul>
			</div>
			<div
				style={{
					flexGrow: 1,
					backgroundColor: 'var(--bg)',
					borderRadius: '0.5em',
					lineHeight: '1.4em',
					padding: '2em 2em',
				}}
			>
				{children}
			</div>
		</div>
	);
}
