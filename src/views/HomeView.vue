<script setup>
import Header from "@/components/Header.vue";
import Slider from "@/components/Slider.vue";
import Category from "@/components/Category.vue";
</script>

<template>
  <main class="bg-gray-100">
    <div>
      <div>
        <Header />
      </div>
      <div class="pt-28 flex max-w-6xl mx-auto gap-4">
        <div class="w-1/4">
          <div class="bg-white pl-4 py-6 rounded-xl">
            <Category />
          </div>
        </div>

        <div class="w-3/4 rounded-xl">
          <Slider />
        </div>
      </div>
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
