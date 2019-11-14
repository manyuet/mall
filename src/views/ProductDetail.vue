<template>
    <div style="background-color: white">
        <el-row>
            <el-col :span="11">
                <el-carousel trigger="click" height="560px">
                    <el-carousel-item v-for="(image,index) in productInfos.imgUrls" :key="index">
                        <img :src="image" style="width: 560px;height: 560px;"/>
                    </el-carousel-item>
                </el-carousel>
            </el-col>
            <el-col :offset="1" :span="12" style="margin-top: 20px">
                <span style="font-size: 24px">{{productInfos.title}}</span><br>
                <div style="font-size: 14px;color: rgb(176,176,176);margin-top: 5px">{{productInfos.desc}}</div>
                <br>
                <span style="font-size: 18px;color: #2c9cfa">{{productInfos.price}}元</span><br>
                <el-row style="background-color: #2c9cfa;color: white;line-height: 40px;margin-top: 5px">
                    <cut-time-down/>
                </el-row>
                <el-row style="background-color:rgb(249,249,250);color: #2c9cfa;line-height: 50px;margin-top: 5px;">
                    <span style="margin-left: 15px;font-size: 24px">￥{{productInfos.price}}元</span>
                </el-row>
                <el-row style="line-height: 70px;background-color: rgb(250,250,250);margin-top: 5px">
                    <i class="el-icon-location-outline" style="margin-left: 20px;margin-right: 10px"></i>
                    <span v-for="(addr,index) in productInfos.address" :key="index"
                          style="margin-right: 10px;">{{addr}}</span>
                </el-row>
                <div style="margin-top: 10px">
                    <span>选择颜色</span><br>
                    <el-radio v-model="selectedColor"
                              v-for="(color,index) in productInfos.colors"
                              :key="index"
                              :label="color.label"
                              border
                              style="width: 175px;fill: #2c9cfa"
                    >
                    </el-radio>
                </div>
                <el-row style="background-color: rgb(249,249,250);line-height: 50px;margin-top: 10px">
                    <span style="margin-left: 15px">{{productInfos.title}}</span><br>
                    <span style="color: #2c9cfa;font-size: 24px;margin-left: 15px">{{productInfos.price}}元</span>
                </el-row>
                <el-row style="margin-top: 10px">
                    <el-button v-if="userNotNull"
                               :class={username:userNotNull}
                               @click.native="clickShoppingCart"
                               style="background-color: #2c9cfa;color: white;width: 280px">加入购物车
                    </el-button>
                    <el-button v-else
                               :class={username:userIsNull}
                               style="background-color: #2c9cfa;color: white;width: 280px">登录后购买
                    </el-button>
                    <el-button style="background-color: rgb(176,176,176);color: white;width: 150px">
                        <i class="el-icon-star-off"></i>&nbsp;收藏
                    </el-button>
                </el-row>
            </el-col>
        </el-row>
        <el-row v-for="(image,index) in productInfos.descImaUrls"
                :key="index"
                style="width: 100%;background-color:rgb(245,245,245)">
            <img :src="image">
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
        computed:{
            shoppingCartProducts(){
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
                        address:this.productInfos.address
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

</style>