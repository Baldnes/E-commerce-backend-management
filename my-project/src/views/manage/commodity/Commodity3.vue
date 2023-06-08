<template>
  <div class="container">
    <div class="con">
      <div class="top">
        <span>商品名称</span>
        <el-input v-model="name" />
      </div>
      <div class="top-t">
        <select name="" id="set" v-model="category">
          <option value="数码产品">数码产品</option>
          <option value="五金">五金</option>
          <option value="日常出行">日常出行</option>
          <option value="衣服">衣服</option>
          <option value="生活用品">生活用品</option>
          <option value="杂货">杂货</option>
          <option value="儿童玩具">儿童玩具</option>
          <option value="厨具">厨具</option>
        </select>
      </div>
    </div>
    <div class="price">
      金额/元
      <el-input v-model="price"></el-input>
    </div>
    <div>
      上架数量<el-input-number v-model="num" :min="1" :max="100000" label="上架数量"></el-input-number>
    </div>
    <div>
      <p>商品简介</p>
      <textarea name="" id="" cols="80" rows="20" style="margin-top: 10px;" v-model="brief">
      </textarea>
    </div>
    <div>
      <el-button :plain="true" @click="open">添加商品</el-button>
    </div>
  </div>
</template>
<script>
import { Message } from 'element-ui';
import {mapState} from "vuex"
export default {
  name: "Commodity3",
  data() {
    return {
      name: "",
      price: '',
      brief: "",
      category: "数码产品",
      date: "",
      num:1
    }
  },
  methods: {
    open() {
      if(this.name == "" || this.price == "" || this.brief == "") {
        this.$message.error("请完善商品信息")
      } else {
        const time = new Date()
      const y = time.getFullYear() // 可返回一个表示年份的 4 位数字
      const m = time.getMonth() + 1 < 10 ? '0' + (time.getMonth() + 1) : time.getMonth() + 1  // 可返回表示月份的数字。返回值是 0（一月） 到 11（十二月） 之间的一个整数 // 注意： 一月为 0, 二月为 1, 以此类推。
      const d = time.getDate() < 10 ? '0' + time.getDate() : time.getDate()
      var tiem = `${y}-${m}-${d}`
      let newArr = {
        date: tiem,
        name: this.name,
        category: this.category,
        brief: this.brief,
        price: Number(this.price).toFixed(2),
        snum:this.num
      }
      this.$store.commit('addmanage',newArr)
      this.$message({
          message: '上架成功',
          type: 'success'
        });
        this.name = ""
        this.price = ""
        this.brief = ""
        this.date = ""
        this.category = "婴幼儿"
      }
    }
  }
};
</script>
<style scoped lang="less">
.container {
  width: 100%;
  height: 700px;
  padding-left: 40px;

  &>div {
    margin-top: 20px;
  }

  .con {
    display: flex;

    // justify-content: space-around;
    .top {
      width: 400px;

      .el-input {
        width: 300px;
      }
    }

    .top-t {
      width: 100px;
      line-height: 40px;
    }
  }

  .price {
    .el-input {
      width: 200px;
      position: relative;
      left: 10px;
    }
  }
}
#set {
  width: 80px;
  height: 40px;
}
.el-input-number {
  position: relative;
  left: 5px;
}
</style>