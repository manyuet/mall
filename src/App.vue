<template>
    <div id="frame">
        <navigation-bar/>
        <carousel/>
        <goods-frame/>
        <classify-product v-for="(productInfo,index) in productInfos" :key="index" :productInfo="productInfo"/>
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
    import ClassifyProduct from "./components/ClassifyProduct";


    export default {
        components: {
            ClassifyProduct,
            SmallViewMoreItem,
            SmallGoodItem,
            GoodsDetail,
            GoodItem,
            GoodsFrame,
            NavigationBar,
            Carousel,
        },
        data() {
            return {
                productInfos: [
                    {
                        type: '家电',
                        data: {
                            recommend: [
                                {
                                    imageSrc: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b56fd90a60e3d9e5d87dae9fbd427ea8.jpg?w=468&h=600'
                                },
                                {
                                    imageSrc: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b67de5a8ce9025fb5d8bac66e019d1c3.jpg?w=468&h=600'
                                }
                            ],
                            hot: [
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
                            ],
                            another: [
                                {
                                    imageSrc: 'https://i8.mifile.cn/v1/a1/ef617fac-7489-436d-b74e-c43582f09633.jpg',
                                    title: 'Refmi K20 Pro 6GB+128GB',
                                    desc: '骁龙855，弹出全面屏',
                                    price: 2299
                                },
                                {
                                    imageSrc: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ef6b4e9b9151849b3b1fb1dbf069c6ed.jpg',
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
                            ],
                            anotherName: '电视影音'
                        }
                    },
                    {
                        type: '智能',
                        data: {
                            recommend: [
                                {
                                    imageSrc: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b95465d9ae05adaa2bcff10863bc2f12.jpg?w=468&h=600',
                                    title: 'Refmi K20 Pro 6GB+128GB',
                                    desc: '骁龙855，弹出全面屏',
                                    price: 2299
                                },
                                {
                                    imageSrc: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a660ce095e8f553a9ed1515265f4e9fc.jpg?w=468&h=600',
                                    title: 'Refmi K20 Pro 6GB+128GB',
                                    desc: '骁龙855，弹出全面屏',
                                    price: 2299
                                }
                            ],
                            hot: [
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
                            ],
                            another: [
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
                            ],
                            anotherName: '耳机音箱'
                        }
                    },
                    {
                        type: '搭配',
                        data: {
                            recommend: [
                                {
                                    imageSrc: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6874615b3c50e837ffe532eb6ea4ef1a.jpg?w=468&h=600',
                                    title: 'Refmi K20 Pro 6GB+128GB',
                                    desc: '骁龙855，弹出全面屏',
                                    price: 2299
                                },
                                {
                                    imageSrc: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e4e456617d58227cc70d682b42fe90e3.jpg?w=468&h=600',
                                    title: 'Refmi K20 Pro 6GB+128GB',
                                    desc: '骁龙855，弹出全面屏',
                                    price: 2299
                                }
                            ],
                            hot: [
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
                            ],
                            another: [
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
                            ],
                            anotherName: '保护套'
                        }
                    }
                ],
            }
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
