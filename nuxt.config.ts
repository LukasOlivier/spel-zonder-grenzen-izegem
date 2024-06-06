export default defineNuxtConfig({
   devtools: { enabled: false },

   app: {
      head: {
         charset: "utf-16",
         viewport: "width=device-width,initial-scale=1",
         link: [
            {
               rel: "preload",
               href: "https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap",
               as: "style",
               onload: "this.onload=null;this.rel='stylesheet'",
            },

            {
               rel: "stylesheet",
               href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css",
            },
         ],
      },
   },

   modules: [
      "@nuxt/eslint",
      "@vueuse/nuxt",
      "@nuxtjs/seo",
      "@vueuse/motion/nuxt",
      "nuxt-primevue",
      "@nuxt/image",
      "nuxt-booster",
   ],

   runtimeConfig: {
      public: {
         scoresExcelUrl: process.env.SCORES_EXCEL_URL, // TODO: Add this to the .env file
         teamsExcelUrl: process.env.TEAMS_EXCEL_URL, // TODO: Add this to the .env file
         googleFormsUrl: process.env.GOOGLE_FORMS_URL, // TODO: Add this to the .env file
      },
   },

   site: {
      url: "https://szg.be",
   },

   image: {
      format: ["webp"],
      quality: 80,
   },

   css: [
      "~/assets/css/tailwind.css",
      "primeicons/primeicons.css",
      "primevue/resources/themes/lara-light-blue/theme.css",
   ],

   postcss: {
      plugins: {
         tailwindcss: {},
         autoprefixer: {},
      },
   },
});
