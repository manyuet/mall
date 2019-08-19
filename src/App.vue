<template>
    <div id="frame">
        <navigation-bar/>
        <div>
            <router-view/>
        </div>
    </div>
</template>

<script>
    import NavigationBar from "./components/NavigationBar";


    export default {
        components: {
            NavigationBar,
        }

    }
</script>

<style scoped>
    #frame {
        max-width: 1226px;
        min-width: 1226px;
        margin-left: auto;
        margin-right: auto;
    }

</style>
