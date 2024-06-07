<template>
   <div>
      <h2 class="mb-4 text-4xl">Wat is de kostprijs?</h2>
      <DataTable striped-rows :value="prices">
         <Column field="Ploeg" header="Ploeg" />
         <Column field="Inschrijvingsgeld" header="Inschrijvingsgeld" />
         <Column
            field="Consumatiekaarten"
            header="Ontvangen consumatiekaarten"
         />
      </DataTable>
      <span class="mt-4 inline-block text-sm text-gray-500">
         * inclusief verzekering
      </span>
      <hr class="my-16 border-t-2 border-gray-200" >
      <h2 class="mb-4 text-4xl">Definitieve Inschrijving</h2>
      <ul class="flex list-inside list-disc flex-col gap-4">
         <li>
            Schrijf in via
            <a
               :href="config.public.googleFormsUrl"
               class="underline"
               target="_blank"
               aria-label="inschrijvingsformulier"
            >
               het online inschrijvingsformulier</a
            >
            en het ontvang de bevestigingsmail.
         </li>
         <li>
            Betaal binnen 7 dagen op rekening BE51 9731 3872 2562 (Spel Zonder
            Grenzen). Vermeld je ploegnaam.
            <span class="mt-2 italic text-gray-500">
               Let op: Bij niet-betaling binnen 7 dagen kan een andere ploeg je
               plaats innemen.</span
            >
         </li>
      </ul>
   </div>
</template>

<script setup>
import { ref } from "vue";

const config = useRuntimeConfig();

console.log(config);

const prices = ref([
   {
      Ploeg: "Volwassenploeg",
      Inschrijvingsgeld: "€300",
      Consumatiekaarten: "€100",
   },
   {
      Ploeg: "Familieploeg",
      Inschrijvingsgeld: "€300",
      Consumatiekaarten: "€100€",
   },
   {
      Ploeg: "Jeugdploeg",
      Inschrijvingsgeld: "€200",
      Consumatiekaarten: "€50",
   },
]);
</script>
