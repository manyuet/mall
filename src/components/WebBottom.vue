<template>
   <div style="margin-top: 50px;background-color: white;text-align: center">
        <el-row style="line-height: 70px;text-align: center" >
            <el-col :span="4" :offset="2"  >
                    <span class="icon Wrench" style="background-color: white">
                        <font-awesome-icon :icon="['fas', 'wrench']"></font-awesome-icon>
                    </span>
                <span >预约维修服务</span>
                <el-divider direction="vertical"></el-divider>
            </el-col>
            <el-col :span="4">
                <span class="icon History" style="background-color: white">
                        <font-awesome-icon :icon="['fas', 'history']"></font-awesome-icon>
                    </span>
                <span>7天无理由退货</span>
                <el-divider direction="vertical"></el-divider>
            </el-col>
            <el-col :span="4">
                <span class="icon History" style="background-color: white">
                        <font-awesome-icon :icon="['fas', 'history']"></font-awesome-icon>
                    </span>
                <span>15天免费换货</span>
                <el-divider direction="vertical"></el-divider>
            </el-col>
            <el-col :span="4">
                <span class="icon Gift" style="background-color: white">
                        <font-awesome-icon :icon="['fas', 'gift']"></font-awesome-icon>
                    </span>
                <span>满150元包邮</span>
                <el-divider direction="vertical"></el-divider>
            </el-col>
            <el-col :span="4">
                <span class="icon MapMarkerAlt" style="background-color: white">
                        <font-awesome-icon :icon="['fas', 'map-marker-alt']"></font-awesome-icon>
                    </span>
                <span>520余家售后网点</span>
                <el-divider direction="vertical"></el-divider>
            </el-col>
        </el-row>
        <el-divider></el-divider>
        <el-row></el-row>
    </div>
</template>

<script>
    export default {
        name: "WebBottom"
    }
</script>

<style scoped>
.icon{
    margin-right: 7px;
    font-size: 25px;
}
    span{
        font-size: 16px;
        color: #616161;
    }
</style>