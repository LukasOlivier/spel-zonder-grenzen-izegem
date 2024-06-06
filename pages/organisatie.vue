<template>
   <div>
      <Hero
         pageTitle="Organisatie"
         description="De organisatie van SZG gebeurt volledig door vrijwillige medewerkers"
      ></Hero>
      <div class="mx-auto my-10 w-11/12 md:w-8/12 lg:w-6/12">
         <h2 class="text-3xl md:text-4xl">Comité Spel Zonder Grenzen</h2>
         <div class="mt-4 flex flex-col gap-4">
            <p>
               Naast de goede doelen die het comité SZG steunt, organiseren we
               gedurende het jaar enkele activiteiten om de ruim 50
               vrijwilligers te bedanken met bv. een barbecue, verrassingsreis,
               nieuwjaarsreceptie en een voorjaarsactiviteit (sneukelfietstocht,
               fotozoektocht, …).
            </p>
            <p>
               Het comité SZG werkt samen met de stedelijke sportraad en stad
               Izegem.
            </p>
            <p>
               Je versterkt graag ons team?
               <a class="underline" href="#contact">Contacteer ons</a>.
            </p>
         </div>

         <hr class="my-12 border-t-2 border-gray-200" />

         <Timeline
            :value="events"
            align="alternate"
            class="customized-timeline pb-12"
         >
            <template #marker="slotProps">
               <span
                  class="w-2rem h-2rem align-items-center justify-content-center border-circle z-1 shadow-1 flex text-white"
                  :style="{ backgroundColor: slotProps.item.color }"
               >
                  <i class="fas fa-circle text-blue-500"></i>
               </span>
            </template>
            <template #content="slotProps">
               <Card class="mt-4">
                  <template #title>
                     <p class="font-aachen text-blue-500">
                        {{ slotProps.item.date }}
                     </p>
                  </template>
                  <template #subtitle>
                     <h2 class="text-2xl text-black md:text-3xl">
                        {{ slotProps.item.title }}
                     </h2>
                  </template>
                  <template #content>
                     <p>
                        {{ slotProps.item.description }}
                     </p>
                  </template>
               </Card>
            </template>
         </Timeline>
      </div>
   </div>
</template>

<script setup>
import { ref } from "vue";

const events = ref([
   {
      date: "2013",
      title: "Voortbestaan",
      description:
         "De ondertussen verouderde ploeg had nood aan verjonging, maar er kwamen geen nieuwe Krekelsjotters bij. Hierdoor beslisten we om niet verder meer deel te nemen aan de voetbalcompetitie. Op vraag van vele deelnemers en sympathisanten zochten we naar een oplossing om het voortbestaan van SZG te verzekeren. De traditie van SZG blijft voortbestaan dankzij de steun van sponsors en vele vrijwilligers.",
   },
   {
      date: "2012",
      title: "Ondertussen",
      description:
         "De Krekelsjotters en vele vrijwilligers organiseerden dit twaalf jaar lang en vormden een hechte ploeg. Ook naast het veld organiseerden wij tal van bijeenkomsten, van een gezellig pintje pakken tot een heerlijk barbecuefestijn.",
   },
   {
      date: "2003",
      title: "Groei",
      description:
         "22 ploegen waagden hun kans en de daaropvolgende jaren bleef het aantal deelnemende ploegen telkens toenemen.",
   },
   {
      date: "2002",
      title: "Ontstaan idee Spel Zonder Grenzen (SZG)",
      description: "SZG begon kleinschalig met slechts 10 ploegen.",
   },
   {
      date: "2000",
      title: " Stichting De Krekelsjotters (liefhebbersvoetbalploeg)",
      description:
         "Naast de nodige sponsoring, zochten we extra fondsen voor de financiering van de sportkledij en sportmateriaal.",
   },
]);
</script>

<style lang="scss" scoped>
@media screen and (max-width: 960px) {
   ::v-deep(.customized-timeline) {
      .p-timeline-event:nth-child(even) {
         flex-direction: row;

         .p-timeline-event-content {
            text-align: left;
         }
      }

      .p-timeline-event-opposite {
         flex: 0;
      }
   }
}
</style>
