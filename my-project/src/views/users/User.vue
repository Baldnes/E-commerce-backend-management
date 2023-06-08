<template>
  <div class="user_div1">

    <div class="user_div2">

      <img :src="imgs" alt="" />

      <el-descriptions title="个人信息" direction="vertical" :column="4" :contentStyle="CS" border
        style="margin: 20px 0 0 0; font-size: 20px">

        <el-descriptions-item label="用户名">{{

          mma.uname

        }}</el-descriptions-item>

        <el-descriptions-item label="账号">{{

          mma.ugin

        }}</el-descriptions-item>

        <el-descriptions-item label="权限">

          <el-tag size="medium" style="font-size: 20px">{{

            mma.uvip

          }}</el-tag>

        </el-descriptions-item>

        <el-descriptions-item label="居住地">{{

          mma.ujia

        }}</el-descriptions-item>



        <el-descriptions-item label="联系地址" :span="2">{{

          mma.ugps

        }}</el-descriptions-item>



        <el-descriptions-item label="联系电话">{{

          mma.udh

        }}</el-descriptions-item>


      </el-descriptions>

      <el-button type="primary" class="button" @click="dialogFormVisible = true" round>编辑个人信息</el-button>
      <el-button type="danger" style="width: 100px;height: 40px;" round @click="xiao">注销账号</el-button>

      <el-dialog title="修改个人信息" :visible.sync="dialogFormVisible">

        <el-form :model="mmc">

          <el-form-item label="用户名" :label-width="formLabelWidth">

            <el-input class="elc" v-model="mmc.cname" autocomplete="off" style=""></el-input>

          </el-form-item>

          <el-form-item label="居住地" :label-width="formLabelWidth">

            <el-input class="elc" v-model="mmc.cjia" autocomplete="off"></el-input>

          </el-form-item>

          <el-form-item label="联系地址" :label-width="formLabelWidth">

            <el-input class="elc" v-model="mmc.cgps" autocomplete="off"></el-input>

          </el-form-item>

          <el-form-item label="联系电话" :label-width="formLabelWidth">

            <el-input class="elc" v-model="mmc.cdh" autocomplete="off" onKeyUp="value=value.replace(/[^\d]/g,'')"
              oninput="if(value.length>11)value=value.slice(0,11)"></el-input>

          </el-form-item>

        </el-form>

        <div slot="footer" class="dialog-footer">

          <el-button @click="dialogFormVisible = false" round>取 消</el-button>

          <el-button type="primary" @click="

            dialogFormVisible = false;

          qcc();

          " round>确 定</el-button>

        </div>

      </el-dialog>
      <el-dialog title="提示" :visible.sync="dialogFormVisibled" width="30%">
        <span>此账号将被注销</span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisibled = false">取 消</el-button>
          <el-button type="primary" @click="senditem">确 定</el-button>
        </span>
      </el-dialog>

    </div>

  </div>
</template>

<script>

export default {

  name: "User",

  data() {

    return {

      imgs: "",

      dialogFormVisible: false,
      dialogFormVisibled: false,

      formLabelWidth: "120px",



      mma: {

        uname: "",

        ugin: "",

        ujia: "",

        uvip: "",

        ugps: "",

        udh: "",

      },

      add: [],
      int:'',

      e: this.$store.state.bbc,

      mmc: {

        cname: "",

        cjia: "",

        cgps: " ",

        cdh: "",

      },

      CS: {

        // 'text-align': 'center',  //文本居中

        "min-width": "250px", //最小宽度

        // "word-break": "break-all", //过长时自动换行

      },

    };

  },

  mounted() {
    this.imgs = this.$store.state.add[this.$store.state.bbc].imgs
    this.add = this.$store.state.add;

    this.mma.uname = this.add[this.e].name;

    this.mma.ugin = this.add[this.e].user;

    this.mma.ujia = this.add[this.e].jia;

    this.mma.ugps = this.add[this.e].ugps;

    this.mma.udh = this.add[this.e].dh;

    this.mmc.cdh = this.mma.udh;

    this.mmc.cname = this.mma.uname;

    this.mmc.cjia = this.mma.ujia;

    this.mmc.cgps = this.mma.ugps;

    this.mmc.cdh = this.mma.udh;

    if (this.add[this.e].adio == 1) {

      this.mma.uvip = "超级管理员";

    } else {

      this.mma.uvip = "基础管理员";

    }

  },

  methods: {
    xiao() {
      this.dialogFormVisibled = true
    },
    senditem() {
      this.dialogFormVisibled = false
      this.int = this.$store.state.add.findIndex(val => val.user == this.mma.ugin)
      this.$store.commit('xiaoitem',this.int)
      this.$router.push({
      path:'/'
    })
    },
    qcc() {

      if (

        this.mmc.cname != "" &&

        this.mmc.cjia != "" &&

        this.mmc.cgps != "" &&

        this.mmc.cdh != ""

      ) {

        if (this.mmc.cdh.length < 11) {

          this.$message({

            message: "警告,您手机号错误",

            type: "warning",

          });

        } else {

          this.mma.uname = this.mmc.cname;

          this.mma.ujia = this.mmc.cjia;

          this.mma.ugps = this.mmc.cgps;

          this.mma.udh = this.mmc.cdh;

          this.add[this.e].name = this.mma.uname;

          this.add[this.e].jia = this.mma.ujia;

          this.add[this.e].ugps = this.mma.ugps;

          this.add[this.e].dh = this.mma.udh;

          console.log(this.add);

          console.log(this.mma.udh.length);

          this.$store.commit("update", this.add);

          console.log(this.$store.state.add);

        }

      }

    },

  },

};

</script>

<style lang="less" scoped>
* {

  margin: 0;

  padding: 0;

}

.user_div1 {

  display: flex;

  width: 98%;

  height: 85vh;

  border: 3px solid #eaeaea;

  box-shadow: 10px 10px 5px #888888;

  font-size: 20px;

}

.user_div2 {

  border: 3px double #eaeaea;

  width: 97.5%;

  height: 80vh;

  margin: 15px 0 0 15px;

  img {

    margin-right: 40px;

    width: 180px;

    height: 180px;

    margin-left: 45%;

    border-radius: 50%;

  }

}

.el-calendar {

  width: 100%;

  height: 100%;

}

.button {

  margin: 80px 0 0 0;

  margin-left: 45%;

}

.elc {

  line-height: 60px;

}

.el-form {

  height: 240px;

}
</style> 