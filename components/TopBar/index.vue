<template>
   <div class="flex w-full items-center justify-between p-4">
      <NuxtLink class="inline-block h-12" to="/">
         <NuxtImg src="/images/logo.webp" alt="Logo" class="h-12" />
      </NuxtLink>
      <TopBarMenuButton @click="showSidebar" class="hover:cursor-pointer" />
      <TopBarMenu
         :visible="isVisible"
         @update:visible="updateVisibility"
         class="z-20"
      ></TopBarMenu>
   </div>
</template>

<script setup>
import { ref } from "vue";

const isVisible = ref(false);

const showSidebar = () => {
   console.log("showSidebar");
   isVisible.value = !isVisible.value;
};

const updateVisibility = (value) => {
   isVisible.value = value;
};
</script>
