<script setup>
    import Navbar from './navbar/Navbar.vue';

    const props = defineProps({
        title: String,
        description: String
    })
</script>

<template>
    <header class="relative max-w-screen h-screen bg-cover bg-center">
        <!-- overlay -->
        <div class="absolute top-0 bottom-0 left-0 right-0 bg-[#4F772D] opacity-70 z-10"></div>
    
        <div class="w-full flex justify-center">
            <Navbar />
        </div>
    
        <!-- blog description section -->
        <section class="w-5/6 m-auto absolute top-0 bottom-0 right-0 left-0 flex flex-col items-center justify-center z-20 text-white text-center gap-3">
            <h1 class="text-6xl font-semibold">{{ props.title }}</h1>
            <p class="w-4xl text-2xl">{{props.description}}</p>
        </section>
    </header>
  </template>
  

<style scoped>
    header{
        background-image: url('../assets/image/blogbg.png');
    }
</style>
