import Vue from 'vue'
import Vuex from 'vuex'
import cart from './modules/cart'
import userInfo from './modules/userInfo'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        cart,
        userInfo
    }
})