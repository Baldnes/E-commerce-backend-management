<template>
  <div>
    <el-table :data="tablist.slice((currentPage - 1) * pageSize, currentPage * pageSize)" width="1030" height="618">
      <el-table-column v-for="(item, index) in tabs" :key="index" :fixed="item.fixed" :prop="item.prop"
        :label="item.label" :width="item.wid">
      </el-table-column>
      <el-table-column prop="price" label="金额" width="180">
        <template slot-scope="scope">
          <div v-if="scope.row.price" style="color:red;">{{ scope.row.price }}</div>
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="50">
        <template slot-scope="scope">
          <el-tooltip class="item" effect="dark" content="上架商品" placement="bottom">
            <el-popconfirm title="确认重新上架嘛？" confirm-button-text='确认' cancel-button-text='取消' icon="el-icon-info"
              icon-color="green" @confirm="deleteItem(scope)">
              <el-button slot="reference" :plain="true" type="text" style="width: 40px;"><i
                  class="el-icon-share"></i></el-button>
            </el-popconfirm>
          </el-tooltip>
        </template>
      </el-table-column>
      <el-table-column fixed="right" width="120">
        <template slot-scope="scope">
          <el-tooltip class="item" effect="dark" content="删除商品" placement="bottom">
            <el-popconfirm title="该操作会永久删除该商品" confirm-button-text='确认' cancel-button-text='取消' icon="el-icon-info"
              icon-color="red" @confirm="cleanUp(scope)">
              <el-button slot="reference" :plain="true" type="text" style="color: red;width: 40px;"><i
                  class="el-icon-delete"></i></el-button>
            </el-popconfirm>
          </el-tooltip>

        </template>
      </el-table-column>
    </el-table>
    <div class="block">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage"
        :page-sizes="[10, 5]" :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper"
        :total="deletedArr.length" align="center">
      </el-pagination>
    </div>
    <div class="search">
      <el-input placeholder="请输入需要搜索的商品名称" v-model="keyword"></el-input>
      <el-button @click="filterItems()">搜索</el-button>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  name: "Commodity2",
  methods: {
    filterItems() {
      this.tablist = this.deletedArr.filter(val => {
        return val.name.includes(this.keyword);
      })
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
    deleteItem(val) {
      this.$store.commit('deleteRes', val.row.name),// 提交 mutation 删除元素
        this.$store.commit('addItems', val.row),
        this.tablist = this.deletedArr.filter(val => {
          return val.name.includes(this.keyword);
        })
      let total = Math.ceil((this.tablist.length) / this.pageSize)
      this.currentPage = this.currentPage > total ? total : this.currentPage
      this.currentPage = this.currentPage < 1 ? 1 : this.currentPage
      this.$message({
        message: '上架成功',
        type: 'success'
      });
    },
    cleanUp(val) {
      this.$store.commit('clearItem', val.row.name),
        this.tablist = this.deletedArr.filter(val => val.name.includes(this.keyword) || val.brief.includes(this.keyword))
      this.$message.error('删除成功');
      let total = Math.ceil((this.tableData.length) / this.pageSize)
      console.log(total);
      this.currentPage = this.currentPage > total ? total : this.currentPage
      this.currentPage = this.currentPage < 1 ? 1 : this.currentPage
    }
  },
  data() {
    return {
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
          wid: '220',
          fixed: false
        },
        {
          prop: "category",
          label: "类别",
          wid: '150',
          fixed: false
        },
        {
          prop: "brief",
          label: "商品简介",
          wid: '320',
          fixed: false
        }
      ],
      currentPage: 1, // 当前页码
      total: 20, // 总条数
      pageSize: 5, // 每页的数据条数
      tablist: [],
      keyword: ""
    };
  },
  computed: {
    ...mapState({
      deletedArr: state => state.deletedArr, // 获取 vuex 中的数组
    })
  },
  mounted() {
    this.tablist = this.deletedArr
  },
  updated() {
    if (this.keyword == "") {
      this.tablist = this.deletedArr
    }
  },
};
</script>
<style scoped lang="less">
.el-table {
  margin-top: 40px;
  overflow-x: auto;
}

::-webkit-scrollbar {
  display: none;
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
</style>
