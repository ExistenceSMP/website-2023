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
			<h1
				style={{
					marginLeft: '0.5em',
					whiteSpace: 'nowrap',
				}}
			>
				Existence SMP
			</h1>
		</div>
	);
}
