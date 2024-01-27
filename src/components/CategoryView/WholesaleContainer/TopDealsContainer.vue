<script setup>
import TopDealsCard from "@/components/CategoryView/WholesaleContainer/TopDealsCard.vue";
</script>

<template>
  <div>
    <div>
      <h1 class="text-3xl font-semibold mb-2 ml-4 mb-8">Top Deals</h1>
      <div class="grid grid-cols-6">
        <TopDealsCard
          imgUrl="https://static-01.daraz.com.bd/p/3e5caab442e3678e447a77494c4846b3.jpg_400x400q75.jpg_.webp"
          title="Good Quality Cotton Hooded Towel"
          price="127"
          previousPrice="350"
        />
        <TopDealsCard
          imgUrl="https://static-01.daraz.com.bd/p/f39230bec6ebdcb4650b4eeeee1df3d0.jpg_400x400q75.jpg_.webp"
          title="Avonee Pants Baby Diaper 3 Midi M"
          price="920"
          previousPrice="1,200"
        />
        <TopDealsCard
          imgUrl="https://static-01.daraz.com.bd/p/5c0838e749554ff4c6fd0b02113c6c06.jpg_400x400q75.jpg_.webp"
          title="Minister One Wash Synthetic Detergent"
          price="199"
          previousPrice="260"
        />
        <TopDealsCard
          imgUrl="https://static-01.daraz.com.bd/p/d7cd276b9e0a2d98737ecad4866d3a78.jpg_400x400q75.jpg_.webp"
          title="Neocare Belt System Baby Diaper L "
          price="1,170"
          previousPrice="1.650"
        />
        <TopDealsCard
          imgUrl="https://static-01.daraz.com.bd/p/9a685e602686871f2dc37e054f93ca1e.jpg_460x460q75.jpg_.webp"
          title="Premium Quality Fat Cutter Detox Powder"
          price="169"
          previousPrice="380"
        />
        <TopDealsCard
          imgUrl="https://static-01.daraz.com.bd/p/f865a8480a964997b5628095561f6668.jpg_460x460q75.jpg_.webp"
          title="Kiss Beauty Lip Serum Essence Ultra"
          price="105"
          previousPrice="300"
        />
      </div>
    </div>
  </div>
</template>

<style></style>
