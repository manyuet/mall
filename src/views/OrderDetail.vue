<template>
    <div>
        <el-breadcrumb separator-class="el-icon-arrow-right" style="color: #757575;line-height: 40px;margin-left: 10px">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/orderDetail' }">订单详情</el-breadcrumb-item>
        </el-breadcrumb>
        <el-container>
            <el-aside width="230px">
                <left-side-menu/>
            </el-aside>
            <el-main style="width: 980px;background-color: white;margin-left: 15px;padding: 70px 40px">
                <el-row style="font-size: 30px;color:#757575;line-height: 50px">
                    <el-col :span="4">订单详情</el-col>
                    <el-col :span="10" style="font-size: 12px;color: #757575;">请谨慎钓鱼链接或诈骗电话,
                        <el-link :underline="false" style="font-size: 12px;color: #757575;">了解更多></el-link>
                    </el-col>
                </el-row>
                <el-row style="margin-top: 20px">
                    <el-row style="border-bottom: #cccfcf 1px solid;line-height: 70px">
                        <el-col :span="6" style="font-size: 18px;color: #333333">订单号：{{orders.orderId}}</el-col>
                        <el-col :span="3" style="float: right">
                            <el-button>申请售后</el-button>
                        </el-col>
                    </el-row>
                    <el-row style="font-size: 18px;color: #B0B0B0;line-height: 70px">{{orders.status}}</el-row>
                    <el-row>
                        <el-steps :active="active" finish-status="success">
                            <el-step title="下单"></el-step>
                            <el-step title="付款"></el-step>
                            <el-step title="配货"></el-step>
                            <el-step title="出库"></el-step>
                            <el-step title="交易成功"></el-step>
                        </el-steps>
                    </el-row>
                    <el-row style="border-bottom: #cccfcf 1px solid;border-top: #cccfcf 1px solid;margin-top: 20px;line-height: 70px">
                        <el-col :span="3" style="padding-top: 30px"><img :src="orders.img"></el-col>
                        <el-col :span="8" style="font-size: 14px;color: #333333;margin-top: 30px">
                            {{orders.name}}&nbsp;{{orders.color}}
                        </el-col>
                        <el-col :span="4" style="font-size: 14px;color: #333333;margin-top: 30px">
                            {{orders.price}}元 x {{orders.count}}
                        </el-col>
                    </el-row>
                    <el-row style="font-size: 18px;color: #333333;line-height: 70px;margin-top: 10px">
                        收货信息
                    </el-row>
                    <el-row style="color: #757575;font-size: 14px">
                        姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 名： {{orders.username}}
                    </el-row>
                    <el-row style="color: #757575;font-size: 14px;margin-top: 8px">
                        联系电话： {{orders.phoneNumber}}
                    </el-row>
                    <el-row style="color: #757575;font-size: 14px;margin-top: 8px;">
                        收货地址：
                        {{orders.address.province}}&nbsp;{{orders.address.city}}&nbsp;{{orders.address.area}}&nbsp;
                        {{orders.address.province}}{{orders.address.city}}{{orders.address.area}}{{orders.address.street}}
                    </el-row>
                    <el-row style="border-top: #cccfcf 1px solid;margin-top: 20px;line-height: 150px">
                        <span style="color: #333333;font-size: 18px;margin-top: 50px">支付方式</span>
                    </el-row>
                    <el-row style="border-bottom: #cccfcf 1px solid;height: 60px;margin-top: -50px">
                        <span style="color: #757575;font-size: 14px;">支付方式:   在线支付</span>
                    </el-row>
                    <div style="text-align: right;padding-right: 20px;margin-top: 40px">
                        <el-row style="line-height: 30px">
                            <el-col :span="21" style="color: #757575;font-size: 14px">商品总价：</el-col>
                            <span style="color: #2C9CFA">{{orders.price*orders.count}}元</span>
                        </el-row>
                        <el-row style="line-height: 30px">
                            <el-col :span="21" style="color: #757575;font-size: 14px">运费：</el-col>
                            <span style="color: #2C9CFA">0元</span>
                        </el-row>
                        <el-row style="line-height: 70px">
                            <el-col :span="21" style="color: #757575;font-size: 14px">实付金额：</el-col>
                            <span style="color: #2C9CFA;font-size: 30px">{{orders.price*orders.count}}元</span>
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
                active: 5,
                orders: {
                    name: "小米圈铁耳机",
                    status: 'waitReceive',
                    color: "golden",
                    img: 'https://i1.mifile.cn/a1/pms_1502337101.83975105!80x80.jpg',
                    price: 99,
                    count: 3,
                    date: {
                        year: 2016,
                        month: 4,
                        day: 4
                    },
                    orderId: 201604049903,
                    username: 'zojian',
                    phoneNumber: 123456789,
                    address: {
                        province: "北京",
                        city: "北京市",
                        area: "东城区",
                        street: "安定门街道"
                    }

                }
            }
        },
        created() {
            if (this.orders.status==='waitPay') {
                this.active=1;
            }
            if (this.orders.status==='waitReceive') {
                this.active=4;
            }
        }
    }
</script>

<style scoped>

</style>