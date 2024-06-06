<template>
   <div>
      <Hero
         pageTitle="Goede doelen"
         description="Met de opbrengst van Spel Zonder Grenzen steunen wij jaarlijks verschillende goede doelen."
      ></Hero>
      <div class="mx-auto my-20 w-11/12 md:w-8/12">
         <h2 class="text-4xl">Goede doelen</h2>
         <div class="mt-4 flex flex-col gap-2">
            <p>
               Wij spreiden ons budget over verschillende doelgroepen:
               dierenwelzijn, mensen met een beperking, geneeskundig onderzoek,
               plaatselijke initiatieven, … Ook jij kan deel uitmaken van dit
               team!
            </p>
            <p>
               Daarnaast organiseert SZG nog enkele activiteiten voor zijn meer
               dan 50 vrijwilligers: een verrassingsreis, nieuwjaarsreceptie en
               een voorjaarsactiviteit (bv. sneukelfietstocht, fotozoektocht,
               …).
            </p>
            <p>Voorstel voor een goed doel? Contacteer ons.</p>
         </div>

         <hr class="my-16 border-t-2 border-gray-200" />
         <div v-for="year in sortedYears" :key="year">
            <h2 class="mb-4 mt-8 border-b-2 border-gray-200 pb-2 text-3xl">
               {{ year }}
            </h2>
            <TabView>
               <TabPanel
                  v-for="cause in goodCauses[year]"
                  :key="cause.name"
                  :header="cause.name"
               >
                  <div
                     class="flex flex-col gap-14 border-t border-gray-200 pt-4 md:flex-row"
                  >
                     <div class="w-full md:w-1/6">
                        <img :src="cause.image" alt="Goed doel" />
                     </div>
                     <div class="w-full md:w-2/3">
                        <p>{{ cause.description }}</p>
                     </div>
                  </div>
               </TabPanel>
            </TabView>
         </div>
      </div>
   </div>
</template>

<script setup>
import TabView from "primevue/tabview";
import TabPanel from "primevue/tabpanel";

import { ref } from "vue";

