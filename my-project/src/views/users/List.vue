<template>
  <div>
    <el-form class="form-box">
      <el-form-item>
        <el-input class="form-input" clearable v-model="userfrom" placeholder="请搜索你要查找的内容"></el-input>
      </el-form-item>
      <el-button type="primary" icon="el-icon-search" class="btn" @click="send"></el-button>
      <div style="position: relative; left: 850px;">
        <el-button type="primary" class="btn" @click="btn">新增</el-button>
      </div>
    </el-form>

    <el-table :data="tablist.slice((currentPage - 1) * pageSize, currentPage * pageSize)" border class="list-box"
      height="650">
      <el-table-column prop="name" label="用户名"> </el-table-column>
      <el-table-column prop="user" label="账号"> </el-table-column>
      <el-table-column prop="password" label="密码"> </el-table-column>
      <el-table-column prop="adio" label="权限">
        <template slot-scope="scope">
          <el-tag size="small" v-if="scope.row.adio == 1" style="color:red;">超级管理员</el-tag>
          <el-tag size="small" v-if="scope.row.adio == 2">基础管理员</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="primary" plain @click="changeUser(scope.row)">修改</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="block">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage"
        :page-sizes="[10, 5]" :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper"
        :total="tablist.length" align="center">
      </el-pagination>
    </div>
    <el-dialog title="修改用户信息" :visible.sync="dialogVisible" width="60%" :before-close="handleClose">
      <div>
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="用户名" prop="name">
            <el-input type="text" v-model="ruleForm.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="账号" prop="user">
            <el-input v-model="ruleForm.user"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input v-model="ruleForm.password" type="password" show-password></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="checkPass">
            <el-input v-model="ruleForm.checkPass" type="password" show-password></el-input>
          </el-form-item>
          <template>
            <el-radio-group v-model="ruleForm.adio">
              <el-radio :label="2">基础管理员</el-radio>
              <el-radio :label="1">超级管理员</el-radio>
            </el-radio-group>
          </template>
          <el-form-item label="电话" prop="dh">
            <el-input v-model.number="ruleForm.dh" type="number" maxlength='11'
              onkeyup="ruleForm.dh=ruleForm.dh.replace (/ 0-9]/g,'')"></el-input>
          </el-form-item>
          <el-form-item label="地址" prop="name">
            <el-input type="text" v-model="ruleForm.jia" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="详细地址" prop="name" style="width: 100%;">
            <el-input type="text" v-model="ruleForm.ugps" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">关闭</el-button>
      </span>
    </el-dialog>
    <el-dialog title="修改用户信息" :visible.sync="dialogVisibled" width="40%" :before-close="handleClose">
      <el-form :model="ruleForm1" status-icon :rules="rules1" ref="ruleForm1" label-width="100px" class="demo-ruleForm">
        <el-form-item label="密码" prop="checkPass">
          <el-input type="password" v-model="ruleForm1.password" show-password></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input type="password" v-model="ruleForm1.checkPass" show-password></el-input>
        </el-form-item>
        <el-radio-group v-model="ruleForm1.adio">
          <el-radio :label="2">基础管理员</el-radio>
          <el-radio :label="1">超级管理员</el-radio>
        </el-radio-group>
        <el-form-item>
          <el-button type="primary" @click="submitForm1('ruleForm1')">提交</el-button>
          <el-button @click="dialogVisibled = false">取 消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: "List",
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入用户名'));
      } else {
        callback();
      }
    };
    var validatePass1 = (rule, value, callback) => {
      var res = /^[0-9A-Za-z]{4,24}$/
      if (!res.test(value)) {
        callback(new Error('账户需要是4-20位字母或数字组合'));
      } else {
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      var reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{4,20}$/
      if (!reg.test(value)) {
        callback(new Error('密码必须是由4-20位字母+数字组合'))
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass');
        }
        callback();
      }
    };
    var validatePass3 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.ruleForm.password) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    var validatePass4 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入地址'));
      } else {
        callback();
      }
    };
    var validatePass5 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入详细地址'));
      } else {
        callback();
      }
    };
    var validatePass6 = (rule, value, callback) => {
      var regExp = /^1([38][0-9]|4[014-9]|[59][0-35-9]|6[2567]|7[0-8])\d{8}$/
      if (!regExp.test(value)) {
        callback(new Error('请输入正确的手机号'))
      } else {
        callback();
      }
    };
    var validatePas1 = (rule, value, callback) => {
      var reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{4,20}$/
      if (!reg.test(value)) {
        callback(new Error('密码必须是由4-20位字母+数字组合'))
      } else {
        if (this.ruleForm1.checkPass !== '') {
          this.$refs.ruleForm1.validateField('checkPass');
        }
        callback();
      }
    };
    var validatePas2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.ruleForm1.password) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    return {
      userfrom: "",
      tablist: [],
      currentPage: 1, // 当前页码
      total: 20, // 总条数
      pageSize: 5, // 每页的数据条数
      dialogVisible: false,
      dialogVisibled: false,
      radio: '1',
      ruleForm: {
        name: "",//用户名
        user: "",//账号
        password: '',//密码
        checkPass: '',//确认密码
        adio: "",//管理员状态
        jia: '',//地址
        ugps: "",//详细地址
        dh: "",//电话
        imgs: ""
      },
      int: 0,
      list: "",
      rules: {
        name: [
          { validator: validatePass, trigger: 'blur' }
        ],
        user: [
          { validator: validatePass1, trigger: 'blur' }
        ],
        password: [
          { validator: validatePass2, trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePass3, trigger: 'blur' }
        ],
        jia: [
          { validator: validatePass4, trigger: 'blur' }
        ],
        ugps: [
          { validator: validatePass5, trigger: 'blur' }
        ],
        dh: [
          { validator: validatePass6, trigger: 'blur' }
        ]
      },
      ruleForm1: {
        password: '',
        checkPass: '',
        adio: ''
      },
      rules1: {
        password: [
          { validator: validatePas1, trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePas2, trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    send() {
      this.tablist = this.$store.state.add.filter((item) =>
        item.name.includes(this.userfrom)
      );
    },
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done();
        })
        .catch(_ => { });
    },
    btn() {
      this.dialogVisible = true
    },
    //每页条数改变时触发 选择一页显示多少行
    handleSizeChange(val) {
      this.currentPage = 1;
      this.pageSize = val;
    },
    //当前页改变时触发 跳转其他页
    handleCurrentChange(val) {
      this.currentPage = val;
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (!this.isDuplicate) {
            this.dialogVisible = false
            this.ruleForm.adio == 1 ? this.ruleForm.imgs = "https://img1.baidu.com/it/u=1079732749,3668714962&fm=253&fmt=auto&app=138&f=JPEG?w=360&h=360" : this.ruleForm.imgs = "https://tva1.sinaimg.cn/bmiddle/ceeb653ejw1fa0pl0a2tyj20k00k0q4c.jpg"
            this.$store.commit('adduser', this.ruleForm)
            this.ruleForm = {
              name: "",//用户名
              user: "",//账号
              password: '',//密码
              checkPass: '',//确认密码
              adio: "",//管理员状态
              jia: '',//地址
              ugps: "",//详细地址
              dh: "",//电话
            }
          } else {
            this.$message({
              message: '账号已存在',
              type: 'warning'
            });
          }
        } else {
          return false;
        }
      });
    },
    submitForm1(formName1) {
      console.log(this.$store.state.tookin);
      this.$refs[formName1].validate((valid) => {
        if (valid) {
          this.dialogVisibled = false
          this.$store.commit('changeUsers', [this.int, this.ruleForm1])
          if(this.$store.tookin == this.list.user || this.ruleForm1.adio == '2') {
            this.$router.push({
              path:"/home"
            })
          }
          this.$router.go(0)
          this.ruleForm1 = {
            password: '',
            checkPass: '',
            adio: ''
          }

        } else {
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    changeUser(val) {
      this.dialogVisibled = true
      this.ruleForm1.user = val.user
      this.ruleForm1.adio = val.adio
      this.list = val
      this.int = this.$store.state.add.findIndex(val => val.user == this.ruleForm1.user)
    }
  },
  computed: {
    isDuplicate() {
      // 判断输入的值是否已经存在于 values 数组中
      return this.$store.state.add.some(item => item.user == this.ruleForm.user)
    }
  },
  mounted() {
    this.tablist = this.$store.state.add;
  },
  updated() {
    if (this.userfrom == "") {
      this.tablist = this.$store.state.add;
    }
  },
};
</script>
<style scoped lang="less">
.list-box {
  width: 100%;
  text-align: center;
}

.el-dialog {
  .el-form {
    display: flex;
    flex-wrap: wrap;

    .el-radio-group {
      width: 100%;
      height: 40px;
      position: relative;
      left: 100px;
    }

    .el-input {
      width: 300px;
    }
  }
}

.form-box {
  width: 100%;
  display: flex;
}

.block {
  width: 80%;
  position: absolute;
  bottom: 10px;
  margin: 0 auto;
}

.form-input {
  width: 200px;
}

.btn {
  width: 80px;
  height: 40px;
  margin-left: 5px;
}

.pager {
  position: absolute;
  right: 20px;
}
</style>
  