<script setup>
    import About from '@/components/home/About.vue';
    import Featured from '@/components/home/Featured.vue';
    import Hero from '@/components/home/Hero.vue';
    import Testimonials from '@/components/home/Testimonials.vue';
    import Footer from '@/components/footer/Footer.vue';
</script>

<template>
    <main class="overflow-hidden">
        <Hero/>
        <About/>
        <Featured/>
        <Testimonials/>
        <Footer/>
    </main>
</template>

<style scoped>

</style>
