import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        component: () => import("components/pages/about.vue"),
        meta: {
            title: "Блок «Обо мне»"
        }
    },
    {
        path: "/work",
        component: () => import("components/pages/work.vue"),
        meta: {
            title: "Блок «Работы»"
        }
    },
    {
        path: "/reviews",
        component: () => import("components/pages/reviews.vue"),
        meta: {
            title: "Блок «Отзывы»"
        }
    },
    {
        path: "/login",
        component: () => import("components/pages/login.vue"),
        meta: {
            public: true
        }
    }
];

export default new VueRouter({ routes, mode: 'history' });