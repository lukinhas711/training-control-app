// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },

  css: ['~/assets/css/main.css'],

  modules: [
    // doc: https://nuxt.com/modules/eslint
    '@nuxtjs/eslint-module',
    // doc: https://nuxt.com/modules/tailwindcss
    '@nuxtjs/tailwindcss',
    // doc: https://nuxt.com/modules/icon
    'nuxt-icon',
  ],

  nitro: {
    preset: 'cloudflare-pages',
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
