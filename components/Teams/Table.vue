<template>
   <div>
      <DataTable
         :value="teams"
         striped-rows
         paginator
         :rows="10"
         :rows-per-page-options="[5, 10, 20, 50]"
      >
         <Column field="Ploegnaam?" header="Ploegnaam" />
         <Column field="Jeugdploeg?" header="Jeugdploeg" />
         <Column field="Gemengde ploeg?" header="Gemengde ploeg" />
      </DataTable>
   </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useSheet } from "~/composables/useSheet";

const teams = ref([]);
const { getSheet } = useSheet();

async function getTeams() {
   try {
      const config = useRuntimeConfig();
      teams.value = await getSheet(config.public.teamsExcelUrl);
   } catch (error) {
      console.error("Error fetching scores:", error);
   }
}

onMounted(getTeams);
</script>
