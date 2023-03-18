'use client';

import { usePathname } from 'next/navigation';

import Link from 'next/link';

interface Props {
	name: string;
	path: string;
}

export default function NavLink({ name, path }: Props) {
	const pathname = usePathname();

	return (
		<li className={`navLink${pathname === path ? ' active' : ''}`}>
			<Link href={path}>{name}</Link>
		</li>
	);
}
