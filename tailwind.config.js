/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Raleway", "Roboto"],
      },
      backgroundImage: {
        aboutImg: 'url("../src/assets/images/about-img.jpg")',
      },
      gridTemplateColumns: {
        "70/30": "60% 36%",
      },
    },
  },
  plugins: [],
};

