export default defineNuxtConfig({
   devtools: { enabled: false },

   app: {
      head: {
         charset: "utf-16",
         viewport: "width=device-width,initial-scale=1",
         titleTemplate: "%s - Spel Zonder Grenzen Izegem",

         link: [
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
      "@nuxt/fonts",
   ],

   runtimeConfig: {
      public: {
         scoresExcelUrl: process.env.SCORES_EXCEL_URL,
         teamsExcelUrl: process.env.TEAMS_EXCEL_URL,
         googleFormsUrl: process.env.GOOGLE_FORMS_URL,
         eventDate: process.env.EVENT_DATE,
         registerDate: process.env.REGISTER_DATE,
         meetingDate: process.env.MEETING_DATE,
         showScoresButton: process.env.SHOW_SCORES_BUTTON,
      },
   },

   fonts: {
      families: [
         { name: "Inter", provider: "fontsource" },
         {
            name: "Aachenn",
            provider: "local",
            weights: ["400", "700"],
         },
      ],
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

   compatibilityDate: "2024-08-22",
});
