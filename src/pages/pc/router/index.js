import Vue from 'vue';
import Router from 'vue-router'

Vue.use(Router);
export default new Router({
    routes: [
        {
            path: '/',
            name: 'main',
            component: () => import('../view/MainPage')
        },
        {
            path: '/form',
            name:'form',
            component: () => import(/*webpackChunkName: "router-h5-homepage"*/ '../view/Form')
        }
    ],
})
