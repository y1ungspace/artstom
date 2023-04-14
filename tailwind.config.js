/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        base: {
          1: '#FFFFFF', //white
          2: '#1CACE4', //blue
          3: '#3E3E3E', //gray
        }
      },
      height: {
        100: '100px',
      },
      width: {
        100: '100px',
      },
    },
  },
  plugins: [],
}
