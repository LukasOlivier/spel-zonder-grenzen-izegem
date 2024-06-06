<template>
   <div>
      <Hero
         pageTitle="Inscrijven"
         description="Lees zeker Info voor ploegen voor alle informatie"
      ></Hero>
      <div class="mx-auto my-10 w-11/12 md:w-8/12 lg:w-6/12">
         <h2 class="text-3xl md:text-4xl">Info</h2>
         <div class="mt-4 flex flex-col gap-4">
            <p>
               De coach is verantwoordelijk voor de correcte gegevens. Na
               inschrijving ontvangt hij/zij een mail met instructies,
               ploeggegevens en een link om eventuele zaken aan te passen.
               Betaal binnen de week om zeker te zijn van je plaats. Bij
               annulering betaalt SZG het inschrijvingsgeld terug als je ons
               vóór de algemene vergadering op de hoogte brengt en we nog een
               andere ploeg vinden. Bij problemen met het
               inschrijvingsformulier,
               <a class="underline" href="#contact">contacteer ons</a>.
            </p>
            <p>
               Correcte en snelle betaling is essentieel (de coach ontvangt ook
               een mail met deze info). Schrijf binnen de week over of een
               andere ploeg kan je plaats innemen. Het inschrijfgeld bedraagt €
               200 (jeugd) of € 300 (volwassenen), inclusief deelname aan een
               uniek teambuildingsevenement gedurende een hele dag, verzekering
               voor iedere speler vermeld op het verzekeringsformulier, en
               consumptiekaarten ter waarde van respectievelijk € 50 of € 100.
               <a href="/info-voor-ploegen" class="underline"
                  >Lees de overige ploegeninformatie na</a
               >.
            </p>
         </div>

         <hr class="my-12 border-t-2 border-gray-200" />
      </div>
      <div class="hero text-white">
         <div
            class="mx-auto flex h-full w-11/12 flex-col items-center justify-center md:w-8/12 lg:w-6/12"
         >
            <h3 class="text-3xl md:text-4xl lg:text-5xl">
               Ben je klaar om je in te schrijven?
            </h3>
            <a
               target="_blank"
               aria-label="Inschrijven voor SZG 2025"
               class="font-aachen mt-10 inline-block rounded-lg border-2 border-white px-6 py-4 text-center text-xl uppercase md:text-3xl"
               href="https://docs.google.com/forms/d/e/1FAIpQLSehMhxXd3-maW1QixGXEjJW9bVYvBpcJ9hQoWibLand9PVZkg/viewform"
               >Inschrijven voor SZG 2025</a
            >
         </div>
      </div>
      <div class="mx-auto my-10 w-11/12 pb-40 md:w-8/12 lg:w-6/12">
         <h3 class="mb-10 text-3xl md:text-4xl">Ingeschreven ploegen</h3>
         <TeamsTable></TeamsTable>

         <hr class="my-12 border-t-2 border-gray-200" />

         <h3 class="mb-10 text-3xl md:text-4xl">
            Verduidelijking kolom betaling
         </h3>
         <ul class="flex flex-col gap-8">
            <li
               v-for="status in statusExplanation"
               class="border-b-2 border-gray-200 pb-2"
            >
               <span
                  class="mr-1 rounded-lg px-2 py-1 text-white"
                  :class="status.color"
                  >{{ status.status }}</span
               >
               <p v-html="status.description" class="mt-2 leading-7"></p>
            </li>
         </ul>
      </div>
   </div>
</template>

<script setup>
import { ref } from "vue";

const statusExplanation = ref([
   {
      status: "OK",
      color: "bg-green-500",
      description: "De betaling is in orde en de ploeg is zeker van deelname.",
   },
   {
      status: "NIET OK",
      color: "bg-red-500",
      description:
         "Betalingen werden nagezien tot op datum 'last check'. We kregen nog geen betaling voor deze ploeg.<br>Schrijf over binnen de week of een andere ploeg kan je plaats innemen.<br> BE51 9731 3872 2562 (Spel Zonder Grenzen) <br>Mededeling = je ploegnaam!",
   },
   {
      status: "RESERVELIJST",
      color: "bg-yellow-500",
      description:
         "Schrijf niets over! Je staat op de reservelijst. <br>Enkel wanneer er ploegen (met volgnr.) afvallen uit de lijst, contacteren we de coach om de verdere inschrijving/betaling te bespreken.",
   },
   {
      status: "LEEG VELD",
      color: "bg-blue-500",
      description:
         "We moeten de betalingen nog nazien. Schrijf over binnen de week of een andere ploeg kan je plaats innemen.",
   },
]);
</script>

<style scoped>
.hero {
   background-image: url("/images/inschrijven.webp");
   background-size: cover;
   background-position: center;
   height: 50vh;
}
</style>
