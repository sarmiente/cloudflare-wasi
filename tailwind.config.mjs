/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
				'hero-pattern': "url('/br_front_1.jpg')",
				'hero-pattern-02': "url('/br_front_2.jpg')",
				'hero-pattern-03': "url('/br_front_3.jpg')",
				'pattern-03': "url('/pattern-03.jpg')",
				'pattern-02': "url('/pattern-02.jpg')",				
			  },
			fontFamily: {
				display: ["Oswald"],
				body: ['"Roboto Slab"'],
				heading: ["Vidaloka"],
				hero: ["Roboto"],
				pattern: ["Montserrat"],
     			
			  }
		},
	},
	plugins: [],
}
