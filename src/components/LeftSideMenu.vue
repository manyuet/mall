<template>

    <div style="height: 1000px;background-color: white;padding-left: 50px;margin-top: -14px;padding-top: 50px">
        <div v-for="(menu,index) in Menus"
             :key="index"
             style="margin-top: 40px">
            <p style="color: #070707;font-size: 16px;">{{menu.title}}</p>
            <p v-for="(item,index) in menu.children"
               :key="index"
               @click="Fn(item.method)"
               style="color: #757575;font-size: 14px">
                <el-link :underline="false">{{item.title}}</el-link>
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "LeftSideMenu",
        data() {
            return {
                Menus: [
                    {
                        title: '订单中心',
                        children: [
                            {
                                title: '我的订单',
                                method: 'myOrderFn'
                            },
                            {
                                title: '团购订单',
                                method: 'myOrderFn'
                            },
                            {
                                title: '评价晒单',
                                method: 'myOrderFn'
                            },
                            {
                                title: '话费充值订单',
                                method: 'myOrderFn'
                            },
                            {
                                title: '以旧换新订单',
                                method: 'myOrderFn'
                            }
                        ]
                    },
                    {
                        title: '个人中心',
                        children:
                            [
                                {
                                    title: '我的个人中心',
                                    method: 'myPersonalFn'
                                },
                                {
                                    title: '消息通知',
                                    method: 'myPersonalFn'
                                },
                                {
                                    title: '购买资格',
                                    method: 'myPersonalFn'
                                },
                                {
                                    title: '现金账户',
                                    method: 'myPersonalFn'
                                },
                                {
                                    title: '小米礼品卡',
                                    method: 'myPersonalFn'
                                },
                                {
                                    title: '现金券',
                                    method: 'myPersonalFn'
                                },
                                {
                                    title: '喜欢的商品',
                                    method: 'myPersonalFn'
                                },
                                {
                                    title: '优惠券',
                                    method: 'myPersonalFn'
                                },
                                {
                                    title: '收货地址',
                                    method: 'myPersonalFn'
                                }
                            ]
                    }
                    ,
                    {
                        title: '售后服务',
                        children:
                            [
                                {
                                    title: '服务记录',
                                    method: 'myPersonalFn'
                                },
                                {
                                    title: '申请服务',
                                    method: 'myPersonalFn'
                                },
                                {
                                    title: '领取快递报销',
                                    method: 'myPersonalFn'
                                },
                            ]
                    }
                    ,
                    {
                        title: '账户管理',
                        children:
                            [
                                {
                                    title: '个人信息',
                                    method: 'myPersonalFn'
                                },
                                {
                                    title: '修改密码',
                                    method: 'myPersonalFn'
                                }
                            ]
                    }
                ]
            }
        },
        methods: {
            Fn(method) {
                this[method]()
            },
            myOrderFn() {
                this.$router.push('/myOrder');
            },
            myPersonalFn() {
                this.$router.push('/personal');
            }
        }
    }
</script>

<style scoped>
    .el-link:hover {
        color: #333333;
    }
    .el-link:active {
        color: #2c9cfa;
    }
</style>