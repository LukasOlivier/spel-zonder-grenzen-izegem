<template>
   <div>
      <HeroSection
         page-title="Inscrijven"
         description="Lees zeker de info na vooraleer je inschrijft!"
      />
      <div class="mx-auto my-10 w-11/12 md:w-8/12 lg:w-6/12">
         <h2 class="text-3xl md:text-4xl">Info</h2>
         <div class="mt-4 flex flex-col gap-4">
            <p>
               De coach is verantwoordelijk voor de correcte gegevens. Na
               inschrijving ontvangt hij/zij een mail met instructies,
               ploeggegevens en een link om eventuele zaken aan te passen.
               Betaal binnen de week om zeker te zijn van je plaats. Bij
               problemen met het inschrijvingsformulier,
               <a class="underline" href="#contact">contacteer ons</a>.
            </p>
            <p>
               Correcte en snelle betaling is essentieel (de coach ontvangt ook
               een mail met deze info). Schrijf binnen de week over of een
               andere ploeg kan je plaats innemen. Het inschrijfgeld bedraagt €
               200 (jeugd) of €300 (volwassen & familieploeg), inclusief
               deelname aan een uniek teambuildingsevenement gedurende een hele
               dag, verzekering voor iedere speler vermeld op het
               verzekeringsformulier, en consumptiekaarten als waarborg ter
               waarde van respectievelijk €50 of €100.
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
               class="font-aachen mt-10 inline-block rounded-lg border-2 border-white px-6 py-4 text-center text-xl uppercase transition-colors duration-300 hover:bg-white hover:text-black md:text-3xl"
               :href="config.public.googleFormsUrl"
               >Inschrijven voor SZG {{ thisYear }}</a
            >
         </div>
      </div>
      <div class="mx-auto my-10 w-11/12 pb-40 md:w-8/12 lg:w-6/12">
         <h3 class="mb-10 text-3xl md:text-4xl">Ingeschreven ploegen</h3>
         <TeamsTable />

         <hr class="my-12 border-t-2 border-gray-200" />

         <h3 class="mb-10 text-3xl md:text-4xl">
            Staat uw ploeg niet in de lijst?
         </h3>
         <p>
            Het kan zijn dat de betaling nog niet nagekeken is. Als je zeker
            bent dat je betaald hebt, en na lange tijd nog steeds niet op de
            lijst staat, neem dan contact op.
         </p>
      </div>
   </div>
</template>

<script setup>
useHead({
   title: "Inscrijven",
   meta: [
      {
         name: "description",
         content:
            "Lees hier alle info omtrent inschrijven voor Spel Zonder Grenzen.",
      },
   ],
   link: [{ rel: "canonical", href: "https://szg.be/inschrijven" }],
});

const config = useRuntimeConfig();

const thisYear = ref(new Date().getFullYear());
</script>

<style scoped>
.hero {
   background-image: url("/images/inschrijven.webp");
   background-size: cover;
   background-position: center;
   height: 50vh;
}
</style>
