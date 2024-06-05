<template>
   <div>
      <section
         id="info"
         class="my-40 grid grid-cols-1 gap-8 p-8 md:grid-cols-2"
      >
         <div>
            <h2 class="text-5xl">Wat is er te beleven</h2>
            <p class="mt-4">
               De toegang als toeschouwer is volledig gratis! In een leuke
               omkadering nemen maximum 84 ploegen het tegen elkaar op in 7
               knotsgekke spelen. Velen doen mee voor de fun (teambuilding),
               maar sommigen gaan voluit voor een podiumplaats met bijhorend
               prijzengeld, een trofee en eeuwige roem. Kinderanimatie vanaf 14u
            </p>
         </div>
         <div>
            <h2 class="text-5xl">Eten en drinken</h2>
            <p class="mt-4">
               Doorlopend verkrijgbaar: frietjes, braadworsten, hamburgers,
               ijsjes en diverse dranken. Wij vragen om geen eigen drank mee te
               brengen uit respect voor de organisatie want met de opbrengst
               steunt SZG immers verschillende goede doelen.
            </p>
         </div>
         <NuxtImg
            src="/images/homeInfo.webp"
            alt="sfeerbeeld"
            class="mt-20 h-96 w-full rounded object-cover shadow-lg md:col-span-2"
         />
         <span
            class="seperator col-span-2 my-20 border-b-2 border-gray-200"
         ></span>
         <div>
            <h2 class="text-5xl">Parkeren en verkeerssituatie</h2>
            <div>
               <p class="mt-4">
                  SZG lokt massaal veel deelnemers, toeschouwers en
                  sympathisanten.
               </p>
               <p>
                  Kom bij voorkeur te voet of met de fiets. Toch met de wagen?
                  Probeer dan te carpoolen.
               </p>

               <p class="mt-4 font-bold">Voor een vlot een veilig verloop:</p>
               <ul class="ml-8 flex list-disc flex-col gap-2">
                  <li>Volg de aanwijzingen van onze seingevers.</li>
                  <li>
                     Let goed op de verkeersborden: er is éénrichtingsverkeer en
                     parkeerverbod i.f.v. toegankelijkheid voor hulpdiensten.
                     Respecteer buurtbewoners (garages en opritten!) en
                     geplaatste parkeerverbodsborden.
                  </li>
                  <li>Foutparkeren = takelen !</li>
               </ul>
            </div>
         </div>
         <iframe
            class="h-96 w-full rounded object-cover shadow-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2515.9002545753565!2d3.187000776850634!3d50.907061704381896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3371791c6bbcf%3A0x3d17b2119912e551!2sDomein%20Wallemote-Wolvenhof!5e0!3m2!1snl!2sbe!4v1717579507898!5m2!1snl!2sbe"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
         ></iframe>
      </section>
   </div>
</template>
