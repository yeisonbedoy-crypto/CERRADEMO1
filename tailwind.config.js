/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html',
    './nuestros-servicios/*.html',
    './zonas/*.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Rubik', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      colors: {
        'brand-orange': '#D37135',
        navy: {
          900: '#0B1C2C',
          800: '#0F2540',
          700: '#143659',
          600: '#1A4A73',
          500: '#205E8F',
        },
      },
    },
  },
  plugins: [],
}
