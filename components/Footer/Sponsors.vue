<template>
   <div
      class="flex w-full items-center justify-around space-x-4 border-y-2 border-gray-200 bg-white p-4"
   >
      <a
         v-for="sponsor in sponsors"
         :key="sponsor.id"
         :href="sponsor.link"
         target="_blank"
         class="hover:cursor-pointer"
      >
         <NuxtImg
            class="h-20 w-80 object-contain"
            :src="sponsor.image"
            alt="sponsor"
            :placeholder="[50, 25, 75, 5]"
            loading="lazy"
         />
      </a>
   </div>
</template>

<script setup>
import { ref } from "vue";

const sponsors = ref([
   {
      id: 1,
      image: "/images/sponsors/loterij.webp",
      link: "https://www.nationale-loterij.be/nl",
   },
   {
      id: 2,
      image: "/images/sponsors/kempnv.webp",
      link: "https://www.kempnv.be/",
   },
   {
      id: 3,
      image: "/images/sponsors/argenta.webp",
      link: "https://www.argenta.be/nl",
   },
   {
      id: 4,
      image: "/images/sponsors/mediawax.webp",
      link: "https://www.mediawax.be/nl",
   },
]);
</script>
