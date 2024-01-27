<script setup>
const props = defineProps(["title", "imgUrl", "price", "previousPrice"]);
</script>

<template>
  <div>
    <div>
      <div class="cursor-pointer pl-2 pb-4 top-deal-card">
        <div class="relative">
          <img
            class="card-overlay h-48 w-full top-card-image"
            :src="imgUrl"
            alt=""
          />
          <div class="text-3xl font-bold absolute BG"></div>
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

<style>
.BG {
  top: 0;
  background-color: rgb(0, 0, 0, 0.1);
  height: 100%;
  width: 100%;
  display: none;
}
.top-deal-card:hover .BG {
  display: block;
}
</style>
