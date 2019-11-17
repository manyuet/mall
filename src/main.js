import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from "./router.js"
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store'
import VueI18n from 'vue-i18n'

import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {library} from "@fortawesome/fontawesome-svg-core";
import {faTruck, faUser, faCreditCard, faComment, faHeart} from "@fortawesome/free-solid-svg-icons";
import {faWrench} from "@fortawesome/free-solid-svg-icons/faWrench";
import {faHistory} from "@fortawesome/free-solid-svg-icons/faHistory";
import {faGift} from "@fortawesome/free-solid-svg-icons/faGift";
import {faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons/faMapMarkerAlt";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons/faShoppingCart";

Vue.use(VueI18n) // 通过插件的形式挂载，通过全局方法 Vue.use() 使用插件const i18n = new VueI18n({
const i18n =new VueI18n({
    locale: 'zh', // 语言标识 //this.$i18n.locale // 通过切换locale的值来实现语言切换
    messages: {
        'zh': require('./VueI18n/language-zh'),
        'en': require('./VueI18n/language-en')
    }
})
Vue.config.productionTip = false

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
Vue.use(VueAxios, axios);

new Vue({
    render: h => h(App),
    router,
    store,
    i18n
}).$mount('#app')
