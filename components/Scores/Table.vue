<template>
   <div>
      <div class="mb-4 flex items-center justify-between">
         <button
            @click="getScores"
            :disabled="loading"
            class="flex items-center gap-2 rounded bg-blue-600 px-4 py-2 text-white shadow transition-colors duration-150 hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
         >
            <svg
               xmlns="http://www.w3.org/2000/svg"
               fill="none"
               viewBox="0 0 24 24"
               stroke-width="1.5"
               stroke="currentColor"
               class="h-5 w-5"
               :class="{ 'animate-spin': loading }"
            >
               <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.5 12a7.5 7.5 0 0113.36-4.64m0 0V3m0 4.36H17M19.5 12a7.5 7.5 0 01-13.36 4.64m0 0V21m0-4.36H7"
               />
            </svg>
            Vernieuwen
         </button>
         <div v-if="lastUpdated" class="text-sm text-gray-600">
            Laatst bijgewerkt: {{ lastUpdated }}
         </div>
      </div>
      <DataTable
         sort-field="Totaal"
         :sort-order="-1"
         :value="scores"
         striped-rows
      >
         <Column field="Naam" sortable header="Ploegnaam" />
         <Column field="Totaal" sortable header="Totaal" />
         <Column field="A" sortable header="A" />
         <Column field="B" sortable header="B" />
         <Column field="C" sortable header="C" />
         <Column field="D" sortable header="D" />
         <Column field="E" sortable header="E" />
         <Column field="F" sortable header="F" />
         <Column field="G" sortable header="G" />
         <Column field="Finale" sortable header="Finale" />
      </DataTable>
   </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useSheet } from "~/composables/useSheet";

const { getSheet } = useSheet();
const scores = ref([]);
const loading = ref(false);
const lastUpdated = ref(null);

async function getScores() {
   loading.value = true;
   try {
      const config = useRuntimeConfig();
      const result = await getSheet(config.public.scoresExcelUrl);
      scores.value = removeEmptyRows(result.data);
      lastUpdated.value = result.timestamp;
      console.log("Scores fetched successfully:", scores.value);
   } catch (error) {
      console.error("Error fetching scores:", error);
   } finally {
      loading.value = false;
   }
}

function removeEmptyRows(sheet) {
   // Remove empty rows and rows where team name is 'free'
   return sheet.filter(
      (row) => row.Naam && row.Naam !== "Free" && row.Naam !== "Canceled",
   );
}

// expose getScores to template
defineExpose({ getScores });

onMounted(getScores);
</script>
