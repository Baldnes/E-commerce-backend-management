<template>
  <div class="div1">

    <!-- 上 -->

    <div class="top1">

      <!-- 左 -->

      <div class="top-left">

        <div class="top-left-1">

          <div class="top-left-1a">

            <div id="main" class="top-left-ech"></div>

            <p>今日访问量完成率</p>

          </div>

          <div class="top-left-1a">

            <div id="main2" class="top-left-ech"></div>

            <p>昨日访问量完成率</p>

          </div>

          <div class="top-left-1a">

            <div id="main3" class="top-left-ech"></div>

            <p>本周访问量完成率</p>

          </div>

          <div class="top-left-1b">

            <div id="main4" class="top-left-ech"></div>

            <p>本月访问量完成率</p>

          </div>

        </div>

        <div class="top-left-2">

            <el-carousel :interval="4000" type="card" height="200px">
              <el-carousel-item v-for="item in 3" :key="item">
              </el-carousel-item>
            </el-carousel>

        </div>

      </div>

      <!-- 右 -->

      <div class="top-right">

        <div class="top-right-1">

          <div class="top-right-1a"></div>

          <span class="span1">待处理事务</span>

          <div class="top-right-1b">

            <div>

              <span>{{d}}</span><br />

              <span>待付款</span><br />

              <span class="el-icon-bank-card" style="font-size: 35px; margin-top: 3%"></span>

            </div>

            <div>

              <span>{{ e }}</span><br />

              <span>待发货</span><br />

              <span class="el-icon-truck" style="font-size: 35px; margin-top: 3%"></span>

            </div>

            <div>

              <span>{{f}}</span><br />

              <span>退货/售后</span><br />

              <span class="el-icon-service" style="font-size: 35px; margin-top: 3%"></span>

            </div>

            <div>

              <span>0</span><br />

              <span>物流异常</span><br />

              <span class="el-icon-warning-outline" style="font-size: 35px; margin-top: 3%"></span>

            </div>

          </div>

        </div>

        <div class="top-right-2">

          <div class="top-right-2a"></div>

          <span class="span2">商品概况</span>

          <div class="top-right-2b">

            <div>

              <span>{{ a }}</span><br />

              <span>全部商品</span><br />

              <span class="el-icon-menu" style="font-size: 35px; margin-top: 3%"></span>

            </div>

            <div>

              <span>{{ b }}</span><br />

              <span>已上架</span><br />

              <span class="el-icon-sell" style="font-size: 35px; margin-top: 3%"></span>

            </div>

            <div>

              <span>{{ c }}</span><br />

              <span>已下架</span><br />

              <span class="el-icon-sold-out" style="font-size: 35px; margin-top: 3%"></span>

            </div>

            <div>

              <span>0</span><br />

              <span>商品异常</span><br />

              <span class="el-icon-warning" style="font-size: 35px; margin-top: 3%"></span>

            </div>

          </div>

        </div>

      </div>

    </div>

    <!-- 下 -->

    <div class="bottom1">

      <div class="bottom2">

        <div class="bottom2-a">

          <span>新增用户(今日)</span><br />

          <span style="font-size: 22px; font-weight: bolder">87</span><br />

          <span>昨日 +3.75%</span><br />

          <span>累计日活(今日)</span><br />

          <span style="font-size: 22px; font-weight: bolder">467</span><br />

          <span>同比 +1.43%</span><br />

        </div>

        <div class="bottom2-a">

          <span>启动次数(今日)</span><br />

          <span style="font-size: 22px; font-weight: bolder">1262</span><br />

          <span>同比 +1.45%</span><br />

          <span>活跃用户(今日)</span><br />

          <span style="font-size: 22px; font-weight: bolder">504</span><br />

          <span>同比 +1.43%</span><br />

        </div>

      </div>

      <div class="bottom3">

        <div class="bottom3-a">

          <span>新增订单(今日)</span><br />

          <span style="font-size: 22px; font-weight: bolder">506</span><br />

          <span>同比 -3.75%</span><br />

          <span>新用户(7日平均)</span><br />

          <span style="font-size: 22px; font-weight: bolder">23.3%</span><br />

          <span>同比 -0.36%</span><br />

        </div>

        <div class="bottom3-a">

          <span>客单价(7日平均)</span><br />

          <span style="font-size: 22px; font-weight: bolder">1857</span><br />

          <span>同比 -1.43%</span><br />

          <span>使用时长(7日平均)</span><br />

          <span style="font-size: 22px; font-weight: bolder">00:15:05</span><br />

          <span>同比 +0.40%</span><br />

        </div>

      </div>

      <div class="bottom4">

        <div class="bottom4-a">

          <span>近7日总活跃用户</span><br />

          <span style="font-size: 22px; font-weight: bolder">8799</span><br />

          <span>同比 -3.75%</span><br />

          <span>累计用户</span><br />

          <span style="font-size: 22px; font-weight: bolder">2288806</span><br />

        </div>

        <div class="bottom4-a">

          <span>活跃用户(7日平均)</span><br />

          <span style="font-size: 22px; font-weight: bolder">25654</span><br />

          <span>同比 -1.45%</span><br />

          <span>总崩溃率</span><br />

          <span style="font-size: 22px; font-weight: bolder">0.45%</span><br />

        </div>

      </div>

    </div>

  </div>
