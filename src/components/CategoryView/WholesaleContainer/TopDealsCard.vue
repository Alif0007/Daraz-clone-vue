<script setup>
const props = defineProps(["title", "imgUrl", "price", "previousPrice"]);
</script>

<template>
  <div>
    <div>
      <div class="pl-2 pb-4">
        <div class="">
          <img class="h-48 w-full top-card-image" :src="imgUrl" alt="" />
        </div>
        <p class="text-lg pl-2">{{ title }}</p>
        <div class="flex items-baseline pl-2">
          <p class="text-3xl text-orange font-bold">৳</p>
          <p class="text-xl text-orange font-bold mt-10">{{ price }}</p>
        </div>
        <p class="line-through text-gray-500 pl-2">{{ previousPrice }}</p>
        <p
          class="bg-orange text-center mx-2 py-0.5 mt-2 rounded text-lg text-white font-bold"
        >
          Shop Now
        </p>
      </div>
    </div>
  </div>
</template>

<style></style>
