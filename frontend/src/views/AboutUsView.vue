<script setup>
    import Description from '@/components/Description.vue';
    import  mission from '../assets/image/mission.png'
    import Footer from '../components/footer/Footer.vue'

</script>

<template>
    <main>
        <!-- description -->
        <Description :title="'Our story'" :description="'Our story began with a passion for nature and sustainable living. At Bloom & Thrive, we aim to bring the beauty of plants into everyday spaces, inspiring a greener, more mindful lifestyle. From small beginnings, we’ve grown into a community that celebrates the joy of thriving together with nature.'"/>
        
        <!-- mission -->
        <section class="w-screen h-screen bg-[#F1FFD1]">
            <div class="h-full w-6xl m-auto grid grid-cols-2">
                <div class="flex items-center justify-center">
                    <img :src="mission" alt="" class="w-md">
                </div>
                <div class="flex flex-col justify-center gap-2">
                    <h3 class="text-6xl text-[#31572C] font-semibold">Mission</h3>
                    <p class="text-2xl">To inspire and nurture a connection with nature by providing high-quality indoor plants and eco-friendly products, promoting sustainable living, and empowering individuals to create thriving, green spaces.</p>
                </div>
            </div>
        </section>

        <!-- vision -->
        <section class="w-screen h-screen bg-white">
            <div class="h-full w-6xl m-auto grid grid-cols-2">
                <div class="flex flex-col justify-center gap-2">
                    <h3 class="text-6xl text-[#31572C] font-semibold">Mission</h3>
                    <p class="text-2xl">To inspire and nurture a connection with nature by providing high-quality indoor plants and eco-friendly products, promoting sustainable living, and empowering individuals to create thriving, green spaces.</p>
                </div>
                <div class="flex items-center justify-center">
                    <img :src="mission" alt="" class="w-md">
                </div>
            </div>
        </section>

       <!-- footer -->
        <Footer/>
    </main>
</template>

<style scoped>

</style>
