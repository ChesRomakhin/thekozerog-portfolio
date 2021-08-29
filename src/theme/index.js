const colors = {
  black: '#000e1a',
  white: '#fff',
  blue: '#007ce0',
  navy: '#004175',
  spaghetti: '#FF0',
  underConstruction: 'repeating-linear-gradient(45deg, rgb(255, 205, 0) 0px, rgb(255, 205, 0) 5px, black 6px, black 10px)',
};

const fonts ={
  header: 'Lato',
}

const breakpoints = ['75em']

const theme = {
  breakpoints,
  colors,
  fonts,
  headers: {
    spaghetti: {
      color: colors.spaghetti,
      fontFamily: fonts.header,
    }
  }
};

export default theme