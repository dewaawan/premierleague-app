module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '100': '80rem',
      }
    },
  },
  variants: {
    extend: {
      borderWidth: ['hover'],
      width: ['hover'],
      height: ['hover'],
      backgroundImage: ['hover'],
    },
  },
  plugins: [],
}
