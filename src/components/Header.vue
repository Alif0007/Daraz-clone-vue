<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router=useRouter()

function homeRoute(){
  router.push({
    path: '/',
  })
}
function loginRoute(){
  router.push({
    path: '/login',
  })
}


</script>

<template>
  <div class="fixed bg-orange w-full z-10">
    <div class=" hidden sm:flex text-white max-w-6xl mx-auto gap-8 text-xs">
      <p>Become a Seller</p>
      <p>Daraz Donate</p>
      <p>Help & Support</p>
    </div>
    <div class="flex justify-between max-w-6xl mx-auto py-4">
      <div class="flex items-center gap-6">
        <div @click="homeRoute" class="cursor-pointer">

          <img
            class="h-12"
            src="https://icms-image.slatic.net/images/ims-web/3ac46ea5-a376-41cc-981f-21fa690468c0.png"
            alt=""
          />
        </div>
        <input
          class="hidden sm:block outline-0 pl-6 width-search-bar rounded-xl"
          type="text"
          placeholder="Search In Daraz"
        />
      </div>
      <div class="flex text-white gap-4">
        <div @click="loginRoute" class="flex items-center gap-1 px-2 login-style">
          <ion-icon class="text-lg" name="person-outline"></ion-icon>
          <p class="hidden sm:block text-xs font-bold">Login</p>
        </div>
        <div class="flex items-center">l</div>
        <div class="flex items-center">
          <p class=" text-xs font-bold">Sign Up</p>
        </div>

        <div class="hidden sm:flex items-center gap-1">
          <ion-icon class="text-lg" name="globe-outline"></ion-icon>
          <p class="text-xs font-bold">EN</p>
          <ion-icon name="arrow-down-outline"></ion-icon>
        </div>
        <div class="flex items-center">
          <ion-icon class="text-3xl" name="cart-outline"></ion-icon>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.login-style:hover {
  background-color: rgb(0, 0, 0,0.1);
  border-radius: 10px;
  cursor:pointer;

}
</style>
