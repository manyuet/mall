<template>
    <div style="background-color:rgb(245,245,245) ">
        <div class="frame">
        <top-navigation-bar/>
            <navigation-bar/>
            <div style="min-height: 700px">
                <router-view/>
            </div>
            <web-bottom/>
            <el-backtop :bottom="100"></el-backtop>
        </div>
    </div>
</template>

<script>
    import NavigationBar from "./components/NavigationBar";
    import WebBottom from "./components/WebBottom";
    import TopNavigationBar from "./components/TopNavigationBar";


    export default {
        components: {
            TopNavigationBar,
            WebBottom,
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
