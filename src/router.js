import Vue from "vue";
import VueRouter from "vue-router";
import ProductDetail from "./views/ProductDetail";
import Home from "./views/Home"

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
    }

];
const router = new VueRouter({
    mode: 'history',
    routes
});
export default router;