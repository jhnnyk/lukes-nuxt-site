// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      script: [{ src: '_nuxt/js/testFunction.js' },{ src: '_nuxt/js/testFunction2.js' }],
    },
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxt/image'],
  content: {
    documentDriven: true,
  },
  css: ['~/assets/css/main.css'],
})