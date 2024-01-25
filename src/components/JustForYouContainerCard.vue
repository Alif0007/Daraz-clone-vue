<script setup>
const props = defineProps([
  "title",
  "ImgUrl",
  "price",
  "previousPrice",
  "discount",
  "reviews",
]);
</script>

<template>
  <div>
    <div class="flash-card pb-4 bg-white cursor-pointer">
      <img class="h-48 w-full mb-4" :src="ImgUrl" alt="" />
      <p class="text-base pl-2">{{ title }}</p>
      <div class="flex pl-2 items-baseline">
        <p class="text-3xl text-orange">৳</p>
        <p class="text-xl text-orange">{{ price }}</p>
      </div>
      <div class="flex pl-2 gap-2">
        <p class="line-through text-gray-500">{{ previousPrice }}</p>
        <p class="">{{ discount }}</p>
      </div>
      <div class="pl-2">
        <div class="flex mt-1">
          <div class="flex">
            <img class="h-4" src="../assets/star.png" alt="" />
            <img class="h-4" src="../assets/star.png" alt="" />
            <img class="h-4" src="../assets/star.png" alt="" />
            <img class="h-4" src="../assets/star.png" alt="" />
            <img class="h-4" src="../assets/star.png" alt="" />
          </div>
          <p class="text-gray-400">({{ reviews }})</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.flash-card:hover {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 8px;
}
</style>
