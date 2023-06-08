<template>
    <div class="containers">
        <div>
            <div id="char1" style="width: 300px;height: 300px;"></div>
        </div>
        <div>
            <div id="char2" style="width: 300px;height: 300px;"></div>
        </div>
        <div>
            <div id="char3" style="width: 300px;height: 300px;"></div>
        </div>
        <div>
            <div id="char4" style="width: 300px;height: 300px;"></div>
        </div>
    </div>
</template>
<script>

export default {
    name: "PageFooter",
    mounted() {
        let mychar1 = this.$echarts.init(document.getElementById('char1'))
        let mychar2 = this.$echarts.init(document.getElementById('char2'))
        let mychar3 = this.$echarts.init(document.getElementById('char3'))
        let mychar4 = this.$echarts.init(document.getElementById('char4'))
        mychar1.setOption({
            title: {
                text: "订单趋势（最近五天）",
                textStyle: {
                    color: "#fff"
                }
            },
            xAxis: {
                type: 'category',
                data: ['05/09', '05/10', '05/11', '05/12', '05/13',],
                textStyle: {
                    color: "#fff"
                }
            },
            yAxis: {
                type: 'value',
                name: "订单数",
                nameTextStyle: {
                    color: "#fff"
                }
            },
            tooltip: {},
            series: [
                {
                    name: "订单量",
                    data: [820, 932, 901, 934, 1290],
                    type: 'line',
                    smooth: true,
                    areaStyle: {
                        color: "#00D7FF",
                        opacity: 0.3
                    },
                    emphasis: {
                        focus: 'series',
                        blurScope: 'coordinateSystem'
                    }
                }
            ]
        })
        mychar2.setOption({
            title: {
                text: "金额趋势（最近五天）",
                textStyle: {
                    color: "#fff"
                }
            },
            xAxis: {
                type: 'category',
                data: ['05/09', '05/10', '05/11', '05/12', '05/13',],
                textStyle: {
                    color: "#fff"
                }
            },
            yAxis: {
                type: 'value',
                name: "金额",
                nameTextStyle: {
                    color: "#fff"
                }
            },
            tooltip: {},
            series: [
                {
                    name: "金额",
                    data: [1820, 932, 901, 934, 1290],
                    type: 'line',
                    smooth: true,
                    areaStyle: {
                        color: "#FF0000",
                        opacity: 0.3
                    },
                    emphasis: {
                        focus: 'series',
                        blurScope: 'coordinateSystem'
                    }
                }
            ]
        })
        mychar3.setOption({
            title: {
                text: "分拣明细数据历史趋势（最近五天）",
                textStyle: {
                    color: "#fff"
                }
            },
            xAxis: {
                type: 'category',
                data: ['05/09', '05/10', '05/11', '05/12', '05/13',],
                textStyle: {
                    color: "#fff"
                }
            },
            yAxis: {
                type: 'value',
                name: "品项数",
                nameTextStyle: {
                    color: "#fff"
                }
            },
            tooltip: {},
            series: [
                {
                    name: "品项数",
                    data: [820, 932, 432, 934, 1290],
                    type: 'line',
                    smooth: true,
                    areaStyle: {
                        color: "#F8FF00",
                        opacity: 0.3
                    },
                    emphasis: {
                        focus: 'series',
                        blurScope: 'coordinateSystem'
                    }
                }
            ]
        })
        mychar4.setOption({
            title: {
                text: "称重任务明细趋势（最近五天）",
                textStyle: {
                    color: "#fff"
                }
            },
            xAxis: {
                type: 'category',
                data: ['05/09', '05/10', '05/11', '05/12', '05/13',],
                textStyle: {
                    color: "#fff"
                }
            },
            yAxis: {
                type: 'value',
                name: "品项数",
                nameTextStyle: {
                    color: "#fff"
                }
            },
            tooltip: {},
            series: [
                {
                    name: "品项数",
                    data: [820, 932, 901, 934, 230],
                    type: 'line',
                    smooth: true,
                    areaStyle: {
                        color: "#00FF03",
                        opacity: 0.3
                    },
                    emphasis: {
                        focus: 'series',
                        blurScope: 'coordinateSystem'
                    }
                }
            ]
        })
    }
}

</script>
<style scoped lang="less">
.containers {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;

    &>div {
        width: 290px;
        height: 100%;
        background-color: #242D49;
        border-radius: 5px;
    }
}
</style>