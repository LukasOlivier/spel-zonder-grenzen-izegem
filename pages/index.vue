<template>
   <div>
      <HomeHero />
      <div class="mx-auto w-11/12 md:w-9/12">
         <HomeInfo />
         <HomeFaq />
      </div>
   </div>
</template>

<script setup>
useHead({
   title: "Home",
   meta: [
      {
         name: "description",
         content:
            "Spel Zonder Grenzen is een teambuilding activiteit waarbij de deelnemers in teams tegen elkaar strijden in verschillende proeven. Dit voor zowel jong als oud.",
      },
   ],
   link: [{ rel: "canonical", href: "https://szg.be" }],
});
</script>
