// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/HomeViews.vue';
import Foods from '../views/FoodsViews.vue';

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/foods',
        name: 'Foods',
        component: Foods
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;