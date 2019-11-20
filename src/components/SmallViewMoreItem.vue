<template>
    <div class="smallGoodsDetailFrame">
        <el-card shadow="hover">
            <el-row>
                <el-col :span="12">
                    <el-row class="viewmore"><span class="more">浏览更多</span></el-row>
                    <el-row><span class="expect">尽情期待</span></el-row>
                </el-col>
                <el-col :span="12">
                    <i class="el-icon-right"></i>
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
        margin-top: 10px;
        width: 226px
    }

    .el-card {
        height: 140px
    }

    .viewmore {
        margin-top: 20px
    }

    .more {
        font-size: 17px
    }

    .expect {
        font-size: 12px;
        color: darkgrey
    }

    .el-icon--right {
        font-size: 60px;
        margin-top: 20px
    }
</style>