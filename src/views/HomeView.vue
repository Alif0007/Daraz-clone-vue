<script setup>
import Header from "@/components/Header.vue";
import Slider from "@/components/Slider.vue";
import Category from "@/components/Category.vue";
import ServiceRow from "@/components/ServiceRow.vue";
import Channel from "@/components/Channel.vue";
import FlashSale from "@/components/FlashSale.vue";
import CategoryContainer from "@/components/CategoryContainer.vue";
import JustForYouContainer from "@/components/JustForYouContainer.vue";

// import ChannelContainer from "../components/ChannelContainer.vue";
</script>

<template>
  <main class="bg-gray-100">
    <div>
      <div>
        <Header />
      </div>
      <div class="pt-28 flex max-w-7xl mx-auto gap-4">
        <div class="w-1/5">
          <div class="relative bg-white pl-4 py-6 rounded-xl">
            <Category />
          </div>
        </div>

        <div class="w-4/5">
          <Slider />
        </div>
      </div>
      <div class="max-w-7xl mx-auto">
        <ServiceRow />
        <Channel />
      </div>

      <div class="max-w-7xl mx-auto">
        <FlashSale />
      </div>
      <div class="max-w-7xl mx-auto">
        <CategoryContainer />
      </div>
      <div class="max-w-7xl mx-auto">
        <JustForYouContainer />
        <div class="flex justify-center mt-8 ">
          <p
            class="cursor-pointer px-36 py-1 text-orange text-2xl text-center border-2 border-yellow-500"
          >
            Load More
          </p>
        </div>
      </div>
      <!-- <div class="max-w-7xl mx-auto">
        <InfoContainer />
      </div> -->
    </div>
  </main>
</template>
<style>
.bg-orange {
  background-color: #f85606;
}
.width-search-bar {
  width: 700px;
  height: 40px;
}
.text-orange {
  color: #f85606;
}
</style>
