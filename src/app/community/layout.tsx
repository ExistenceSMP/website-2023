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
					flexGrow: 1,
				}}
			>
				<p
					style={{
						marginTop: '-0.5em',
						marginBottom: '0.25em',
						fontVariant: 'small-caps',
					}}
				>
					navigation
				</p>
				<ul style={{ listStyleType: 'none', gap: '0 1em' }}>
					<SidebarLink
						name={'Code of Conduct'}
						path={'/community/code-of-conduct'}
					/>
					<SidebarLink name={'Community'} path={'/community'} />
					<SidebarLink name={'Rules'} path={'/community/rules'} />
					<SidebarLink name={'Server'} path={'/community/server'} />
				</ul>
			</div>
			<div
				style={{
					backgroundColor: 'var(--bg)',
					borderRadius: '0.5em',
					lineHeight: '1.4em',
					padding: '2em 2em',
					width: 'calc((var(--page-width) / 8) * 5)',
				}}
				className="content"
			>
				{children}
			</div>
		</div>
	);
}
