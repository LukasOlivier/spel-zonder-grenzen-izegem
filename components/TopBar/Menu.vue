<template>
   <Sidebar v-model:visible="localVisible" header="Spel Zonder Grenzen">
      <nav>
         <ul class="flex flex-col gap-4 p-4">
            <li>
               <NuxtLink to="/">Home</NuxtLink>
            </li>
            <li>
               <NuxtLink to="/#faq">Veelgestelde vragen</NuxtLink>
            </li>
            <li>
               <NuxtLink to="/goede-doelen">Goede doelen</NuxtLink>
            </li>
            <li>
               <NuxtLink to="/spelen">Spelen</NuxtLink>
            </li>

            <li>
               <NuxtLink to="/organisatie">Organisatie</NuxtLink>
            </li>
            <li>
               <NuxtLink to="/info-voor-ploegen">Info voor ploegen</NuxtLink>
            </li>
            <li>
               <NuxtLink class="font-bold" to="/inschrijven"
                  >Inschrijven</NuxtLink
               >
            </li>
            <li>
               <NuxtLink to="/scores">Scores</NuxtLink>
            </li>
         </ul>
      </nav>
   </Sidebar>
</template>

<style scoped>
li {
   border-bottom: 1px solid #ccc;
   padding: 0.5rem 0;
}
</style>

<script setup>
import { ref, watch } from "vue";

const props = defineProps({
   visible: Boolean,
});

const emit = defineEmits(["update:visible"]);

const localVisible = ref(props.visible);

watch(localVisible, (newValue) => {
   emit("update:visible", newValue);
});

watch(
   () => props.visible,
   (newVal) => {
      localVisible.value = newVal;
   },
);
</script>
