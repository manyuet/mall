<template>
    <div id="frame">
        <navigation-bar/>
        <carousel/>
    </div>
</template>

<script>
    import Carousel from "./components/Carousel";
    import NavigationBar from "./components/NavigationBar";


    export default {
        components: {
            NavigationBar,
            Carousel,
        }

    }
</script>

<style scoped>
#frame{
    max-width: 1226px;
    min-width: 1226px;
    margin-left: auto;
    margin-right: auto;
}

</style>
