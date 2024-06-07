<template>
   <div class="rounded-lg bg-white p-8 shadow-lg">
      <h3 class="text-2xl"><i :class="iconClass"></i> {{ title }}</h3>
      <ol class="mt-4 flex flex-col gap-4">
         <p v-for="(team, index) in teams" :key="index">
            <i :class="medalClasses[index]"></i> {{ team }}
         </p>
      </ol>
   </div>
</template>

<script setup>
const props = defineProps({
   title: String,
   iconClass: String,
   teams: Array,
});

const medalClasses = [
   "fas fa-medal mr-2 text-yellow-500",
   "fas fa-medal mr-2 text-gray-500",
   "fas fa-medal mr-2 text-amber-500",
];
</script>
