import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from "./router.js"
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store'

import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {library} from "@fortawesome/fontawesome-svg-core";
import {faTruck, faUser, faCreditCard, faComment, faHeart} from "@fortawesome/free-solid-svg-icons";
import {faWrench} from "@fortawesome/free-solid-svg-icons/faWrench";
import {faHistory} from "@fortawesome/free-solid-svg-icons/faHistory";
import {faGift} from "@fortawesome/free-solid-svg-icons/faGift";
import {faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons/faMapMarkerAlt";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons/faShoppingCart";


library.add(
    faUser,
    faTruck,
    faCreditCard,
    faComment,
    faHeart,
    faWrench,
    faHistory,
    faGift,
    faMapMarkerAlt,
    faShoppingCart,

);
Vue.use(Vuex)
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(VueAxios,axios);

new Vue({
    render: h => h(App),
    router,
    store
}).$mount('#app')
