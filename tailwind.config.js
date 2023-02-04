/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      small: '0px',
      mobile: '359px',
      mobileHor: '640px',
      tablet: '768px',
      laptop: '976px',
      ipad: '1023px',
      hd:'1365px',
      fhd: '1440px',
    },
    extend: {
    fontFamily: {
      'inter': 'Inter, sans-serif',
      'roboto': 'Roboto Condensed, sans-serif'
    },
    colors: {
      slOrange: '#F6921E'
    },
  },
},
plugins: [],
}
