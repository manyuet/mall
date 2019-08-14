<template>
    <div class="goodsDetailFrame">
        <el-card style="height: 300px;width: 224px"  shadow="hover">
            <img :src='good.imageSrc'
                 style="height: 160px;width: 160px;margin: 0 auto"><br>
            <div>
                <span style="font-size: 14px">{{good.title}}</span><br>
                <span style="color: darkgrey;font-size: 12px;">{{good.desc}}</span><br>
                <span style="color: #fc6720;font-size: 14px;">{{good.price}}元</span>
            </div>
        </el-card>
    </div>
</template>

<script>
    export default {
        name: "GoodItem",
        props:['good']
    }
</script>

<style scoped>
    .goodsDetailFrame {
        margin: 5px;
    }
</style>