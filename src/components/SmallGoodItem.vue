<template>
    <div class="smallGoodsDetailFrame">
        <el-card style="height: 145px;width: 224px"  shadow="hover">
            <el-row>
                <el-col :span="12">
                    <el-row style="margin-top: 20px"><span style="font-size: 12px">笔记本</span></el-row>
                    <el-row><span style="color: #fc6720;font-size: 12px;">5999元</span></el-row>
                </el-col>
                <el-col :span="12">
                    <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/74e573c4c0d89048392d14831cc507d5.jpg?thumb=1&w=100&h=100&f=webp&q=90"
                         style="width: 90px;height:90px;margin: 0 auto;float: right">
                </el-col>
            </el-row>
        </el-card>
    </div>
</template>

<script>
    export default {
        name: "SmallGoodItem",

    }
</script>

<style scoped>
    .smallGoodsDetailFrame {
        margin: 5px;
    }
</style>