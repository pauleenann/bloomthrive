<script setup>
    import img from '../../assets/image/indoor-houseplants-corner-parquet-floor 2.png'
</script>

<template>
    <section class="md:h-screen py-10 md:p-0 bg-white flex items-center justify-center">
        <div class="w-5/6 h-[80%] m-auto grid md:grid-cols-2 gap-3 md:gap-0">
            <div class="flex items-center justify-center">
              <img :src="img" class="h-130" alt="">  
            </div>
            <div class="flex items-start flex-col justify-center gap-2">
                <h2 class="text-3xl md:text-5xl text-[#34572C]">About Us</h2>
                <p class="md:text-2xl">Bloom & Thrive brings the beauty of nature into your home with carefully selected indoor plants and eco-friendly décor. We are passionate about promoting sustainable living and helping you create calming, green spaces. Whether you're a plant enthusiast or a beginner, we’re here to help you grow and thrive.</p>
                <button class="bg-[#34572C] py-3 px-5 text-xl rounded text-white">Learn more</button>
            </div>
            
        </div>
    </section>
</template>

<style scoped>

</style>
