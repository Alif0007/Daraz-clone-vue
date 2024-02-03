<script setup>
import Header from '@/components/Header.vue';
import ProductDetails from '@/components/AddToCart/ProductDetails.vue' 
import OrderSummary from '@/components/AddToCart/OrderSummary.vue';


</script>

<template>
    <div class="bg-gray-100" style="height: 100vh;">
        <div>
            <Header/>
        </div>
        <div class="flex  pt-28 block sm:flex max-w-6xl mx-auto">
            <div class="w-8/12">
                <ProductDetails/>
            </div>
            <div class="w-4/12">
                <OrderSummary/>
            </div>
        </div>
    </div>
</template>

<style></style>