<template>
   <Sidebar header="Spel Zonder Grenzen">
      <nav>
         <ul class="flex flex-col gap-4 p-4">
            <li>
               <NuxtLink to="/" active-class="bold">Home</NuxtLink>
            </li>
            <li>
               <NuxtLink to="/#faq" active-class="bold"
                  >Veelgestelde vragen</NuxtLink
               >
            </li>
            <li>
               <NuxtLink to="/goede-doelen" active-class="bold"
                  >Goede doelen</NuxtLink
               >
            </li>
            <li>
               <NuxtLink to="/spelen" active-class="bold">Spelen</NuxtLink>
            </li>
            <li>
               <NuxtLink to="/organisatie" active-class="bold"
                  >Organisatie</NuxtLink
               >
            </li>
            <li>
               <NuxtLink to="/info-voor-ploegen" active-class="bold"
                  >Info voor ploegen</NuxtLink
               >
            </li>
            <li>
               <NuxtLink to="/inschrijven" active-class="bold"
                  >Inschrijven</NuxtLink
               >
            </li>
            <li>
               <NuxtLink to="/scores" active-class="bold">Scores</NuxtLink>
            </li>
         </ul>
      </nav>
   </Sidebar>
</template>
<style scoped>
li {
   border-bottom: 1px solid #ccc;
   padding: 0.5rem 0;
}

.bold {
   font-weight: bold;
}
</style>
