<template>
    <div>
        <el-row>
            <el-col :span="11">
                <el-carousel trigger="click" height="560px">
                    <el-carousel-item v-for="(image,index) in productInfos.imgUrls" :key="index">
                        <img :src="image" style="width: 560px;height: 560px;"/>
                    </el-carousel-item>
                </el-carousel>
            </el-col>
            <el-col :offset="1" :span="12" style="margin-top: 20px">
                <span style="font-size: 24px">{{productInfos.title}}</span><br>
                <div style="font-size: 14px;color: rgb(176,176,176);margin-top: 5px">{{productInfos.desc}}</div>
                <br>
                <span style="font-size: 18px;color: #fc6720">{{productInfos.price}}元</span><br>
                <el-row style="background-color: #fc6720;color: white;line-height: 40px;margin-top: 5px">
                    <cut-time-down/>
                </el-row>
                <el-row style="background-color:rgb(249,249,250);color: #fc6720;line-height: 50px;margin-top: 5px;">
                    <span style="margin-left: 15px;font-size: 24px">￥{{productInfos.price}}元</span>
                </el-row>
                <el-row style="line-height: 70px;background-color: rgb(250,250,250);margin-top: 5px">
                    <i class="el-icon-location-outline" style="margin-left: 20px;margin-right: 10px"></i>
                    <span v-for="(addr,index) in productInfos.address" :key="index"
                          style="margin-right: 10px;">{{addr}}</span>
                </el-row>
                <div style="margin-top: 10px">
                    <span>选择颜色</span><br>
                    <el-radio v-model="productInfos.value"
                              v-for="(color,index) in productInfos.colors"
                              :key="index"
                              :label="color.label"
                              border
                    style="width: 175px;fill: #fc6720"

                    >
                    </el-radio>
                </div>
                <el-row style="background-color: rgb(249,249,250);line-height: 50px;margin-top: 10px">
                    <span style="margin-left: 15px">{{productInfos.title}}</span><br>
                    <span style="color: #fc6720;font-size: 24px;margin-left: 15px">{{productInfos.price}}元</span>
                </el-row>
                <el-row style="margin-top: 10px">
                    <el-button style="background-color: #fc6720;color: white;width: 280px">登录后购买</el-button>
                    <el-button style="background-color: rgb(176,176,176);color: white;width: 150px" >
                        <i class="el-icon-star-off"></i>&nbsp;收藏</el-button>
                </el-row>
            </el-col>
        </el-row>
        <el-row v-for="(image,index) in productInfos.descImaUrls"
             :key="index"
             style="width: 100%;background-color:rgb(245,245,245)">
            <img :src="image">
        </el-row>
    </div>
</template>

<script>

    import CutTimeDown from "../components/CutTimeDown";

    export default {
        name: "ProductDetail",
        components: {CutTimeDown},
        data() {
            return {
                productInfos: {
                    title: '自动洗衣机',
                    desc: '8kg大容量 / 10种洗涤模式 / 10挡水位调节 / 耐腐蚀金属机身 ',
                    price: 699,
                    originalPrice: 799,
                    colors: [{
                        value: '选项1',
                        label: 'red'
                    },
                        {
                            value: '选项2',
                            label: 'white'
                        },
                        {
                            value: '选项3',
                            label: 'black'
                        }],
                    value: '',
                    address: {
                        province: '北京',
                        city:
                            '北京市',
                        area:
                            '东城区',
                        street:
                            '安定门街道'
                    }
                    ,
                    imgUrls: [
                        'https://i8.mifile.cn/a1/pms_1552868299.30794969.jpg',
                        'https://i8.mifile.cn/a1/pms_1552868299.27348967.jpg',
                        'https://i8.mifile.cn/a1/pms_1552868299.23297041.jpg'
                    ],
                    descImaUrls:
                        [
                            'http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2275f33086088c905d3fd4cf109f17fc.jpg',
                            'http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/bf795dc12f719db2f18bdf539b0574f4.jpg',
                            'http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1cebadeca87317544405a72394e604e3.jpg'
                        ]
                }
            }
        },
        methods:{

        }
    }

</script>

<style scoped>

</style>