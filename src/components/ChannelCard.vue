<script setup>
const props = defineProps(["ImgUrl", "title"]);
</script>

<template>
  <div class="p-2 channel-style flex">
    <div class="">
      <img class="w-18 mb-2" :src="ImgUrl" alt="" />
      <p>{{ title }}</p>
    </div>
  </div>
</template>

<style>
.channel-style p {
  text-align: center;
}
.channel-style:hover {
  color: #f85606;
}
.channel-style {
  position: relative;
  cursor: pointer;
}
.channel-style::after {
  position: absolute;
  content: "";
  height: 50px;
  width: 1px;
  background-color: rgb(182, 177, 177);
  right: -5px;
  top: 45%;
  transform: translateY(-50%);
}
.channel-style:last-child::after {
  display: none;
}
</style>


