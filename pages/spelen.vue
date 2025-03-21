<template>
   <div>
      <HeroSection
         page-title="Knotsgekke Spelen"
         description="Iedere editie blijft het een uitdagende, maar leuke opdracht om jullie nieuwe spelen te brengen en origineel uit de hoek te komen."
      />
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
               <NuxtImg
                  :src="game.image"
                  alt="game.title"
                  class="h-full w-full object-cover"
                  :placeholder="[50, 25, 75, 5]"
                  loading="lazy"
               />
            </div>
            <div class="pb-2 text-center">
               <h3 class="mb-1 text-2xl">{{ game.title }}</h3>
            </div>
         </div>
      </div>
   </div>
</template>

<script setup>
useHead({
   title: "Knotsgekke Spelen",
   meta: [
      {
         name: "description",
         content:
            "Iedere editie blijft het een uitdagende, maar leuke opdracht om jullie nieuwe spelen te brengen en origineel uit de hoek te komen.",
      },
   ],
   link: [{ rel: "canonical", href: "https://szg.be/spelen" }],
});

const games = ref([
   {
      title: "Cornhole",
      image: "/images/games/Cornhole.png",
   },
   {
      title: "Darts",
      image: "/images/games/Darts.png",
   },
   {
      title: "Reuzenbal",
      image: "/images/games/Reuzenbal.png",
   },
   {
      title: "Ringwerpen",
      image: "/images/games/Ringwerpen.png",
   },
   {
      title: "Schijvenpuzzel",
      image: "/images/games/Schijvenpuzzel.png",
   },
   {
      title: "SZG Puzzel",
      image: "/images/games/SZG-puzzel.png",
   },
   {
      title: "Tube",
      image: "/images/games/Tube.png",
   },
]);
</script>
