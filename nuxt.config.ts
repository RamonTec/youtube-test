// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  devtools: { enabled: true },

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