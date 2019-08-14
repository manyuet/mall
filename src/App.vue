<template>
    <div id="frame">
        <navigation-bar/>
        <carousel/>
        <goods-frame/>
        <table cellpadding="3" cellspacing="0" style="margin: auto">
            <tr>
                <th v-for="(good, index) in goods.slice(0,5)" :key="index">
                    <good-item :good="good"/>
                </th>
            </tr>
            <tr>
                <th v-for="(good, index) in goods.slice(5,9)" :key="index">
                    <good-item :good="good"/>
                </th>
                <th>
                    <tr><small-good-item :good="goods[9]"/></tr>
                    <tr><small-view-more-item/></tr>
                </th>
            </tr>
        </table>
    </div>
</template>

<script>
    import Carousel from "./components/Carousel";
    import NavigationBar from "./components/NavigationBar";
    import GoodsFrame from "./components/GoodsFrame";
    import GoodItem from "./components/GoodItem";
    import GoodsDetail from "./components/GoodsDetail";
    import SmallGoodItem from "./components/SmallGoodItem";
    import SmallViewMoreItem from "./components/SmallViewMoreItem";


    export default {
        components: {
            SmallViewMoreItem,
            SmallGoodItem,
            GoodsDetail,
            GoodItem,
            GoodsFrame,
            NavigationBar,
            Carousel,
        },
        data(){
            return {
                goods: [
                    {
                        imageSrc: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/beee478168e5c4fd0d66369386fddbbe.jpg?thumb=1&w=200&h=200&f=webp&q=90',
                        title: 'Refmi K20 Pro 6GB+128GB',
                        desc: '骁龙855，弹出全面屏',
                        price: 2299
                    },
                    {
                        imageSrc: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/beee478168e5c4fd0d66369386fddbbe.jpg?thumb=1&w=200&h=200&f=webp&q=90',
                        title: 'Refmi K20 Pro 6GB+128GB',
                        desc: '骁龙855，弹出全面屏',
                        price: 2299
                    },
                    {
                        imageSrc: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/beee478168e5c4fd0d66369386fddbbe.jpg?thumb=1&w=200&h=200&f=webp&q=90',
                        title: 'Refmi K20 Pro 6GB+128GB',
                        desc: '骁龙855，弹出全面屏',
                        price: 2299
                    },
                    {
                        imageSrc: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/beee478168e5c4fd0d66369386fddbbe.jpg?thumb=1&w=200&h=200&f=webp&q=90',
                        title: 'Refmi K20 Pro 6GB+128GB',
                        desc: '骁龙855，弹出全面屏',
                        price: 2299
                    },
                    {
                        imageSrc: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/beee478168e5c4fd0d66369386fddbbe.jpg?thumb=1&w=200&h=200&f=webp&q=90',
                        title: 'Refmi K20 Pro 6GB+128GB',
                        desc: '骁龙855，弹出全面屏',
                        price: 2299
                    },
                    {
                        imageSrc: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/beee478168e5c4fd0d66369386fddbbe.jpg?thumb=1&w=200&h=200&f=webp&q=90',
                        title: 'Refmi K20 Pro 6GB+128GB',
                        desc: '骁龙855，弹出全面屏',
                        price: 2299
                    },
                    {
                        imageSrc: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/beee478168e5c4fd0d66369386fddbbe.jpg?thumb=1&w=200&h=200&f=webp&q=90',
                        title: 'Refmi K20 Pro 6GB+128GB',
                        desc: '骁龙855，弹出全面屏',
                        price: 2299
                    },
                    {
                        imageSrc: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/beee478168e5c4fd0d66369386fddbbe.jpg?thumb=1&w=200&h=200&f=webp&q=90',
                        title: 'Refmi K20 Pro 6GB+128GB',
                        desc: '骁龙855，弹出全面屏',
                        price: 2299
                    },
                    {
                        imageSrc: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/beee478168e5c4fd0d66369386fddbbe.jpg?thumb=1&w=200&h=200&f=webp&q=90',
                        title: 'Refmi K20 Pro 6GB+128GB',
                        desc: '骁龙855，弹出全面屏',
                        price: 2299
                    },
                    {
                        imageSrc: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/beee478168e5c4fd0d66369386fddbbe.jpg?thumb=1&w=200&h=200&f=webp&q=90',
                        title: 'Refmi K20 Pro 6GB+128GB',
                        desc: '骁龙855，弹出全面屏',
                        price: 2299
                    }
                ]
            }
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
