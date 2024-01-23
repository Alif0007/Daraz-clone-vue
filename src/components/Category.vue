<script setup></script>

<template>
  <div>
    <div class="flex flex-col gap-2">
      <div class="category-item flex items-center gap-2">
        <img
          class="h-6 bg-gray-100 p-1 rounded-full"
          src="../assets/dress (1).png"
          alt=""
        />
        <p class="font-h text-gray-500">Women's & Girls' Fashion</p>

        <div class="sub-category">
          <ul>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
          </ul>
        </div>
      </div>
      <div class="category-item flex items-center gap-2">
        <img
          class="h-6 bg-gray-100 p-1 rounded-full"
          src="../assets/lipstick.png"
          alt=""
        />
        <p class="text-gray-500">Health & Beauty</p>
      </div>
      <div class="category-item flex items-center gap-2">
        <img
          class="h-6 bg-gray-100 p-1 rounded-full"
          src="../assets/wristwatch.png"
          alt=""
        />
        <p class="text-gray-500">Watches, Bags, Jewellery</p>
      </div>
      <div class="category-item flex items-center gap-2">
        <img
          class="h-6 bg-gray-100 p-1 rounded-full"
          src="../assets/shirt.png"
          alt=""
        />
        <p class="text-gray-500">Men's & Boys' Fashion</p>
      </div>
      <div class="category-item flex items-center gap-2">
        <img
          class="h-6 bg-gray-100 p-1 rounded-full"
          src="../assets/teddy-bear.png"
          alt=""
        />
        <p class="text-gray-500">Mother & Baby</p>
      </div>
      <div class="category-item flex items-center gap-2">
        <img
          class="h-6 bg-gray-100 p-1 rounded-full"
          src="../assets/responsive.png"
          alt=""
        />
        <p class="text-gray-500">Electronics Devices</p>
      </div>
      <div class="category-item flex items-center gap-2">
        <img
          class="h-6 bg-gray-100 p-1 rounded-full"
          src="../assets/fridge.png"
          alt=""
        />
        <p class="text-gray-500">TV & Home Appliances</p>
      </div>
      <div class="category-item flex items-center gap-2">
        <img
          class="h-6 bg-gray-100 p-1 rounded-full"
          src="../assets/micro-usb.png"
          alt=""
        />
        <p class="text-gray-500">Electronic Accessories</p>
      </div>
      <div class="category-item flex items-center gap-2">
        <img
          class="h-6 bg-gray-100 p-1 rounded-full"
          src="../assets/shopping-basket.png"
          alt=""
        />
        <p class="text-gray-500">Groceries</p>
      </div>
      <div class="category-item flex items-center gap-2">
        <img
          class="h-6 bg-gray-100 p-1 rounded-full"
          src="../assets/armchair.png"
          alt=""
        />
        <p class="text-gray-500">Home & Lifestyle</p>
      </div>
      <div class="category-item flex items-center gap-2">
        <img
          class="h-6 bg-gray-100 p-1 rounded-full"
          src="../assets/basketball-ball-variant.png"
          alt=""
        />
        <p class="text-gray-500">Sports & Outdoors</p>
      </div>
      <div class="category-item flex items-center gap-2">
        <img
          class="h-6 bg-gray-100 p-1 rounded-full"
          src="../assets/sedan.png"
          alt=""
        />
        <p class="text-gray-500">Automotive & Motorbike</p>
      </div>
    </div>
  </div>
</template>

<style>
p {
  font-size: 13px;
}
.category-item {
  cursor: pointer;
}

.category-item:hover .font-h {
  color: orange;
}
.category-item:hover .sub-category {
  display: block;
}
.sub-category {
  position: absolute;
  left: 225px;
  width: 220px;
  top: 0;
  height: 100%;
  border-radius: 10px;
  background-color: #fff;
  z-index: 2;
  padding: 10px 20px;
  display: none;
}
.sub-category ul li {
  font-size: 13px;
  font-weight: 500;
  margin: 8px 0;
}
</style>
