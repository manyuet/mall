<template>
    <div id="frame">
        <div id="itemDetail">
            <!--            <div class="operateBar" style="border-bottom: #e3e6e6 1px solid">-->
            <!--                <el-row style="line-height: 70px;font-size: 14px;color: #424242">-->
            <!--                    <el-col :span="2" style="margin-left: 10px">-->
            <!--                        <input type="checkbox" style="width: 20px"> 全选</input>-->
            <!--                    </el-col>-->
            <!--                    <el-col :span="7" :offset="2" style="text-align: left;">-->
            <!--                        商品名称-->
            <!--                    </el-col>-->
            <!--                    <el-col :span="2" style="text-align: center">单价</el-col>-->
            <!--                    <el-col :span="5" style="text-align: center">数量</el-col>-->
            <!--                    <el-col :span="3" style="text-align: center">小计</el-col>-->
            <!--                    <el-col :span="1" style="text-align: center">操作</el-col>-->
            <!--                </el-row>-->
            <!--            </div>-->
            <!--            <div class="item">-->
            <!--                <el-row v-for="(productInfo,index) in productInfos"-->
            <!--                        :key="index"-->
            <!--                        style="line-height: 100px;border-bottom: #e3e6e6 1px solid">-->
            <!--                    <el-col :span="2" style="margin-left: 10px">-->
            <!--                        <input type="checkbox"></input>-->
            <!--                    </el-col>-->
            <!--                    <el-col :span="1" style="margin-top: 10px">-->
            <!--                        <img :src="productInfo.imageSrc">-->
            <!--                    </el-col>-->
            <!--                    <el-col :span="7" :offset="1">-->
            <!--                        <span>{{productInfo.name}}&nbsp;&nbsp;&nbsp;{{productInfo.color}}</span>-->
            <!--                    </el-col>-->
            <!--                    <el-col :span="2" style="text-align: center">{{productInfo.price}}元</el-col>-->
            <!--                    <el-col :span="5" style="text-align: center">-->
            <!--                        <el-input-number-->
            <!--                                v-model="productInfo.count"-->
            <!--                                @change="handleChange"-->
            <!--                                :min="1"></el-input-number>-->
            <!--                    </el-col>-->
            <!--                    <el-col :span="3">{{productInfo.subtotal}}</el-col>-->
            <!--                </el-row>-->
            <!--            </div>-->
            <el-table
                    ref="multipleTable"
                    :data="productInfos"
                    tooltip-effect="dark"
                    style="width: 100%"
                    @selection-change="handleSelectionChange">
                <el-table-column
                        label="全选"
                        type="selection"
                        width="100">
                </el-table-column>
                <el-table-column style="left: 10px"
                                 prop="name"
                                 label="商品名称"
                                 width="450"
                                 align="center"
                                 show-overflow-tooltip>
                    <template slot-scope="scope">
                        <el-row>
                            <el-col :span="3">
                                <img :src="scope.row.imageSrc"/>
                            </el-col>
                            <el-col :span="18" style="line-height: 85px">
                                {{scope.row.name}}&nbsp;{{scope.row.color}}
                            </el-col>
                        </el-row>
                    </template>
                </el-table-column>
                <el-table-column
                        prop="price"
                        label="单价"
                        width="80">
                </el-table-column>
                <el-table-column
                        prop="count"
                        label="数量"
                        align="center"
                        width="250">
                    <template slot-scope="scope">
                        <el-input-number
                                v-model="scope.row.count"
                                :min="1"
                                @change="calculateTotalPrice">
                        </el-input-number>
                    </template>
                </el-table-column>
                <el-table-column
                        label="小计"
                        width="120"
                        align="center">
                    <template slot-scope="scope">
                        {{scope.row.price * scope.row.count}}
                    </template>
                </el-table-column>
                <el-table-column
                        label="操作"
                        align="center">
                    <template slot-scope="scope">
                        <el-link :underline="false" @click.native.prevent="deleteRow(scope.$index, productInfos)">X
                        </el-link>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <div id="totalPrice">
            <el-row style="line-height: 50px">
                <el-col :span="2" :offset="1" style="font-size: 14px;color: #757575">继续购物</el-col>
                <el-col :span="4" style="font-size: 14px;color: #757575">共<span
                        style="color: rgb(44,156,250);margin-left: 5px;margin-right: 5px">{{productInfos.length}}</span>件商品， 已选择
                    <span style="color: #2C9CFA;margin-left: 3px;margin-right: 5px">{{productNum}}</span>件
                </el-col>
                <el-col :span="12" style="text-align: right;"><span
                        style="color: #2C9CFA;font-size: 14px">合计:&nbsp;&nbsp;</span></el-col>
                    <el-col :span="1" style="text-align: left">
                        <span style="color: #2C9CFA;font-size: 30px;">{{totalPrice}}</span>
                </el-col>
                <el-col :span="4">
                    <el-button style="background-color: #2C9CFA;float: right;color: white;line-height: 28px;width: 150px">去结算</el-button>
                </el-col>

            </el-row>

        </div>

    </div>
</template>

<script>
    export default {
        name: "ShoppingCart",
        data() {
            return {
                productNum: 0,
                totalPrice: 0,
                selections: [],
                productInfos: [{
                    name: "Redmi全自动波轮洗衣机 1A 8kg",
                    color: "白色",
                    price: 799,
                    count: 1,
                    imageSrc: 'https://i1.mifile.cn/a1/pms_1560161251.21862332!80x80.jpg'
                },
                    {
                        name: "Redmi全自动波轮洗衣机 1A 8kg",
                        color: "红色",
                        price: 799,
                        count: 1,
                        imageSrc: 'https://i1.mifile.cn/a1/pms_1560161251.21862332!80x80.jpg'
                    }]
            }
        },
        methods: {
            handleSelectionChange(selections) {
                this.productNum = selections.length;
                this.selections = selections
                this.calculateTotalPrice()
            },
            deleteRow(index, rows) {
                rows.splice(index, 1);
            },
            calculateTotalPrice() {
                this.totalPrice = 0;
                for (const selection of this.selections) {
                    this.totalPrice += Number(selection.count) * Number(selection.price);
                }
            }
        }
    }
</script>

<style scoped>
    #itemDetail {
        width: 1226px;
        background-color: white;
        margin-top: 30px;
    }

    #totalPrice {
        width: 1226px;
        background-color: white;
        margin-top: 30px;
    }

</style>