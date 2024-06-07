<template>
   <div class="text-white">
      <div class="relative z-0 h-screen w-full">
         <NuxtImg
            :placeholder="[50, 25, 75, 5]"
            loading="lazy"
            src="/images/hero2.webp"
            alt="Hero"
            class="absolute inset-0 h-full w-full object-cover"
         />
      </div>
      <TopBar class="absolute top-0 z-10" />
      <div class="absolute top-1/4 z-10 w-full p-4 text-center uppercase">
         <h1 class="mb-4 text-5xl md:text-6xl">Spel Zonder Grenzen</h1>
         <h2 class="text-3xl md:text-4xl">ZATERDAG 13 JULI 2024</h2>
         <h2 class="text-3xl md:text-4xl">DOMEIN WALLEMOTE - IZEGEM</h2>

         <a
            href="/inschrijven"
            class="font-aachen mt-20 inline-block transform rounded-lg bg-orange-500 px-8 py-4 text-3xl uppercase transition duration-300 hover:scale-105 hover:cursor-pointer hover:bg-orange-500"
         >
            Inschrijven
         </a>
         <a
            href="/#info"
            class="mt-12 block text-4xl hover:cursor-pointer"
            aria-label="Meer info"
         >
            <i class="fa fa-chevron-down bounce" />
         </a>
      </div>
   </div>
</template>

<style scoped>
.bounce {
   animation: bounce 2s infinite;
}

@keyframes bounce {
   0%,
   20%,
   50%,
   80%,
   100% {
      transform: translateY(0);
   }
   40% {
      transform: translateY(-30px);
   }
   60% {
      transform: translateY(-15px);
   }
}
</style>
