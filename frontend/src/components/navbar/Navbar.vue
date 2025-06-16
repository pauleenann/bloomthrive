<script setup>
    import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
    import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/vue/24/outline'
    import logo from '../../assets/image/logo1.png'
    import logo3 from '../../assets/image/logo3.PNG'
    import { RouterLink, useRoute } from 'vue-router'
    
    const route = useRoute();
    let currentPath = route.path;
  
    const navigation = [
        { name: 'Home', href: '/'},
        { name: 'Shop', href: '/shop' },
        { name: 'Blog', href: '/blog'},
        { name: 'About Us', href: '/about-us' },
        { name: 'Contact', href: '/contact' },
    ]

    // pages with white text
    const pages = [
      '/',
      '/about-us',
      '/blog',
      '/contact'
    ]

    console.log(currentPath)
</script>


<template>
    <Disclosure as="nav" class="w-5/6 absolute top-15 z-30" v-slot="{ open }">
      <div class="">
        <div class="relative flex h-16 items-center justify-between">
          <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <!-- Mobile menu button-->
            <DisclosureButton class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
              <span class="absolute -inset-0.5" />
              <span class="sr-only">Open main menu</span>
              <Bars3Icon v-if="!open" class="block size-6" aria-hidden="true" />
              <XMarkIcon v-else class="block size-6" aria-hidden="true" />
            </DisclosureButton>
          </div>
          <div class="flex w-full items-center justify-between">
            <div class="flex flex-1 items-center justify-center sm:flex-none sm:justify-start">
                <img v-if="pages.includes(currentPath)" class="h-15 w-30" :src="logo" alt="Your Company" />
                <img v-else class="h-13 w-30" :src="logo3" alt="Your Company" />
            </div>
            <div class="hidden sm:block">
              <div class="flex justify-between gap-8">
                <RouterLink v-for ="item in navigation" :key="item.name" :to="item.href" :class="[pages.includes(currentPath)? ' text-white' : 'text-[#4F772D]', 'rounded-md text-md']">{{ item.name }}</RouterLink>
              </div>
            </div>
            <div class="absolute inset-y-0 right-0 flex items-center gap-2 sm:static ">
                <button type="button" :class="[pages.includes(currentPage) ? 'text-white': 'text-[#4F772D]', 'relative']">
                  <font-awesome-icon :icon="['fas', 'magnifying-glass']" :class="[pages.includes(currentPath) ? ' text-white' : 'text-[#4F772D]', 'relative text-xl']" />
                </button>

                <button type="button" class="relative text-white">
                  <font-awesome-icon :icon="['fas', 'bag-shopping']" :class="[pages.includes(currentPath) ? ' text-white' : 'text-[#4F772D]', 'relative text-xl']"/>
                </button>
    
                <!-- Profile dropdown -->
                <Menu as="div" class="relative">
                <div>
                    <MenuButton class="relative flex text-sm ">
                    
                    <font-awesome-icon :icon="['fas', 'circle-user']" :class="[pages.includes(currentPath) ? ' text-white' : 'text-[#4F772D]', 'relative text-2xl']"/>
                    </MenuButton>
                </div>
                <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
                    <MenuItems class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 focus:outline-hidden">
                    <MenuItem v-slot="{ active }">
                        <a href="#" :class="[active ? 'bg-gray-100 outline-hidden' : '', 'block px-4 py-2 text-sm text-gray-700']">Your Profile</a>
                    </MenuItem>
                    <MenuItem v-slot="{ active }">
                        <a href="#" :class="[active ? 'bg-gray-100 outline-hidden' : '', 'block px-4 py-2 text-sm text-gray-700']">Settings</a>
                    </MenuItem>
                    <MenuItem v-slot="{ active }">
                        <a href="#" :class="[active ? 'bg-gray-100 outline-hidden' : '', 'block px-4 py-2 text-sm text-gray-700']">Sign out</a>
                    </MenuItem>
                    </MenuItems>
                </transition>
                </Menu>
            </div>
          </div>
          
        </div>
      </div>
  
      <DisclosurePanel class="sm:hidden absolute bg-white rounded">
        <div class="space-y-1 px-2 pt-2 pb-3">
          <RouterLink v-for="item in navigation" :key="item.name" as="a" :to="item.href" class="text-sm text-gray-700 block py-1 px-3" :aria-current="item.current ? 'page' : undefined">
            {{ item.name }}
          </RouterLink>
        </div>
      </DisclosurePanel>
    </Disclosure>
</template>
  