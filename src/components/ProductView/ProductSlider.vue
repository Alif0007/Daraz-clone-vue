<template>
    <swiper
      :style="{
        '--swiper-navigation-color': '#fff',
        '--swiper-pagination-color': '#fff',
      }"
      :loop="true"
      :spaceBetween="10"
      :navigation="true"
      :thumbs="{ swiper: thumbsSwiper }"
      :modules="modules"
      class="mySwiper2"
    >
    <swiper-slide>
      <VueMagnifier src="https://nagadhat.com.bd/storage/media/products/images/1695208220_realman_150ml_mock_active_fop.jpg" width="500" />
    </swiper-slide>
    <swiper-slide>
      <VueMagnifier src="https://i.ytimg.com/vi/JDZp6PryjAc/hqdefault.jpg" width="500" />
    </swiper-slide>
    <swiper-slide>
      <VueMagnifier src="https://cdn.grofers.com/app/images/products/full_screen/pro_482731.jpg?ts=1685974109" width="500" />
    </swiper-slide>
    <swiper-slide>
      <VueMagnifier src="https://rukminim2.flixcart.com/image/850/1000/xif0q/deodorant/m/v/i/200-attract-deodorant-strong-body-spray-long-lasting-fragrance-original-imagg8h6dzgrph7v.jpeg?q=20&crop=false" width="500" />
    </swiper-slide>
        
        
    </swiper>
    <swiper
      @swiper="setThumbsSwiper"
      :loop="true"
      :spaceBetween="10"
      :slidesPerView="4"
      :freeMode="true"
      :watchSlidesProgress="true"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide
        ><img
          src="https://nagadhat.com.bd/storage/media/products/images/1695208220_realman_150ml_mock_active_fop.jpg" /></swiper-slide
      ><swiper-slide
        ><img
          src="https://i.ytimg.com/vi/JDZp6PryjAc/hqdefault.jpg" /></swiper-slide
      >
      ><swiper-slide
        ><img
          src="https://cdn.grofers.com/app/images/products/full_screen/pro_482731.jpg?ts=1685974109" /></swiper-slide
      >
      ><swiper-slide
        ><img
          src="https://rukminim2.flixcart.com/image/850/1000/xif0q/deodorant/m/v/i/200-attract-deodorant-strong-body-spray-long-lasting-fragrance-original-imagg8h6dzgrph7v.jpeg?q=20&crop=false" /></swiper-slide
      >
    </swiper>
  </template>
  <script>
    import { ref } from 'vue';
    // Import Swiper Vue.js components
    import { Swiper, SwiperSlide } from 'swiper/vue';
  
    // Import Swiper styles
    import 'swiper/css';
  
    import 'swiper/css/free-mode';
    import 'swiper/css/navigation';
    import 'swiper/css/thumbs';
    
    // import required modules
    import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

    import VueMagnifier from '@websitebeaver/vue-magnifier'
    import '@websitebeaver/vue-magnifier/styles.css'
  
    export default {
      components: {
        Swiper,
        SwiperSlide,
        VueMagnifier
      },
      setup() {
        const thumbsSwiper = ref(null);
  
        const setThumbsSwiper = (swiper) => {
          thumbsSwiper.value = swiper;
        };
  
        return {
          thumbsSwiper,
          setThumbsSwiper,
          modules: [FreeMode, Navigation, Thumbs],
        };
      },
    };
  </script>
  <style>
  .swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.swiper {
  width: 100%;
  height: 350px !important;
  margin-left: auto;
  margin-right: auto;
}

.swiper-slide {
  background-size: cover;
  background-position: center;
}

.mySwiper2 {
  height: 80%;
  width: 100%;
}

.mySwiper {
  height: 20%;
  box-sizing: border-box;
  padding: 10px 0;
}

.mySwiper .swiper-slide {
  width: 25%;
  height: 25%;
  opacity: 0.4;
}

.mySwiper .swiper-slide-thumb-active {
  opacity: 1;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

</style>