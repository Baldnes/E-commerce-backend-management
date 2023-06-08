<template>
    <div class="containers">
        <div>
            <span>订单数量分析</span>
            <dv-capsule-chart :config="config" style="width:350px;height:200px" class="num" />
        </div>
        <div>
            <span>订单品项分析</span>
            <dv-capsule-chart :config="config1" style="width:350px;height:200px" class="num" />
        </div>
        <div>
            <span>订货分类占比</span>
            <div id="price" style="width: 350px; height: 200px;"></div>
            
        </div>
    </div>
</template>
<script>

export default {
    name: "PageHeader",
    data() {
        return {
            config: {
                data: [
                    {
                        name: '订单总数',
                        value: 167
                    },
                    {
                        name: '已分拣订单总数',
                        value: 123
                    },
                    {
                        name: '已核货订单总数',
                        value: 98
                    },
                    {
                        name: '已发运订单总数',
                        value: 75
                    }
                ],
                colors: ['#e062ae', '#fb7293', '#e690d1', '#32c5e9', '#96bfff'],
                unit: '单',
                showValue: true
            },
            config1: {
                data: [
                    {
                        name: '订单品项总数',
                        value: 167
                    },
                    {
                        name: '已分拣品项总数',
                        value: 123
                    },
                    {
                        name: '已核货品项总数',
                        value: 98
                    },
                    {
                        name: '已发运品项总数',
                        value: 75
                    }
                ],
                colors: ['#e062ae', '#fb7293', '#e690d1', '#32c5e9', '#96bfff'],
                unit: '单',
                showValue: true
            }
        }
    },
    methods: {},
    mounted() {
        let mychar = this.$echarts.init(document.getElementById('price'))
        mychar.setOption({
            tooltip: {
                trigger: 'item'
            },
            legend:{
                top:"10",
                left:"75%",
                itemHeight:"10",
                orient:"horizontal",
                textStyle: {
                    color:"#fff",
                    fontSize:8
                }
            },
            series: [
                {
                    name: '订单占比',
                    type: 'pie',
                    radius: ['40%', '70%'],
                    avoidLabelOverlap: false,
                    itemStyle: {
                        borderRadius: 10,
                        borderColor: '#fff',
                        borderWidth: 2
                    },
                    label: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: 12,
                        }
                    },
                    labelLine: {
                        show: false
                    },
                    data: [
                        { value: 1048, name: '数码产品 36%' },
                        { value: 735, name: '生活用品 20%' },
                        { value: 580, name: '日常出行 14%' },
                        { value: 484, name: '衣服 8%' },
                        { value: 300, name: '五金 7%' },
                        { value: 580, name: '杂货 5%' },
                        { value: 484, name: '儿童玩具 5%' },
                        { value: 300, name: '厨具 5%' }
                    ]
                }
            ]
        })
    }
}

</script>
<style scoped lang="less">
.containers {
    display: flex;
    height: 230px;
    justify-content: space-around;
    & > div {
        width: 400px;
        background-color: #242D49;
        border-radius: 5px;
        & > span {
            color: #fff;
            font-weight: bold;
            position: relative;
            top: 15px;
            left: 15px;
        }
        .num {
            margin: 0 auto;
            margin-top: 20px;
        }
    }
}
</style>