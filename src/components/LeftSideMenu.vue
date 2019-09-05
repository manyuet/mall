<template>

    <div style="height: 1000px;background-color: white;padding-left: 50px;margin-top: -14px;padding-top: 50px">
        <div v-for="(menu,index) in Menus"
             :key="index"
             style="margin-top: 40px">
            <p style="color: #070707;font-size: 16px;">{{menu.title}}</p>
            <p v-for="(item,index) in menu.children"
               :key="index"
               @click="Fn(item.method)"
               style="color: #757575;font-size: 14px">
                <el-link :underline="false">{{item.title}}</el-link>
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "LeftSideMenu",
        data() {
            return {
                Menus: []
            }
        },
        created(){
            this.axios.get("http://mock-api.com/NnX4Gkny.mock/users/menu").then(response=>{
                this.Menus=response.data;
            }).catch(error=>{
                console.log(error)
            })
        },
        methods: {
            Fn(method) {
                this[method]()
            },
            myOrderFn() {
                this.$router.push('/myOrder');
            },
            myPersonalFn() {
                this.$router.push('/personal');
            }
        }
    }
</script>

<style scoped>
    .el-link:hover {
        color: #333333;
    }
    .el-link:active {
        color: #2c9cfa;
    }
</style>