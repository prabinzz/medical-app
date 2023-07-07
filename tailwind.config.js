/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1300px",
    },
    extend: {
      colors: {
        primary: "#4b80fb",
        accent: "#fb6e67",
        dark: "#201e62",
        muted: "#73729c",
      },
      fontFamily: {
        primary: ["Plus Jakarta Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
