import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        // Example: brand colors or future theme extensions
        brand: {
          DEFAULT: '#6366f1', // indigo-500
          light: '#a5b4fc',
          dark: '#4338ca',
        },
      },
    },
  },
  plugins: [],
}

export default config


