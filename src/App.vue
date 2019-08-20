<template>
    <div class="frame">
        <navigation-bar/>
        <div>
            <router-view/>
                <broad-side-navigation-bar class="broad"/>
        </div>
        <el-backtop :bottom="100"></el-backtop>


    </div>
</template>

<script>
    import NavigationBar from "./components/NavigationBar";
    import BroadSideNavigationBar from "./components/BroadSideNavigationBar";


    export default {
        components: {
            BroadSideNavigationBar,
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

    .broad {
        position: fixed;
        bottom: 160px;
        right: 40px;
        background-color: white;
    }

</style>
