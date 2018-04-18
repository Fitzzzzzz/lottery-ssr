const path = require('path')
const vuxLoader = require('vux-loader')

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'lottery-ssr',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Vue.js SSR project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */

 css: [
    'vux/src/styles/reset.less',
    'vux/src/styles/1px.less'
  ],
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  plugins: [
    {
      src: '~/plugins/vux-plugins',
      ssr: false
    },
    {
      src: '~/plugins/vux-components',
      ssr: true
    },
    {
      src: '~/plugins/vue-socket.io',
      ssr: false
    }
  ],
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      // if (isDev && isClient) {
      //   config.module.rules.push({
      //     enforce: 'pre',
      //     test: /\.(js|vue)$/,
      //     loader: 'eslint-loader',
      //     exclude: /(node_modules)/
      //   })
      // }
      const configs = vuxLoader.merge(config, {
          options: {
            ssr: true
          },
          plugins: ['vux-ui', {
            name: 'less-theme',
            path: path.join(__dirname, './styles/theme.less')
          }]
        })
        return configs
      }
  },
  router: {
    middleware: 'routerGuard'
  }  
}
