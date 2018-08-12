const paths = require('./paths');

module.exports = {
  'react-native': 'react-native-web',
  '_components': paths.components,
  '_pages': paths.pages,
  '_styles': paths.styles,
  '_mocks': paths.mocks,
  swiper$: 'swiper/dist/js/swiper.js'//Fix webpack swiper issue
}
