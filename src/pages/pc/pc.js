import Vue from "vue";
import App from "../pc/App";
import router from "../pc/router";
import  VConsole from "vconsole";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.prototype.$vconsole = VConsole;
Vue.use(ElementUI)
new Vue({
    render: h => h(App),
    router,
}).$mount('#app')
