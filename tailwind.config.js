/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.jsx'],
  theme: {
    extend: {
      colors: {
        'blue-500': '#030057',
        'yellow-500': '#DA9A00',
      },
      fontFamily: {
        sans: 'Roboto, sans-serif',
      },
      backgroundImage: {
        home: "url('/img/bg-home.svg')",
      },
    },
  },
  plugins: [],
};
