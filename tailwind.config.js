/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.jsx"],
  theme: {
    extend: {
      colors: {
        "blue-500": "#030057",
        "yellow-500": "#DA9A00",
      },
      fontFamily: {
        inter: ["Inter, sans-serif"],
      },
      backgroundImage: {
        home: "url('/img/bg-home.png')",
        about: "url('/img/bg-about.png')",
        attendance: "url('/img/bg-attendance.png')",
        contact: "url('/img/bg-contact.png')",
      },
      animation: {
        spin: "spin 2s",
        spin2: "spin 2s 2s",
        pulse: "pulse 2s",
      },
    },
  },
  plugins: [],
};
