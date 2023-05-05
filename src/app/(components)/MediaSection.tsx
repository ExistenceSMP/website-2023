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
				width: 'min(calc(var(--page-width) + 1em), 100vw)',
				gap: '0 1em',
				marginLeft: 'auto',
				marginRight: 'auto',
				marginTop: '1em',
				flexDirection: reverse ? 'row-reverse' : 'row',
				...style,
			}}
			className={'media-section'}
		>
			<div
				style={{
					width: 'calc((var(--page-width) / 5) * 3)',
					height: 'calc((((var(--page-width) / 5) * 3)*(9/16)))',
				}}
			>
				{media}
			</div>
			<div
				style={{
					height: 'calc((((var(--page-width) / 5) * 3)*(9/16)))',
				}}
			>
				{children}
			</div>
		</div>
	);
}
