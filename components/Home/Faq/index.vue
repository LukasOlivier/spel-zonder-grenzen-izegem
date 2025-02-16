<template>
   <section id="faq" class="flex flex-col py-40">
      <h2
         class="inline-block border-b-8 border-blue-600 pb-2 text-5xl md:self-center"
      >
         Veelgestelde vragen
      </h2>
      <div class="mt-20 flex flex-col">
         <div v-for="faq in faqs" :key="faq.id">
            <HomeFaqItem
               :key="faq.id"
               :question="faq.question"
               :answer="faq.answer"
            />
            <span class="my-10 block border-b-2 border-gray-200" />
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
         "Inschrijven kan via de website. Klik op de knop 'inschrijven' bovenaan de pagina en volg de stappen.",
   },
   {
      id: 2,
      question: "Hoef je op voorhand de deelnemers door te geven?",
      answer:
         "Nee, dat hoeft niet. Je geeft alle deelnemers door op de dag van het evenement, voor 9u00.",
   },
   {
      id: 3,
      question: "Wat kost het om deel te nemen?",
      answer:
         "Deelname kost €300 voor een volwassenen / familieploeg en €200 voor een jeugdploeg. Hierin zit de deelname aan het tornooi, verzekering en waarborg in vorm van consumatiekaarten inbegrepen.",
   },
   {
      id: 4,
      question: "Wat is de minimumleeftijd om deel te nemen?",
      answer:
         "De minimumleeftijd is 16 jaar. Voor de jeugdploegen is dit 12 jaar. Bij een familieploeg moet minstens 2 kinderen tussen 10 en 15 jaar zijn.",
   },
   {
      id: 5,
      question: "Waarom staat onze ploeg nog niet op de deelnemerslijst?",
      answer:
         "Het kan zijn dat de betaling nog niet nagekeken is. Als je zeker bent dat je betaald hebt, en na lange tijd nog steeds niet op de lijst staat, neem dan contact op.",
   },
]);
</script>
