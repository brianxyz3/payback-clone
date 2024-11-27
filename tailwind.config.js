/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Raleway", "Roboto"],
      },
      backgroundImage: {
        testImg: 'url("../src/assets/images/testimg.jfif")',
      },
      gridTemplateColumns: {
        "70/30": "70% 10%",
      },
    },
  },
  plugins: [],
};

