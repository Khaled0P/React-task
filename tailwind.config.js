/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        Primary: {
          100: '#9D9D9D',
          200: '#717171',
        },
        Secondary: { 100: '#A5F300', 200: '#B3FE00' },
        PrimaryRed: '#D40D00',
      },
      fontFamily: {
        custom: ['Bobcat', 'Roboto', 'sans-serif'],
        Roboto: ['Roboto', 'sans-serif'],
      },
      backgroundImage: {
        button: "url('/src/assets/button.png')",
      },
    },
  },
  plugins: [],
};
