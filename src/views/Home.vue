<template>
    <div>
        <carousel/>
        <goods-frame/>
        <classify-product class="classify-product" v-for="(productInfo,index) in productInfos" :key="index"
                          :productInfo="productInfo"/>
        <broad-side-navigation-bar class="broad"/>
    </div>
</template>

<script>
    import Carousel from "../components/Carousel";
    import GoodsFrame from "../components/GoodsFrame";
    import ClassifyProduct from "../components/ClassifyProduct";
    import BroadSideNavigationBar from "../components/BroadSideNavigationBar";

    export default {
        name: "Home",
        components: {BroadSideNavigationBar, ClassifyProduct, GoodsFrame, Carousel},
        created() {
            this.axios.get("http://mock-api.com/NnX4Gkny.mock/products/home").then((response) => {
                this.productInfos = response.data
            }).catch((error) => {
                console.log(error)
            })
        },
        data() {
            return {
                productInfos: []
            }
        }
    }
</script>

<style scoped>
    .broad {
        position: fixed;
        bottom: 160px;
        right: 40px;
        background-color: white;
        width: 120px;
    }
</style>