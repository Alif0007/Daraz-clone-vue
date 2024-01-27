<script setup>
const emit = defineEmits(["emit-tab-item"]);
import { ref } from "vue";

const allTab = ref("allTab");
const essentialTab = ref("essentialTab");
const fashionTab = ref("fashionTab");
const lifeStyleTab = ref("lifeStyleTab");

const activetab = ref("allTab")

function tab(id) {
  if (id == 1) {
    emit("emit-tab-item", allTab.value);
    activetab.value = allTab.value
  } else if (id == 2) {
    emit("emit-tab-item", fashionTab.value);
    activetab.value = fashionTab.value
  } else if (id == 3) {
    emit("emit-tab-item", essentialTab.value);
    activetab.value = essentialTab.value
  } else {
    emit("emit-tab-item", lifeStyleTab.value);
    activetab.value = lifeStyleTab.value
  }
}
</script>

<template>
  <div>
    <div>
      <div class="flex justify-between mt-8">
        <h1
          @click="tab(1)"
          class="bg-gray-200 cursor-pointer w-72 text-center py-1.5 text-lg font-semibold rounded-3xl"
          :class="activetab == 'allTab' ? 'active': ''"
          >
          All
        </h1>
        <h1

          @click="tab(2)"
          class="bg-gray-200 cursor-pointer w-72 text-center py-1.5 text-lg font-semibold rounded-3xl"
          :class="activetab == 'fashionTab' ? 'active': ''"

          >
          Fashion
        </h1>
        <h1
          @click="tab(3)"
          class="bg-gray-200 cursor-pointer w-72 text-center py-1.5 text-lg font-semibold rounded-3xl"
          :class="activetab == 'essentialTab' ? 'active': ''"

          >
          Essential
        </h1>
        <h1
          @click="tab(4)"
          class="bg-gray-200 cursor-pointer w-72 text-center py-1.5 text-lg font-semibold rounded-3xl"
          :class="activetab == 'lifeStyleTab' ? 'active': ''"

          >
          Lifestyle
        </h1>
      </div>
    </div>
  </div>
</template>

<style>
.active {
  background-color: rgb(36, 40, 118);

  color: white;
}
</style>
