/** @type {import('tailwindcss').Config} */
// const flowbite = require("flowbite-react/tailwind");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0px 1px 10px rgba(0, 0, 0, 0.15)',
      },
      borderWidth: {
        '2': '2px',
      },
    },
  },
  plugins: [],
}

