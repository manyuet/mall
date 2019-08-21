<template>
    <el-row class="tac" style="background-color: white">
        <el-col :span="4">
            <el-menu class="el-menu-vertical-demo">
                <el-menu-item index="1" >
                    <i class="el-icon-mobile-phone"></i>
                    <span slot="title">手机APP</span>
                </el-menu-item>
                <el-menu-item index="2" @click="openPersonalCenter">
                    <i class="el-icon-user"></i>
                    <span slot="title">个人中心</span>
                </el-menu-item>
                <el-menu-item index="3">
                    <i class="el-icon-s-tools"></i>
                    <span slot="title">售后服务</span>
                </el-menu-item>
                <el-menu-item index="4">
                    <i class="el-icon-service"></i>
                    <span slot="title">人工客服</span>
                </el-menu-item>
                <el-menu-item index="5">
                    <i class="el-icon-shopping-cart-full"></i>
                    <span slot="title">购物车</span>
                </el-menu-item>
            </el-menu>
        </el-col>
    </el-row>
</template>

<script>
    export default {
        name: "BroadSideNavigationBar",
        methods: {
            openPersonalCenter(){
                const {href} = this.$router.resolve({
                    name: "Personal"
                });
                window.open(href, "_blank");
            }
        }
    }
</script>

<style scoped>
.el-menu-item.is-active{
    color: #fc6720;
    background-color: white;
}
.el-menu-item:hover{
    color: #fc6720;
    background-color: white;
}
.el-menu-item{
   width: 80px;
    height: 80px;
}
.el-menu{
    border: none;
}

    menu-item:hover{
        background-color: white;
    }
</style>