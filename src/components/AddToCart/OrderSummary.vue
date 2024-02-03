<script setup>

</script>

<template>
<div>
    <div class="bg-white p-3 pb-5 rounded">
        <h1 class="text-2xl">Order Summary</h1>
        <div class="flex items-center justify-between mb-4">
            <p class="text-xl mt-3">Subtotal (1 items)</p>
            <div>
                <div class="flex items-center">
                    <p class="text-3xl pt-2">৳</p>
                    <p class="text-xl mt-4">330</p>
                </div>
            </div>
        </div>
        <div class="flex items-center justify-between mb-4">
            <p class="text-xl mt-3">Shipping Fee</p>
            <div class="flex items-center">
                    <p class="text-3xl pt-2">৳</p>
                    <p class="text-xl mt-4">55</p>
            </div>
        </div>
        <div class="flex mb-4">
            <input class="w-full h-10 outline-0 border border-gray-300 pl-4" type="text" placeholder="Enter Your Voucher">
            <p class="cursor-pointer text-lg py-1.5 px-3 bg-blue-400 ml-2 text-white ">APPLY</p>
        </div>
        <div class="flex mb-4 items-center justify-between">
            <p class="text-xl mt-3">Total</p>
            <div class="flex items-center">
                    <p class="text-3xl pt-2">৳</p>
                    <p class="text-xl mt-4">385</p>
            </div>
        </div>
        <div class="cursor-pointer text-lg mx-3 rounded py-1 px-3 bg-blue-400  text-white text-center bg-orange">
            Proceed To Checkout(1)
        </div>
    </div>
</div>
</template>

<style>
</style>