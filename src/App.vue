<template>
    <div style="background-color:rgb(245,245,245) ">
    <div class="frame">
        <navigation-bar/>
        <div >
            <router-view/>
        </div>
        <el-backtop :bottom="100"></el-backtop>
    </div>
    </div>
</template>

<script>
    import NavigationBar from "./components/NavigationBar";


    export default {
        components: {
            NavigationBar,
        },
        data() {
            return {}
        }

    }
</script>

<style scoped>
    .frame {
        max-width: 1226px;
        min-width: 1226px;
        margin-left: auto;
        margin-right: auto;
    }


</style>