const goodCauses = ref({
   2015: [
      {
         name: "Jomba",
         amount: 500,
         image: "/images/causes/jomba.webp",
         description:
            "In juli schonk SZG het Jomba-kamp 'Westmalle 4' € 500. Jomba is een afdeling van Kazou. JOMBA = vakanties voor JOngeren Met Bijzondere Aandacht. Dat zijn jongeren met een handicap, autisme, gedragsproblemen, maar ook zij die net dat beetje extra aandacht nodig hebben (die bedplassen of hoogsensitief zijn). Hier kan je het volledige verslag (Verslag kamp Westmalle 4) nalezen.",
      },
      {
         name: "VZW Nally's Papegaaienopvang",
         amount: 500,
         image: "/images/causes/nallys-papegaaienopvang.webp",
         description:
            "In september schonk SZG aan het dierenasiel VZW Nally's Papegaaienopvang € 500. De papegaaienopvang is gelegen in Oedelem vlakbij het LTI (de landbouwschool). Men is nog volop bezig aan de opbouw van dit opvangcentrum voor verwaarloosde papegaaien. Het is de bedoeling om de natuurlijke habitat van de vogels na te bouwen in serres. Natuurlijk zijn donaties meer dan welkom om de noodzakelijke bouwmaterialen te kunnen kopen. Storten kan op het rekeningnr. BE66 0689 0058 8443",
      },
      {
         name: "Kinderkankerfonds",
         amount: 805,
         image: "/images/causes/kinderkankerfonds.webp",
         description:
            "In november kochten we voor € 805 'Champagne voor het goede doel' aan Het Kinderkankerfonds: Dit fonds zet zich in voor een betere levenskwaliteit van kinderen met kanker en hun gezinnen. Iedere vrijwillige medewerker van SZG kreeg zo'n unieke fles champagne. Wil je ook champagne kopen? Contacteer dan Stefaan Blancke 0477/929270.",
      },
      {
         name: "VZW 't Kringske",
         amount: 500,
         image: "/images/causes/kringske.webp",
         description:
            "In december schonken we € 500 aan VZW 't Kringske. Dit is een Vereniging waar Armen het Woord Nemen, gevestigd in Izegem. Zowel armen als niet-armen werken er rond de problematiek en de bekendmaking van armoede. Zij ontmoeten elkaar wekelijks op donderdagnamiddag om ervaringen uit te wisselen. Op die manier wordt een kans gecreëerd om mensen uit hun isolement te laten breken. De groep telt ongeveer 25 actieve leden.",
      },
   ],
   2016: [
      {
         name: "Allimpic",
         amount: 500,
         image: "/images/causes/allimpic.webp",
         description:
            "In juli schonk SZG € 500 aan Allimpic. Deze Izegemse vereniging organiseert allerlei activiteiten voor mensen met een beperking. Elke zaterdag hebben ze hun wekelijkse zwemuurtje van 12u30-13u30 in de Krekel te Izegem met daarna meestal een sportactiviteit van 14u00 tot 15u00. Naast deze vaste wekelijkse afspraak organiseert men nog extra activiteiten zoals wandelingen, bowling, eindejaarsfeest, …",
      },
      {
         name: "VZW De Mucovereniging",
         amount: 500,
         image: "/images/causes/mucovereniging.webp",
         description:
            "De Mucovereniging vzw is een vereniging van en voor mensen met mucoviscidose en hun families. Ze zetten zich in voor een beter, langer en gelukkiger leven voor alle mucopatiënten. De eerste prioriteit is dan ook de kinderen, jongeren en volwassenen met muco in ons land bij te staan in hun dagelijkse strijd tegen de ziekte. Mucoviscidose is de meest voorkomende levensbedreigende erfelijke ziekte in ons land. Taai slijm blokkeert de ademhaling en spijsvertering. 1 op 20 Belgen is drager en kan de ziekte dus doorgeven aan zijn of haar kind. Elke week wordt ergens in ons land een kind met muco geboren. De vooruitgang van het wetenschappelijk onderzoek laat hopen dat er in de (nabije) toekomst een middel gevonden wordt dat de ziekte kan stoppen, maar ondertussen besteden mensen met muco gemiddeld 3 à 4 uur per dag aan hun behandeling. Niet om te genezen, maar om symptomen te verlichten en waar mogelijk te voorkomen.",
      },
      {
         name: "Kinderkankerfonds",
         amount: 920,
         image: "/images/causes/kinderkankerfonds.webp",
         description:
            "In november kochten we voor € 920 'Champagne voor het goede doel' aan Het Kinderkankerfonds: Dit fonds zet zich in voor een betere levenskwaliteit van kinderen met kanker en hun gezinnen. Iedere vrijwillige medewerker van SZG kreeg zo'n unieke fles champagne. Wil je ook champagne kopen? Contacteer dan Stefaan Blancke 0477/929270.",
      },
      {
         name: "Open Cirkel",
         amount: 500,
         image: "/images/causes/opencirkel.webp",
         description:
            "Open Cirkel is een feitelijke vereniging opgericht in 2005 door ouders uit Izegem en omstreken met een kind met een autismespectrumstoornis. Eén van de doelstellingen is het verhogen van sociale netwerkvorming binnen de Izegemse samenleving waardoor het sociaal draagvlak van deze kinderen kan aangroeien. Bewustwording, begrip en aandacht voor de problematiek van deze kinderen binnen andere verenigingen aanwakkeren en in de samenleving in het algemeen.",
      },
   ],
   2017: [
      {
         name: "Allimpic",
         amount: 500,
         image: "/images/causes/allimpic.webp",
         description:
            "In juli schonk SZG € 500 aan Allimpic. Deze Izegemse vereniging organiseert allerlei activiteiten voor mensen met een beperking. Elke zaterdag hebben ze hun wekelijkse zwemuurtje van 12u30-13u30 in de Krekel te Izegem met daarna meestal een sportactiviteit van 14u00 tot 15u00. Naast deze vaste wekelijkse afspraak organiseert men nog extra activiteiten zoals wandelingen, bowling, eindejaarsfeest, …",
      },
      {
         name: "Kinderkankerfonds",
         amount: 1150,
         image: "/images/causes/kinderkankerfonds.webp",
         description:
            "In november kochten we voor € 1.150 'Champagne voor het goede doel'  aan Het Kinderkankerfonds: Dit fonds zet zich in voor een betere levenskwaliteit van kinderen met kanker en hun gezinnen. Iedere vrijwillige medewerker van SZG kreeg zo'n unieke fles champagne. Wil je ook champagne kopen? Contacteer dan Stefaan Blancke 0477/929270.",
      },
      {
         name: "Urban Move Izegem",
         amount: 1000,
         image: "/images/causes/urban-move.webp",
         description:
            "Zondag 22 oktober organiseerde stad Izegem een URBAN MOVE (loop en wandeling) t.v.v. Het Kinderkankerfonds. Zowel de deelnemers aan de run (3, 5 of 10 km) als de walk (8 km) liepen door tal van publieke en private gebouwen. Na afloop was er op het prachtige kasteeldomein Blauwhuis een after-move party waarop SZG een cheque van € 1.000 heeft afgegeven.",
      },
   ],
   2019: [
      {
         name: "Allimpic",
         amount: 250,
         image: "/images/causes/allimpic.webp",
         description:
            "SZG schonk € 250 aan Allimpic. Deze Izegemse vereniging organiseert allerlei activiteiten voor mensen met een beperking. Elke zaterdag hebben ze hun wekelijkse zwemuurtje van 12u30-13u30 in de Krekel te Izegem met daarna meestal een sportactiviteit van 14u00 tot 15u00. Naast deze vaste wekelijkse afspraak organiseert men nog extra activiteiten zoals wandelingen, bowling, eindejaarsfeest, ...",
      },
      {
         name: "Wat Als Liefde Spreekt",
         amount: 1250,
         image: "/images/causes/wat-als-liefde-spreekt.webp",
         description:
            "SZG schonk € 1250 aan Wat Als Liefde Spreekt. Deze vzw zet zich in voor mensen met ALS.",
      },
      {
         name: "FurEverCatz asiel Ardooie",
         amount: 250,
         image: "/images/causes/furevercatz.webp",
         description:
            "Erkend asiel voor katten, konijnen en knaagdieren met een groot hart voor dieren!",
      },
   ],
});

const sortedYears = computed(() =>
   Object.keys(goodCauses.value).sort((a, b) => b - a),
);
</script>
