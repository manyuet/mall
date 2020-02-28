<template>
    <div class="goodsDetailFrame">
        <el-card style="height: 300px;width: 224px"  shadow="hover" @click.native="openProductDetail">
            <img :src="product.imageSrc"
                 style="height: 160px;width: 160px;margin: 0 auto"><br>
            <div>
                <span style="font-size: 14px">{{product.title}}</span><br>
                <span style="color: darkgrey;font-size: 12px;">{{product.desc}}</span><br>
                <span style="color: #fc6720;font-size: 14px;">{{product.price}}元</span>
            </div>
        </el-card>
    </div>
</template>

<script>
    export default {
        name: "GoodItem",
        props:['product'],
        methods: {
            openProductDetail() {
                const {href} = this.$router.resolve({
                    name: "Product",
                    query: {productId: '12345'}
                });
                window.open(href, "_blank")
            }
        }
    }
</script>

<style scoped>
    .goodsDetailFrame {
        margin: 5px;
    }

</style>
