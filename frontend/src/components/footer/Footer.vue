<script setup>
    import logo from '../../assets/image/logo2.png'
    
</script>

<template>
    <footer class="h-auto">
        <div class="h-auto bg-[#132A13] flex flex-col items-center justify-center gap-8 p-10 md:p-20">
            <div class="md:w-5/6 h-auto flex flex-wrap gap-4 md:gap-0 justify-between">
                <!-- logo, short description. social links -->
                <div class="flex flex-col items-start gap-2 max-w-xs">
                    <img :src="logo" alt="" class="h-15 md:h-20 w-auto">
                    <p class="text-xs md:text-sm text-white">Transform your living space into a sanctuary of tranquility and growth. Embrace the beauty of nature with lush greenery, vibrant plants, and thoughtfully curated decor that inspires serenity and harmony in every corner of your home.</p>
                    <!-- socials -->
                    <div class="text-white flex gap-2 text-xl md:text-3xl">
                        <font-awesome-icon :icon="['fab', 'facebook']" />
                        <font-awesome-icon :icon="['fab', 'instagram']" />
                        <font-awesome-icon :icon="['fab', 'tiktok']" />
                    </div>
                </div>

                <!-- quick links -->
                <div>
                    <h3 class="text-xl md:text-3xl text-[#ECF39E]">Quick Links</h3>
                    <ul class="list-disc relative left-5 text-white text-xs md:text-lg">
                        <li>Home</li>
                        <li>Shop</li>
                        <li>Blog</li>
                        <li>About Us</li>
                        <li>Contact</li>
                    </ul>
                </div>

                <!-- subscription -->
                <div class="flex flex-col gap-2 justify-start items-start">
                    <h3 class="text-xl md:text-3xl text-[#ECF39E]">Subscribe to our Newsletter</h3>
                    <input type="text" name="email" id="email" class="block py-1 md:py-1.5 pr-3 pl-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none text-xs md:text-lg bg-white w-full rounded" placeholder="Enter email" />
                    <button class="bg-[#ECF39E] py-2 md:py-3 px-3 md:px-5 text-xs md:text-md font-semibold text-[#132A13] rounded">Submit</button>
                </div>

                <!-- contact us -->
                <div>
                    <h3 class="text-xl md:text-3xl text-[#ECF39E]">Contact Us</h3>
                    <!-- email -->
                    <div>
                        <p class="text-xs md:text-lg text-white">bloomthrive@gmail.com</p>
                    </div>
                    <!-- phone -->
                    <div>
                        <p class="text-xs md:text-lg text-white">+63 123 4567 890</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-[#102110] h-10 w-full flex items-center justify-center text-white text-xs">
            Copyright © 2025 Bloom & Thrive
        </div> 
    </footer>
    
</template>

<style scoped>
    
</style>
