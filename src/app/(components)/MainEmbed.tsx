import { PropsWithChildren } from 'react';

export default function MainEmbed({ children }: PropsWithChildren) {
	return <div className={'mainEmbed'}>{children}</div>;
}
