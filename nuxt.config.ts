// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "nuxt-icon",
    "nuxt-swiper",
    "@formkit/nuxt",
    "@pinia/nuxt"
  ],
  googleFonts: {
    families: {
      'Open Sans': true,
      'Nunito': true
    }
  },
  postcss: {
    plugins: {
      cssnano: false 
    }
  }
})