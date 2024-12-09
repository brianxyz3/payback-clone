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
        faqImg: 'url("../src/assets/images/bubbles-img.jfif")',
        loginImg: 'url("../src/assets/images/login-img.jpg")',
      },
      gridTemplateColumns: {
        "70/30": "60% 36%",
        "40/60": "40% 60%",
      },
    },
  },
  plugins: [],
};

