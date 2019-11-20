<template>
    <div class="smallGoodsDetailFrame">
        <el-card shadow="hover">
            <el-row>
                <el-col :span="12">
                    <el-row class="note"><span class="notebook">笔记本</span></el-row>
                    <el-row><span class="price">5999元</span></el-row>
                </el-col>
                <el-col :span="12">
                    <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/74e573c4c0d89048392d14831cc507d5.jpg?thumb=1&w=100&h=100&f=webp&q=90">
                </el-col>
            </el-row>
        </el-card>
    </div>
</template>

<script>
    export default {
        name: "SmallGoodItem",
        data() {
            return {}
        }

    }
</script>

<style scoped>
    .smallGoodsDetailFrame {
        margin: 5px 0 7px 0;
    }

    .el-card {
        height: 140px;
        width: 224px
    }

    .note {
        margin-top: 20px
    }

    .notebook {
        font-size: 12px
    }

    .price {
        color: #fc6720;
        font-size: 12px;
    }

    img {
        width: 90px;
        height: 90px;
        margin: 0 auto;
        float: right
    }
</style>