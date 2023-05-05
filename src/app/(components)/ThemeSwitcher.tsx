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
					width: '26.875px',
					height: '26.875px',
					marginBottom: '-5.375px',
					marginLeft: '5.375px',
				}}
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
		<FiSun
			style={{
				width: '26.875px',
				height: '26.875px',
				marginBottom: '-5.375px',
				marginLeft: '5.375px',
				cursor: 'pointer',
			}}
			onClick={toggleTheme}
		/>
	) : (
		<FiMoon
			style={{
				width: '26.875px',
				height: '26.875px',
				marginBottom: '-5.375px',
				marginLeft: '5.375px',
				cursor: 'pointer',
			}}
			onClick={toggleTheme}
		/>
	);
}
