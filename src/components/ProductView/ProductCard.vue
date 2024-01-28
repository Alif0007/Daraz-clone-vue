<script setup>
import ProductSlider from "./ProductSlider.vue"
import ReviewsCard from './ReviewsCard.vue';
import { ref } from 'vue';



const Quantity = ref(1)

function increase(){
Quantity.value++
}
function decrease(){
    if(Quantity.value < 1) {
        return;
    }
Quantity.value--
}

</script>

<template>
<div>
    <div class="flex bg-white p-2">
        <div class="w-1/4">
            <ProductSlider />
        </div>
                <div class="bg-white w-2/4 pl-6">
                    <h1 class="text-2xl mb-2">BUY 1 Realman Body Spray MORNING 150ml + GET 1 Realman Body Spray MORNING 150ml FREE</h1>
                    <div class="flex gap-2 mb-2 items-center">
                        <div class="flex">
                        <img class="h-4" src="E:\Vue Templates\Daraz\src\assets\star.png " alt="" />
                        <img class="h-4" src="E:\Vue Templates\Daraz\src\assets\star.png " alt="" />
                        <img class="h-4" src="E:\Vue Templates\Daraz\src\assets\star.png " alt="" />
                        <img class="h-4" src="E:\Vue Templates\Daraz\src\assets\star.png " alt="" />
                        <img class="h-4" src="E:\Vue Templates\Daraz\src\assets\star.png " alt="" />
                    
                    </div>
                    <div class="text-xs text-green-700">
                        226 Ratings
                    </div>
                </div>
                <div class="flex items-center gap-1">
                    <span class="text-gray-500">Brand:</span>  <p class="text-green-700 pt-0.5">FOGG Fragrances from FOGG</p>
                </div>
                <div class="flex text-orange gap-2 items-center">
                    <p class="text-6xl pb-2">৳</p>
                    <p class="text-4xl pt-2">330</p>
                </div>
                <div class="flex gap-2">
                    <p class="text-lg text-gray-500 line-through">450</p>
                    <p class="text-lg text-gray-500">-20%</p>
                </div>

                <div class="flex text-lg mt-8">
                    <p class="text-lg mr-6">Quantity</p>
                    <p @click="decrease" class="cursor-pointer text-lg  py-1 px-3 bg-gray-200">-</p>
                    <p class="text-lg mx-3">{{ Quantity }}</p>
                    <p @click="increase" class="cursor-pointer text-lg py-1 px-3 bg-gray-200">+</p>
                </div>
                <div class="flex gap-2 mt-6">
                    <p class="cursor-pointer px-20 py-3 font-medium text-white bg-blue-500 hover:bg-blue-400 rounded-sm text-lg">Buy Now</p>
                    <p class="cursor-pointer px-20 py-3 font-medium text-white bg-orange hover:bg-yellow-500 rounded-sm text-lg">Add To Cart</p>
                </div>
                    
                </div>
        <div>
                <div class="delivery-container pl-3 pr-2">
                    <p class="mb-2">Delivery</p>
                    <div class="flex items-center gap-2 mb-4">
                        <img class="h-6" src="E:\Vue Templates\Daraz\src\assets\placeholder.png" alt="">
                        <h1>Dhaka, Dhaka North, Banani Road No. 12 - 19</h1>
                    </div>
                    <div class="flex justify-between mb-6">
                        <div>
                        <div class="flex items-center gap-2">                         
                        <img class="h-6" src="E:\Vue Templates\Daraz\src\assets\box.png" alt="">
                        <div class="flex items-center gap-1">
                            <p class="text-lg font-medium pb-0.5">Fastest Delivery</p>
                            <p>Tomorrow 28 Jan</p>
                        </div>
                        </div>
                        <div class="text-base text-gray-400 pl-8">Tomorrow</div>
                        </div>
                        <div class="flex items-center">
                            <p class="text-3xl">৳</p>
                            <p class="text-xl pt-2">55</p>
                        </div>
                    </div>
                    <div class="flex justify-between mb-6">
                        <div>
                        <div class="flex items-center gap-2 ">                         
                        <img class="h-6" src="E:\Vue Templates\Daraz\src\assets\delivery-box.png" alt="">
                        <div class="flex items-center gap-1">
                            <p class="text-lg font-medium pb-0.5">Standard Delivery</p>
                            <p>28 Jan - 30 Jan</p>
                        </div>
                        </div>
                        <div class="text-base text-gray-400 pl-8">1-3 Days</div>
                        </div>
                        <div class="flex items-center">
                            <p class="text-3xl">৳</p>
                            <p class="text-xl pt-2">55</p>
                        </div>
                    </div>
                    <div>
                        <div class="flex items-center gap-2">
                            <img class="h-6" src="E:\Vue Templates\Daraz\src\assets\cash-on-delivery.png" alt="">
                            <p class="tex">Cash On Delivery Available</p>
                        </div>
                    </div>
                    <div>
                        <p class="my-4">Service</p>
                        <div class="flex items-center gap-2 mb-2">
                            <img class="h-6" src="E:\Vue Templates\Daraz\src\assets\Service-icon\authenticity.png" alt="">
                            <div>
                                <p class="text-lg">100% Authentic from Trusted Brand</p>
                                <p class="text-gray-500">or Get 2x Your Money Back</p>
                            </div>
                        </div>
                        <div class="flex items-center gap-2 mb-2">
                            <img class="h-6" src="E:\Vue Templates\Daraz\src\assets\Service-icon\turn-back.png" alt="">
                            <div>
                                <p class="text-lg">14 days free & easy return</p>
                                <p class="text-gray-500">Change of mind is not applicable</p>
                            </div>
                        </div>
                        <div class="flex items-center gap-2 ">
                            <img class="h-6" src="E:\Vue Templates\Daraz\src\assets\Service-icon\shield.png" alt="">
                            <div class="text-lg">
                                Warranty not available
                            </div>
                        </div>
                    </div>
                    <div class="mt-8">
                        <p class="mb-2">Sold By</p>
                        <h1 class="text-xl">Avonee l LoveBaby</h1>
                        <img class="w-32" src="https://img.alicdn.com/imgextra/i2/O1CN018pUJS01LgGhmGhAAb_!!6000000001328-2-tps-294-42.png" alt="">
                        <div class="grid grid-cols-3 py-6">
                            <div>
                                <p>Postive Seller Rating</p>
                                <p class="text-3xl mt-4 pl-1">94%</p>
                            </div>
                            <div>
                                <p>Ship on Time</p>
                                <p class="text-3xl mt-9 pl-1">100%</p>
                            </div>
                            <div>
                                <p>Chat Response Rate</p>
                                <p class="text-3xl mt-4 pl-1">97%</p>
                            </div>
                        </div>
                        <p class="text-center text-lg text-green-600 pb-2">Visit Store</p>
                    </div>
                </div>
        </div>
    </div>
    <div>
        <div>
            <ReviewsCard/>
        </div>
    </div>

</div>
</template>


<style>
.delivery-container{
    background-color: rgb(128, 128, 128,0.06);
}
</style>