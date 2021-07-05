export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'postsApp',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      {
        rel: 'stylesheet',
        type:"text/css",
        href: 'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.9.2/css/bulma.min.css'
      }
    ],
    script: [
      { src: 'https://cdn.jsdelivr.net/npm/marked/marked.min.js'}
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'balm-ui/dist/balm-ui.css',
    '@/assets/scss/main.scss'

  ],

  

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {
      src: '~plugins/filters.js' ,
      // src: '~/plugins/balm-ui'
    }
    // '@/plugins/filters.js',
    // '@/plugins/balm-ui',
    
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios'
    
  ],
  serverMiddleware: [
    '~/api/index.js',
],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
