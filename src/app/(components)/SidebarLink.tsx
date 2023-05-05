'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface Props {
	name: string;
	path: string;
}

export default function SidebarLink({ name, path }: Props) {
	const pathname = usePathname();

	return (
		<li className={`sidebarLink${pathname === path ? ' active' : ''}`}>
			<Link href={path}>{name}</Link>
		</li>
	);
}
