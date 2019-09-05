<template>
    <div style="text-align:center">
        <table cellpadding="3" cellspacing="0" style="margin: auto">
            <tr>
                <th rowspan="2">
                    <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/79ed6663b57e30554a5d1f0653c68b78.jpg?thumb=1&w=234&h=614&f=webp&q=90">
                </th>
                <th v-for="(good, index) in goods.slice(0,4)" :key="index">
                    <good-item :product="good"/>
                </th>
            </tr>
            <tr>
                <th v-for="(good, index) in goods.slice(4,8)" :key="index">
                    <good-item :product="good"/>
                </th>
            </tr>
        </table>
    </div>
</template>

<script>
    import GoodItem from "./GoodItem";

    export default {
        name: "GoodsFrame",
        data() {
            return {
                goods: []
            }
        },
        created(){
            this.axios.get("http://mock-api.com/NnX4Gkny.mock/home?type=mobile").then(response=>{
                this.goods=response.data;
            }).catch(error=>{
                console.log(error)
            })
        },
        components: {
            GoodItem
        }
    }
</script>

<style scoped>

</style>