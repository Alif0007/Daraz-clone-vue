<script setup>
import TopDealsContainer from "@/components/CategoryView/WholesaleContainer/TopDealsContainer.vue";
import Header from "@/components/Header.vue";
import WholesaleTabMenu from "@/components/CategoryView/WholesaleContainer/WholesaleTabMenu.vue";
import AllTab from "@/components/CategoryView/WholesaleContainer/AllTab.vue";
import EssentialTab from "@/components/CategoryView/WholesaleContainer/EssentialTab.vue";
import FashionTab from "@/components/CategoryView/WholesaleContainer/FashionTab.vue";
import LifeStyleTab from "@/components/CategoryView/WholesaleContainer/LifeStyleTab.vue";
import { ref } from "vue";
import InfoContainer from "@/components/InfoContainer.vue";

const tabname = ref("allTab");

function setTabItem(name) {
  tabname.value = name;
}
</script>

<template>
  <div class="bg-white">
    <div class="pb-28">
      <Header />
    </div>
    <div class="max-w-7xl mx-auto">
      <TopDealsContainer />
    </div>
    <div class="max-w-7xl mx-auto">
      <WholesaleTabMenu @emit-tab-item="setTabItem" />
    </div>
    <div class="max-w-7xl mx-auto">
      <div v-if="tabname == 'allTab'">
        <h1 class="text-3xl font-semibold mb-2 ml-4 mb-8 mt-4">All</h1>

        <AllTab />
      </div>
      <div v-else-if="tabname == 'essentialTab'">
        <h1 class="text-3xl font-semibold mb-2 ml-4 mb-8 mt-4">Essential</h1>

        <EssentialTab />
      </div>
      <div v-else-if="tabname == 'fashionTab'">
        <h1 class="text-3xl font-semibold mb-2 ml-4 mb-8 mt-4">Fashion</h1>

        <FashionTab />
      </div>
      <div v-else>
        <h1 class="text-3xl font-semibold mb-2 ml-4 mb-8 mt-4">Life Style</h1>

        <LifeStyleTab />
      </div>
    </div>
    <div class="max-w-7xl mx-auto pt-24 pb-12">
      <InfoContainer/>
    </div>
  </div>
</template>

<style></style>
