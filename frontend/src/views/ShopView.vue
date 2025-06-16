<script setup>
    import Footer from '@/components/footer/Footer.vue';
    import Navbar from '@/components/navbar/Navbar.vue';
    import Plant from '@/components/shop/Plant.vue';
    import { ref } from 'vue';
    import img1 from '../assets/image/product1.png';
    import img2 from '../assets/image/product2.png';
    import img3 from '../assets/image/product3.png';

    const products = ref([
        { image: img1, name: "Monstera Deliciossa", price: 1000},
        { image: img2, name: "Bloom & Thrive Bag", price: 200},
        { image: img3, name: "Watering Can", price: 300},
        { image: img1, name: "Monstera Deliciossa", price: 1000},
        { image: img2, name: "Bloom & Thrive Bag", price: 200},
        { image: img3, name: "Watering Can", price: 300},
    ])

</script>

<template>
    <main class="w-screen min-h-screen overflow-x-hidden">
      <!-- navbar -->
      <div class="w-full flex justify-center relative">
        <Navbar />
      </div>
  
      <section class="relative top-70 flex flex-col gap-y-5 items-center max-w-full">
        <!-- search bar -->
        <div class="flex flex-col items-center gap-5">
          <h1 class="text-6xl text-[#4F772D] font-semibold">Search our Garden</h1>
          <input type="text" placeholder="Enter an indoor plant, product, or gardening tools" class="w-2xl bg-[#f5f5f5] p-3 rounded">
        </div>
  
        <!-- filter -->
        <div class="w-5/6 m-auto flex justify-between">
          <button class="border border-gray-300 p-3">Sort by Category</button>
          <button class="border border-gray-300 p-3">Newest</button>
        </div>
  
        <!-- products -->
        <div class="w-5/6 m-auto grid sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-5 mb-5">
          <Plant v-for="(product, index) in products" :key="index" :product="product" />
        </div>

        <button class="text-xl text-[#132A13] bg-[#ECF39E] py-3 px-5 rounded font-semibold">See more</button>
   
        <!-- footer -->
        <div class="w-full mt-5">
            <Footer />
        </div>
        
      </section>
    </main>
  </template>

