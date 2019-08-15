<template>
    <div class="smallGoodsDetailFrame" style="width: 226px">
        <el-card style="height: 145px" shadow="hover">
            <el-row>
                <el-col :span="12">
                    <el-row style="margin-top: 20px"><span style="font-size: 17px">浏览更多</span></el-row>
                    <el-row><span style="font-size: 12px;color: darkgrey">尽情期待</span></el-row>
                </el-col>
                <el-col :span="12">
                    <i style="font-size: 60px;margin-top: 20px" class="el-icon-right"/>
                </el-col>
            </el-row>
        </el-card>
    </div>
</template>

<script>
    export default {
        name: "SmallViewMoreItem",
    }
</script>

<style scoped>
    .smallGoodsDetailFrame {
        margin: 5px;
    }
</style>