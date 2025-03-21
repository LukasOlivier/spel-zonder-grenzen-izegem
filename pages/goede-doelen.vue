<template>
   <div>
      <HeroSection
         page-title="Goede doelen"
         description="Met de opbrengst van Spel Zonder Grenzen steunen wij jaarlijks verschillende goede doelen."
      />
      <div class="mx-auto my-20 w-11/12 md:w-8/12">
         <h2 class="text-4xl">Goede doelen</h2>
         <div class="mt-4 flex flex-col gap-2">
            <p>
               Wij spreiden ons budget over verschillende doelgroepen:
               dierenwelzijn, mensen met een beperking, geneeskundig onderzoek,
               plaatselijke initiatieven, … Ook jij kan deel uitmaken van dit
               team!
            </p>
            <p>
               Daarnaast organiseert SZG nog enkele activiteiten voor zijn meer
               dan 50 vrijwilligers: een verrassingsreis, nieuwjaarsreceptie en
               een voorjaarsactiviteit (bv. sneukelfietstocht, fotozoektocht,
               …).
            </p>
            <p>
               Voorstel voor een goed doel?
               <a class="underline" href="#contact">Contacteer ons</a>.
            </p>
         </div>

         <hr class="my-16 border-t-2 border-gray-200" />

         <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <a
               v-for="cause in allCauses"
               :key="cause.name"
               target="_blank"
               :href="cause.link"
            >
               <div
                  class="flex flex-col items-center rounded-lg bg-white p-4 shadow-md transition-transform hover:scale-105 hover:shadow-lg"
               >
                  <NuxtImg
                     :src="cause.image"
                     alt="Goed doel"
                     class="h-48 w-full rounded-md object-cover"
                     loading="lazy"
                  />
                  <h3 class="mt-4 text-center text-2xl font-semibold">
                     {{ cause.name }}
                  </h3>
               </div>
            </a>
         </div>
      </div>
   </div>
</template>

<script setup>
useHead({
   title: "Goede doelen",
   meta: [
      {
         name: "description",
         content:
            "Met de opbrengst van Spel Zonder Grenzen steunen wij jaarlijks verschillende goede doelen.",
      },
   ],
   link: [{ rel: "canonical", href: "https://szg.be/goede-doelen" }],
});

const allCauses = ref([
   {
      name: "Jomba",
      image: "/images/causes/jomba.webp",
      link: "https://www.kazou.be/jomba",
   },
   {
      name: "VZW Nally's Papegaaienopvang",
      image: "/images/causes/nallys-papegaaienopvang.webp",
      link: "https://app.nallyspapegaaienopvang.be/",
   },
   {
      name: "Kinderkankerfonds",
      image: "/images/causes/kinderkankerfonds.webp",
      link: "https://www.kinderkankerfonds.be",
   },
   {
      name: "VZW 't Kringske",
      image: "/images/causes/kringske.webp",
      link: "https://www.tkringske.be/",
   },
   {
      name: "Allimpic",
      image: "/images/causes/allimpic.webp",
      link: "https://allimpic-izegem.com/",
   },
   {
      name: "VZW De Mucovereniging",
      image: "/images/causes/mucovereniging.webp",
      link: "https://www.muco.be",
   },
   {
      name: "Open Cirkel",
      image: "/images/causes/opencirkel.webp",
      link: "https://tvass.be/",
   },
   {
      name: "Urban Move Izegem",
      image: "/images/causes/urban-move.webp",
      link: "https://www.facebook.com/events/sport-izegem/urban-move/364693020884453/",
   },
   {
      name: "Wat Als Liefde Spreekt",
      image: "/images/causes/wat-als-liefde-spreekt.webp",
      link: "https://www.facebook.com/watalsliefdespreekt/",
   },
   {
      name: "FurEverCatz asiel Ardooie",
      image: "/images/causes/furevercatz.webp",
      link: "https://furevercatz.be/",
   },
   {
      name: "Boven de wolken",
      image: "/images/causes/boven-de-wolken.jpg",
      link: "https://bovendewolken.be/",
   },
   {
      name: "VZW mensen in nood",
      image: "/images/causes/mensen-in-nood.png",
      link: "https://www.minmol.be/",
   },
]);
</script>
