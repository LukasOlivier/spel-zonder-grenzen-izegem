<template>
   <div>
      <Hero
         pageTitle="Knotsgekke Spelen"
         description="Iedere editie blijft het een uitdagende, maar leuke opdracht om jullie nieuwe spelen te brengen en origineel uit de hoek te komen."
      ></Hero>
      <div class="mx-auto my-20 w-11/12 md:w-8/12">
         <h2 class="text-4xl">Ontdek onze knotsgekke spelen</h2>
         <div class="mt-4 flex flex-col gap-2">
            <p>
               Iedere editie blijft het een uitdagende, maar leuke opdracht om
               jullie nieuwe spelen te brengen en origineel uit de hoek te
               komen. De opdrachten zijn vaak een combinatie van fysieke en
               mentale uitdagingen. Benieuwd naar de spelen van dit jaar?
               Hieronder vind je een overzicht van de spelen!
            </p>
         </div>

         <hr class="my-16 border-t-2 border-gray-200" />
      </div>
      <div
         class="mx-auto mb-20 grid w-11/12 grid-cols-1 gap-8 md:w-8/12 md:grid-cols-2 lg:grid-cols-3"
      >
         <div
            v-for="game in games"
            :key="game.title"
            class="flex flex-col gap-4 bg-white"
         >
            <div class="relative h-72">
               <img
                  :src="game.image"
                  alt="game.title"
                  class="h-full w-full object-cover"
               />
            </div>
            <div class="p-4">
               <h3 class="text-2xl">{{ game.title }}</h3>
               <p>{{ game.description }}</p>
            </div>
         </div>
      </div>
   </div>
</template>

<script setup>
import { ref } from "vue";

const games = ref([
   {
      title: "Buikglijbaan",
      image: "/images/games/buikglijbaan.webp",
      description:
         "De buikglijbaan met helling is een spectaculaire waterglijbaan! Neem een aanloop, spring en glij op je buik naar het einde van deze baan toe!",
   },
   {
      title: "Buikglijbaan",
      image: "/images/games/buikglijbaan.webp",
      description:
         "De buikglijbaan met helling is een spectaculaire waterglijbaan! Neem een aanloop, spring en glij op je buik naar het einde van deze baan toe!",
   },
   {
      title: "Buikglijbaan",
      image: "/images/games/buikglijbaan.webp",
      description:
         "De buikglijbaan met helling is een spectaculaire waterglijbaan! Neem een aanloop, spring en glij op je buik naar het einde van deze baan toe!",
   },
   {
      title: "Buikglijbaan",
      image: "/images/games/buikglijbaan.webp",
      description:
         "De buikglijbaan met helling is een spectaculaire waterglijbaan! Neem een aanloop, spring en glij op je buik naar het einde van deze baan toe!",
   },
]);
</script>
