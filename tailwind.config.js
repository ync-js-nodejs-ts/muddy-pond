const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    boxShadow: {
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
     '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      none: 'none',
    },
    screens: {
      '2xl': { max: '1535px' },
      xl: { max: '1279px' },
      lg: { max: '1023px' },
      md: { max: '767px' },
      sm: { max: '639px' },
      tabletmin: { min: '639px' },
      ml: { min: '425px' },

      lgmin: { min: '1024px' }
    },
    fontFamily: {
      sans: ['Inter', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      gridTemplateColumns: {
       'galleryLayout': 'minmax(750px, 1fr) 1fr',
      },
      zIndex: {
        '-10': '-10',
      },
      colors: {
        lcpBlue: {
          200: '#4075c1',
          300: '#1e478d',
          350: '#04255b'
        },
        lcpYellow: {
          500: '#fbbf24'
        }
      },

      backgroundImage: (theme) => ({
        predicas: "url('/img/predicas.webp')",
        estudios: "url('/img/estudio-biblico.webp')",
        podcast: "url('/img/podcast.webp')",
        ladrillos: "url('/img/ladrillos.webp')",
        biblia: "url('/img/biblia.webp')",
        nutricion: "url('/img/nutricion.webp')",
        headerBg: "url('/img/HeaderBg.webp')"
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
