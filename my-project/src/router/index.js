// 导入VueRouter
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const router = new VueRouter({
    mode:"history",
    routes: [
        {
            path: '/',
            name: 'login',
            component: () => import('../components/login/Login.vue')
        },
        {
            path: '/home',
            component: () => import('../views/Appear.vue'),
            children: [
                {
                    path: "/home",
                    name: "home",
                    component: () => import('../views/datas/Page2.vue')
                },
                {
                    path: '/list',
                    name: "list",
                    component: () => import('../views/users/List.vue')
                },
                {
                    path: '/manage',
                    name: "manage",
                    component: () => import('../views/manage/Manage.vue'),
                    redirect: '/manage/',
                    children: [
                        {
                            path: "/",
                            name: "Commodity1",
                            component: () => import('../views/manage/commodity/Commodity1.vue')
                        },
                        {
                            path: "/Commodity2",
                            name: "Commodity2",
                            component: () => import('../views/manage/commodity/Commodity2.vue')
                        },
                        {
                            path: "/Commodity3",
                            name: "Commodity3",
                            component: () => import('../views/manage/commodity/Commodity3.vue')
                        }
                    ]
                },
                {
                    path: "/thing",
                    name: "thing",
                    component: () => import('../views/storage/Thing.vue'),
                },
                {
                    path: "/stores",
                    name: "stores",
                    component: () => import('../views/storage/Stores.vue')
                },
                {
                    path: "/nums",
                    name: "nums",
                    component: () => import('../views/storage/Nums.vue'),
                },
                {
                    path: "/page1",
                    name: "page1",
                    component: () => import('../views/datas/Page1.vue')
                },
                {
                    path: "/page3",
                    name: "page3",
                    component: () => import('../views/datas/Page3.vue')
                },
                {
                    path: "/user",
                    name: "user",
                    component: () => import('../views/users/User.vue')
                }
            ]
        }
    ]
})
export default router