</template>

<script>

export default {

  name: "Page2",



  data() {

    return {
      a: "",

      c: "",

      b: "",
      d:"",
      e:"",
      f:""

    };

  },



  mounted() {
    this.a = parseFloat(this.$store.state.myArray.length) + parseFloat(this.$store.state.deletedArr.length)
    this.b = parseFloat(this.$store.state.myArray.length)
    this.c = parseFloat(this.$store.state.deletedArr.length)
    this.d = this.$store.state.dingList.filter(val => val.ding == "0").length
    this.e = this.$store.state.dingList1.filter(val => val.wu == '0').length
    this.f = this.$store.state.dingList.filter(val => val.ding == "2" || val.ding == "3").length 
    var myChart = this.$echarts.init(document.getElementById("main"));

    var myChart2 = this.$echarts.init(document.getElementById("main2"));

    var myChart3 = this.$echarts.init(document.getElementById("main3"));

    var myChart4 = this.$echarts.init(document.getElementById("main4"));

    const pieConf = {

      title: {

        text: "50%",

        left: "center",

        top: 50,

        textStyle: {

          color: "#1890fe",

        },

      },

      visualMap: {

        show: false,

      },

      series: [

        {

          type: "pie",

          //环形显示饼状图，实际上显示的是50-80之间的部分

          //上限不建议设置为100，echarts自带动画效果，设置为100动画效果很丑

          radius: ["50%", "80%"],

          center: ["50%", "50%"],

          data: [

            //itemSyle是单项的背景颜色设置。

            { value: 50, itemStyle: { color: " #FF8800" } },

            { value: 50, itemStyle: { color: "#DCDCDC" } },

          ],

          label: {

            //将视觉引导图关闭

            show: false,

          },

          itemStyle: {

            //设置的是每项之间的留白

            // borderWidth: 2,

            borderColor: "#F5F5F5",

          },

          // 初始化echarts的动画效果

          animationType: "scale",

          // animationEasing: "elasticOut",

          animationDelay: function (idx) {

            return Math.random() * 200;

          },

        },

      ],

    };

    const pieConf2 = {

      title: {

        text: "65%",

        left: "center",

        top: 50,

        textStyle: {

          color: "#1890fe",

        },

      },

      visualMap: {

        show: false,

      },

      series: [

        {

          type: "pie",

          //环形显示饼状图，实际上显示的是50-80之间的部分

          //上限不建议设置为100，echarts自带动画效果，设置为100动画效果很丑

          radius: ["50%", "80%"],

          center: ["50%", "50%"],

          data: [

            //itemSyle是单项的背景颜色设置。

            { value: 65, itemStyle: { color: "#D87093" } },

            { value: 35, itemStyle: { color: "#DCDCDC" } },

          ],

          label: {

            //将视觉引导图关闭

            show: false,

          },

          itemStyle: {

            //设置的是每项之间的留白

            // borderWidth: 2,

            borderColor: "#F5F5F5",

          },

          // 初始化echarts的动画效果

          animationType: "scale",

          // animationEasing: "elasticOut",

          animationDelay: function (idx) {

            return Math.random() * 200;

          },

        },

      ],

    };

    const pieConf3 = {

      title: {

        text: "70%",

        left: "center",

        top: 50,

        textStyle: {

          color: "#1890fe",

        },

      },

      visualMap: {

        show: false,

      },

      series: [

        {

          type: "pie",

          //环形显示饼状图，实际上显示的是50-80之间的部分

          //上限不建议设置为100，echarts自带动画效果，设置为100动画效果很丑

          radius: ["50%", "80%"],

          center: ["50%", "50%"],

          data: [

            //itemSyle是单项的背景颜色设置。

            { value: 70, itemStyle: { color: " #B94FFF" } },

            { value: 30, itemStyle: { color: "#DCDCDC" } },

          ],

          label: {

            //将视觉引导图关闭

            show: false,

          },

          itemStyle: {

            //设置的是每项之间的留白

            // borderWidth: 2,

            borderColor: "#F5F5F5",

          },

          // 初始化echarts的动画效果

          animationType: "scale",

          // animationEasing: "elasticOut",

          animationDelay: function (idx) {

            return Math.random() * 200;

          },

        },

      ],

    };

    const pieConf4 = {

      title: {

        text: "50%",

        left: "center",

        top: 50,

        textStyle: {

          color: "#1890fe",

        },

      },

      visualMap: {

        show: false,

      },

      series: [

        {

          type: "pie",

          //环形显示饼状图，实际上显示的是50-80之间的部分

          //上限不建议设置为100，echarts自带动画效果，设置为100动画效果很丑

          radius: ["50%", "80%"],

          center: ["50%", "50%"],

          data: [

            //itemSyle是单项的背景颜色设置。

            { value: 50, itemStyle: { color: " #00DD00" } },

            { value: 50, itemStyle: { color: "#DCDCDC" } },

          ],

          label: {

            //将视觉引导图关闭

            show: false,

          },

          itemStyle: {

            //设置的是每项之间的留白

            // borderWidth: 2,

            borderColor: "#F5F5F5",

          },

          // 初始化echarts的动画效果

          animationType: "scale",

          // animationEasing: "elasticOut",

          animationDelay: function (idx) {

            return Math.random() * 200;

          },

        },

      ],

    };

    myChart.setOption(pieConf);

    myChart2.setOption(pieConf2);

    myChart3.setOption(pieConf3);

    myChart4.setOption(pieConf4);

  },



  methods: {},

};

