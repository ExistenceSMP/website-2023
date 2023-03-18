import { CSSProperties } from 'react';

interface Props {
	id: string;
	style?: CSSProperties;
}

export default function YouTubeVideo({ id, style }: Props) {
	return (
		<iframe
			src={`https://www.youtube.com/embed/${id}`}
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			frameBorder={0}
			allowFullScreen
			style={{
				aspectRatio: '16 / 9',
				marginTop: '1em',
				width: 'min(100%, 100vw)',
				...style,
			}}
		/>
	);
}
