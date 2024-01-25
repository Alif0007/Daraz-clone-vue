<script setup>
const props = defineProps(["ImgUrl", "title"]);
</script>

<template>
  <div class="p-2 flex">
    <div>
      <img class="w-18 mb-2" :src="ImgUrl" alt="" />
      <p>{{ title }}</p>
    </div>
  </div>
</template>
