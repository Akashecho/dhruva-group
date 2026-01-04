/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        zentry: ['zentry', 'sans-serif'],
        general: ['general', 'sans-serif'],
        'circular-web': ['circular-web', 'sans-serif'],
        'robert-medium': ['robert-medium', 'sans-serif'],
        'robert-regular': ['robert-regular', 'sans-serif'],
        'cormorant': ['"Cormorant Garamond"', 'serif'],
        'manrope': ['Manrope', 'sans-serif'],
      },
      colors: {
        gold: {
          50: '#fdf8e7',
          100: '#f9ecc3',
          200: '#f3d98a',
          300: '#ecc451',
          400: '#e5af27',
          500: '#D4AF37', // Primary gold
          600: '#b8942f',
          700: '#946f24',
          800: '#795a24',
          900: '#664a22',
        },
        dhruva: {
          black: '#0a0a0f',
          darker: '#050508',
          dark: '#121218',
          gray: '#1a1a24',
        },
        teal: {
          50: '#f0fdfa',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
        },
        // Keep legacy colors for compatibility
        red: {
          50: '#D4AF37', // Remapped to gold
        },
        blue: {
          50: '#0a0a0f', // Remapped to dhruva black
          75: '#121218',
        },
        yellow: {
          50: '#2dd4bf' // Remapped to teal
        },
        violet: {
          50: '#0a0a0f',
        },
      }
    },
  },
  plugins: [],
}
