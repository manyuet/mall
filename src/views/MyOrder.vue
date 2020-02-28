<template>
    <div>
        <el-breadcrumb separator-class="el-icon-arrow-right" style="color: #757575;line-height: 40px;margin-left: 10px">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/myOrder' }">交易订单</el-breadcrumb-item>
        </el-breadcrumb>
        <el-container>
            <el-aside width="230px">
                <left-side-menu/>
            </el-aside>
            <el-main style="height:670px;width: 980px;background-color: white;margin-left: 15px;padding: 70px 40px">
                <el-row style="font-size: 30px;color:#757575;line-height: 50px">
                    <el-col :span="4">我的订单</el-col>
                    <el-col :span="10" style="font-size: 12px;color: #757575;">请谨慎钓鱼链接或诈骗电话,
                        <el-link :underline="false" style="font-size: 12px;color: #757575;">了解更多></el-link>
                    </el-col>
                </el-row>
                <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                    <el-menu-item index="all">全部有效订单</el-menu-item>
                    <el-menu-item index="waitPay">待支付</el-menu-item>
                    <el-menu-item index="waitReceive">待收货</el-menu-item>
                    <el-menu-item index="cancel">订单回收站</el-menu-item>
                    <el-menu-item index="search" style="float: right;width: 300px">
                        <el-input v-model="input" placeholder="输入商品名称">
                            <el-button slot="append" class="el-icon-search" style="text-align: center"></el-button>
                        </el-input>
                    </el-menu-item>
                </el-menu>
                <div v-if="currentTab==='all'"
                     v-for="(effectiveOrder,index) of effectiveOrders"
                     :key="index"
                     style="border: #cccfcf 1px solid;width: 840px;margin-top: 20px;padding: 20px">
                    <el-row style="font-size:18px;color: #B0B0B0 ">{{effectiveOrder.status}}</el-row>
                    <el-row style="font-size: 14px;color: #757575;margin-top: 10px;line-height: 55px;border-bottom: #e3e6e6 1px solid">
                        <el-col :span="14">
                            {{effectiveOrder.date.year}}年{{effectiveOrder.date.month}}月{{effectiveOrder.date.day}}日
                            <el-divider direction="vertical"></el-divider>
                            {{effectiveOrder.username}}
                            <el-divider direction="vertical"></el-divider>
                            订单号：{{effectiveOrder.orderId}}
                            <el-divider direction="vertical"></el-divider>
                        </el-col>
                        <el-col :span="4" style="float: right">
                            实付金额：<span style="font-size: 28px;color: #333333">{{effectiveOrder.price*effectiveOrder.count}}</span>元
                        </el-col>
                    </el-row>
                    <el-row style="margin-top: 10px">
                        <el-col :span="3"><img :src="effectiveOrder.img"></el-col>
                        <el-col :span="6" style="margin-top: 25px;font-size: 14px;color: #333333">
                            <el-row> {{effectiveOrder.name}}&nbsp;{{effectiveOrder.color}}</el-row>
                            <el-row> {{effectiveOrder.price}}元 x {{effectiveOrder.count}}</el-row>
                        </el-col>
                        <el-col :span="3" style="float: right;margin-top: 5px">
                            <el-row>
                                <el-button @click.native="openOrderDetail">订单详情</el-button>
                            </el-row>
                            <el-row style="margin-top: 5px">
                                <el-button>申请售后</el-button>
                            </el-row>
                        </el-col>
                    </el-row>
                </div>
                <div v-if="currentTab==='waitPay'">waitToPay</div>
                <div v-if="currentTab==='waitReceive'">waitToReceive</div>
                <div v-if="currentTab==='cancel'">recycleOrder</div>
                <el-pagination
                        background
                        layout="prev, pager, next"
                        :total="1"
                        style="text-align: center;margin-top: 50px">
                </el-pagination>
            </el-main>
        </el-container>

    </div>
</template>

<script>
    import LeftSideMenu from "../components/LeftSideMenu";

    export default {
        name: "MyOrder",
        components: {LeftSideMenu},
        data() {
            return {
                activeIndex: '1',
                currentTab: 'all',
                input: '',
                effectiveOrders: []
            }
        },
        methods: {
            handleSelect(key, path) {
                this.currentTab = key
            },
            openOrderDetail() {
                this.$router.push('/orderDetail');
            }
        },
        created() {
            this.axios.get("http://mock-api.com/NnX4Gkny.mock/users/1/orders?status=active").then(response=>{
                this.effectiveOrders=response.data;
            }).catch(error=>{
                console.log(error)
            })
        }
    }
</script>

<style scoped>
    .el-menu.el-menu--horizontal {
        border-bottom: transparent;
    }
</style>
