<script setup>
    import img from '../../assets/image/small-business-manager-her-workshop 1.png'
    import Navbar from '../navbar/Navbar.vue';
</script>

<template>
    <section 
      class="relative max-w-screen h-screen bg-cover bg-center"
      :style="{ backgroundImage: `url(${img})` }"
    >
      <!-- overlay -->
      <div class="absolute top-0 bottom-0 left-0 right-0 bg-[#4F772D] opacity-70 z-10"></div>
  
      <div class="w-full flex justify-center">
        <Navbar />
      </div>

  
      <!-- hero section -->
    <div class="w-5/6 m-auto absolute top-0 bottom-0 right-0 left-0 flex flex-col items-start justify-center z-20 text-white">
        <h1 class="text-6xl md:text-8xl mb-3 max-w-2xl font-light">Bring Nature Into Your Home</h1>
        <p class="md:text-xl max-w-2xl mb-3">
          Transform your space with the serenity of nature. Discover tips, décor ideas, and greenery essentials to create a refreshing and calming environment indoors.
        </p>
        <button class="bg-[#ECF39E] py-3 px-5 text-xl rounded text-[#132A13] font-semibold">Shop now</button>
      </div>
    </section>
  </template>
  

<style scoped>

</style>
