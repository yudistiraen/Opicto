import Form from './pages/form/index';
export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'opitco',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  router: {
    mode: 'history',
    base: '/',
    extendRoutes(routes) {
      routes.push(
        {
          name: 'custom',
          path: '*',
          redirect: '/form'
        },
        {
          name: 'default',
          path: '/',
          redirect: '/form'
        }
      )
    }
    // customize the Nuxt.js router
    // extendRoutes(routes, resolve) {
    //   routes.push({
    //     name: 'custom',
    //     path: '/',
    //     redirect: '/form',
    //     // component: resolve(__dirname, 'pages/form')
    //   })
    // }
    // routes: [
    //   {
    //     path: '/',
    //     redirect: '/form',
    //   },
    //   {
    //     path: '/digisign',
    //     component: Form,
    //   }
    // ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa'
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
