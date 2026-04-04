/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',  // This allows dark mode to be toggled via a class (which we're doing in JavaScript)
  content: [
    "./index.html", "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Make sure this is correct
  ],
  theme: {
    extend: {
      fontFamily: {
        pacifico: ['Pacifico', 'cursive'],
      },
    },
  },
  plugins: [],
};
// tailwind.config.js
module.exports = {
  darkMode: 'class', // VERY IMPORTANT
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Adjust as needed
  theme: {
    extend: {},
  },
  plugins: [],
};
