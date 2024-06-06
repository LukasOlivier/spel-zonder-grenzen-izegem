<template>
   <div>
      <DataTable :value="teams" stripedRows>
         <Column field="Ploegnaam?" header="Ploegnaam"></Column>
         <Column field="Jeugdploeg?" header="Jeugdploeg"></Column>
         <Column field="Gemengde ploeg?" header="Gemengde ploeg"></Column>
         <Column
            field="BETALING OK tot op xxx"
            header="BETALING OK tot op xxx"
         ></Column>
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
      const sheetUrl =
         "https://docs.google.com/spreadsheets/d/e/2PACX-1vQif1bgr9zNz6NSgLRakDX4cF0g16i7YFJbGmruVPxC6cO3kuSJ3oYHiLz68Tettu2utopMiQZZzgSG/pub?gid=0&single=true&output=csv";
      teams.value = await getSheet(sheetUrl);
      console.log("Teams:", teams.value);
   } catch (error) {
      console.error("Error fetching scores:", error);
   }
}

onMounted(getTeams);
</script>
