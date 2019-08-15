<template>
    <el-menu :default-active="activeIndex" class="el-menu-demo"  mode="horizontal">
        <el-submenu index="1" >
            <template slot="title" >小米手机</template>
            <el-menu-item index="1-1" mode="horizontal">小米CC9</el-menu-item>
            <el-menu-item index="1-2" mode="horizontal">小米CC9e</el-menu-item>
            <el-menu-item index="1-3" mode="horizontal">选项3</el-menu-item>
        </el-submenu>
        <el-submenu index="2">
            <template slot="title">Redmi 红米</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
        </el-submenu>
        <el-submenu index="3">
            <template slot="title">电视</template>
            <el-menu-item index="3-1">选项1</el-menu-item>
            <el-menu-item index="3-2">选项2</el-menu-item>
            <el-menu-item index="3-3">选项3</el-menu-item>
        </el-submenu>
        <el-submenu index="4">
            <template slot="title">笔记本</template>
            <el-menu-item index="4-1">选项1</el-menu-item>
            <el-menu-item index="4-2">选项2</el-menu-item>
            <el-menu-item index="4-3">选项3</el-menu-item>
        </el-submenu>
        <el-submenu index="5">
            <template slot="title">家电</template>
            <el-menu-item index="5-1">选项1</el-menu-item>
            <el-menu-item index="5-2">选项2</el-menu-item>
            <el-menu-item index="5-3">选项3</el-menu-item>
        </el-submenu>
        <el-submenu index="6">
            <template slot="title">路由器</template>
            <el-menu-item index="6-1">选项1</el-menu-item>
            <el-menu-item index="6-2">选项2</el-menu-item>
            <el-menu-item index="6-3">选项3</el-menu-item>
        </el-submenu>
        <el-submenu index="7">
            <template slot="title">智能硬件</template>
            <el-menu-item index="7-1">选项1</el-menu-item>
            <el-menu-item index="7-2">选项2</el-menu-item>
            <el-menu-item index="7-3">选项3</el-menu-item>
        </el-submenu>
        <el-menu-item index="8"><a href="https://www.ele.me" target="_blank">服务</a></el-menu-item>
        <el-menu-item index="9"><a href="https://www.ele.me" target="_blank">社区</a></el-menu-item>
        <el-menu-item index="10" style="float: right">
            <el-input v-model="input" placeholder="请输入内容">
                <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
        </el-menu-item>
    </el-menu>
</template>

<script>
    export default {
        name: 'NavigationBar',
        data: function () {
            return {
                activeIndex: '1',
                input: ''
            }
        },
        methods: {}
    }
</script>

<style scoped>
    #frame {
        height: 50px;
    }

    .icon {
        background-color: #fc6720;
        width: 50px;
        height: 50px;
    }

    img:hover {
        background-image :"../assets/homepage.png";
    }
</style>
