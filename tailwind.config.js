/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: 'var(--textColor)',
        mainBg: 'var(--mainColor)',
        secondary: 'var(--secondColor)',
      },
      screens: {
        hmd: '968px',
      },
    },
  },
  plugins: [],
  // theme: {
  //   extend: {
  //     animation: {
  //       scroll: 'scroll 40s linear infinite',
  //     },
  //     keyframes: {
  //       scroll: {
  //         '0%': { transform: 'translateX(0)' },
  //         '100%': { transform: 'translateX(-50%)' },
  //       }
  //     }
  //   },
  // },
};
