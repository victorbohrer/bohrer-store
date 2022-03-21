import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import StoreView from '../views/StoreView.vue'

const routes = [{
        path: '/',
        name: 'home',
        component: HomeView
    },
    { path: '/store', name: 'store', component: StoreView } // {
    //     path: '/about',
    //     name: 'about',
    //     component: () =>
    //         import ( /* webpackChunkName: "about" */ '../views/AboutView.vue')
    // },
    // {
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router