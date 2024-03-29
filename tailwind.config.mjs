/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'cyan-light': 'hsl(193, 38%, 86%)',
				'green-neon': 'hsl(150, 100%, 66%)',
				'blue-grayish': 'hsl(217, 19%, 38%)',
				'blue-grayish-dark': 'hsl(217, 19%, 24%)',
				'blue-dark': 'hsl(218, 23%, 16%)',
			}
		},
	},
	plugins: [],
}
