<template>
   <div>
      <DataTable :value="teams" striped-rows>
         <Column field="Ploegnaam?" header="Ploegnaam" />
         <Column field="Jeugdploeg?" header="Jeugdploeg" />
         <Column field="Gemengde ploeg?" header="Gemengde ploeg" />
         <Column
            field="BETALING OK tot op xxx"
            header="BETALING OK tot op xxx"
         />
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
      console.log("Teams:", teams.value);
   } catch (error) {
      console.error("Error fetching scores:", error);
   }
}

onMounted(getTeams);
</script>
