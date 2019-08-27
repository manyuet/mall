<template>
    <div style="background-color:#424242;">
        <el-row style="line-height: 40px;">
            <el-col :span="14">
                <el-link style="margin-left: 5px" :underline="false" @click="openHome">小米商城</el-link>
                <el-divider direction="vertical"></el-divider>
                <el-link :underline="false">MIUI</el-link>
                <el-divider direction="vertical"></el-divider>
                <el-link :underline="false">云服务</el-link>
                <el-divider direction="vertical"></el-divider>
                <el-link :underline="false">金融</el-link>
                <el-divider direction="vertical"></el-divider>
                <el-link :underline="false">有品</el-link>
                <el-divider direction="vertical"></el-divider>
                <el-link :underline="false">小爱开放平台</el-link>
                <el-divider direction="vertical"></el-divider>
                <el-link :underline="false">企业团购</el-link>
                <el-divider direction="vertical"></el-divider>
                <el-link :underline="false">资质证照</el-link>
                <el-divider direction="vertical"></el-divider>
                <el-link :underline="false">协议规则</el-link>
                <el-divider direction="vertical"></el-divider>
                <el-link :underline="false">下载app</el-link>
                <el-divider direction="vertical"></el-divider>
                <el-link :underline="false">Select Location</el-link>
            </el-col>
            <el-col :span="4" :offset="5">
                <el-link :underline="false" @click="openLogin">登录</el-link>
                <el-divider direction="vertical"></el-divider>
                <el-link :underline="false" @click.native="openRegister">注册</el-link>
                <el-divider direction="vertical"></el-divider>
                <el-link :underline="false">消息通知</el-link>
                <el-divider direction="vertical"></el-divider>
                <el-link :underline="false" @click="openShoppingCart">
                <span class="icon ShoppingCart"><font-awesome-icon :icon="['fas', 'shopping-cart']"></font-awesome-icon></span>
                    购物车
                </el-link>
            </el-col>

        </el-row>
    </div>

</template>

<script>
    export default {
        name: "TopNavigationBar",
        methods:{
            openLogin(){
                const {href} = this.$router.resolve({
                    name: "Login",
                });
                this.$router.push(href);
            },
            openRegister(){
                this.$router.push('/register');
            },
            openShoppingCart(){
                this.$router.push("/shoppingCart")

            },
            openHome(){
                this.$router.push("/")
            }
       }
    }
</script>

<style scoped>
    .el-link {
        color: rgb(163, 163, 163);
        font-size: 12px;
    }

    .el-link.el-link--default:hover {
        color: white;
    }

    .el-link.el-link--default {
        color: rgb(163, 163, 163);
    }

    .el-divider {
        background-color: #777777;
    }
</style>