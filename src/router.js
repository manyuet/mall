import Vue from "vue";
import VueRouter from "vue-router";
import ProductDetail from "./views/ProductDetail";
import Home from "./views/Home"
import PersonalCenter from "./views/PersonalCenter";
import Login from "./views/Login";
import Register from "./views/Register";
import ShoppingCart from "./views/ShoppingCart";
import ConfirmOrder from "./views/ConfirmOrder";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: 'Home',
        component: Home
    },
    {
        path: "/product",
        name: 'Product',
        component: ProductDetail
    },
    {
        path:"/personal",
        name:'Personal',
        component:PersonalCenter
    },
    {
        path:"/login",
        name:'Login',
        component:Login
    },
    {
        path:'/register',
        name:'Register',
        component:Register
    },
    {
        path:'/shoppingCart',
        name:'ShoppingCart',
        component:ShoppingCart
    },
    {
        path:'/confirmOrder',
        name:'ConfirmOrder',
        component:ConfirmOrder
    }

];
const router = new VueRouter({
    mode: 'history',
    routes
});
export default router;