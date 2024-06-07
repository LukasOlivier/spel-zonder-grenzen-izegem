<template>
   <div>
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

const scores = ref([]);
const { getSheet } = useSheet();

async function getScores() {
   try {
      const config = useRuntimeConfig();
      const sheet = await getSheet(config.public.scoresExcelUrl);
      scores.value = removeEmptyRows(sheet);
   } catch (error) {
      console.error("Error fetching scores:", error);
   }
}

function removeEmptyRows(sheet) {
   // Remove empty rows and rows where team name is 'free'
   return sheet.filter(
      (row) => row.Naam && row.Naam !== "Free" && row.Naam !== "Canceled",
   );
}

onMounted(getScores);
</script>
