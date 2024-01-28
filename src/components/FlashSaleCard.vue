<script setup>

import { useRouter } from 'vue-router';

const router = useRouter()

function productView(){
  router.push({
    path: '/product-view',
  })
  console.log('click')
}


const props = defineProps([
  "title",
  "ImgUrl",
  "price",
  "PreviousPrice",
  "Discount",
]);
</script>

<template>
  <div @click="productView">
    <div class="flash-card pl-2 pb-4">
      <img class="h-44 w-44" :src="ImgUrl" alt="" />
      <p class="text-lg">{{ title }}</p>
      <div class="flex items-baseline">
        <p class="text-3xl text-orange">৳</p>
        <p class="text-xl text-orange">{{ price }}</p>
      </div>
      <div class="flex gap-2">
        <p class="line-through text-gray-500">{{ PreviousPrice }}</p>
        <p>{{ Discount }}</p>
      </div>
    </div>
  </div>
</template>

<style>
.flash-card:hover {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 8px;
}
</style>
