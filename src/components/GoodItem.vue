<template>
    <div class="goodsDetailFrame">
        <el-card shadow="hover" @click.native="openProductDetail">
            <img :src="product.imageSrc"><br>
            <div>
                <span class="title">{{product.title}}</span><br>
                <span class="desc">{{product.desc}}</span><br>
                <span class="price">{{product.price}}元</span>
            </div>
        </el-card>
    </div>
</template>

<script>
    export default {
        name: "GoodItem",
        props: ['product'],
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

    .el-card {
        height: 300px;
        width: 224px
    }

    img {
        height: 160px;
        width: 160px;
        margin: 0 auto
    }

    .title {
        font-size: 14px
    }

    .desc {
        color: darkgrey;
        font-size: 12px;
    }

    .price {
        color: #fc6720;
        font-size: 14px;
    }

</style>
