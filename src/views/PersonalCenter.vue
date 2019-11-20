<template>
    <div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/personal' }">个人中心</el-breadcrumb-item>
        </el-breadcrumb>
        <el-container>
            <el-aside>
                <left-side-menu/>
            </el-aside>
            <el-main>
                <el-row class="first-row">
                    <el-col :span="5" :offset="1">
                        <el-avatar class="first-avatar">
                            <span class="icon User"><font-awesome-icon
                                    :icon="['fas', 'user']"></font-awesome-icon></span>
                        </el-avatar>
                    </el-col>
                    <el-col :span="6"><p class="account">{{this.account}}</p>
                        <span @click="displayGreeting"
                              class="displayGreeting">{{hoursTip}}</span><br>
                        <p class="modify">修改个人信息</p>
                    </el-col>
                    <el-col :span="6">
                        <p class="account-safe">账户安全：
                            <span style="color: #2c9cfa">普通</span></p>
                        <p class="bind-phone">绑定手机：未绑定</p>
                    </el-col>
                </el-row>
                <el-divider></el-divider>
                <el-row>
                    <el-col :span="4" :offset="1">
                        <el-avatar class="icon-credit">
                            <span class="icon CreditCard"><font-awesome-icon
                                    :icon="['fas', 'credit-card']"></font-awesome-icon></span>
                        </el-avatar>
                    </el-col>
                    <el-col :span="6" class="col-order">
                        <span class="wait-pay">待支付订单：<span
                                style="color: #fc6720">0</span></span><br>
                        <span class="look-wait-pay">查看待支付订单</span>
                    </el-col>
                    <el-col :span="4" :offset="1">
                        <el-avatar
                                class="avatar-truck">
                            <span class="icon Truck"><font-awesome-icon
                                    :icon="['fas', 'truck']"></font-awesome-icon></span>
                        </el-avatar>
                    </el-col>
                    <el-col :span="6" class="wait-order">
                        <span class="wait-receive">待收货订单：<span
                                style="color: #fc6720">0</span></span><br>
                        <span class="span-wait-pay">查看待支付订单</span>
                    </el-col>
                </el-row>
                <el-row class="second-row">
                    <el-col :span="4" :offset="1">
                        <el-avatar
                                class="icon-credit-card">
                            <span class="icon CreditCard"><font-awesome-icon
                                    :icon="['fas', 'comment']"></font-awesome-icon></span>
                        </el-avatar>
                    </el-col>
                    <el-col :span="6" class="evaluate">
                        <span class="evaluate-num">待评价商品数：<span style="color: #fc6720">0</span></span><br>
                        <span class="evaluate-product">查看待评价商品</span>
                    </el-col>
                    <el-col :span="4" :offset="1">
                        <el-avatar
                                class="icon-truck">
                            <span class="icon Truck"><font-awesome-icon
                                    :icon="['fas', 'heart']"></font-awesome-icon></span>
                        </el-avatar>
                    </el-col>
                    <el-col :span="6" class="col-like">
                        <span class="like-product">喜欢的商品：<span
                                style="color: #fc6720">0</span></span><br>
                        <span class="look-like">查看喜欢的商品</span>
                    </el-col>
                </el-row>

            </el-main>
        </el-container>

    </div>
</template>

<script>
    import LeftSideMenu from "../components/LeftSideMenu";

    export default {
        name: "PersonalCenter",
        components: {LeftSideMenu},
        data() {
            return {
                circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
                hoursTip: '',
                date: '',
            }
        }
        ,
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
            },
        },
        computed: {
            account() {
                return this.$store.state.userInfo.account.username
            }
        },
        created() {
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

    .icon {
        font-size: 50px;
    }

    .el-breadcrumb {
        color: #757575;
        line-height: 40px;
        margin-left: 10px
    }

    .el-aside {
        width: 230px
    }

    .el-main {
        height: 670px;
        width: 980px;
        background-color: white;
        margin-left: 15px
    }

    .first-row {
        line-height: 60px
    }

    .first-avatar {
        margin-left: 20px;
        margin-top: 50px;
        width: 150px;
        height: 150px;
    }

    .User {
        font-size: 80px
    }

    .account {
        margin-top: 70px;
        font-size: 22px;
        margin-bottom: -30px
    }

    .displayGreeting {
        font-size: 14px;
        color: #B0B0B0
    }

    .modify {
        color: #2c9cfa;
        font-size: 12px;
        margin-top: -30px
    }

    .account-safe {
        margin-top: 75px;
        font-size: 14px;
        margin-bottom: -30px;
        color: #757575
    }

    .bind-phone {
        font-size: 14px;
        margin-bottom: -30px;
        color: #757575
    }

    .icon-credit {
        background-color: #fc6720;
        margin-left: 20px;
        margin-top: 30px;
        width: 110px;
        height: 110px;
    }

    .col-order {
        margin-top: 60px
    }

    .wait-pay {
        font-size: 18px;
        color: #757575
    }

    .look-wait-pay {
        font-size: 14px;
        color: #757575
    }

    .avatar-truck {
        background-color: rgb(132, 196, 85);
        margin-left: 20px;
        margin-top: 30px;
        width: 110px;
        height: 110px;
    }

    .wait-order {
        margin-top: 60px
    }

    .wait-receive {
        font-size: 18px;
        color: #757575
    }

    .span-wait-pay {
        font-size: 14px;
        color: #757575
    }

    .second-row {
        margin-top: 30px
    }

    .icon-credit-card {
        background-color: rgb(0, 148, 239);
        margin-left: 20px;
        margin-top: 30px;
        width: 110px;
        height: 110px;
    }

    .evaluate {
        margin-top: 60px
    }

    .evaluate-num {
        font-size: 18px;
        color: #757575
    }

    .evaluate-product {
        font-size: 14px;
        color: #757575
    }

    .icon-truck {
        background-color: rgb(255, 172, 48);
        margin-left: 20px;
        margin-top: 30px;
        width: 110px;
        height: 110px;
    }

    .col-like {
        margin-top: 60px
    }

    .like-product {
        font-size: 18px;
        color: #757575
    }

    .look-like {
        font-size: 14px;
        color: #757575
    }
</style>