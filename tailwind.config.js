/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				'ibm-plex-mono': ['IBM Plex Mono', 'monospace'],
				'ibm-plex-sans': ['IBM Plex Sans', 'sans-serif']
			}
		}
	},
	plugins: []
};
