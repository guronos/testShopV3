import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import MainPage from "@/pages/MainPage.vue";
import BasketPage from "@/pages/BasketPage.vue";

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'MainPage',
        component: MainPage,
    },
    {
        path: '/basket',
        name: 'BasketPage',
        component: BasketPage,
    }
]

export default createRouter({
    history: createWebHistory(),
    routes
})
