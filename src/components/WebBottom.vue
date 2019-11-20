<template>
   <div id="frame">
        <el-row class="row" >
            <el-col :span="4" :offset="2"  >
                    <span class="icon Wrench">
                        <font-awesome-icon :icon="['fas', 'wrench']"></font-awesome-icon>
                    </span>
                <span >预约维修服务</span>

            </el-col>
            <el-col :span="4">
                <span class="icon History" >
                        <font-awesome-icon :icon="['fas', 'history']"></font-awesome-icon>
                    </span>
                <span>7天无理由退货</span>
            </el-col>
            <el-col :span="4">
                <span class="icon History" >
                        <font-awesome-icon :icon="['fas', 'history']"></font-awesome-icon>
                    </span>
                <span>15天免费换货</span>
            </el-col>
            <el-col :span="4">
                <span class="icon Gift" >
                        <font-awesome-icon :icon="['fas', 'gift']"></font-awesome-icon>
                    </span>
                <span>满150元包邮</span>
            </el-col>
            <el-col :span="4">
                <span class="icon MapMarkerAlt">
                        <font-awesome-icon :icon="['fas', 'map-marker-alt']"></font-awesome-icon>
                    </span>
                <span>520余家售后网点</span>
            </el-col>
        </el-row>
        <el-divider></el-divider>
       <el-container>
           <el-main>
        <el-row class="main-row">
            <el-col :span="4">帮助中心
                <el-col class="first-col"><el-link :underline="false">账户管理</el-link></el-col>
                <el-col class="second-col"><el-link :underline="false">购物指南</el-link></el-col>
                <el-col class="second-col"><el-link :underline="false">订单操作</el-link></el-col>
            </el-col>
            <el-col :span="4">服务支持
                <el-col class="first-col"><el-link :underline="false">售后政策</el-link></el-col>
                <el-col class="second-col"><el-link :underline="false">自助服务</el-link></el-col>
                <el-col class="second-col"><el-link :underline="false">相关下载</el-link></el-col>

            </el-col>
            <el-col :span="4">线下门店
                <el-col class="first-col"><el-link :underline="false">小米之家</el-link></el-col>
                <el-col class="second-col"><el-link :underline="false">服务网点</el-link></el-col>
                <el-col class="second-col"><el-link :underline="false">授权体验店</el-link></el-col>
            </el-col>
            <el-col :span="4">关于小米
                <el-col class="first-col"><el-link :underline="false">了解小米</el-link></el-col>
                <el-col class="second-col"><el-link :underline="false">加入小米</el-link></el-col>
                <el-col class="second-col"><el-link :underline="false">投资者关系</el-link></el-col>
            </el-col>
            <el-col :span="4">关注我们
                <el-col class="first-col"><el-link :underline="false">新浪微博</el-link></el-col>
                <el-col class="second-col"><el-link :underline="false">官方微信</el-link></el-col>
                <el-col class="second-col"><el-link :underline="false">联系我们</el-link></el-col>
            </el-col>
            <el-col :span="4">特色服务
                <el-col class="first-col"><el-link :underline="false">F码通道</el-link></el-col>
                <el-col class="second-col"><el-link :underline="false">礼物码</el-link></el-col>
                <el-col class="second-col"><el-link :underline="false">防伪查询</el-link></el-col>
            </el-col>
        </el-row>
           </el-main>

           <el-aside>
               <el-row style="text-align: center">
               <el-col>
                   <p class="number">400-100-5678</p>
                   <p class="time">周一至周日 8：00-18：00</p>
                   <p class="bracket">（仅收市话费）</p>
                   <el-button class="el-icon-s-custom">人工客服</el-button>
               </el-col>
               </el-row>
           </el-aside>
       </el-container>
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
    .el-link{
        color: #757575;
        font-size: 12px;
    }
    #frame{
        margin-top: 50px;
        background-color: white;
        text-align: center
    }
    .row{
        line-height: 70px;
        text-align: center
    }
    .icon{
        background-color: white
    }
    .el-main{
        border-right: #e3e6e6 1px solid;
    }
    .main-row{
        font-size: 14px;
        color: #424242
    }
    .first-col{
        margin-top: 20px;
    }
    .second-col{
        margin-top: 10px
    }
    .el-aside{
        width:200px
    }
    .number{
        font-size: 22px;
        color: #2C9CFA;
    }
    .time{
        font-size: 12px;
        color: #616161
    }
    .bracket{
       font-size: 12px;
        color: #616161;
        text-align: center
    }
</style>