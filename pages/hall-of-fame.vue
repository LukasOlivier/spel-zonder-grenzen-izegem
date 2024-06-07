<template>
   <div class="pb-32">
      <Hero
         page-title="Hall Of Fame"
         description="De winnaars van elke editie van Spel Zonder Grenzen"
      />
      <div class="mx-auto my-20 w-11/12 md:w-9/12">
         <h2 class="text-4xl">Winaars vorige editie</h2>

         <hr class="my-16 border-t-2 border-gray-200" >

         <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
            <HallOfFameAwardSection
               title="Gewoon klassement"
               icon-class="fas fa-trophy text-yellow-500"
               :teams="winners.regular"
            />
            <HallOfFameAwardSection
               title="Gemengd klassement"
               icon-class="fas fa-trophy text-yellow-500"
               :teams="winners.mixed"
            />
            <HallOfFameAwardSection
               title="Jeugd klassement"
               icon-class="fas fa-trophy text-yellow-500"
               :teams="winners.youth"
            />
            <HallOfFameAwardSection
               title="Zuipbeker"
               icon-class="fas fa-beer text-yellow-500"
               :teams="winners.drinking"
            />
         </div>
      </div>
   </div>
</template>

<script setup>
import { ref } from "vue";
import confetti from "canvas-confetti";

const winners = ref({
   regular: ["Team 1", "Team 2", "Team 3"],
   mixed: ["Team 1", "Team 2", "Team 3"],
   youth: ["Team 1", "Team 2", "Team 3"],
   drinking: ["Team 1", "Team 2", "Team 3"],
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
