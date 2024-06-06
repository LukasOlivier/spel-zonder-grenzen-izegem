<template>
   <div>
      <button
         @click="triggerConfetti"
         class="fixed bottom-4 right-4 rounded bg-blue-500 p-2 text-white"
      >
         Celebrate
      </button>
   </div>
</template>

<script setup>
import confetti from "canvas-confetti";

const triggerConfetti = () => {
   confetti({
      particleCount: 200,
      spread: 60,
   });
};
</script>
