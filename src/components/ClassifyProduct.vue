<template>
    <div id="frame">
        <div class="headerImg"><img :src="productInfo.headerImageSrc"></div>
        <div class="head">
            <span class="type">{{productInfo.type}}</span>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span :class={selected:isSeleteAnother}
                  class="select"
                  @mouseover="changeHotToAnother">{{productInfo.data.anotherName}}</span>
            <span :class={selected:isSeleteHot}
                  class="select"
                  @mouseover="changeAnotherToHot">热门</span>
        </div>
        <el-row>
            <el-col :span="4">
                <recommend-image :product="productInfo.data.recommend[0]" @click.native="openProductDetail"/>
            </el-col>
            <el-col class="product"
                    :span="4"
                    v-for="(product,index) in changeOfProduct.slice(0,4)"
                    :key="index">
                <good-item style="text-align: center"
                           :product="product"
                           @click.native="openProductDetail"/>
            </el-col>
        </el-row>
        <el-row class="row">
            <el-col :span="4">
                <recommend-image :product="productInfo.data.recommend[1]" @click.native="openProductDetail"/>
            </el-col>
            <el-col class="product"
                    :span="4"
                    v-for="(product,index) in changeOfProduct.slice(4,7)"
                    :key="index">
                <good-item style="text-align: center"
                           :product="product"
                           @click.native="openProductDetail"/>
            </el-col>
            <el-col :span="4" class="col">
                <el-row>
                    <small-good-item @click.native="openProductDetail"/>
                </el-row>
                <el-row>
                    <small-view-more-item @click.native="openProductDetail"/>
                </el-row>
            </el-col>
        </el-row>
    </div>

</template>

<script>
    import GoodItem from "./GoodItem";
    import SmallGoodItem from "./SmallGoodItem";
    import SmallViewMoreItem from "./SmallViewMoreItem";
    import RecommendImage from "./RecommendImage";

    export default {
        name: "ClassifyProduct",
        components: {RecommendImage, SmallViewMoreItem, SmallGoodItem, GoodItem},
        props: ['productInfo'],
        data() {
            return {
                changeOfProduct: this.productInfo.data.hot,
                isSeleteAnother: false,
                isSeleteHot: true
            }
        },
        methods: {
            changeHotToAnother() {
                this.changeOfProduct = this.productInfo.data.another;
                this.isSeleteHot = false;
                this.isSeleteAnother = true
            },
            changeAnotherToHot() {
                this.changeOfProduct = this.productInfo.data.hot;
                this.isSeleteHot = true;
                this.isSeleteAnother = false
            },
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
    #frame {
        margin-top: 30px;
        margin-left: auto;
        margin-right: auto;
    }

    .headerImg img {
        width: 100%;
    }

    .selected {
        color: #fc6720;
        text-decoration: #fc6720 underline;
    }

    .select {
        float: right;
        font-size: 16px;
        margin-right: 10px
    }

    .head {
        margin-top: 20px;
        margin-bottom: 15px;
    }

    .type {
        margin-left: 5px;
        font-size: 22px;
        color: #333
    }


    .product {
        margin-left: 42px
    }

    .row {
        margin-top: 8px
    }

    .col {
        margin-left: 45px
    }
</style>