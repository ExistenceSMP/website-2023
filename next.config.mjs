import nextMDX from '@next/mdx';
import remarkGfm from 'remark-gfm';

/** @type {import('next').NextConfig} */
const nextConfig = {
	pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'mdx'],
	experimental: {
		mdxRs: false,
	},
	images: {
		domains: ['existence-smp-discord-bot.hop.sh'],
	},
};

export default nextMDX({
	extension: /\.mdx?$/,
	options: {
		remarkPlugins: [remarkGfm],
	},
})(nextConfig);
