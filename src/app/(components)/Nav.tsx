'use client';

import Link from 'next/link';
import Logo from './Logo';
import NavLink from './NavLink';

export default function Nav() {
	return (
		<nav>
			<Link href="/" className="logo">
				<Logo />
			</Link>
			<ul>
				<NavLink name="News" path="/news" />
				<NavLink name="About" path="/about" />
				<NavLink name="Community" path="/community" />
				<NavLink name="Podcast" path="/podcast" />
				<NavLink name="Archive" path="/archive" />
			</ul>
		</nav>
	);
}
