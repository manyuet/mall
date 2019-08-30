<template>
    <div id="frame">
        <el-row><p style="font-size: 18px;color: #333333;margin-left: 40px">收货地址</p></el-row>
        <div id="takeProductAddress" style="margin-left: 40px">
            <div class="address">
                <el-row>
                    <span style="font-size: 18px;color: #333333">{{username}}</span>
                    <span style="font-size: 14px;color: #B0B0B0;float: right">学校</span>
                </el-row>
                <el-row style="margin-top: 20px">
                    <span style="font-size: 14px;color: #B0B0B0;">{{phoneNumber}}</span>
                </el-row>
                <el-row style="font-size: 14px;color: #B0B0B0;">
                    <span>{{productInfos[0].address.province}}&nbsp;&nbsp;{{productInfos[0].address.city}}&nbsp;&nbsp;{{productInfos[0].address.area}}</span>
                </el-row>
                <el-row style="font-size: 14px;color: #B0B0B0;">
                    {{productInfos[0].address.province}}{{productInfos[0].address.city}}{{productInfos[0].address.area}}{{productInfos[0].address.street}}
                </el-row>
            </div>
            <div class="new address">
                <div style="width: 200px;margin-left: auto;margin-right: auto;text-align: center;font-size: 14px;color: #B0B0B0;margin-top: 50px">
                    <i class="el-icon-circle-plus-outline" style="font-size: 30px"></i><br>
                    <el-link :underline="false" @click.native="addNewAddress">添加新地址</el-link>
                </div>
            </div>
        </div>
        <div id="product" style="margin-top: 40px">
            <el-row style="font-size: 18px;color: #333333;margin-left: 40px">
                <el-col :span="23" style="border-bottom: #e3e6e6 solid 1px;padding-bottom: 10px">商品</el-col>
            </el-row>
            <div style="border-bottom:#e3e6e6 solid 1px;margin-left: 40px;margin-right: 40px">
                <el-row
                        style="margin-top: 20px;"
                        v-for="(productInfo,index) of productInfos"
                        :key="index"
                >
                    <el-col :span="1"><img :src="productInfo.imgSrc" style="width: 50px;height: 50px"></el-col>
                    <el-col :span="10" style="margin-top: 10px;margin-left: 5px;">{{productInfo.name}}&nbsp;&nbsp;{{productInfo.color}}</el-col>
                    <el-col :span="4" style="margin-top: 10px;text-align: right">{{productInfo.price}}元 X
                        {{productInfo.count}}
                    </el-col>
                    <el-col :span="4" style="margin-top: 10px;color: #2C9CFA;text-align: right" :offset="3">
                        {{productInfo.price*productInfo.count}}元
                    </el-col>
                </el-row>
            </div>
            <div style="border-bottom:#e3e6e6 solid 1px;margin-top: 10px;margin-left: 40px;margin-right: 40px">
                <el-row style="line-height: 90px">
                    <el-col :span="3">配送方式</el-col>
                    <el-col :span="2" style="color: #2C9CFA;font-size: 14px">包邮</el-col>
                </el-row>
            </div>
            <div style="border-bottom:#e3e6e6 solid 1px;margin-top: 10px;font-size: 14px;color: #757575;text-align: right;height: 180px;padding-right: 100px">
                <el-row style="line-height: 30px;margin-top: 50px">
                    <el-col :span="22">商品件数：</el-col>
                    <span style="color: #2C9CFA">{{totalProductNum}}件</span>
                </el-row>
                <el-row style="line-height: 30px">
                    <el-col :span="22">商品总价：</el-col>
                    <span style="color: #2C9CFA">{{totalPrice}}元</span>
                </el-row>
                <el-row style="line-height: 30px">
                    <el-col :span="22">运费：</el-col>
                    <span style="color: #2C9CFA">0元</span>
                </el-row>
                <el-row style="line-height: 70px">
                    <el-col :span="22">应付总额：</el-col>
                    <span style="color: #2C9CFA;font-size: 30px">{{totalPrice}}元</span>
                </el-row>
            </div>
            <el-row style="text-align: right;line-height: 70px">
                <el-col :span="20">
                <el-button style="width: 120px" @click.native="openShoppingCart">返回购物车</el-button>
                </el-col>
                <el-col :span="3">
                    <el-button type="primary" style="width: 120px">去结算</el-button>
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
                totalProductNum:0
            }
        },
        methods: {
            openShoppingCart(){
                this.$router.push("/shoppingCart")
            },
            addNewAddress(){
                this.$prompt( '添加收货地址', {
                    confirmButtonText: '保存',
                    cancelButtonText: '取消',
                });
            }
        },
        created() {
            this.totalPrice = 0;
            for (const productInfo of this.productInfos) {
                this.totalProductNum+=productInfo.count;
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

    #takeProductAddress {
        display: flex;
    }

    .address {
        border: #cccfcf 1px solid;
        width: 270px;
        height: 180px;
        padding: 15px 24px 0;
        margin-right: 20px;
    }
</style>