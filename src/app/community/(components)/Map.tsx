export default function Map() {
	return (
		<div
			style={{
				width: 'min(calc(var(--page-width) + 1em), 100vw)',
				margin: 'auto',
				aspectRatio: '16 / 9',
				marginTop: '1em',
			}}
		>
			<iframe
				src="https://map.existencesmp.com/"
				style={{
					borderRadius: '0.5em',
					width: '100%',
					height: '100%',
					border: '0',
				}}
			/>
		</div>
	);
}
