module.exports = {
  purge: [],
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      inset:{
        '18':'4.05rem',
        '1/8':'65%',
        '-2':'-1150%'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
