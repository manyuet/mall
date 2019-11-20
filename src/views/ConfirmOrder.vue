<template>
    <div id="frame">
        <el-row><p class="receive">收货地址</p></el-row>
        <div id="takeProductAddress">
            <div class="address">
                <el-row>
                    <span class="username">{{username}}</span>
                    <span class="school">学校</span>
                </el-row>
                <el-row class="row-number">
                    <span class="span-number">{{phoneNumber}}</span>
                </el-row>
                <el-row class="row-addr">
                    <span>{{productInfos[0].address.province}}&nbsp;&nbsp;{{productInfos[0].address.city}}&nbsp;&nbsp;{{productInfos[0].address.area}}</span>
                </el-row>
                <el-row class="row-addr">
                    {{productInfos[0].address.province}}{{productInfos[0].address.city}}{{productInfos[0].address.area}}{{productInfos[0].address.street}}
                </el-row>
            </div>
            <div class="new address">
                <div class="add">
                    <i class="el-icon-circle-plus-outline"></i><br>
                    <el-link :underline="false" @click.native="addNewAddress">添加新地址</el-link>
                </div>
            </div>
        </div>
        <div id="product">
            <el-row class="row-product">
                <el-col :span="23" class="col-product">商品</el-col>
            </el-row>
            <div id="product-info">
                <el-row
                        class="row-info"
                        v-for="(productInfo,index) of productInfos"
                        :key="index"
                >
                    <el-col :span="1"><img :src="productInfo.imgSrc" class="col-img"></el-col>
                    <el-col :span="10" class="col-name">{{productInfo.name}}&nbsp;&nbsp;{{productInfo.color}}</el-col>
                    <el-col :span="4" class="col-price">{{productInfo.price}}元 X
                        {{productInfo.count}}
                    </el-col>
                    <el-col :span="4" class="all-price" :offset="3">
                        {{productInfo.price*productInfo.count}}元
                    </el-col>
                </el-row>
            </div>
            <div id="delivery">
                <el-row class="row-deli">
                    <el-col :span="3">配送方式</el-col>
                    <el-col :span="2" class="shipping">包邮</el-col>
                </el-row>
            </div>
            <div id="confirm">
                <el-row class="row-piece">
                    <el-col :span="22">商品件数：</el-col>
                    <span style="color: #2C9CFA">{{totalProductNum}}件</span>
                </el-row>
                <el-row class="total-price">
                    <el-col :span="22">商品总价：</el-col>
                    <span style="color: #2C9CFA">{{totalPrice}}元</span>
                </el-row>
                <el-row class="freight">
                    <el-col :span="22">运费：</el-col>
                    <span style="color: #2C9CFA">0元</span>
                </el-row>
                <el-row class="row-total-price">
                    <el-col :span="22">应付总额：</el-col>
                    <span class="span-total-price">{{totalPrice}}元</span>
                </el-row>
            </div>
            <el-row class="return-cart">
                <el-col :span="20">
                    <el-button @click.native="openShoppingCart">返回购物车</el-button>
                </el-col>
                <el-col :span="3">
                    <el-button type="primary">去结算</el-button>
                </el-col>
            </el-row>
        </div>


    </div>
</template>

<script>
    export default {
        name: "ConfirmOrder",
        data() {
            return {
                username: '小阿萨德',
                phoneNumber: 1234567,
                productInfos: JSON.parse(localStorage.getItem("selectedProducts")),
                totalPrice: 0,
                totalProductNum: 0
            }
        },
        methods: {
            openShoppingCart() {
                this.$router.push("/shoppingCart")
            },
            addNewAddress() {
                this.$prompt('添加收货地址', {
                    confirmButtonText: '保存',
                    cancelButtonText: '取消',
                });
            }
        },
        created() {
            this.totalPrice = 0;
            for (const productInfo of this.productInfos) {
                this.totalProductNum += productInfo.count;
                this.totalPrice += Number(productInfo.count * productInfo.price)
            }
        }
    }
</script>

<style scoped>
    #frame {
        min-width: 1226px;
        background-color: white;
        margin-top: 30px;
        padding-top: 30px;
    }

    #product {
        margin-top: 40px
    }

    #takeProductAddress {
        display: flex;
        margin-left: 40px
    }

    #product-info {
        border-bottom: #e3e6e6 solid 1px;
        margin-left: 40px;
        margin-right: 40px
    }

    #delivery {
        border-bottom: #e3e6e6 solid 1px;
        margin-top: 10px;
        margin-left: 40px;
        margin-right: 40px
    }

    #confirm {
        border-bottom: #e3e6e6 solid 1px;
        margin-top: 10px;
        font-size: 14px;
        color: #757575;
        text-align: right;
        height: 180px;
        padding-right: 100px
    }

    .address {
        border: #cccfcf 1px solid;
        width: 270px;
        height: 180px;
        padding: 15px 24px 0;
        margin-right: 20px;
    }

    .receive {
        font-size: 18px;
        color: #333333;
        margin-left: 40px
    }

    .username {
        font-size: 18px;
        color: #333333
    }

    .school {
        font-size: 14px;
        color: #B0B0B0;
        float: right
    }

    .row-number {
        margin-top: 20px
    }

    .span-number {
        font-size: 14px;
        color: #B0B0B0;
    }

    .row-addr {
        font-size: 14px;
        color: #B0B0B0
    }

    .add {
        width: 200px;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
        font-size: 14px;
        color: #B0B0B0;
        margin-top: 50px
    }

    .el-icon-circle-plus-outline {
        font-size: 30px
    }

    .row-product {
        font-size: 18px;
        color: #333333;
        margin-left: 40px
    }

    .col-product {
        border-bottom: #e3e6e6 solid 1px;
        padding-bottom: 10px
    }

    .row-info {
        margin-top: 20px;
    }

    .col-img {
        width: 50px;
        height: 50px
    }

    .col-name {
        margin-top: 10px;
        margin-left: 5px;
    }

    .col-price {
        margin-top: 10px;
        text-align: right
    }

    .all-price {
        margin-top: 10px;
        color: #2C9CFA;
        text-align: right
    }

    .row-deli {
        line-height: 90px
    }

    .shipping {
        color: #2C9CFA;
        font-size: 14px
    }

    .row-piece {
        line-height: 30px;
        margin-top: 50px
    }

    .total-price {
        line-height: 30px
    }

    .freight {
        line-height: 30px
    }

    .row-total-price {
        line-height: 70px
    }

    .span-total-price {
        color: #2C9CFA;
        font-size: 30px
    }

    .return-cart {
        text-align: right;
        line-height: 70px
    }

    .el-button {
        width: 120px
    }
</style>