</script>

<style lang="less" scoped>
.div1 {

  width: 100%;

  height: 763px;

  background-color: #f6f6f6;

}

.top1 {

  background-color: #f6f6f6;

  width: 100%;

  height: 54%;

  margin-bottom: 1%;

  display: flex;

  .top-left {

    background-color: #f6f6f6;

    width: 58%;

    height: 100%;

    margin-right: 1%;

    // margin-left: 1%;

    .top-left-1 {

      background-color: #f6f6f6;

      width: 100%;

      height: 35%;

      margin: 0 0 0.5% 0;

      display: flex;

      .top-left-1a {

        background-color: #fffffc;

        width: 23.5%;

        margin-right: 2%;

        height: 100%;

        text-align: center;

        p {

          color: #7a7b7f;

        }

      }

      .top-left-1b {

        background-color: #fffffc;

        width: 23.5%;

        height: 100%;

        text-align: center;

        p {

          color: #7a7b7f;

        }

      }

    }

    .top-left-2 {

      background-color: #fffffc;

      width: 100%;

      height: 64.5%;

    }

  }



  .top-left-ech {

    width: 100%;

    height: 80%;

  }

  .top-right {

    background-color: #f6f6f6;

    width: 42%;

    height: 100%;

    .top-right-1 {

      width: 100%;

      height: 45%;

      background-color: #fffffc;

      margin-bottom: 1%;

      display: flex;

      .top-right-1a {

        width: 1%;

        height: 23%;

        background-image: linear-gradient(135deg, #f0ff00 10%, #58cffb 100%);

        margin-left: 2%;

      }

      .span1 {

        margin-top: 2%;

        margin-left: 3%;

        color: #7a7b7f;

      }

      .top-right-1b {

        margin-top: 5px;
        width: 30%;

        height: 140px;

        border-radius: 30px;

        background-color: #f0a89a;

        position: absolute;

        top: 100px;

        right: 2.5%;

        display: flex;

        div {

          margin-top: 3%;

          width: 25%;

          height: 90%;

          text-align: center;

          color: #fffffc;

          font-size: 22px;

          line-height: 150%;

          font-weight: 900;

        }

      }

    }



    .top-right-2 {

      width: 100%;

      height: 54%;

      background-color: #fffffc;

      display: flex;

      .top-right-2a {

        width: 1%;

        height: 23%;

        background-image: linear-gradient(135deg, #f0ff00 10%, #58cffb 100%);

        margin-left: 2%;

      }

      .span2 {

        margin-top: 3%;

        margin-left: 3%;

        color: #7a7b7f;

      }

      .top-right-2b {

        margin-top: 5px;
        width: 30%;

        height: 150px;

        border-radius: 30px;

        background-color: #6eacf2;

        position: absolute;

        top: 300px;

        right: 2.5%;

        display: flex;

        div {

          margin-top: 3%;

          width: 25%;

          height: 90%;

          text-align: center;

          color: #fffffc;

          font-size: 22px;

          line-height: 170%;

          font-weight: 900;

        }

      }

    }

  }

}



.bottom1 {

  width: 100%;

  height: 45%;

  background-color: beige;

  display: flex;

}

.bottom2 {

  width: 30%;

  height: 80%;

  background-image: linear-gradient(135deg, #0396ff 10%, #a6cbe5 100%);

  border-radius: 20px;

  margin-top: 2.5%;

  margin-left: 2.5%;

  display: flex;

  .bottom2-a {

    width: 40%;

    margin-top: 10px;

    margin-left: 10%;

    line-height: 40px;

    font-size: 18px;

    color: white;

    // background-color: #475669;

  }

}

.bottom3 {

  width: 30%;

  height: 80%;

  background-image: linear-gradient(135deg, #d939cd 10%, #eac8e2 100%);

  border-radius: 20px;

  margin-top: 2.5%;

  margin-left: 2.5%;

  display: flex;

  .bottom3-a {

    width: 40%;

    margin-top: 10px;

    margin-left: 10%;

    line-height: 40px;

    font-size: 18px;

    color: white;

    // background-color: #475669;

  }

}

.bottom4 {

  width: 30%;

  height: 80%;

  background-image: linear-gradient(135deg, #c346c2 10%, #e5c4ee 100%);

  border-radius: 20px;

  margin-top: 2.5%;

  margin-left: 2.5%;

  display: flex;

  .bottom4-a {

    width: 40%;

    margin-top: 10px;

    margin-left: 10%;

    line-height: 40px;

    font-size: 18px;

    color: white;

    // background-color: #475669;

  }

}



.el-carousel__item h3 {

  color: #475669;

  font-size: 14px;

  opacity: 0.75;

  line-height: 200px;

  margin: 0;

}



  
  .el-carousel__item:nth-child(2n) {
    background-image: url('../../assets/img/2.png');
    background-size: 100% 100%;
  }
  .el-carousel__item:nth-child(2n+1) {
    background-image: url('../../assets/img/1.png');
    background-size: 100% 100%;
  }
</style>
