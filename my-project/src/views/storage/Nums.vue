<template>
    <div class="container">
        <div class="top">
            <div class="left">
                <div class="pie">
                    <div>销售金额（元）</div>
                    <div id="char1"></div>
                </div>
                <div class="pie">
                    <div>销售数量（件）</div>
                    <div id="char2"></div>
                </div>
                <div class="pie">
                    <div>目标达成</div>
                    <div id="char3"></div>
                </div>
            </div>
            <div class="right">
                <div class="r-t">市场推进情况</div>
                <div class="r-b">
                    <div class="box">
                        <div style="display: flex;">
                            <div style="line-height: 80px;">新客户推广情况</div>
                            <div class="boxitem">
                                <div>客户数</div>
                                <div>总金额（万元）</div>
                            </div>
                            <div class="boxitem">
                                <div style="color: red;">13</div>
                                <div style="color: red;">210.37</div>
                            </div>
                        </div>
                    </div>
                    <div class="box">
                        <div style="display: flex;">
                            <div style="line-height: 80px; ">新产品推广情况</div>
                            <div class="boxitem">
                                <div>新客户数</div>
                                <div>总金额（万元）</div>
                            </div>
                            <div class="boxitem">
                                <div style="color: red;">50</div>
                                <div style="color: red;">113.57</div>
                            </div>
                        </div>
                    </div>
                    <div class="box">
                        <div style="display: flex;">
                            <div style="line-height: 80px; width: 112px;">客户退休情况</div>
                            <div class="boxitem">
                                <div>休眠客户数</div>
                                <div>退出</div>
                            </div>
                            <div class="boxitem">
                                <div style="color: red;">33</div>
                                <div style="color: red;">21</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="bottom">
            <div id="main"></div>
            <div id="main2"></div>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
    data() {
        return {
            gaugeData1: [],
            option1: {},
            option2: {},
            option3: {},
            option4: {},
            option5: {},
            list: [],
            price: 0,
            val1: 0,
            tablist: [],
            nlist: [],
            num: 0,
            main1: [],
            main2: []
        }
    },
    computed: {
        ...mapState({
            myArray: state => state.myArray
        }),
    },
    mounted() {
        this.tablist = this.myArray
        this.tablist.forEach(val => {
            this.list.push((parseFloat(val.snum) - parseFloat(val.num)) * parseFloat(val.price))
            this.nlist.push(parseFloat(val.num))
        });
        this.list.forEach(val => {
            this.price += val
        })
        this.nlist.forEach(val => {
            this.num += val
        })
        let mychart1 = this.$echarts.init(document.getElementById('char1'))
        this.gaugeData1 = [
            {
                value: 80,
                title: {
                    offsetCenter: ['0%', '-30%']
                },
                detail: {
                    valueAnimation: true,
                    offsetCenter: ['0%', '-20%']
                }
            }
        ];
        this.option1 = {
            series: [
                {
                    type: 'gauge',
                    startAngle: -180,
                    endAngle: 180,
                    pointer: {
                        show: false
                    },
                    progress: {
                        show: true,
                        overlap: false,
                        roundCap: true,
                        clip: false,
                        itemStyle: {
                            borderWidth: 1,
                            borderColor: '#464646'
                        }
                    },
                    axisLine: {
                        lineStyle: {
                            width: 10
                        }
                    },
                    splitLine: {
                        show: false,
                        distance: 0,
                        length: 10
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        show: false,
                        distance: 50
                    },
                    data: this.gaugeData1,
                    title: {
                        fontSize: 14
                    },
                    detail: {
                        width: 50,
                        height: 20,
                        fontSize: 20,
                        color: 'inherit',
                        borderColor: 'none',
                        borderRadius: 20,
                        borderWidth: 1,
                        formatter: this.price.toFixed(2)
                    }
                }
            ]
        };
        mychart1.setOption(this.option1)
        let mychart2 = this.$echarts.init(document.getElementById('char2'))
        this.gaugeData2 = [
            {
                value: 40,
                title: {
                    offsetCenter: ['0%', '-30%']
                },
                detail: {
                    valueAnimation: true,
                    offsetCenter: ['0%', '-20%']
                }
            }
        ];
        this.option2 = {
            series: [
                {
                    type: 'gauge',
                    startAngle: -180,
                    endAngle: 180,
                    pointer: {
                        show: false
                    },
                    progress: {
                        show: true,
                        overlap: false,
                        roundCap: true,
                        clip: false,
                        itemStyle: {
                            borderWidth: 1,
                            borderColor: '#464646'
                        }
                    },
                    axisLine: {
                        lineStyle: {
                            width: 10
                        }
                    },
                    splitLine: {
                        show: false,
                        distance: 0,
                        length: 10
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        show: false,
                        distance: 50
                    },
                    data: this.gaugeData2,
                    title: {
                        fontSize: 14
                    },
                    detail: {
                        width: 50,
                        height: 20,
                        fontSize: 20,
                        color: 'inherit',
                        borderColor: 'none',
                        borderRadius: 20,
                        borderWidth: 1,
                        formatter: this.num.toFixed(0)
                    }
                }
            ]
        };
        mychart2.setOption(this.option2)
        let mychart3 = this.$echarts.init(document.getElementById('char3'))
        this.option3 = {
            series: [
                {
                    type: 'gauge',
                    axisLine: {
                        lineStyle: {
                            width: 10,
                            color: [
                                [0.3, '#67e0e3'],
                                [0.7, '#37a2da'],
                                [1, '#fd666d']
                            ]
                        }
                    },
                    pointer: {
                        itemStyle: {
                            color: 'inherit'
                        }
                    },
                    splitLine: {
                        distance: -30,
                        length: 20,
                        lineStyle: {
                            color: '#fff',
                            width: 4
                        }
                    },
                    axisLabel: {
                        color: 'inherit',
                        distance: 40,
                        fontSize: 12
                    },
                    detail: {
                        valueAnimation: true,
                        formatter: '{value} %',
                        color: 'inherit'
                    },
                    data: [
                        {
                            value: 70
                        }
                    ]
                }
            ]
        };
        mychart3.setOption(this.option3)
        var mlist = this.tablist.filter(val => val.category == '数码产品')
        var mlist1 = this.tablist.filter(val => val.category == '五金')
        var mlist2 = this.tablist.filter(val => val.category == '日常出行')
        var mlist3 = this.tablist.filter(val => val.category == '衣服')
        var mlist4 = this.tablist.filter(val => val.category == '生活用品')
        var mlist5 = this.tablist.filter(val => val.category == '杂货')
        var mlist6 = this.tablist.filter(val => val.category == '儿童玩具')
        var mlist7 = this.tablist.filter(val => val.category == '厨具')
        var smnum = 0;
        var smnum1 = 0;
        var smnum2 = 0
        var smnum3 = 0;
        var smnum4 = 0;
        var smnum5 = 0
        var smnum6 = 0;
        var smnum7 = 0
        var mslist = []
        var mslist1 = []
        var mslist2 = []
        var mslist3 = []
        var mslist4 = []
        var mslist5 = []
        var mslist6 = []
        var mslist7 = []
        var mpri = 0
        var plist = []
        var mpri1 = 0
        var plist1 = []
        var mpri2 = 0
        var plist2 = []
        var mpri3 = 0
        var mpri4 = 0
        var mpri5 = 0
        var mpri6 = 0
        var mpri7 = 0
        var plist3 = []
        var plist4 = []
        var plist5 = []
        var plist6 = []
        var plist7 = []
        mlist.forEach(val => {
            mslist.push(parseFloat(val.snum) - parseFloat(val.num))
            plist.push((parseFloat(val.snum) - parseFloat(val.num)) * parseFloat(val.price))
        })
        mslist.forEach(val => {
            smnum += val
        })
        plist.forEach(val => {
            mpri += val
        })
        mlist1.forEach(val => {
            mslist1.push(parseFloat(val.snum) - parseFloat(val.num))
            plist1.push((parseFloat(val.snum) - parseFloat(val.num)) * parseFloat(val.price))
        })
        mslist1.forEach(val => {
            smnum1 += val
        })
        mlist2.forEach(val => {
            mslist2.push(parseFloat(val.snum) - parseFloat(val.num))
            plist2.push((parseFloat(val.snum) - parseFloat(val.num)) * parseFloat(val.price))
        })
        mslist2.forEach(val => {
            smnum2 += val
        })
        plist1.forEach(val => {
            mpri1 += val
        })
        plist2.forEach(val => {
            mpri2 += val
        })
        mlist3.forEach(val => {
            mslist3.push(parseFloat(val.snum) - parseFloat(val.num))
            plist3.push((parseFloat(val.snum) - parseFloat(val.num)) * parseFloat(val.price))
        })
        mslist3.forEach(val => {
            smnum3 += val
        })
        plist3.forEach(val => {
            mpri3 += val
        })
        mlist4.forEach(val => {
            mslist4.push(parseFloat(val.snum) - parseFloat(val.num))
            plist4.push((parseFloat(val.snum) - parseFloat(val.num)) * parseFloat(val.price))
        })
        mslist4.forEach(val => {
            smnum4 += val
        })
        plist4.forEach(val => {
            mpri4 += val
        })
        mlist5.forEach(val => {
            mslist5.push(parseFloat(val.snum) - parseFloat(val.num))
            plist5.push((parseFloat(val.snum) - parseFloat(val.num)) * parseFloat(val.price))
        })
        mslist5.forEach(val => {
            smnum5 += val
        })
        plist5.forEach(val => {
            mpri5 += val
        })
        mlist6.forEach(val => {
            mslist6.push(parseFloat(val.snum) - parseFloat(val.num))
            plist6.push((parseFloat(val.snum) - parseFloat(val.num)) * parseFloat(val.price))
        })
        mslist6.forEach(val => {
            smnum6 += val
        })
        plist6.forEach(val => {
            mpri6 += val
        })
        mlist7.forEach(val => {
            mslist7.push(parseFloat(val.snum) - parseFloat(val.num))
            plist7.push((parseFloat(val.snum) - parseFloat(val.num)) * parseFloat(val.price))
        })
        mslist7.forEach(val => {
            smnum7 += val
        })
        plist7.forEach(val => {
            mpri7 += val
        })
        smnum = smnum / 10000
        mpri = mpri / 10000
        mpri1 = mpri1 / 10000
        mpri2 = mpri2 / 10000
        mpri3 = mpri3 / 10000
        mpri4 = mpri4 / 10000
        mpri5 = mpri5 / 10000
        mpri6 = mpri6 / 10000
        mpri7 = mpri7 / 10000
        smnum1 = smnum1 / 10000
        smnum2 = smnum2 / 10000
        smnum3 = smnum3 / 10000
        smnum4 = smnum4 / 10000
        smnum5 = smnum5 / 10000
        smnum6 = smnum6 / 10000
        smnum7 = smnum7 / 10000
        this.main1.push(smnum, smnum1, smnum2, smnum3, smnum4, smnum5, smnum6, smnum7)
        this.main2.push(mpri, mpri1, mpri2, mpri3, mpri4, mpri5, mpri6, mpri7)
        var chartDom = document.getElementById('main');
        var myChart4 = this.$echarts.init(chartDom);
        this.option4 = {
            title: {
                text: "商品数据分析"
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    crossStyle: {
                        color: '#999'
                    }
                }
            },
            toolbox: {
                feature: {
                    dataView: { show: true, readOnly: false },
                    magicType: { show: true, type: ['line', 'bar'] },
                    restore: { show: true },
                    saveAsImage: { show: true }
                }
            },
            legend: {
                data: ['出售数量', '获利金额']
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['数码产品', '五金', '日常出行', '衣服', '生活用品', '杂货', '儿童玩具', '厨具'],
                    axisPointer: {
                        type: 'shadow'
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    name: '出售数量',
                    min: 0,
                    max: 30,
                    interval: 2,
                    axisLabel: {
                        formatter: '{value} 万件'
                    }
                },
                {
                    type: 'value',
                    name: '获利金额',
                    min: 0,
                    max: 150000,
                    interval: 10000,
                    axisLabel: {
                        formatter: '{value} 万'
                    }
                }
            ],
            series: [
                {
                    name: '出售数量',
                    type: 'bar',
                    tooltip: {
                        valueFormatter: function (value) {
                            return value + '万件';
                        }
                    },
                    data: this.main1
                },
                {
                    name: '获利金额',
                    type: 'line',
                    yAxisIndex: 1,
                    tooltip: {
                        valueFormatter: function (value) {
                            return value + '万元';
                        }
                    },
                    data: this.main2
                }
            ]
        };
        myChart4.setOption(this.option4);
        window.onresize = myChart4.resize;
        var chartDom1 = document.getElementById('main2');
        var myChart5 = this.$echarts.init(chartDom1);

        this.option5 = {
            title: {
                text: '前十客户'
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'value',
                boundaryGap: [0, 0.01]
            },
            yAxis: {
                type: 'category',
                data: ['阿里巴巴集团', 'JD京东商城', '网易集团', '美团', '广州希音国际进口有限公司', '上海寻梦信息技术有限公司', '福州朴朴电子商务有限公司', '行吟信息科技（上海）有限公司', '深圳虾皮信息科技有限公司', '上海壹佰米网络科技有限公司']
            },
            series: [
                {
                    name: '批发量',
                    type: 'bar',
                    data: [19325, 23438, 31000, 121594, 134141, 681807, 12312, 43342, 12324, 93742]
                }
            ]
        };

        myChart5.setOption(this.option5);
        window.onresize = myChart5.resize;
    },
}

