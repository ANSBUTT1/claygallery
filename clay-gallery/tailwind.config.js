/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary:'var(--primary-color)' , // Custom color for #025048
        secondary: "#424b4a", // Custom color for #424b4a
        white: "#ffffff",
        gray: "#ededed", // White color (although 'white' is default in Tailwind)
      },
    },
  },
  plugins: [],
};


// "#025048"