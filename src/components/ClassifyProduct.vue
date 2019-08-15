<template>
    <div id="frame">
        <div class="head">
            <span style="margin-left: 25px;font-size: 22px;color: #333" >{{productInfo.type}}</span>
            <span style="float: right;margin-right: 30px;color: #424242;font-size: 16px" @click="changeHotToAnother">&nbsp;&nbsp;&nbsp;&nbsp;{{productInfo.data.anotherName}}</span>
            <span style="float: right;color: #424242;font-size: 16px" @click="changeAnotherToHot">热门</span>
        </div>

        <el-row style="margin-left: 10px">
            <el-col :span="4" style="margin-right: 30px">
                <recommend-image :product="productInfo.data.recommend[0]"/>
            </el-col>
            <el-col :span="4" v-for="(product,index) in changeOfProduct.slice(0,4)" :key="index"
                    style="margin-right: 30px">
                <good-item style="text-align: center" :product="product"/>
            </el-col>
        </el-row>
        <el-row style="margin-left: 10px">
            <el-col :span="4" style="margin-right: 30px">
                <recommend-image :product="productInfo.data.recommend[1]"/>
            </el-col>
            <el-col :span="4" v-for="(product,index) in changeOfProduct.slice(4,7)" :key="index"
                    style="margin-right: 30px">
                <good-item style="text-align: center" :product="product"/>
            </el-col>
            <el-col :span="4">
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
                changeOfProduct: this.productInfo.data.hot
            }
        },
        methods: {
            changeHotToAnother() {
                this.changeOfProduct = this.productInfo.data.another
                console.log(this.productInfo.data.another)
            },
            changeAnotherToHot() {
                this.changeOfProduct = this.productInfo.data.hot
            }
        }
    }
</script>

<style scoped>
    #frame {
        margin-left: auto;
        margin-right: auto;
    }
</style>