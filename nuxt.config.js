module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'ดุอาอัซการฺ - บทซิกิรฺยามเช้าเย็นที่เศาะฮีหฺจากท่านนบี',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'บทซิกิรฺยามเช้าเย็น' },
      { hid: 'keyword', name: 'keyword', content: 'ดุอา ดุอาอัซการฺ ซิกิรฺยามเช้าเย็น อิสลาม มุสลิม อ่านดุอา' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Kanit' }
    ]
  },
  router: {
    base: '/dua-azkar/'
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  css: [
    'bulma/css/bulma.css',
    '~node_modules/font-awesome/css/font-awesome.min.css'
  ],
  plugins: [
    '~plugins/filters.js'
  ],
  /*
  ** Build configuration
  */
  build: {
    postcss: {
      plugins: {
        'postcss-custom-properties': false
      }
    },
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
