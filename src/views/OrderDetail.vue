<template>
    <div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/orderDetail' }">订单详情</el-breadcrumb-item>
        </el-breadcrumb>
        <el-container>
            <el-aside>
                <left-side-menu/>
            </el-aside>
            <el-main>
                <el-row class="row-detail">
                    <el-col :span="4">订单详情</el-col>
                    <el-col :span="10" class="col-care">请谨慎钓鱼链接或诈骗电话,
                        <el-link :underline="false" class="link-more">了解更多></el-link>
                    </el-col>
                </el-row>
                <el-row class="order-number">
                    <el-row class="row-order-number">
                        <el-col :span="6" class="col-order-number">订单号：{{orders.orderId}}</el-col>
                        <el-col :span="3" style="float: right">
                            <el-button>申请售后</el-button>
                        </el-col>
                    </el-row>
                    <el-row class="row-status">{{orders.status}}</el-row>
                    <el-row>
                        <el-steps :active="orders.active" finish-status="success">
                            <el-step title="下单"></el-step>
                            <el-step title="付款"></el-step>
                            <el-step title="配货"></el-step>
                            <el-step title="出库"></el-step>
                            <el-step title="交易成功"></el-step>
                        </el-steps>
                    </el-row>
                    <el-row class="row-order-info">
                        <el-col :span="3" class="col-img"><img :src="orders.img"></el-col>
                        <el-col :span="8" class="col-order-color">
                            {{orders.name}}&nbsp;{{orders.color}}
                        </el-col>
                        <el-col :span="4" class="col-total-price">
                            {{orders.price}}元 x {{orders.count}}
                        </el-col>
                    </el-row>
                    <el-row class="row-receive-msg">
                        收货信息
                    </el-row>
                    <el-row class="row-receive-name">
                        姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 名： {{orders.username}}
                    </el-row>
                    <el-row class="row-phone-number">
                        联系电话： {{orders.phoneNumber}}
                    </el-row>
                    <el-row class="row-receive-addr">
                        收货地址：
                        {{orders.address.province}}&nbsp;{{orders.address.city}}&nbsp;{{orders.address.area}}&nbsp;
                        {{orders.address.province}}{{orders.address.city}}{{orders.address.area}}{{orders.address.street}}
                    </el-row>
                    <el-row class="row-pay">
                        <span class="span-pay">支付方式</span>
                    </el-row>
                    <el-row class="row-inline-pay">
                        <span class="span-inline-pay">支付方式:   在线支付</span>
                    </el-row>
                    <div class="product-money">
                        <el-row class="row-total-price">
                            <el-col :span="21" class="col price">商品总价：</el-col>
                            <span style="color: #2C9CFA">{{orders.price*orders.count}}元</span>
                        </el-row>
                        <el-row class="row-freight">
                            <el-col :span="21" class="col price">运费：</el-col>
                            <span style="color: #2C9CFA">0元</span>
                        </el-row>
                        <el-row class="row-real-price">
                            <el-col :span="21" class="col price">实付金额：</el-col>
                            <span class="span-yuan">{{orders.price*orders.count}}元</span>
                        </el-row>
                    </div>
                </el-row>
            </el-main>
        </el-container>
    </div>
</template>

<script>
    import LeftSideMenu from "../components/LeftSideMenu";

    export default {
        name: "OrderDetail",
        components: {LeftSideMenu},
        data() {
            return {
                orders: {}
            }
        },
        created() {
            this.axios.get("http://mock-api.com/NnX4Gkny.mock/users/1/orders/1").then(response => {
                this.orders = response.data;
            }).catch(error => {
                console.log(error)
            });
            if (this.orders.status === 'waitPay') {
                this.active = 1;
            }
            if (this.orders.status === 'waitReceive') {
                this.active = 4;
            }
        }
    }
</script>

<style scoped>
    .el-breadcrumb {
        color: #757575;
        line-height: 40px;
        margin-left: 10px
    }

    .el-aside {
        width: 230px
    }

    .el-main {
        width: 980px;
        background-color: white;
        margin-left: 15px;
        padding: 70px 40px
    }

    .row-detail {
        font-size: 30px;
        color: #757575;
        line-height: 50px
    }

    .col-care {
        font-size: 12px;
        color: #757575;
    }

    .link-more {
        font-size: 12px;
        color: #757575;
    }

    .order-number {
        margin-top: 20px
    }

    .row-order-number {
        border-bottom: #cccfcf 1px solid;
        line-height: 70px
    }

    .col-order-number {
        font-size: 18px;
        color: #333333
    }

    .row-status {
        font-size: 18px;
        color: #B0B0B0;
        line-height: 70px
    }

    .row-order-info {
        border-bottom: #cccfcf 1px solid;
        border-top: #cccfcf 1px solid;
        margin-top: 20px;
        line-height: 70px
    }

    .col-img {
        padding-top: 30px
    }

    .col-order-color {
        font-size: 14px;
        color: #333333;
        margin-top: 30px
    }

    .col-total-price {
        font-size: 14px;
        color: #333333;
        margin-top: 30px
    }

    .row-receive-msg {
        font-size: 18px;
        color: #333333;
        line-height: 70px;
        margin-top: 10px
    }

    .row-receive-name {
        color: #757575;
        font-size: 14px
    }

    .row-phone-number {
        color: #757575;
        font-size: 14px;
        margin-top: 8px
    }

    .row-receive-addr {

        color: #757575;
        font-size: 14px;
        margin-top: 8px;
    }

    .row-pay {
        border-top: #cccfcf 1px solid;
        margin-top: 20px;
        line-height: 150px
    }

    .span-pay {
        color: #333333;
        font-size: 18px;
        margin-top: 50px
    }

    .row-inline-pay {
        border-bottom: #cccfcf 1px solid;
        height: 60px;
        margin-top: -50px
    }

    .span-inline-pay {
        color: #757575;
        font-size: 14px;
    }

    .product-money {
        text-align: right;
        padding-right: 20px;
        margin-top: 40px
    }

    .row-total-price {
        line-height: 30px
    }

    .col-price {
        color: #757575;
        font-size: 14px
    }

    .row-freight {
        line-height: 30px
    }

    .row-real-price {
        line-height: 70px
    }

    .span-yuan {
        color: #2C9CFA;
        font-size: 30px
    }
</style>