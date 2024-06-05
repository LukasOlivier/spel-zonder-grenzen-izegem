<template>
   <div>
      <h3 class="inline-block text-4xl">
         {{ props.question }}
      </h3>
      <p class="mt-2 text-xl">{{ props.answer }}</p>
   </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
   question: String,
   answer: String,
});
</script>
