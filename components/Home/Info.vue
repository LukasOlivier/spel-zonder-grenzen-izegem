<template>
   <div>
      <section id="info" class="grid grid-cols-1 gap-8 py-40 md:grid-cols-2">
         <div>
            <h2 class="text-5xl">Wat is er te beleven</h2>
            <p class="mt-4">
               In een leuke omkadering nemen maximum 84 ploegen het tegen elkaar
               op in 7 knotsgekke luchtkussens. Velen doen mee voor de fun
               (teambuilding), maar sommigen gaan voluit voor een podiumplaats
               met bijhorend prijzengeld, een trofee en eeuwige roem. De toegang
               als toeschouwer is volledig gratis! Kinderanimatie vanaf 14u.
            </p>
         </div>
         <div>
            <h2 class="text-5xl">Eten en drinken</h2>
            <p class="mt-4">
               Doorlopend verkrijgbaar: frietjes, hamburgers, ijsjes en diverse
               dranken. Wij vragen om geen eigen drank mee te brengen uit
               respect voor de organisatie want met de opbrengst steunt SZG
               immers verschillende goede doelen.
            </p>
         </div>
         <span
            class="seperator my-10 border-b-2 border-gray-200 md:col-span-2"
         />
         <div
            class="timeTable flex flex-col items-center justify-center p-12 md:col-span-2"
         >
            <h3 class="text-5xl">Tijdschema</h3>
            <ol
               class="mt-20 flex w-3/4 flex-col justify-between gap-20 text-center text-3xl md:flex-row"
            >
               <li class="flex flex-col items-center justify-center gap-2">
                  <i class="fas fa-clock" />
                  <p class="font-bold text-black">9u00</p>
                  <p class="font-bold text-black">Start spelen</p>
               </li>
               <li class="flex flex-col items-center justify-center gap-2">
                  <i class="fas fa-stopwatch" />
                  <p class="font-bold text-black">18u00</p>
                  <p class="font-bold text-black">Einde spelen</p>
               </li>
               <li class="flex flex-col items-center justify-center gap-2">
                  <i class="fas fa-trophy" />
                  <p class="font-bold text-black">19u00</p>
                  <p class="font-bold text-black">Prijsuitreiking</p>
               </li>
            </ol>
         </div>
         <span
            class="seperator my-10 border-b-2 border-gray-200 md:col-span-2"
         />
         <div>
            <h2 class="break-words text-5xl">Parkeren en verkeer</h2>
            <div>
               <p class="mt-4">
                  SZG lokt massaal veel deelnemers, toeschouwers en
                  sympathisanten.
               </p>
               <p>
                  Kom bij voorkeur te voet of met de fiets. Toch met de wagen?
                  Probeer dan te carpoolen.
               </p>

               <p>
                  Parking voorzien in de Leenstraat en bij de kerk van
                  Bosmolens. Deze bevinden zich op een wandelafstand van 5 à 10
                  minuten van het evenement.
               </p>

               <p class="mt-4 text-xl font-bold">
                  Voor een vlot een veilig verloop:
               </p>
               <ul class="ml-8 mt-2 flex list-disc flex-col gap-2">
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
         <a
            href="https://maps.app.goo.gl/uv1YQHL9xJkevdFDA"
            target="_blank"
            aria-label="Google Maps SZG"
         >
            <NuxtImg
               src="/images/parking.png"
               title="Google Maps SZG"
               class="max-h-96 transform justify-self-center rounded object-contain shadow-lg transition-transform duration-500 ease-in-out hover:scale-125 md:hover:scale-150"
            />
         </a>
      </section>
   </div>
</template>
