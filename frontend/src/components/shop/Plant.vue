<script setup>
    const props = defineProps({
        product:Object
    })
</script>

<template>
    <div class="flex flex-col">
        <!-- image -->
        <div class="h-70 border border-gray-200  mb-3"></div>
        <p class="text-xl font-semibold md:text-xl m-0">{{ props.product.name }}</p>
        <p class="text-xl md:text-xl m-0">PHP {{props.product.price}}</p>
        
    </div>
</template>

<style scoped>

</style>
