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
        <div class="pt-28 flex max-w-7xl mx-auto">
            <div>
                <ProductDetails/>
            </div>
            <div class="w-96">
                <OrderSummary/>
            </div>
        </div>
    </div>
</template>

<style></style>