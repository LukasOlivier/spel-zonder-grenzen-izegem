<template>
   <section id="faq" class="flex flex-col py-40">
      <h2
         class="inline-block border-b-8 border-blue-600 pb-2 text-5xl md:self-center"
      >
         Veelgestelde vragen
      </h2>
      <div class="mt-20 flex flex-col">
         <div v-for="faq in faqs">
            <HomeFaqItem
               :key="faq.id"
               :question="faq.question"
               :answer="faq.answer"
            />
            <span class="my-10 block border-b-2 border-gray-200"></span>
         </div>
      </div>
   </section>
</template>

<script setup>
import { ref } from "vue";

const faqs = ref([
   {
      id: 1,
      question: "Hoe kan ik inschrijven?",
      answer:
         "Inschrijven kan via de website. Klik op de knop 'inschrijven' en vul het formulier in.",
   },
   {
      id: 2,
      question: "Hoef je op voorhand de deeelnemers door te geven?",
      answer:
         "Nee, dat hoeft niet. Je kan op de dag zelf nog deelnemers toevoegen of verwijderen.",
   },
   {
      id: 3,
      question: "Kan ik mijn inschrijving annuleren?",
      answer:
         "Ja, dat kan. Stuur een mailtje naar szg@gmail.com met je naam en ploegnaam.",
   },
   {
      id: 4,
      question: "Wat kost het om deel te nemen?",
      answer:
         "Deelname kost €300 voor een volwassenenploeg en €200 voor een jeugdploeg.",
   },
   {
      id: 5,
      question: "Wat is de minimumleeftijd om deel te nemen?",
      answer:
         "De minimumleeftijd is 16 jaar. Voor de jeugdploegen is dit 12 jaar.",
   },
]);
</script>
