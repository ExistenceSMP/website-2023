'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

import { FiSun, FiMoon } from 'react-icons/fi';

export default function ThemeSwitcher() {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;

	function toggleTheme() {
		if (theme == 'light') {
			setTheme('dark');
		} else {
			setTheme('light');
		}
	}

	return (
		<div
			style={{
				position: 'absolute',
				marginLeft: '360px',
				cursor: 'pointer',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				height: '43px',
			}}
			onClick={toggleTheme}
		>
			{theme == 'light' ? (
				<FiSun
					style={{
						width: '26.875px',
						height: '26.875px',
					}}
				/>
			) : (
				<FiMoon
					style={{
						width: '26.875px',
						height: '26.875px',
					}}
				/>
			)}
		</div>
	);
}
