<template>
    <div style="background-color: white">
        <el-row>
            <el-col :span="11">
                <el-carousel trigger="click">
                    <el-carousel-item v-for="(image,index) in productInfos.imgUrls" :key="index">
                        <img :src="image" class="item-img"/>
                    </el-carousel-item>
                </el-carousel>
            </el-col>
            <el-col :offset="1" :span="12" class="detail">
                <span class="title">{{productInfos.title}}</span><br>
                <div class="desc">{{productInfos.desc}}</div>
                <br>
                <span class="price">{{productInfos.price}}元</span><br>
                <el-row class="cut-time">
                    <cut-time-down/>
                </el-row>
                <el-row class="row-price">
                    <span class="span-price">￥{{productInfos.price}}元</span>
                </el-row>
                <el-row class="row-addr">
                    <i class="el-icon-location-outline"></i>
                    <span v-for="(addr,index) in productInfos.address" :key="index"
                          class="span-addr">{{addr}}</span>
                </el-row>
                <div class="choose-color">
                    <span>选择颜色</span><br>
                    <el-radio v-model="selectedColor"
                              v-for="(color,index) in productInfos.colors"
                              :key="index"
                              :label="color.label"
                              border
                    >
                    </el-radio>
                </div>
                <el-row class="row-info">
                    <span class="span-title">{{productInfos.title}}</span><br>
                    <span class="span-info-price">{{productInfos.price}}元</span>
                </el-row>
                <el-row class="row-buy">
                    <el-button v-if="userNotNull"
                               :class={username:userNotNull}
                               class="button-user"
                               @click.native="clickShoppingCart"
                               style="background-color: #2c9cfa;color: white">加入购物车
                    </el-button>
                    <el-button v-else
                               :class={username:userIsNull}
                               class="button-user"
                               style="background-color: #2c9cfa;color: white">登录后购买
                    </el-button>
                    <el-button class="collect">
                        <i class="el-icon-star-off"></i>&nbsp;收藏
                    </el-button>
                </el-row>
            </el-col>
        </el-row>
        <el-row v-for="(image,index) in productInfos.descImaUrls"
                :key="index"
                class="row-img">
            <img :src="image" class="row-image">
        </el-row>
    </div>
</template>

<script>

    import CutTimeDown from "../components/CutTimeDown";

    export default {
        name: "ProductDetail",
        components: {CutTimeDown},
        data() {
            return {
                productInfos: [],
                userNotNull: true,
                userIsNull: false,
                selectedColor: '',
            }
        },
        created() {
            this.axios.get("http://mock-api.com/NnX4Gkny.mock/products?productId=1").then(response => {
                this.productInfos = response.data
            }).catch(error => {
                console.log(error);
            });
            this.storageProduct();
        },
        computed: {
            shoppingCartProducts() {
                return this.$store.state.cart.shoppingCart
            }
        },
        methods: {
            clickShoppingCart() {
                if (!this.selectedColor) {
                    this.$message.error('请选择商品颜色');
                } else {
                    let productInfo = {
                        name: this.productInfos.title,
                        price: this.productInfos.price,
                        color: this.selectedColor,
                        imgSrc: this.productInfos.imgUrls[0],
                        count: 1,
                        address: this.productInfos.address
                    }
                    let flag = false;
                    for (const shoppingCartProduct of this.shoppingCartProducts) {
                        if (shoppingCartProduct.name === productInfo.name && shoppingCartProduct.color === productInfo.color) {
                            flag = true;
                            shoppingCartProduct.count += 1;
                        }
                    }
                    if (!flag) {
                        this.shoppingCartProducts.push(productInfo);
                    }
                    this.storageProduct();
                    this.$router.push("/shoppingCart");
                }
            },
            storageProduct() {
                this.$store.commit('setIntoShoppingCart', this.shoppingCartProducts)
            }
        }

    }

</script>

<style scoped>
    .item-img {
        width: 560px;
        height: 560px;
    }
    .el-carousel{
        height:560px
    }

    .detail {
        margin-top: 20px
    }

    .title {
        font-size: 24px
    }

    .desc {
        font-size: 14px;
        color: rgb(176, 176, 176);
        margin-top: 5px
    }

    .price {
        font-size: 18px;
        color: #2c9cfa
    }

    .cut-time {
        background-color: #2c9cfa;
        color: white;
        line-height: 40px;
        margin-top: 5px
    }

    .row-price {
        background-color: rgb(249, 249, 250);
        color: #2c9cfa;
        line-height: 50px;
        margin-top: 5px;
    }

    .span-price {
        margin-left: 15px;
        font-size: 24px
    }

    .row-addr {
        line-height: 70px;
        background-color: rgb(250, 250, 250);
        margin-top: 5px
    }

    .el-icon-location-outline {
        margin-left: 20px;
        margin-right: 10px
    }

    .span-addr {
        margin-right: 10px;
    }

    .choose-color {
        margin-top: 10px
    }

    .el-radio {
        width: 175px;
        fill: #2c9cfa
    }

    .row-info {
        background-color: rgb(249, 249, 250);
        line-height: 50px;
        margin-top: 10px
    }

    .span-title {
        margin-left: 15px
    }

    .span-info-price {
        color: #2c9cfa;
        font-size: 24px;
        margin-left: 15px
    }

    .row-buy {
        margin-top: 10px
    }

    .button-user {
        width: 280px
    }

    .collect {
        background-color: rgb(176, 176, 176);
        color: white;
        width: 150px
    }

    .row-img {
        width: 100%;
        background-color: rgb(245, 245, 245)
    }
    img.row-image{
        width: 100%;
    }
</style>