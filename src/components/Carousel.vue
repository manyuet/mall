<template>
    <el-carousel :interval="5000" arrow="always" height="460px">
        <el-carousel-item v-for="(image,index) in images" :key="index">
            <img :src="image"/>
        </el-carousel-item>
    </el-carousel>
</template>

<script>
    export default {
        name: "Carousel",
        data(){
            return{
                images:[
                    "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e52c3e98602b90f198ec316dce253cba.jpg?thumb=1&w=1226&h=460&f=webp&q=90",
                    "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d70da47d65018a5fef96924c55f072fd.jpg?thumb=1&w=1226&h=460&f=webp&q=90",
                    "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9c7b748aef821673c4ea54433754a978.jpg?thumb=1&w=1226&h=460&f=webp&q=90",
                    "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/83cdc457caac0ab4b1dc4eae3a4d30f7.jpg?thumb=1&w=1226&h=460&f=webp&q=90"
                ]
            }
        }
    }
</script>

<style scoped>

</style>