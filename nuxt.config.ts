// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxt/image'],
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  content: {
    documentDriven: true,
  },
  css: ['~/assets/css/main.css', '~/assets/css/new.css']
})