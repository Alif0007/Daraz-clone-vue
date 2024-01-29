<script setup>
import AllTab from '@/components/CategoryView/WholesaleContainer/AllTab.vue';
import EssentialTab from '@/components/CategoryView/WholesaleContainer/EssentialTab.vue';
import FashionTab from '@/components/CategoryView/WholesaleContainer/FashionTab.vue';
import LifeStyleTab from '@/components/CategoryView/WholesaleContainer/LifeStyleTab.vue';
import Header from '@/components/Header.vue';

import { ref } from "vue";


const allTab = ref("allTab");
const essentialTab = ref("essentialTab");
const fashionTab = ref("fashionTab");
const lifeStyleTab = ref("lifeStyleTab");

const activetab = ref("allTab")

function tab(id) {
  if (id == 1) {
    
    activetab.value = allTab.value
  } else if (id == 2) {
    
    activetab.value = fashionTab.value
  } else if (id == 3) {
    activetab.value = essentialTab.value
  } else {
    
    activetab.value = lifeStyleTab.value
  }
}

</script>

<template>
<div class="bg-gray-100">
    <div>
        <Header/>
    </div>
    <div class="pt-24">
        <img src="https://icms-image.slatic.net/images/ims-web/b1ce4321-9c38-4f4f-ba2d-95262eb7b1e9.jpg" alt="">
    </div>
    <div class="bg-white">
        <div class="flex items-center gap-2 max-w-7xl mx-auto py-2 ">
          <p class="text-lg text-orange ml-8">On Sale Now</p>
          <p class="text-lg  ml-8">Ends In</p>
          <vue-countdown class="flex gap-4" :time="2 * 24 * 60 * 60 * 1000" v-slot="{ days, hours, minutes, seconds }">
            <div class="bg-orange w-10 px-3 py-3 text-white">{{ hours }}</div>
            <div class="bg-orange w-10 px-3 py-3 text-white">{{ minutes }}</div>
            <div class="bg-orange w-10 px-3 py-3 text-white">{{ seconds }}</div>
          </vue-countdown>
        </div>
    </div>
    <div class="bg-white my-3 py-2">
        <div class="flex gap-10  max-w-5xl mx-auto">
            <p @click="tab(1)" class="text-base  cursor-pointer" :class="activetab == 'allTab' ? 'flash-active': ''">All</p>
            <p @click="tab(2)" class="text-base   cursor-pointer" :class="activetab == 'fashionTab' ? 'flash-active': ''">Electronics</p>
            <p @click="tab(3)" class="text-base   cursor-pointer" :class="activetab == 'essentialTab' ? 'flash-active': ''">Health & Beauty</p>
            <p @click="tab(4)" class="text-base   cursor-pointer" :class="activetab == 'lifeStyleTab' ? 'flash-active': ''">Fashion</p>
            <p @click="tab(2)" class="text-base   cursor-pointer" :class="activetab == 'fashionTab' ? 'flash-active': ''">Home & Living</p>
            <p @click="tab(3)" class="text-base   cursor-pointer" :class="activetab == 'essentialTab' ? 'flash-active': ''">Supermarket</p>
            <p @click="tab(2)" class="text-base   cursor-pointer" :class="activetab == 'fashionTab' ? 'flash-active': ''">Stationary & Toys</p>
            <p @click="tab(3)" class="text-base   cursor-pointer" :class="activetab == 'essentialTab' ? 'flash-active': ''">Sports & Motors</p>
        </div>
    </div>
    <div>
        <div class="max-w-7xl mx-auto pb-8">
            <div v-if="activetab=='allTab'">
                <AllTab/>
            </div>
            <div v-if="activetab=='fashionTab'">
                <FashionTab/>
            </div>
            <div v-if="activetab=='essentialTab'">
                <EssentialTab/>
            </div>
            <div v-else>
                <LifeStyleTab/>
            </div>

        </div>
    </div>
</div>

</template>


<style scoped>
.flash-active {
border-bottom: 4px solid orange;
color: orange;

}
</style>