<script setup>
import FlashSaleCard from "@/components/FlashSaleCard.vue";
</script>

<template>
  <div>
    <h1 class="text-2xl text-gray-500 mt-8 mb-2">Flash Sale</h1>
    <div class="bg-white">
      <div class="flex justify-between items-center mb-4 pt-2">
        <div class="flex items-center gap-2">
          <p class="text-lg text-orange ml-8">On Sale Now</p>
          <vue-countdown class="flex gap-4" :time="2 * 24 * 60 * 60 * 1000" v-slot="{ days, hours, minutes, seconds }">
            <div class="bg-orange w-10 px-3 py-3 text-white">{{ hours }}</div>
            <div class="bg-orange w-10 px-3 py-3 text-white">{{ minutes }}</div>
            <div class="bg-orange w-10 px-3 py-3 text-white">{{ seconds }}</div>
          </vue-countdown>
        </div>
        <p class="px-4 py-2 border border-yellow-600 text-xl text-orange mr-4">
          Shop More
        </p>
      </div>
      <hr />
    </div>

    <div class="flex gap-4 bg-white pb-4 pt-2">
      <FlashSaleCard
        ImgUrl="https://static-01.daraz.com.bd/p/eecdf4c096e51fec5ea0cae8e5184b8c.jpg"
        title="ACME Premium Gold Tea 400gm"
        price="165"
        PreviousPrice="210"
        Discount="-21%"
      />
      <FlashSaleCard
        ImgUrl="https://static-01.daraz.com.bd/p/db4ac0f3e2961c145a8109efbb4328d8.jpg"
        title="New Trendy Look Stylish Sunglass"
        price="114"
        PreviousPrice="350"
        Discount="-67%"
      />
      <FlashSaleCard
        ImgUrl="https://static-01.daraz.com.bd/p/63cc7d73356cc6d11b5be0da585794aa.jpg"
        title="Huggies Wonder Pants Medium Sixe"
        price="889"
        PreviousPrice="1275"
        Discount="-30%"
      />
      <FlashSaleCard
        ImgUrl="https://static-01.daraz.com.bd/p/493de246974842a833e430490db31fe5.jpg_300x0q75.webp"
        title="EXS EXS - Glow in the Dark Condom"
        price="100"
        PreviousPrice="200"
        Discount="-50%"
      />
      <FlashSaleCard
        ImgUrl="https://static-01.daraz.com.bd/p/77f74841091f3fb5ea5069eaae5733ad.jpg_300x0q75.webp"
        title="Freedom Regular Flow Popular -8 Pads "
        price="99"
        PreviousPrice="130"
        Discount="-15%"
      />
      <FlashSaleCard
        ImgUrl="https://static-01.daraz.com.bd/p/21c8a8b8f55a7c6d81f0b8490319e5f9.jpg"
        title="Joya Sanitary Napkin -Belt System "
        price="102"
        PreviousPrice="110"
        Discount="-7%"
      />
    </div>
  </div>
</template>
