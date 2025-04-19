// tailwind.config.js
module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx,html}"], // or your actual structure
	mode: "jit",
	darkMode: false,
	theme: {
		extend: {
			colors: {
				background: "#050a16",
				primary: "#4f46e5",
				text: "#e2e8f0",
			},
			fontFamily: {
				sans: ["Inter"],
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
