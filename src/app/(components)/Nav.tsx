'use client';

import Link from 'next/link';
import Logo from './Logo';
import NavLink from './NavLink';
import ThemeSwitcher from './ThemeSwitcher';

export default function Nav() {
	return (
		<nav>
			<Link href="/" className="logo" title="Existence Community">
				<Logo />
			</Link>
			<ul>
				<NavLink name="About" path="/" />
				<NavLink name="News" path="/news" />
				<NavLink name="Community" path="/community" />
				<NavLink name="Podcast" path="/podcast" />
				<NavLink name="Vault" path="/vault" />
				<ThemeSwitcher />
			</ul>
		</nav>
	);
}
