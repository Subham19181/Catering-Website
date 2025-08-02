/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fef7f0',
          100: '#fdecd8',
          200: '#fbd5b0',
          300: '#f8b77a',
          400: '#f5934a',
          500: '#f27524',
          600: '#e35a1a',
          700: '#bc4418',
          800: '#96371b',
          900: '#792f1a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        'bonheur-royale': ['var(--font-bonheur-royale)'],
      },
    },
  },
  plugins: [],
} 