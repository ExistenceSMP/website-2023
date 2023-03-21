import { CSSProperties, PropsWithChildren, ReactNode } from 'react';

interface Props {
	media: ReactNode;
	reverse?: boolean;
	style?: CSSProperties;
}

export default function MediaSection({
	media,
	reverse,
	style,
	children,
}: PropsWithChildren<Props>) {
	return (
		<div
			style={{
				display: 'flex',
				maxWidth: 'min(calc(var(--page-width) + 1em), 100vw)',
				gap: '0 1em',
				marginLeft: 'auto',
				marginRight: 'auto',
				...style,
			}}
		>
			{reverse ? (
				<>
					<div
						style={{
							flexGrow: 2,
						}}
					>
						{children}
					</div>
					{media}
				</>
			) : (
				<>
					{media}
					<div
						style={{
							flexGrow: 2,
						}}
					>
						{children}
					</div>
				</>
			)}
		</div>
	);
}
