import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from "./router.js"
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {library} from "@fortawesome/fontawesome-svg-core";
import {faTruck, faUser,faCreditCard,faComment,faHeart} from "@fortawesome/free-solid-svg-icons";


library.add(
    faUser,
    faTruck,
    faCreditCard,
    faComment,
    faHeart
);

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.config.productionTip = false
Vue.use(ElementUI)

new Vue({
    render: h => h(App),
    router
}).$mount('#app')
