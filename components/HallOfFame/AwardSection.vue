<template>
   <div class="rounded-lg bg-white p-8 shadow-lg">
      <h3 class="text-2xl"><i :class="iconClass" /> {{ title }}</h3>
      <ol class="mt-4 flex flex-col gap-4">
         <li
            v-for="(team, index) in teams"
            :key="index"
            class="flex items-center font-sans text-base font-normal"
         >
            <i :class="medalClasses[index]" /> {{ team }}
         </li>
      </ol>
   </div>
</template>

<script setup>
defineProps({
   title: {
      type: String,
      required: true,
   },
   iconClass: {
      type: String,
      required: true,
   },
   teams: {
      type: Array,
      required: true,
   },
});

const medalClasses = [
   "fas fa-medal mr-2 text-yellow-500",
   "fas fa-medal mr-2 text-gray-500",
   "fas fa-medal mr-2 text-amber-500",
];
</script>
