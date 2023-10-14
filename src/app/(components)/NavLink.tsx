'use client';

import { usePathname } from 'next/navigation';

import Link from 'next/link';

interface Props {
	name: string;
	path: string;
}

export default function NavLink({ name, path }: Props) {
	const pathname = usePathname();

	const active = path == '/' ? pathname == path : pathname?.startsWith(path);

	return (
		<li className={`navLink${active ? ' active' : ''}`}>
			<Link href={path} title={name}>
				{name}
			</Link>
		</li>
	);
}
