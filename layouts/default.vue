<template>
   <div class="flex min-h-screen flex-col bg-gray-100">
      <ScrollTop
         :threshold="100"
         icon="pi pi-arrow-up"
         :pt="{
            root: 'w-2rem h-2rem border-round-sm bg-white',
            icon: {
               class: 'text-base text-black',
            },
         }"
      />
      <main class="flex-1">
         <slot />
      </main>
      <footer>
         <Footer />
      </footer>
   </div>
</template>
