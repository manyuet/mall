import Vue from 'vue'
import Vuex from 'vuex'
import cart from './modules/cart'
import account from './modules/account'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        cart,
        account
    }
})