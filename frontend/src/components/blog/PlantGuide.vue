<script setup>
    import Guide from './Guide.vue';
</script>

<template>
    <section class="w-screen h-screen">
        <div class="w-5xl m-auto text-center flex flex-col gap-10 h-full items-center justify-center">
            <div>
                <h2 class="text-[#4F772D] text-5xl font-semibold">Plant Guides</h2>
                <p class="text-2xl">Explore our plant guides for expert tips on care, maintenance, and choosing the perfect greenery for your space. Whether you're a beginner or a seasoned plant parent, we've got you covered!</p> 
            </div>
           

            <!-- guides per plant-->
            <div class="w-full grid grid-cols-4 gap-3">
                <Guide v-for="(guide, index) in [1,2,3,4,5,6,7,8]" :key="index"/>
            </div>

            <!-- button -->
             <button class="bg-[#4F772D] text-white p-3 rounded">See more</button>
        </div>
        
    </section>
</template>