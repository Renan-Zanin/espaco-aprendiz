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
        sans: 'Inter, sans-serif',
      },
      backgroundImage: {
        home: "url('/img/bg-home.svg')",
        about: "url('/img/bg-about.svg')",
        attendance: "url('/img/bg-attendance.svg')",
        contact: "url('/img/bg-contact.svg')",
      },
      animation: {
        spin: 'spin 2s',
        spin2: 'spin 2s 2s',
        pulse: 'pulse 2s',
      },
    },
  },
  plugins: [],
};
