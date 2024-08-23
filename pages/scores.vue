<template>
   <div>
      <HeroSection
         page-title="Scores"
         description="Tijdens SZG vind je hier (en in de dranktent) elk uur de bijgewerkte uitslagen."
      />
      <div class="mx-auto my-20 w-11/12 md:w-9/12">
         <h2 class="text-4xl">Scores</h2>
         <p class="mt-4">
            Tijdens SZG vind je hier (en in de dranktent) elk uur de bijgewerkte
            uitslagen. De scores worden verdeeld volgens de positie van het team
            relatief tot het aantal deelnemende teams.
         </p>
         <hr class="my-16 border-t-2 border-gray-200" />
         <ScoresTable />
      </div>
   </div>
</template>
