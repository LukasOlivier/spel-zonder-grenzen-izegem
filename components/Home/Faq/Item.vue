<template>
   <div>
      <h3 class="inline-block text-4xl">
         {{ props.question }}
      </h3>
      <p class="mt-2 text-xl">{{ props.answer }}</p>
   </div>
</template>

<script setup>
const props = defineProps({
   question: {
      type: String,
      required: true,
   },
   answer: {
      type: String,
      required: true,
   },
});
</script>
