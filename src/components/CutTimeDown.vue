<template>
    <div>
        <i class="el-icon-timer"></i>
        <span class="miaosha">秒杀</span>
        <span class="jieshu">距结束&nbsp;{{countDownList}}</span>
    </div>
</template>

<script>
    export default {
        name: "CutTimeDown",
        data() {
            return {
                countDownList: '00时00分00秒',
                actEndTime: '2019-08-21 18:30:00'
            }
        },
        created() {
            this.countDown();
        },
        methods: {
            timeFormat(param) {
                return param < 10 ? '0' + param : param;
            },
            countDown() {
                const interval = setInterval(() => {
                    // 获取当前时间，同时得到活动结束时间数组
                    let newTime = new Date().getTime();
                    // 对结束时间进行处理渲染到页面
                    let endTime = new Date(this.actEndTime).getTime();
                    let obj = null;
                    // 如果活动未结束，对时间进行处理
                    if (endTime - newTime > 0) {
                        let time = (endTime - newTime) / 1000;
                        // 获取天、时、分、秒
                        let hou = parseInt(time % (60 * 60 * 24) / 3600);
                        let min = parseInt(time % (60 * 60 * 24) % 3600 / 60);
                        let sec = parseInt(time % (60 * 60 * 24) % 3600 % 60);
                        obj = {
                            hou: this.timeFormat(hou),
                            min: this.timeFormat(min),
                            sec: this.timeFormat(sec)
                        };
                    } else { // 活动已结束，全部设置为'00'
                        obj = {
                            hou: '00',
                            min: '00',
                            sec: '00'
                        };
                        clearInterval(interval);
                    }
                    this.countDownList = obj.hou + '时 ' + obj.min + '分 ' + obj.sec + '秒';
                }, 1000);
            }
        }

    }
</script>

<style scoped>
    .el-icon-timer {
        margin-left: 20px
    }

    .miaosha {
        margin-left: 10px
    }

    .jieshu {
        float: right;
        margin-right: 10px
    }
</style>