</script>
<style scoped lang="less">
.container {
    width: 100%;
    height: 760px;

    .top {
        width: 100%;
        height: 295px;
        display: flex;

        .left {
            display: flex;

            .pie {
                height: 295px;
                width: 250px;
                border: 1px rgb(228, 228, 228) solid;

                #char1,
                #char2,
                #char3 {
                    width: 100%;
                    height: 250px;
                }
            }

            .pie :nth-child(1) {
                width: 100%;
                height: 50px;
                border-bottom: 1px solid rgb(233, 233, 233);
                line-height: 50px;
                font-size: 16px;
                font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
            }

        }

        .left :nth-child(1),
        .left :nth-child(2) {
            border-right: none;
        }

        .right {
            width: 100%;
            margin-left: 5px;
            border: 1px solid #e8e8e8;

            .r-t {
                width: 100%;
                height: 50px;
                line-height: 50px;
            }

            .r-b {
                .box {
                    width: 100%;
                    height: 80px;
                    border-top: 1px solid #e8e8e8;
                }
            }
        }
    }

    .bottom {
        width: 100%;
        margin-top: 10px;
        height: 450px;
        display: flex;

        &>div {
            border: 1px solid #e8e8e8;
            height: 100%;
            width: 53%;
            margin-right: 10px;
        }
    }

}

.boxitem {
    &>div {
        margin-left: 10px;
        width: 200px;
        height: 48%;
        line-height: 35px;
        text-align: center;
        border: 1px solid #e8e8e8;

    }
}

.boxitem :nth-child(1) {
    border-bottom: none;
}
</style>