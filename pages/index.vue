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
});
</script>
