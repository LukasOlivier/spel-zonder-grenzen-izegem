<template>
   <div class="flex w-full items-center justify-between p-4">
      <NuxtLink class="inline-block h-16" to="/">
         <NuxtImg src="/images/logo.webp" alt="Logo" class="h-full" />
      </NuxtLink>
      <TopBarMenuButton class="hover:cursor-pointer" @click="showSidebar" />
      <TopBarMenu
         :visible="isVisible"
         class="z-20"
         @update:visible="updateVisibility"
      />
   </div>
</template>

<script setup>
import { ref } from "vue";

const isVisible = ref(false);

const showSidebar = () => {
   isVisible.value = !isVisible.value;
};

const updateVisibility = (value) => {
   isVisible.value = value;
};
</script>
