<template>
   <div>
      <div class="relative">
         <DataTable
            :value="teams"
            striped-rows
            paginator
            :rows="10"
            :rows-per-page-options="[5, 10, 20, 50]"
            :aria-busy="loading"
         >
            <Column field="Ploegnaam?" header="Ploegnaam" />
            <Column field="Jeugdploeg?" header="Jeugdploeg" />
            <Column field="Gemengde ploeg?" header="Gemengde ploeg" />
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
               <span class="text-sm text-gray-700">Teams ophalen...</span>
            </div>
         </div>
      </div>
   </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const teams = ref([]);
const loading = ref(false);

async function getTeams() {
   loading.value = true;
   try {
      const config = useRuntimeConfig();
      const sheetId = config.public.googleSheetTeamsId;
      const range = config.public.googleSheetTeamsRange;

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
      teams.value = removeEmptyTeams(sheet);
   } catch (err) {
      console.error("Error fetching teams:", err);
   } finally {
      loading.value = false;
   }
}

function removeEmptyTeams(sheet) {
   return sheet.filter((row) => {
      const name = row["Ploegnaam?"] || row["Ploegnaam"] || row["Naam"] || "";
      return name && name !== "Free" && name !== "Canceled";
   });
}

// expose getTeams so parent or devtools can trigger refresh
defineExpose({ getTeams });

onMounted(getTeams);
</script>
