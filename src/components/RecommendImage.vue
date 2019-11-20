<template>
    <div class="goodsDetailFrame">
        <el-card shadow="hover">
            <img :src='product.imageSrc'>
        </el-card>
    </div>
</template>

<script>
    export default {
        name: "RecommendImage",
        props: ['product']
    }
</script>

<style scoped>
    .goodsDetailFrame {
        margin: 5px;
    }

    .el-card {
        height: 300px;
        width: 224px
    }

    img {
        height: 300px;
        width: 224px;
        margin-left: -20px;
        margin-top: -20px
    }
</style>