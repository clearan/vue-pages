import Vue from 'vue';
import Router from 'vue-router'
// import HomePage  from "../view/HomePage";
Vue.use(Router);
export default new Router({
    routes: [
        {
            path: '/',
            name: 'homePage',
            component: () => import(/*webpackChunkName: "router-h5-homepage"*/ '../view/HomePage')
            // component: HomePage,
        },
        {
            path: '/list',
            name: 'list',
            component: () => import(/*webpackChunkName: "router-h5-list"*/ '../view/List')
        }
    ],
})
