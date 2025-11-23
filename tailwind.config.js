/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      colors: {
        saffron: '#FF8C00',
        'deep-red': '#B22222',
        'dark-green': '#114232',
        'warm-cream': '#FFF8DC',
        // Premium palette
        'brand-black': '#0B0B0B',
        'brand-white': '#FFFFFF',
        'brand-gold': '#C8A45A'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        display: ['Playfair Display', 'serif']
      },
      screens: {
        'xs': '475px',
        '3xl': '1600px',
      },
      boxShadow: {
        'soft-lg': '0 10px 30px rgba(11,11,11,0.12)',
        'glass': '0 8px 24px rgba(11,11,11,0.08)'
      },
      backdropBlur: {
        xs: '4px'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
