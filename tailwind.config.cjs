module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			sans: [
				'"Nunito Sans"',
				'ui-sans-serif',
				'system-ui',
				'-apple-system',
				'BlinkMacSystemFont',
				'"Segoe UI"',
				'Roboto',
				'"Helvetica Neue"',
				'Arial',
				'"Noto Sans"',
				'sans-serif',
				'"Apple Color Emoji"',
				'"Segoe UI Emoji"',
				'"Segoe UI Symbol"',
				'"Noto Color Emoji"'
			]
		},
		extend: {
			colors: {
				'blue-dark': 'rgb(4, 36, 61)',
				'gray-light': 'rgb(244, 244, 244)',
				orange: 'rgb(235, 125, 63)'
			}	
		}
	},
	plugins: []
};
