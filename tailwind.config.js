/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        slider: 'slider 1s ease-in-out forward',
      },
      backgroundImage: {
        'background': 'url("../public/images/background.jpg")',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        base: {
          1: '#FFFFFF', //white
          2: '#1CACE4', //blue
          3: '#3E3E3E', //gray
          4: '#010101', //black
        },
      },
      height: {
        100: '100px',
      },
      keyframes: {
        slider: {
          '0%': {transform: 'scale(1)', background: 'inherit'},
          '100%': {transform: 'scale(1.25)', background: '#FFFFFF'},
        }
      },
      width: {
        100: '100px',
      },
    },
  },
  plugins: [],
  safelist: [
    {
      pattern: /bg-(sky|green|blue)-(400|500|600)/,
      pattern: /transition-(all|none)/,
    },
  ]
}