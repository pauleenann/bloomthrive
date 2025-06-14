<script setup>
    import { ref } from 'vue';
    import img1 from '../../assets/image/product1.png';
    import img2 from '../../assets/image/product2.png';
    import img3 from '../../assets/image/product3.png';

    const products = ref([
        { image: img1, name: "Monstera Deliciossa", price: 1000},
        { image: img2, name: "Bloom & Thrive Bag", price: 200},
        { image: img3, name: "Watering Can", price: 300}
    ])
</script>

<template>
    <div class="md:h-screen py-10 md:py-0 bg-[#F9FDCA] flex flex-col items-center justify-center gap-8 ">
        <h2 class="text-3xl md:text-5xl text-[#34572C] pacifico">Featured Products</h2>
        <div class="flex flex-col md:flex-row gap-5 w-5/6 items-center md:justify-center">
            <div v-for="(product, index) in products" :key="index">
                <!-- image -->
                <img :src="product.image" class="h-90 mb-3" alt="">
                <p class="text-xl font-semibold md:text-2xl m-0">{{ product.name }}</p>
                <p class="text-xl md:text-2xl m-0">PHP {{ product.price }}</p>
            </div>   
        </div>
        <button class="bg-[#132A13] py-3 px-5 rounded text-white">See more</button>
        
    </div>
</template>

<style scoped>

</style>
