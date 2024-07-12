import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				mono: ['JetBrains Mono', ...defaultTheme.fontFamily.mono],
				sans: ['DM Sans', ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [],
};
