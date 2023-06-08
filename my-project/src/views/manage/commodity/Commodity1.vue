<template>
  <div>
    <el-table :data="tablist.slice((currentPage - 1) * pageSize, currentPage * pageSize)" width="1030" height="618">
      <el-table-column v-for="(item, index) in tabs" :key="index" :fixed="item.fixed" :prop="item.prop"
        :label="item.label" :width="item.wid">
      </el-table-column>
      <el-table-column prop="price" label="金额" width="180">
        <template slot-scope="scope">
          <div v-if="scope.row.price" style="color:red;font-weight:bold;">{{ scope.row.price }}</div>
        </template>
      </el-table-column>
      <el-table-column fixed="right" width="50" label="操作">
        <template slot-scope="scope">
          <el-tooltip class="item" effect="dark" content="修改商品信息" placement="bottom">
            <el-button :plain="true" type="text" @click="change(scope)" class="btn">
              <i class="el-icon-edit"></i>
            </el-button>
          </el-tooltip>

        </template>
      </el-table-column>
      <el-table-column fixed="right" width="120">
        <template slot-scope="scope">
          <el-tooltip class="item" effect="dark" content="下架商品" placement="bottom">
            <el-popconfirm title="确认下架嘛？" confirm-button-text='确认' cancel-button-text='取消' icon="el-icon-info"
            icon-color="red" @confirm="deleteItem(scope)">
            <el-button slot="reference" :plain="true" type="text" style="color: red;" class="btn"><i
                class="el-icon-delete"></i></el-button>
          </el-popconfirm>
          </el-tooltip>
          
        </template>
      </el-table-column>
    </el-table>
    <div class="block">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage"
        :page-sizes="[10, 5]" :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper"
        :total="tablist.length" align="center">
      </el-pagination>
    </div>
    <div class="search">
      <el-input placeholder="请输入需要搜索的商品名称" v-model="keyword"></el-input>
      <el-button @click="filterItems()">搜索</el-button>
    </div>
    <el-dialog title="修改商品" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
      <div>
        商品名称：<el-input v-model="changeName"></el-input>
        <div style="margin-top: 20px;">
          商品价钱：<el-input v-model="changePrice"></el-input>
        </div>
        <div class="changeitem">
          <div>商品简介：</div>
          <textarea name="" id="" cols="30" rows="10" v-model="changeText"></textarea>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="sends">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  name: "Commodity1",
  methods: {
    deleteItem(val) {
      this.$store.commit('DELETE_ITEM', val.row.name),// 提交 mutation 删除元素
        this.$store.commit('flot', val.row)//提交删除的元素
      this.tablist = this.myArray.filter(val => {
        return val.name.includes(this.keyword);
      })
      this.$message.error('下架成功');
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
    filterItems() {
      this.tablist = this.myArray.filter(val => 
         val.name.includes(this.keyword) || val.brief.includes(this.keyword))
    },
    change(val) {
      this.dialogVisible = true
      this.changeName = val.row.name
      this.changePrice = val.row.price
      this.changeText = val.row.brief
      this.changeDate = val.row.date
      this.changeCategory = val.row.category
      this.num = val.row.num
      this.snum = val.row.snum
      this.item = val.row
      this.int = this.myArray.findIndex(item => item.name == val.row.name)
    },
    sends() {
      if (this.name == "" || this.changePrice == "" || this.changeText == "") {
        this.$message.error('请完善商品信息');
      } else {
        this.dialogVisible = false
        this.$store.commit('changeItems',[this.int,this.changeDate,this.changeCategory,this.changeName,this.changePrice,this.changeText,this.num,this.snum])
      }
    },
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done();
        })
        .catch(_ => { });
    }
  },
  updated() {
    if (this.keyword == "") {
      this.tablist = this.myArray
    }
  },
  data() {
    return {
      dialogVisible: false,
      item:"",
      num:"",
      snum:"",
      tabs: [
        {
          prop: "date",
          label: "日期",
          wid: '250',
          fixed: true
        },
        {
          prop: "name",
          label: "商品名称",
          wid: '250',
          fixed: false
        },
        {
          prop: "category",
          label: "类别",
          wid: '180',
          fixed: false
        },
        {
          prop: "brief",
          label: "商品简介",
          wid: '350',
          fixed: false
        }
      ],
      currentPage: 1, // 当前页码
      total: 20, // 总条数
      pageSize: 5, // 每页的数据条数
      keyword: "", //搜索商品名称
      tablist: [],
      changeName: "",
      changePrice: "",
      changeText: "",
      changeDate: "",
      changeCategory: "",
      int: null
    };
  },
  computed: {
    ...mapState({
      myArray: state => state.myArray, // 获取 vuex 中的数组
    })
  },
  mounted() {
    this.tablist = this.myArray
  }
};
</script>
<style scoped lang="less">
.btn {
  border: none;
  width: 40px;
}

.el-table {
  margin-top: 40px;
}

.block {
  margin-top: 10px;
}

.search {
  position: absolute;
  top: 0;
}

.el-input {
  width: 250px;
}

.changeitem {
  display: flex;
  flex-wrap: nowrap;
  margin-top: 20px;
}
</style>
