/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./public/**/*.{html,js}", "index.html"],
	theme: {
		extend: {
			fontFamily: {
				Montserrat: ["Montserrat", "sans"],
			},
		},
	},
	plugins: [],
};
