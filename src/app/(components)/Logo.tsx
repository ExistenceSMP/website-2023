export default function Logo() {
	return (
		<div
			style={{
				display: 'flex',
				alignItems: 'center',
				flexWrap: 'nowrap',
				marginLeft: '0.5em',
			}}
		>
			<img src="logos/cs2.svg" height="64px" />
			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					padding: '0.2em 0.45em',
					paddingBottom: '0.3em',
					backgroundColor: 'var(--primary)',
					marginLeft: '1em',
					borderRadius: '0.5em',
				}}
			>
				<h1
					style={{
						whiteSpace: 'nowrap',
					}}
					className={'logo-text'}
				>
					Existence SMP
				</h1>
			</div>
		</div>
	);
}
