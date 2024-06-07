<template>
   <section id="contact">
      <FooterSponsors/>
      <div class="flex justify-between p-12">
         <NuxtImg
            src="/images/logo.webp"
            :placeholder="[50, 25, 75, 5]"
            loading="lazy"
            alt="logo"
            class="hidden h-20 w-40 object-contain md:block"
         />
         <div class="flex w-full items-center justify-between md:w-1/5">
            <ul class="between flex flex-col gap-4 md:text-lg">
               <li class="flex items-center space-x-2">
                  <i class="fas fa-phone"/>
                  <a href="tel:0477272524">0477 27 25 24</a>
               </li>
               <li class="flex items-center space-x-2">
                  <i class="fas fa-envelope"/>

                  <a href="mailto:szg.izegem@gmail.com">szg.izegem@gmail.com</a>
               </li>
               <li class="flex items-center space-x-2">
                  <i class="fas fa-university"/>
                  <p class="inline">IBAN BE51 9731 3872 2562</p>
               </li>
            </ul>
            <a href="https://www.facebook.com/szgizegem" aria-label="Facebook">
               <i class="fab fa-facebook text-5xl"/>
            </a>
         </div>
      </div>
      <hr class="border-t-2 border-gray-200" >
      <nav>
         <ul class="flex gap-4 px-12 py-5">
            <li>
               <NuxtLink to="/">Home</NuxtLink>
            </li>
            <li>
               <NuxtLink to="/inschrijven">Inschrijven</NuxtLink>
            </li>
            <li>
               <NuxtLink to="/scores">Scores</NuxtLink>
            </li>
         </ul>
      </nav>
   </section>
</template>
