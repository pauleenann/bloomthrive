<script setup>
    import PlantGuide from '@/components/blog/PlantGuide.vue';
    import Video from '@/components/blog/Video.vue';
    import Description from '@/components/Description.vue';
    import Footer from '@/components/footer/Footer.vue';
</script>

<template>
    <main>
        <Description :title="'Blog'" :description="'Discover tips, guides, and inspiration on plant care, sustainable living, and creating beautiful green spaces. Our blog is your go-to resource for growing and thriving with nature.'"/>
        <PlantGuide/> 
        <Video/>
        <Footer/>
    </main>
</template>

<style scoped>

</style>
