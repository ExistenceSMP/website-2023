'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

import { FiSun, FiMoon, FiLoader } from 'react-icons/fi';

export default function ThemeSwitcher() {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted)
		return (
			<FiLoader
				style={{
					cursor: 'not-allowed',
				}}
				className={'themeSwitcher'}
			/>
		);

	function toggleTheme() {
		if (theme == 'light') {
			setTheme('dark');
		} else {
			setTheme('light');
		}
	}

	return theme == 'light' ? (
		<FiSun className={'themeSwitcher'} onClick={toggleTheme} />
	) : (
		<FiMoon className={'themeSwitcher'} onClick={toggleTheme} />
	);
}
