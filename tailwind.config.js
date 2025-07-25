/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        white: '#ffffff',     
        cream: '#fdfaf4',
        peach: '#fcd5ce',
        rust: '#b45309',
        deepRed: '#7f1d1d',
        sage: '#a8bfa1',
        charcoal: '#1c1c1c',
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.text-ritual': {
          lineHeight: '1.7',
          letterSpacing: '0.025em',
        },
      });
    },
  ],
};
