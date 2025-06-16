<script setup>
    import { ref } from 'vue';

    const testimonies = ref([
        { image: '', name: 'Ryan Brooks', description: 'Bloom & Thrive has completely transformed my home into a peaceful, green sanctuary. Their plants are not only beautiful but also come with easy-to-follow care instructions, which is perfect for someone like me who’s new to plant care.'},
        { image: '', name: 'Caleb Turner', description: 'I’ve been searching for a shop that combines gorgeous plants with eco-friendly practices, and Bloom & Thrive exceeded my expectations. Their team is so helpful, and their passion for what they do really shines through in every product.'},
        { image: '', name: 'Ethan Gray', description: 'I recently purchased a monstera from Bloom & Thrive, and it has quickly become the centerpiece of my living room. The plant arrived in perfect condition, and the care tips included were super helpful. '}
    ])
    
</script>

<template>
    <section class="bg-white flex flex-col items-center justify-center gap-8 py-10 md:p-30">
        <h2 class="source-serif text-3xl md:text-5xl text-[#4F772D] font-semibold">Testimonials</h2>
        <div class="flex flex-col items-center md:flex-row gap-3 w-5/6">
            <!-- testimony -->
            <div v-for="(testimony,index) in testimonies" :key="index" class="max-w-md bg-[#ECF39E] p-7 shadow rounded">
                <!-- user img and name -->
                <div class="flex items-center gap-2 mb-1">
                    <img v-if="testimony.image==''" src="" alt="" class="bg-gray-300 h-5 md:h-6 w-5 md:w-6 rounded-4xl">
                    <img v-else :src="testimony.image" alt="">
                    <p class="font-semibold text-xs md:text-sm">{{ testimony.name }}</p>
                </div>
                <!-- description -->
                 <p class="text-xs md:text-sm">{{ testimony.description }}</p>
            </div>
        </div>
        
    </section>
</template>

<style scoped>
    .shadow {
        box-shadow: 0 5px #619137; /* custom green shadow */
    }
</style>
