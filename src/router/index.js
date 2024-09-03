// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/HomeViews.vue';
import Foods from '../views/FoodsViews.vue';
import FoodDetail from '../views/FoodDetails.vue';
import Keranjang from '../views/Keranjang.vue';
import PesananSukses from '../views/PesananSukses.vue';

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/foods',
        name: 'Foods',
        component: Foods
    },
    {
        path: '/foods/:id',
        name: 'FoodDetail',
        component: FoodDetail
    },
    {
        path: '/keranjang',
        name: 'Keranjang',
        component: Keranjang
    },
    {
        path: '/pesanan-sukses',
        name: 'PesananSukses',
        component: PesananSukses
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;