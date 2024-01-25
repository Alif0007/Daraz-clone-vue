<script setup>
const props = defineProps(["Imgurl", "title"]);
</script>

<template>
  <div>
    <div
      class="cursor-pointer Cat-card h-full px-4 pt-4 bg-white border-r border-b border-gray-200"
    >
      <img class="h-24 mx-auto" :src="Imgurl" alt="" />
      <p class="pt-2 text-lg align-center text-center">{{ title }}</p>
    </div>
  </div>
</template>

<style>
.Cat-card:hover {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 8px;
  transform: scale(1.01);
}
</style>
