const pkg = require('./package')
import purgecss from '@fullhuman/postcss-purgecss'

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    htmlAttrs: {
      lang: 'en',
    }
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    'swiper/dist/css/swiper.css',
    '~/assets/css/main.scss'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/swiper.js', ssr: false },
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // provide path to the file with resources
  ],

  /*
  ** Build configuration
  */
  build: {
    postcss: {
      plugins: [
        purgecss({
          content: ['./pages/**/*.vue', './layouts/**/*.vue', './components/**/*.vue', './content/**/*.md', './content/**/*.json'],
          whitelist: ['html', 'body', 'has-navbar-fixed-top', 'nuxt-link-exact-active', 'nuxt-progress'],
          whitelistPatternsChildren: [/__layout/, /__nuxt/],
        })
      ]
    },
  }
}
