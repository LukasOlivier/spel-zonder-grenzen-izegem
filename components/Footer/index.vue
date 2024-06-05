<template>
   <section>
      <FooterSponsors></FooterSponsors>
      <div class="flex justify-between p-12">
         <NuxtImg
            src="/images/logo.webp"
            :placeholder="[50, 25, 75, 5]"
            loading="lazy"
            alt="logo"
            class="hidden h-20 w-40 object-contain md:block"
         />
         <div class="flex w-full items-center justify-between md:w-1/5">
            <ul class="between flex flex-col gap-4 text-lg">
               <li class="flex items-center space-x-2">
                  <i class="fas fa-phone"></i>
                  <a href="tel:+1234567890">+1234567890</a>
               </li>
               <li class="flex items-center space-x-2">
                  <i class="fas fa-envelope"></i>

                  <a href="mailto:szg@gmail.com">szg@gmail.com</a>
               </li>
            </ul>
            <a href="">
               <i class="fab fa-facebook text-5xl"></i>
            </a>
         </div>
      </div>
      <hr class="border-t-2 border-gray-200" />
      <nav>
         <ul class="flex gap-4 px-12 py-5">
            <li>
               <NuxtLink to="/">Home</NuxtLink>
            </li>
            <li>
               <NuxtLink to="/inschrijven">Inschrijven</NuxtLink>
            </li>
            <li>
               <NuxtLink to="/#footer">Contact</NuxtLink>
            </li>
         </ul>
      </nav>
   </section>
</template>
