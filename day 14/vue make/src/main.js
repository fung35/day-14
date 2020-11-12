import VueRouter from "vue-router";
import Vue from 'vue/dist/vue.esm.js'
Vue.use(VueRouter);

const routes = [
    {path:'/login',
        component: function (resolve) {
            require(['./components/login.vue'],resolve)
        }},
    {path: '/register',
        component: function (resolve) {
            require(['./components/register.vue'],resolve)
        }
    }
]
const router = new VueRouter({
    routes // (缩写) 相当于 routes: routes
})
const app = new Vue({
    router: router
}).$mount('#app')


