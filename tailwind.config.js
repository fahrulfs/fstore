/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        blackColor: '#1E2832',
        whiteColor: '#fff',
        accentColor: '#ea580c',
        bgDarkmode: "#020617",
        bgLightmode: "#f3f4f6"

      },
      // fontFamily: {
      //   mainFont: ["Roboto", "sans-serif"],

      // }
    },
  },
  plugins: [],
}

