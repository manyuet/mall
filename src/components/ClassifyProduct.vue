<template>
    <div id="frame">
        <div class="headerImg"><img :src="productInfo.headerImageSrc"></div>
        <div class="head">
            <span style="margin-left: 5px;font-size: 22px;color: #333">{{productInfo.type}}</span>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span :class={selected:isSeleteAnother}
                  style="float: right;font-size: 16px;margin-right: 10px" @mouseover="changeHotToAnother">{{productInfo.data.anotherName}}</span>
            <span :class={selected:isSeleteHot}
                  style="float: right;font-size: 16px;margin-right: 10px" @mouseover="changeAnotherToHot">热门</span>
        </div>
        <el-row>
            <el-col :span="4">
                <recommend-image :product="productInfo.data.recommend[0]" @click.native="openProductDetail"/>
            </el-col>
            <el-col :span="4" v-for="(product,index) in changeOfProduct.slice(0,4)" :key="index"
                    style="margin-left: 42px">
                <good-item style="text-align: center" :product="product"/>
            </el-col>
        </el-row>
        <el-row style="margin-top: 8px">
            <el-col :span="4">
                <recommend-image :product="productInfo.data.recommend[1]"/>
            </el-col>
            <el-col :span="4" v-for="(product,index) in changeOfProduct.slice(4,7)" :key="index"
                    style="margin-left: 42px">
                <good-item style="text-align: center" :product="product"/>
            </el-col>
            <el-col :span="4" style="margin-left: 45px">
                <el-row>
                    <small-good-item/>
                </el-row>
                <el-row>
                    <small-view-more-item/>
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
                    query:{ productId: '12345'}
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

    .selected {
        color: #fc6720;
        text-decoration: #fc6720 underline;
    }

    .head {
        margin-top: 20px;
        margin-bottom: 15px;
    }
</style>