<template>
    <div id="frame">
        <div id="itemDetail">
            <el-table
                    ref="multipleTable"
                    :data="productInfos"
                    tooltip-effect="dark"
                    class="table-info"
                    @selection-change="handleSelectionChange">
                <el-table-column
                        label="全选"
                        type="selection"
                        width="100">
                </el-table-column>
                <el-table-column class="col-name"
                                 prop="name"
                                 label="商品名称"
                                 width="450"
                                 align="center"
                                 show-overflow-tooltip>
                    <template slot-scope="scope">
                        <el-row>
                            <el-col :span="3">
                                <img :src="scope.row.imgSrc" class="col-img"/>
                            </el-col>
                            <el-col :span="18" class="col-color">
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
            <el-row class="row-total">
                <el-col :span="2" :offset="1" class="col-shopping">继续购物</el-col>
                <el-col :span="4" class="col-shopping">共<span
                        class="span-num">{{productInfos.length}}</span>件商品， 已选择
                    <span class="span-piece">{{productNum}}</span>件
                </el-col>
                <el-col :span="12" style="text-align: right;"><span
                        class="span-all">合计:&nbsp;&nbsp;</span></el-col>
                <el-col :span="1" style="text-align: left">
                    <span class="span-total">{{totalPrice}}</span>
                </el-col>
                <el-col :span="4">
                    <el-button @click.native="confirmOrder"
                               class="button-pay">去结算
                    </el-button>
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
            }
        },
        computed: {
            productInfos() {
                return this.$store.state.cart.shoppingCart
            }
        },
        methods: {
            handleSelectionChange(selections) {
                this.productNum = selections.length;
                this.selections = selections;
                this.calculateTotalPrice();
                localStorage.setItem("selectedProducts", JSON.stringify(this.selections));
            },
            deleteRow(index, rows) {
                rows.splice(index, 1);
            },
            calculateTotalPrice() {
                this.totalPrice = 0;
                for (const selection of this.selections) {
                    this.totalPrice += Number(selection.count) * Number(selection.price);
                }
            },
            confirmOrder() {
                if (!this.productNum) {
                    this.$message.error('请选择商品结算');
                } else {
                    this.$router.push("/confirmOrder");
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

    .table-info {
        width: 100%
    }

    .col-name {
        left: 10px
    }

    .col-img {
        width: 80px;
        height: 80px
    }

    .col-color {
        line-height: 85px
    }

    .row-total {
        line-height: 50px
    }

    .col-shopping {
        font-size: 14px;
        color: #757575
    }

    .span-num {
        color: rgb(44, 156, 250);
        margin-left: 5px;
        margin-right: 5px
    }

    .span-piece {
        color: #2C9CFA;
        margin-left: 3px;
        margin-right: 5px
    }

    .span-all {
        color: #2C9CFA;
        font-size: 14px
    }

    .span-total {
        color: #2C9CFA;
        font-size: 30px;
    }

    .button-pay {
        background-color: #2C9CFA;
        float: right;
        color: white;
        line-height: 28px;
        width: 150px
    }

</style>