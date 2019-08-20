<template>
    <div>
        <carousel/>
        <goods-frame/>
        <classify-product class="classify-product" v-for="(productInfo,index) in productInfos" :key="index"
                          :productInfo="productInfo"/>
        <broad-side-navigation-bar class="broad"/>
    </div>
</template>

<script>
    import Carousel from "../components/Carousel";
    import GoodsFrame from "../components/GoodsFrame";
    import ClassifyProduct from "../components/ClassifyProduct";
    import BroadSideNavigationBar from "../components/BroadSideNavigationBar";

    export default {
        name: "Home",
        components: {BroadSideNavigationBar, ClassifyProduct, GoodsFrame, Carousel},
        data() {
            return {
                productInfos: [
                    {
                        type: '家电',
                        headerImageSrc: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/208e8bd91e6bc3a132eceff707717348.jpg?thumb=1&w=1226&h=120&f=webp&q=90',
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
                                    imageSrc: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8ce424d6fe93dfb74733b5838140b7ee.jpg?thumb=1&w=200&h=200&f=webp&q=90',
                                    title: '米家互联网空调C1（一级能效）',
                                    desc: '1.5匹，自清洁，全直流变频',
                                    price: 2299
                                },
                                {
                                    imageSrc: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2b911be4c2f156bb6e4cf367c6080045.jpg?thumb=1&w=200&h=200',
                                    title: '米家空调',
                                    desc: '1.5匹，自清洁，全直流变频',
                                    price: 1499
                                },
                                {
                                    imageSrc: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ec20453216dcd42f982cffe5fdbc3115.jpg?thumb=1&w=200&h=200&f=webp&q=90',
                                    title: '米家互联网洗烘一体机Pro 10kg',
                                    desc: '智能洗烘，省心省力',
                                    price: 2299
                                },
                                {
                                    imageSrc: 'https://i8.mifile.cn/v1/a1/ef617fac-7489-436d-b74e-c43582f09633!200x200.jpg',
                                    title: 'Refmi K20 Pro 6GB+128GB',
                                    desc: '骁龙855，弹出全面屏',
                                    price: 2299
                                },
                                {
                                    imageSrc: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cd2aa2dcad6440b469c22e27db9b6236.jpg?thumb=1&w=200&h=200&f=webp&q=90',
                                    title: 'Refmi K20 Pro 6GB+128GB',
                                    desc: '骁龙855，弹出全面屏',
                                    price: 2299
                                },
                                {
                                    imageSrc: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b8c63a2024528fe5410ebe669b7d2407.jpg?thumb=1&w=200&h=200&f=webp&q=90',
                                    title: 'Refmi K20 Pro 6GB+128GB',
                                    desc: '骁龙855，弹出全面屏',
                                    price: 2299
                                },
                                {
                                    imageSrc: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ef6b4e9b9151849b3b1fb1dbf069c6ed.jpg?thumb=1&w=200&h=200&f=webp&q=90',
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
                                    imageSrc: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ef6b4e9b9151849b3b1fb1dbf069c6ed.jpg',
                                    title: 'Refmi K20 Pro 6GB+128GB',
                                    desc: '骁龙855，弹出全面屏',
                                    price: 2299
                                },
                                {
                                    imageSrc: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b3317a291b112aa4712059ad93263668.jpg',
                                    title: 'Refmi K20 Pro 6GB+128GB',
                                    desc: '骁龙855，弹出全面屏',
                                    price: 2299
                                },
                                {
                                    imageSrc: 'https://i8.mifile.cn/b2c-mimall-media/ede227c1f0e3472fb8dcfae980d1e43f.jpg',
                                    title: 'Refmi K20 Pro 6GB+128GB',
                                    desc: '骁龙855，弹出全面屏',
                                    price: 2299
                                },
                                {
                                    imageSrc: 'https://i8.mifile.cn/v1/a1/cef8a9c0-2386-5b66-9ed2-6b1d4e4490bf.jpg',
                                    title: 'Refmi K20 Pro 6GB+128GB',
                                    desc: '骁龙855，弹出全面屏',
                                    price: 2299
                                },
                                {
                                    imageSrc: 'https://i8.mifile.cn/b2c-mimall-media/91b59cc6474e0cd777445b15adb13980.jpg',
                                    title: 'Refmi K20 Pro 6GB+128GB',
                                    desc: '骁龙855，弹出全面屏',
                                    price: 2299
                                },
                                {
                                    imageSrc: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0e7eee530e4a103f2f5a0937a14bed53.jpg',
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
                        headerImageSrc: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/bd2480622e89bfedcfcf4e62ad679203.jpg?thumb=1&w=1226&h=120&f=webp&q=90',
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
                                    imageSrc: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/011dd8493ad62f3793dbb63d9fbd3bc0.jpg',
                                    title: 'Refmi K20 Pro 6GB+128GB',
                                    desc: '骁龙855，弹出全面屏',
                                    price: 2299
                                },
                                {
                                    imageSrc: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0baacf6e54cbf89cab2c543cc02344e9.jpg',
                                    title: 'Refmi K20 Pro 6GB+128GB',
                                    desc: '骁龙855，弹出全面屏',
                                    price: 2299
                                },
                                {
                                    imageSrc: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e7c6e79433c883e1a022ec21402c1679.jpg',
                                    title: 'Refmi K20 Pro 6GB+128GB',
                                    desc: '骁龙855，弹出全面屏',
                                    price: 2299
                                },
                                {
                                    imageSrc: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/44a30f0da2aacb66a0f896293ebc703f.jpg',
                                    title: 'Refmi K20 Pro 6GB+128GB',
                                    desc: '骁龙855，弹出全面屏',
                                    price: 2299
                                },
                                {
                                    imageSrc: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b42e49c6c0208f2de5a2f7a491a3af46.jpg',
                                    title: 'Refmi K20 Pro 6GB+128GB',
                                    desc: '骁龙855，弹出全面屏',
                                    price: 2299
                                },
                                {
                                    imageSrc: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e850fa029579ba886e3d5c81f00ae534.jpg',
                                    title: 'Refmi K20 Pro 6GB+128GB',
                                    desc: '骁龙855，弹出全面屏',
                                    price: 2299
                                },
                                {
                                    imageSrc: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0c65d472682f0679e192dc7b4cd6e64c.jpg',
                                    title: 'Refmi K20 Pro 6GB+128GB',
                                    desc: '骁龙855，弹出全面屏',
                                    price: 2299
                                }
                            ],
                            another: [
                                {
                                    imageSrc: 'https://i8.mifile.cn/v1/a1/768992ca-4136-92f1-244a-0194a81a6360.jpg',
                                    title: 'Refmi K20 Pro 6GB+128GB',
                                    desc: '骁龙855，弹出全面屏',
                                    price: 2299
                                },
                                {
                                    imageSrc: 'https://i8.mifile.cn/b2c-mimall-media/18a82e7cda6ecbc22ecee7ac927d6ff9.jpg',
                                    title: 'Refmi K20 Pro 6GB+128GB',
                                    desc: '骁龙855，弹出全面屏',
                                    price: 2299
                                },
                                {
                                    imageSrc: 'https://i8.mifile.cn/b2c-mimall-media/553b5c01820c844565abe64e50bba323.jpg',
                                    title: 'Refmi K20 Pro 6GB+128GB',
                                    desc: '骁龙855，弹出全面屏',
                                    price: 2299
                                },
                                {
                                    imageSrc: 'https://i8.mifile.cn/v1/a1/cdc5c77b-d7e9-5a42-f848-3ff1808a139a.jpg',
                                    title: 'Refmi K20 Pro 6GB+128GB',
                                    desc: '骁龙855，弹出全面屏',
                                    price: 2299
                                },
                                {
                                    imageSrc: 'https://i8.mifile.cn/v1/a1/aaa1593d-9ca7-2944-3b62-380cc3427d82.jpg',
                                    title: 'Refmi K20 Pro 6GB+128GB',
                                    desc: '骁龙855，弹出全面屏',
                                    price: 2299
                                },
                                {
                                    imageSrc: 'https://i8.mifile.cn/v1/a1/877d3ce8-68ab-7506-2a78-55a8c0fba946.png',
                                    title: 'Refmi K20 Pro 6GB+128GB',
                                    desc: '骁龙855，弹出全面屏',
                                    price: 2299
                                },
                                {
                                    imageSrc: 'https://i8.mifile.cn/b2c-mimall-media/61472c3fcd181959055551e5c73aafec.jpg',
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
                        headerImageSrc: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/59e8fc8ba9718c266882719fb4bbcedd.jpg?thumb=1&w=1226&h=120&f=webp&q=90',
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
                                    imageSrc: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ea8e42faebf7d76a4cb42b8930cf9e46.jpg',
                                    title: 'Refmi K20 Pro 6GB+128GB',
                                    desc: '骁龙855，弹出全面屏',
                                    price: 2299
                                },
                                {
                                    imageSrc: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/eaf70e0e9905de6452f07b1f48fcc386.jpg',
                                    title: 'Refmi K20 Pro 6GB+128GB',
                                    desc: '骁龙855，弹出全面屏',
                                    price: 2299
                                },
                                {
                                    imageSrc: 'https://i8.mifile.cn/v1/a1/287594eb-b765-8db1-3255-0a05c4c07440.jpg',
                                    title: 'Refmi K20 Pro 6GB+128GB',
                                    desc: '骁龙855，弹出全面屏',
                                    price: 2299
                                },
                                {
                                    imageSrc: 'https://i8.mifile.cn/v1/a1/5dd69c0a-8f4a-b42f-d840-6c5a47f2cd03.jpg',
                                    title: 'Refmi K20 Pro 6GB+128GB',
                                    desc: '骁龙855，弹出全面屏',
                                    price: 2299
                                },
                                {
                                    imageSrc: 'https://i8.mifile.cn/b2c-mimall-media/d7fd9ecdca3959beae3fb5db59aa9aff.jpg',
                                    title: 'Refmi K20 Pro 6GB+128GB',
                                    desc: '骁龙855，弹出全面屏',
                                    price: 2299
                                },
                                {
                                    imageSrc: 'https://i8.mifile.cn/b2c-mimall-media/92af1f21293fabfbf2a112892b864925.jpg',
                                    title: 'Refmi K20 Pro 6GB+128GB',
                                    desc: '骁龙855，弹出全面屏',
                                    price: 2299
                                },
                                {
                                    imageSrc: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/321610e787393c42e5cb2e5730a7681d.jpg',
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
                                    imageSrc: 'https://i8.mifile.cn/b2c-mimall-media/ddf317f34e47eed06d910ee0ffd6b2fc.jpg',
                                    title: 'Refmi K20 Pro 6GB+128GB',
                                    desc: '骁龙855，弹出全面屏',
                                    price: 2299
                                },
                                {
                                    imageSrc: 'https://i8.mifile.cn/b2c-mimall-media/838ba427ef55317d8c4911b02c95bb79.jpg',
                                    title: 'Refmi K20 Pro 6GB+128GB',
                                    desc: '骁龙855，弹出全面屏',
                                    price: 2299
                                },
                                {
                                    imageSrc: 'https://i8.mifile.cn/b2c-mimall-media/a0e1b48582e68cecf4b3e32dd1b5549d.jpg',
                                    title: 'Refmi K20 Pro 6GB+128GB',
                                    desc: '骁龙855，弹出全面屏',
                                    price: 2299
                                },
                                {
                                    imageSrc: 'https://i8.mifile.cn/v1/a1/T1hVY_BTdv1RXrhCrK.jpg',
                                    title: 'Refmi K20 Pro 6GB+128GB',
                                    desc: '骁龙855，弹出全面屏',
                                    price: 2299
                                },
                                {
                                    imageSrc: 'https://i8.mifile.cn/v1/a1/e4c0f21c-3bd4-323e-673b-a9c1c1c6e294.jpg',
                                    title: 'Refmi K20 Pro 6GB+128GB',
                                    desc: '骁龙855，弹出全面屏',
                                    price: 2299
                                },
                                {
                                    imageSrc: 'https://i8.mifile.cn/v1/a1/852c3872-7aca-e565-b8fb-37aa3ce88979.jpg',
                                    title: 'Refmi K20 Pro 6GB+128GB',
                                    desc: '骁龙855，弹出全面屏',
                                    price: 2299
                                },
                                {
                                    imageSrc: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ecafe0dd23a701e211bbb2079df3f1ff.jpg',
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
                    }
                ],
            }
        }
    }
</script>

<style scoped>
    .broad {
        position: fixed;
        bottom: 160px;
        right: 40px;
        background-color: white;
    }
</style>