import Vue from "vue";
import App from "../mobile/App";
import router from "../mobile/router";
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
Vue.use(ViewUI)
new Vue({
    render: h => h(App),
    router,
}).$mount('#app')
