import Vue from "vue";
import VueRouter from "vue-router";
import ProductDetail from "./views/ProductDetail";
import Home from "./views/Home"
import PersonalCenter from "./views/PersonalCenter";
import Login from "./views/Login";
import Register from "./views/Register";
import ShoppingCart from "./views/ShoppingCart";
import ConfirmOrder from "./views/ConfirmOrder";
import MyOrder from "./views/MyOrder";
import OrderDetail from "./views/OrderDetail";
import Vuex from "vuex";
import store from "./store";

Vue.use(VueRouter);
Vue.use(Vuex)

const routes = [
    {
        path: "/",
        name: 'Home',
        component: Home,
        meta: {notRequireAuth: true}

    },
    {
        path: "/product",
        name: 'Product',
        component: ProductDetail,
        meta: {notRequireAuth: true}
    },
    {
        path: "/personal",
        name: 'Personal',
        //   meta: {notRequireAuth: true},
        component: PersonalCenter
    },
    {
        path: "/login",
        name: 'Login',
        component: Login,
        meta: {notRequireAuth: true}

    },
    {
        path: '/register',
        name: 'Register',
        component: Register,
        meta: {notRequireAuth: true}

    },
    {
        path: '/shoppingCart',
        name: 'ShoppingCart',
        component: ShoppingCart
    },
    {
        path: '/confirmOrder',
        name: 'ConfirmOrder',
        // meta: {notRequireAuth: true},
        component: ConfirmOrder
    },
    {
        path: '/myOrder',
        name: 'MyOrder',
        //   meta: {notRequireAuth: true},
        component: MyOrder
    },
    {
        path: '/orderDetail',
        name: 'OrderDetail',
        //    meta: {notRequireAuth: true},
        component: OrderDetail
    }
];
const router = new VueRouter({
    mode: 'history',
    routes
});

router.beforeEach((to, from, next) => {
    if (to.meta.notRequireAuth) {  // 判断该路由是否需要登录权限
        next();
    } else {
        if (store.state.userInfo.account.isLogin) {  // 通过vuex state获取当前的token是否存在
            next();

        } else {
            next({
                path: '/login',
                query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
            })
        }
    }
})
export default router;