<template>
   <div class="pb-32">
      <HeroSection
         page-title="Hall Of Fame"
         description="De winnaars van elke editie van Spel Zonder Grenzen"
      />
      <div class="mx-auto my-20 w-11/12 md:w-9/12">
         <ul v-for="year in sortedYears" :key="year" class="my-40">
            <h2 class="text-4xl">
               Winaars van {{ year }}

               <hr class="my-8 border-t-2 border-gray-200" />

               <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
                  <HallOfFameAwardSection
                     title="Gewoon klassement"
                     icon-class="fas fa-trophy text-yellow-500"
                     :teams="winners[year].regular"
                  />
                  <HallOfFameAwardSection
                     title="Gemengd klassement"
                     icon-class="fas fa-trophy text-yellow-500"
                     :teams="winners[year].mixed"
                  />
                  <HallOfFameAwardSection
                     title="Jeugd klassement"
                     icon-class="fas fa-trophy text-yellow-500"
                     :teams="winners[year].youth"
                  />
                  <HallOfFameAwardSection
                     title="Zuipbeker"
                     icon-class="fas fa-beer text-yellow-500"
                     :teams="winners[year].drinking"
                  />
               </div>
            </h2>
         </ul>
      </div>
   </div>
</template>

<script setup>
import confetti from "canvas-confetti";

useHead({
   title: "Hall Of Fame",
   meta: [
      {
         name: "description",
         content: "De winnaars van elke editie van Spel Zonder Grenzen",
      },
   ],
   link: [{ rel: "canonical", href: "https://szg.be/hall-of-fame" }],
});

const winners = ref({
   2024: {
      regular: [
         "Yama Arashi Bavikhove herenploeg",
         "Judodads Bavikhove",
         "Judoclub Ingelmunster",
      ],
      mixed: ["Judoclub Ingelmunster gemengd", "Kineteam", "De olveniers"],
      youth: [
         "Yama Arashi Bavikhove Jeugd 2",
         "Judoforce",
         "Yama Arashi Bavikhove Jeugd 1",
      ],
      drinking: ["Vriendenkring brandweer Izegem "],
   },
});

const sortedYears = computed(() => {
   return Object.keys(winners.value).sort((a, b) => b - a);
});

const triggerConfetti = () => {
   confetti({
      particleCount: 200,
      spread: 600,
   });
};

onMounted(() => {
   triggerConfetti();
});
</script>
