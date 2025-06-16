import {createMemoryHistory, createRouter} from 'vue-router'

import AboutUsView from '@/views/AboutUsView.vue'
import BlogView from '@/views/BlogView.vue'
import ContactView from '@/views/ContactView.vue'
import HomeView from '@/views/HomeView.vue'
import ShopView from '@/views/ShopView.vue'
import { createWebHistory } from 'vue-router'


const routes = [
    { path:'/', component: HomeView},
    { path:'/about-us', component: AboutUsView},
    { path:'/blog', component: BlogView},
    { path:'/contact', component: ContactView},
    { path:'/shop', component: ShopView}
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router