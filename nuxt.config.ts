// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  devtools: { enabled: true },
  nitro: {
    storage: {
      data: {
        driver: 'vercelKV'
        /* Vercel KV driver options */
      }
    }
  },
  routeRules: {
    // prerender index route by default
    '/': { prerender: true },
  },
  postcss: {
    plugins: {
      tailwindcss: {}, 
      autoprefixer: {},
    }, 
  },
  modules: [
    '@nuxt/test-utils/module',
    "@pinia/nuxt",
  ],
  pinia: {
    storesDirs: ['./stores/**', './custom-folder/stores/**'],
  },
})