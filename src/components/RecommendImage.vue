<template>
    <div class="goodsDetailFrame">
        <el-card style="height: 300px;width: 224px"  shadow="hover">
            <img :src='product.imageSrc' style="height: 300px;width: 224px;margin-left: -20px;margin-top: -20px">
        </el-card>
    </div>
</template>

<script>
    export default {
        name: "RecommendImage",
        props:['product']
    }
</script>

<style scoped>
    .goodsDetailFrame {
        margin: 5px;
    }
</style>
