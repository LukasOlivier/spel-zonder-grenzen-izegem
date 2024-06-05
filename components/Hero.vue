<template>
   <div class="text-white">
      <div class="my-hero relative z-0 w-full">
         <img
            src="/images/hero-sm.webp"
            alt="Hero"
            class="absolute inset-0 z-0 h-full w-full object-cover"
         />
      </div>
      <TopBar class="absolute top-0 z-10" />
      <div class="absolute top-32 z-10 w-full p-4 text-center">
         <h1 class="mb-4 text-5xl uppercase md:text-6xl">{{ pageTitle }}</h1>
         <p
            class="mx-auto w-full text-center font-bold text-white md:w-1/4 md:text-xl"
         >
            {{ description }}
         </p>
      </div>
   </div>
</template>

<script setup>
defineProps({
   pageTitle: String,
   description: String,
});
</script>

<style scoped>
.my-hero {
   height: 30rem;
}
</style>
