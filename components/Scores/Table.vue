<template>
   <div>
      <div class="mb-4 flex items-center justify-end">
         <button
            class="flex items-center gap-2 rounded bg-blue-600 px-4 py-2 text-white shadow transition-colors duration-150 hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
            :disabled="loading"
            @click="getScores"
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
      </div>
      <div class="relative">
         <DataTable
            sort-field="Totaal"
            :sort-order="-1"
            :value="scores"
            striped-rows
            :aria-busy="loading"
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

         <div
            v-if="loading"
            class="absolute inset-0 z-10 flex items-center justify-center bg-white/60"
            aria-hidden="false"
         >
            <div
               class="flex items-center gap-3 rounded-md bg-white/90 px-4 py-2 shadow"
            >
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="h-6 w-6 animate-spin text-gray-700"
               >
                  <path
                     stroke-linecap="round"
                     stroke-linejoin="round"
                     d="M4.5 12a7.5 7.5 0 0113.36-4.64m0 0V3m0 4.36H17M19.5 12a7.5 7.5 0 01-13.36 4.64m0 0V21m0-4.36H7"
                  />
               </svg>
               <span class="text-sm text-gray-700">Scores ophalen...</span>
            </div>
         </div>
      </div>
   </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const scores = ref([]);
const loading = ref(false);

async function getScores() {
   loading.value = true;
   try {
      const config = useRuntimeConfig();
      const sheetId = config.public.googleSheetScoresId;
      const range = config.public.googleSheetScoresRange;

      if (!sheetId || !range) {
         throw new Error("Missing sheetId or range in runtime config");
      }

      const url = `/api/sheet?sheetId=${encodeURIComponent(
         sheetId,
      )}&range=${encodeURIComponent(range)}`;

      const res = await fetch(url);
      if (!res.ok) {
         const text = await res.text().catch(() => "<no body>");
         console.error("/api/sheet returned non-OK:", res.status, text);
         throw new Error(`Failed to fetch sheet: ${res.status}`);
      }

      const payload = await res.json();

      const sheet = payload?.data ?? [];
      scores.value = removeEmptyRows(sheet);
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
