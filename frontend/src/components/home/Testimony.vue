<script setup>
    const props = defineProps({
        testimony:Object
    })
</script>

<template>
    <!-- testimony -->
    <div class="max-w-md bg-[#ECF39E] p-7 shadow rounded h-50">
        <!-- user img and name -->
        <div class="flex items-center gap-2 mb-1">
            <img v-if="props.testimony.image==''" src="" alt="" class="bg-gray-300 h-5 md:h-6 w-5 md:w-6 rounded-4xl">
            <img v-else :src="props.testimony.image" alt="">
            <p class="font-semibold text-xs md:text-sm">{{ props.testimony.name }}</p>
        </div>
        <!-- description -->
        <p class="text-xs md:text-sm">{{ props.testimony.description }}</p>
    </div>
</template>