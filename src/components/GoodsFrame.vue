<template>
    <div style="text-align:center">
        <table cellpadding="3" cellspacing="0" style="margin: auto">
            <tr>
                <th rowspan="2">
                    <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/79ed6663b57e30554a5d1f0653c68b78.jpg?thumb=1&w=234&h=614&f=webp&q=90">
                </th>
                <th v-for="(good, index) in goods.slice(0,4)" :key="index">
                    <good-item :good="good"/>
                </th>
            </tr>
            <tr>
                <th v-for="(good, index) in goods.slice(4)" :key="index">
                    <good-item :good="good"/>
                </th>
            </tr>
        </table>
    </div>
</template>

<script>
    import GoodsDetail from "./GoodsDetail";
    import GoodItem from "./GoodItem";

    export default {
        name: "GoodsFrame",
        data() {
            return {
                goods: [
                    {
                        imageSrc: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/beee478168e5c4fd0d66369386fddbbe.jpg',
                        title: 'Refmi K20 Pro 6GB+128GB',
                        desc: '骁龙855，弹出全面屏',
                        price: 2299
                    },
                    {
                        imageSrc: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0ce61b71e2f81df62bd0c05aaa901d22.jpg',
                        title: 'Refmi Note 7',
                        desc: '4800万拍照千元机',
                        price: 1199
                    },
                    {
                        imageSrc: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/537279cdf91ce313f903f3670c147c03.jpg',
                        title: '小米9 全网通版 6GB+128GB',
                        desc: '全曲面轻薄幻彩机身',
                        price: 2599
                    },
                    {
                        imageSrc: 'https://i8.mifile.cn/b2c-mimall-media/42519fc457160f638c30c5657d85ab10.png',
                        title: '小米MIX3',
                        desc: 'DxO百分拍照手机',
                        price: 2999
                    },
                    {
                        imageSrc: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/80e162c89662636b1e06402ede5bf530.jpg',
                        title: 'Refmi K20 Pro 6GB+128GB',
                        desc: '骁龙855，弹出全面屏',
                        price: 2299
                    },
                    {
                        imageSrc: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/98b6d5e894ffed368c8bd316358702d5.jpg',
                        title: 'Refmi K20 Pro 6GB+128GB',
                        desc: '骁龙855，弹出全面屏',
                        price: 2299
                    },
                    {
                        imageSrc: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e4f077546060c890516500c2a23d64f6.jpg',
                        title: 'Refmi K20 Pro 6GB+128GB',
                        desc: '骁龙855，弹出全面屏',
                        price: 2299
                    },
                    {
                        imageSrc: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8ce424d6fe93dfb74733b5838140b7ee.jpg',
                        title: 'Refmi K20 Pro 6GB+128GB',
                        desc: '骁龙855，弹出全面屏',
                        price: 2299
                    }
                ]
            }
        },
        components: {
            GoodItem,
            GoodsDetail
        }
    }
</script>

<style scoped>

</style>