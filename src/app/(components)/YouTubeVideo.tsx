import { CSSProperties } from 'react';

interface Props {
	id: string;
	style?: CSSProperties;
}

export default function YouTubeVideo({ id, style }: Props) {
	return (
		<iframe
			src={`https://www.youtube-nocookie.com/embed/${id}`}
			allow="encrypted-media;"
			frameBorder={0}
			allowFullScreen
			style={{
				width: 'calc((var(--page-width) / 5) * 3)',
				height: 'calc(((var(--page-width) / 5) * 3)*(9/16))',
				borderRadius: '0.5em',
				backgroundColor: 'var(--bg)',
				...style,
			}}
		/>
	);
}
