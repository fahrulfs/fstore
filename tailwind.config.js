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
        bgPrimary: '#E5E5E5',
        bgDarkmode: "#020617",
        bgLightmode: "#fafaf9"

      },
      // fontFamily: {
      //   mainFont: ["Roboto", "sans-serif"],

      // }
    },
  },
  plugins: [],
}

