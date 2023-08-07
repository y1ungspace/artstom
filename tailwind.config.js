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
        pop: 'pop 0.5s ease-in-out forwards',
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
          1: '#D0E7F7', // blue 
          2: '#E09891', // red
          3: '#FFC71F', // orange
          4: '#d6d05c', //yellow
          5: '#FF6C0A', //orange
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
        },
        pop: {
          '0%, 100%': { transform: 'scale(1)' },
          '40%, 60%': { transform: 'scale(1.01)' },
        }
      },
      screens: {
        'sm': '640px',
        'md': '720px',
        '2md': '820px',
        '3md': '912px',
        'lg': '1024px',
        '2lg': '1100px',
        'xl': '1200px',
        '2xl': '1536px',
      },
      width: {
        100: '100px',
      },
    },
  },
  plugins: [],
  safelist: [
    {
      pattern: /bg-element-(1|2|3)/,
      pattern: /transition-(all|none)/,
    },
  ]
}