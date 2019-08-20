import Vue from "vue";
import VueRouter from "vue-router";
import ProductDetail from "./views/ProductDetail";
import Home from "./views/Home"
import PersonalCenter from "./views/PersonalCenter";

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
    }

];
const router = new VueRouter({
    mode: 'history',
    routes
});
export default router;