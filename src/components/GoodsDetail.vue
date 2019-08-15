<template>
    <div id='frame' style="text-align: center">
        <el-row>
            <el-col :span="6" v-for="(good, index) in goods" :key="index">
                <good-item :good="good"/>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import GoodItem from "./GoodItem";
    export default {
        name: "GoodsDetail",
        components: {GoodItem},
        props: [
            'goods'
        ],
        data: function () {
            return {}
        }
    }
</script>

<style scoped>
    #frame {
        margin: -5px;
    }

    .goodsDetailFrame {
        margin: 5px;
    }
</style>