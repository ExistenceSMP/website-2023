import { CSSProperties } from 'react';

interface Props {
	id: string;
	style?: CSSProperties;
}

export default function YouTubePlaylist({ id, style }: Props) {
	return (
		<iframe
			src={`https://www.youtube.com/embed/videoseries?list=${id}`}
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			frameBorder={0}
			allowFullScreen
			style={{
				aspectRatio: '16 / 9',
				width: '100%',
				marginTop: '1em',
				borderRadius: '0.5em',
				...style,
			}}
		/>
	);
}
