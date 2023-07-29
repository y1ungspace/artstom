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
        'servises': 'url("../public/images/servises-background.svg")'
      },
      boxShadow:{
        'white': 'box-shadow: 0 0 20px 0px rgba(256, 256, 256, 0.35)'
      },
      colors: {
        base: {
          1: '#010101', //black
          2: '#1CACE4', //blue
          3: '#3E3E3E', //gray
          4: '#FFFFFF', //white
          5: '#167C9F', //dark blue
        },
        element: {
          1: 'rgb(28, 172, 228)', // blue 
          2: 'rgb(214, 73, 51)', // red
          3: 'rgb(252, 191, 73)', // orange
          4: 'rgb(214, 208, 92)', //yellow
          5: 'rgb(255, 108, 10)', //orange
        },
        pastel: {
          1: '#d1e8f8' //blue
        },
        secondary: {
          1: '#F5F6FA' //main background
        }
      },
      borderWidth: {
        'sm': '0.3px'
      },
      dropShadow: {
        'white': 'filter: drop-shadow(0 20px 13px rgb(256 256 256 / 0.03)) drop-shadow(0 8px 5px rgb(256 256 256 / 0.08))'
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