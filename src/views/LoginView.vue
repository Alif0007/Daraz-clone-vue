<script setup>
import Header from '@/components/Header.vue';

</script>

<template>
<div class="bg-gray-100">
    <div>
        <Header/>
    </div>
    <div class="flex-col flex justify-center items-center" style="height: 100vh;">
        <div class="text-3xl mb-8 flex justify-between" >
        <h1 class="pr-64">Welcome Here! Please Login.</h1>
        <p>New Member, <span class="text-green-600">Register</span> Here</p>

    </div>
    <div class="bg-white flex py-12 px-6" style="width: 810px ;" >
    <div class="w-7/12 pr-12">
        <div class="mb-6">
            <p>Phone Number Or Email*</p>
            <input class="outline-0 h-11 w-full border border-gray-400 mt-2 mb-1 pl-4" type="text" name="Email" id="" placeholder="Please Enter Your Phone Number Or Email">
        </div>
        <div>
            <p>Password*</p>
            <input class="outline-0 h-11 w-full border border-gray-400 mt-2 pl-4"  type="password" name="Password" id="" placeholder="Please Enter Your Password">
        </div>
    </div>
    <div class="w-5/12">
        <div class="bg-orange py-3 text-white text-center text-lg rounded">
            LOGIN
        </div>
        <p class="my-3">
            Or, Login With
        </p>
        <div>
            <div class="flex bg-blue-800 justify-center items-center text-white rounded">
                <img class="h-6" src="E:\Vue Templates\Daraz\src\assets\facebook.png" alt="">
                <p class="text-lg py-2 text-white text-center text-lg">Facebook</p>
            </div>
            <div class="flex bg-red-700 py-2 text-white justify-center items-center gap-1 text-lg rounded mt-3">
                <img class="h-6" src="E:\Vue Templates\Daraz\src\assets\letter-g.png" alt="">
                <p class="text-lg ">Google</p>
            </div>
        </div>
    </div>
</div>
</div>
</div>
</template>

<style>
</style>