<template>
    <div>
        <el-breadcrumb separator-class="el-icon-arrow-right" style="color: #757575;line-height: 40px;margin-left: 10px">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/personal' }">个人中心</el-breadcrumb-item>
        </el-breadcrumb>
        <el-container>
            <el-aside width="230px" style="height: 1000px;background-color: white;padding-left: 50px">
                <div v-for="(menu,index) in Menus"
                     :key="index">
                    <p style="color: #333333;font-size: 16px;margin-top: 48px">{{menu.title}}</p>
                    <p v-for="(item,index) in menu.children"
                       :key="index"
                       style="color: #757575;font-size: 14px">
                        <el-link :underline="false">{{item.title}}</el-link>
                    </p>
                </div>
            </el-aside>
            <el-main style="height:670px;width: 980px;background-color: white;margin-left: 15px">
                <el-row style="line-height: 60px">
                    <el-col :span="5" :offset="1">
                        <el-avatar :size="150" style="margin-left: 20px;margin-top: 50px">
                            <span class="icon User" style="font-size: 80px"><font-awesome-icon :icon="['fas', 'user']"></font-awesome-icon></span>
                        </el-avatar>
                    </el-col>
                    <el-col :span="6"><p style="margin-top: 70px;font-size: 22px;margin-bottom: -30px">ZOJian</p>
                        <span @click="displayGreeting"
                              class="displayGreeting"
                        style="font-size: 14px;color: #B0B0B0;">{{hoursTip}}</span><br>
                        <p style="color: #2c9cfa;font-size: 12px;margin-top: -30px">修改个人信息</p>
                    </el-col>
                    <el-col :span="6">
                        <p style="margin-top: 75px;font-size: 14px;margin-bottom: -30px;color: #757575">账户安全：
                            <span style="color: #2c9cfa">普通</span></p>
                        <p style="font-size: 14px;margin-bottom: -30px;color: #757575">绑定手机：未绑定</p>
                    </el-col>
                </el-row>
                <el-divider></el-divider>
                <el-row>
                    <el-col :span="4" :offset="1">
                    <el-avatar :size="110" style="background-color: #fc6720;margin-left: 20px;margin-top: 30px">
                        <span class="icon CreditCard"><font-awesome-icon :icon="['fas', 'credit-card']"></font-awesome-icon></span>
                    </el-avatar>
                    </el-col>
                    <el-col :span="6" style="margin-top: 60px">
                    <span style="font-size: 18px;color: #757575">待支付订单：<span style="color: #fc6720">0</span></span><br>
                    <span style="font-size: 14px;color: #757575">查看待支付订单</span>
                    </el-col>
                    <el-col :span="4" :offset="1">
                        <el-avatar :size="110" style="background-color: rgb(132,196,85);margin-left: 20px;margin-top: 30px">
                            <span class="icon Truck"><font-awesome-icon :icon="['fas', 'truck']"></font-awesome-icon></span>
                        </el-avatar>
                    </el-col>
                    <el-col :span="6" style="margin-top: 60px">
                        <span style="font-size: 18px;color: #757575">待收货订单：<span style="color: #fc6720">0</span></span><br>
                        <span style="font-size: 14px;color: #757575">查看待支付订单</span>
                    </el-col>
                </el-row>
                <el-row style="margin-top: 30px">
                    <el-col :span="4" :offset="1">
                        <el-avatar :size="110" style="background-color: rgb(0,148,239);margin-left: 20px;margin-top: 30px">
                            <span class="icon CreditCard"><font-awesome-icon :icon="['fas', 'comment']"></font-awesome-icon></span>
                        </el-avatar>
                    </el-col>
                    <el-col :span="6" style="margin-top: 60px">
                        <span style="font-size: 18px;color: #757575">待评价商品数：<span style="color: #fc6720">0</span></span><br>
                        <span style="font-size: 14px;color: #757575">查看待评价商品</span>
                    </el-col>
                    <el-col :span="4" :offset="1">
                        <el-avatar :size="110" style="background-color: rgb(255,172,48);margin-left: 20px;margin-top: 30px">
                            <span class="icon Truck"><font-awesome-icon :icon="['fas', 'heart']"></font-awesome-icon></span>
                        </el-avatar>
                    </el-col>
                    <el-col :span="6" style="margin-top: 60px">
                        <span style="font-size: 18px;color: #757575">喜欢的商品：<span style="color: #fc6720">0</span></span><br>
                        <span style="font-size: 14px;color: #757575">查看喜欢的商品</span>
                    </el-col>
                </el-row>

            </el-main>
        </el-container>

    </div>
</template>

<script>
    export default {
        name: "PersonalCenter",
        data() {
            return {
                circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
                hoursTip: '',
                date: '',
                Menus: [
                    {
                        title: '订单中心',
                        children: [
                            {
                                title: '我的订单'
                            },
                            {
                                title: '团购订单'
                            },
                            {
                                title: '评价晒单'
                            },
                            {
                                title: '话费充值订单'
                            },
                            {
                                title: '以旧换新订单'
                            }
                        ]
                    },
                    {
                        title: '个人中心',
                        children: [
                            {title: '我的个人中心'},
                            {title: '消息通知'},
                            {title: '购买资格'},
                            {title: '现金账户'},
                            {title: '小米礼品卡'},
                            {title: '现金券'},
                            {title: '喜欢的商品'},
                            {title: '优惠券'},
                            {title: '收货地址'}
                        ]
                    },
                    {
                        title: '售后服务',
                        children: [
                            {title: '服务记录'},
                            {title: '申请服务'},
                            {title: '领取快递报销'},
                        ]
                    },
                    {
                        title: '账户管理',
                        children: [
                            {title: '个人信息'},
                            {title: '修改密码'}
                        ]
                    }
                ]
            }
        },
        methods: {
            displayGreeting() {
                // let  hour = new Date(getHours());
                this.date = new Date();
                if (this.date.getHours() >= 0 && this.date.getHours() < 12) {
                    this.hoursTip = "上午好"
                } else if (this.date.getHours() >= 12 && this.date.getHours() < 18) {
                    this.hoursTip = "下午好"
                } else {
                    this.hoursTip = "晚上好"
                }

            }
        }, created() {
            this.displayGreeting();
        }
    }
</script>

<style scoped>
    .el-link:hover {
        color: #333333;
    }

    .el-link:active {
        color: #fc6720;
    }
    .icon{
        font-size:50px ;
    }
</style>