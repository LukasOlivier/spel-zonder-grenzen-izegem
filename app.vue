<script setup>
const description =
   "Spel Zonder Grenzen is een teambuilding activiteit waarbij de deelnemers in teams tegen elkaar strijden in verschillende proeven. Dit voor zowel jong als oud.";
const ogTitle = "Spel Zonder Grenzen";
const twitterDescription = description;
const image = "https://szg.be/images/og-image.jpg";
const mySite = "https://szg.be";

useHead({
   htmlAttrs: {
      lang: "nl",
   },
   link: [{ rel: "canonical", href: "https://szg.be" }],
   meta: [
      {
         name: "description",
         content: description,
      },
      { property: "og:site_name", content: mySite },
      { property: "og:type", content: "website" },
      {
         property: "og:url",
         content: mySite,
      },
      {
         property: "og:title",
         content: ogTitle,
      },
      {
         property: "og:description",
         content: description,
      },
      {
         property: "og:image",
         content: image,
      },
      // Test on: https://cards-dev.twitter.com/validator or https://socialsharepreview.com/
      { name: "twitter:site", content: "@qdnvubp" },
      { name: "twitter:card", content: "summary_large_image" },
      {
         name: "twitter:url",
         content: mySite,
      },
      {
         name: "twitter:title",
         content: ogTitle,
      },
      {
         name: "twitter:description",
         content: twitterDescription,
      },
      {
         name: "twitter:image",
         content: image,
      },
   ],
});
</script>

<template>
   <div>
      <NuxtLayout>
         <NuxtPage />
      </NuxtLayout>
   </div>
</template>
