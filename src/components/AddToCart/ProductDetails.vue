<script setup>
import { ref } from 'vue';



const Quantity = ref(1)

function increase(){
Quantity.value++
}
function decrease(){
    if(Quantity.value < 2) {
        return;
    }
Quantity.value--
}


</script>

<template>
<div class="mr-4">
    <div>
        <div class="bg-white mb-3 flex justify-between px-3 ">
            <p class="text-gray-600" >SELECT ALL (1 ITEMS)</p>
            <div class="flex">
                <img class="h-4" src="E:\Vue Templates\Daraz\src\assets\Add-To-Cart\delete-button.png" alt="">
                <p class="text-gray-600">DELETE</p>
            </div>
        </div>
        <div class="bg-white p-1.5">
            <div class="flex items-center gap-2">
                <img class="h-5" src="https://img.alicdn.com/imgextra/i2/O1CN01m9OC6a1UK86X51Dcq_!!6000000002498-2-tps-108-54.png" alt="">
                <p class="text-lg">FOGG Bangladesh <span class="text-xl font-bold">></span></p>
            </div>
            <div class="flex justify-end">
                <p>Earliest Delivery: <span class="font-medium">1am Tue</span></p>
            </div>
            <hr>
            <div class="pt-4">
                <div class="flex pb-8">
                    <img class="h-32" src="https://static-01.daraz.com.bd/p/8c9f724dd074da7b4869a5998df97d3d.jpg" alt="">
                    <div class="pl-3">
                        <h1 class="text-lg">
                            BUY 1 Realman Body Spray MORNING 150ml + GET 1 Realman Body Spray MORNING 150ml FREE
                        </h1>
                        <div class="flex">
                            <img class="h-5" src="https://img.alicdn.com/imgextra/i3/O1CN01UoXNsY22uwymuphHW_!!6000000007181-2-tps-170-36.png" alt="">
                            <img class="h-5" src="https://img.alicdn.com/imgextra/i3/O1CN01sJ424Y1bAExynmyup_!!6000000003424-2-tps-272-72.png" alt="">
                        </div>
                    </div>
                    <div class="px-8">
                        <div class="flex items-center mb-2">
                            <p class="text-5xl">৳</p>
                            <p class="text-2xl mt-4">330</p>
                        </div>
                        <p class="text-gray-600 text-base mb-4">-27%</p>
                        <div class="flex gap-3">
                            <img class="h-6 mt-0.5" src="E:\Vue Templates\Daraz\src\assets\Add-To-Cart\heart.png" alt="">
                            <img class="h-6  " src="E:\Vue Templates\Daraz\src\assets\Add-To-Cart\delete-button.png" alt="">
                        </div>
                    </div>
                    <div class="flex mr-12 mt-8 px-6">
                    <img @click="decrease" class="cursor-pointer h-8 py-1 px-3 bg-gray-200" src="E:\Vue Templates\Daraz\src\assets\Add-To-Cart\minus.png" alt="">
                    <p class="text-lg mx-3">{{ Quantity }}</p>
                    
                    <img @click="increase" class="cursor-pointer h-8 py-1 px-3 bg-gray-200" src="E:\Vue Templates\Daraz\src\assets\Add-To-Cart\plus-icon.png" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<style></style>