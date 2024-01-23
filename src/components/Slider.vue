<template>
  <swiper
    :modules="modules"
    :slides-per-view="1"
    :space-between="0"
    navigation
    :pagination="{ clickable: true }"
  >
    <swiper-slide
      ><img
        class="img-style rounded-xl"
        src="https://icms-image.slatic.net/images/ims-web/558b315f-7f06-4cb9-9295-99c762e9acf0.jpg_1200x1200.jpg"
        alt=""
    /></swiper-slide>
    <swiper-slide
      ><img
        class="img-style rounded-xl"
        src="https://icms-image.slatic.net/images/ims-web/b3aa0db7-4e22-47c6-b5ce-a343d9451d30.jpg"
        alt=""
    /></swiper-slide>
    <swiper-slide
      ><img
        class="img-style rounded-xl"
        src="https://icms-image.slatic.net/images/ims-web/48fc71e3-1eca-461c-9553-2ae4cae328fb.jpg"
        alt=""
    /></swiper-slide>
    <swiper-slide
      ><img
        class="img-style rounded-xl"
        src="https://icms-image.slatic.net/images/ims-web/0a2046a1-23c0-4a79-b36d-11b872a1d299.jpg"
        alt=""
    /></swiper-slide>
    <swiper-slide
      ><img
        class="img-style rounded-xl"
        src="https://icms-image.slatic.net/images/ims-web/eded4143-9096-4c42-8633-172f3cc947dc.jpg"
        alt=""
    /></swiper-slide>
    <swiper-slide
      ><img
        class="img-style rounded-xl"
        src="https://icms-image.slatic.net/images/ims-web/2e37dab5-9019-44fa-9d07-b52440edac38.jpg"
        alt=""
    /></swiper-slide>
    <swiper-slide
      ><img
        class="img-style rounded-xl"
        src="https://icms-image.slatic.net/images/ims-web/5ac91aa7-a23b-4706-8119-070ce97d3383.jpg"
        alt=""
    /></swiper-slide>
    <swiper-slide
      ><img
        class="img-style rounded-xl"
        src="https://icms-image.slatic.net/images/ims-web/3ee6b16b-f477-4569-b5f8-4c2b39a4ee65.jpg"
        alt=""
    /></swiper-slide>
  </swiper>
</template>
<script setup>
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const modules = [Navigation, Pagination, Scrollbar, A11y];
</script>
<style>
.sliderStyle {
  width: 100%;
  height: 350px;
}
.img-style {
  width: 100vw;
  height: 400px;
}
</style>
