<template>
    <div>
        <div class="search">
            <el-input placeholder="请输入需要搜索的商品名称" v-model="keyword"></el-input>
            <el-button @click="filterItems()" style="margin-left: 10px;">搜索</el-button>
        </div>
        <el-table :data="tableData.slice((currentPage - 1) * pageSize, currentPage * pageSize)" border width="1030"
            height="630">
            <el-table-column fixed prop="name" label="商品名称" width="300">
            </el-table-column>
            <el-table-column prop="brief" label="商品简介" width="300">
            </el-table-column>
            <el-table-column prop="snum" label="商品上架数量" width="170">
            </el-table-column>
            <el-table-column prop="num" label="商品剩余数量" width="170">
            </el-table-column>
            <el-table-column label="状态" width="120" class="box">
                <template slot-scope="scope">
                    <div v-if="scope.row.num != '0'" style="color:red;font-weight:bold;">有货</div>
                    <div v-if="scope.row.num == '0'" style="color:rgb(85, 85, 85);font-weight:bold;">无货</div>
                </template>
            </el-table-column>
            <el-table-column fixed="right" label="操作" width="200">
                <template slot-scope="scope">
                    <el-button type="text" size="small" @click="additem(scope.row)">增加库存</el-button>
                </template>
            </el-table-column>
        </el-table>
        <div class="block">
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage"
                :page-sizes="[10, 5]" :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper"
                :total="tableData.length" align="center">
            </el-pagination>
        </div>
        <el-dialog title="增加库存数量" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
            上架数量：<el-input-number v-model="num" :min="1" :max="10000" label="上架数量"></el-input-number>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="changeku">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>
  
<script>
import { mapState } from 'vuex'
export default {
    methods: {
        //每页条数改变时触发 选择一页显示多少行
        handleSizeChange(val) {
            this.currentPage = 1;
            this.pageSize = val;
        },
        //当前页改变时触发 跳转其他页
        handleCurrentChange(val) {
            this.currentPage = val;
        },
        additem(val) {
            this.snum = val.snum
            this.sum = val.num
            this.dialogVisible = true
            this.int = this.$store.state.myArray.findIndex(item => item.name == val.name)
        },
        handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
      filterItems() {
        this.tableData = this.myArray.filter(item => item.name.includes(this.keyword) || item.brief.includes(this.keyword))
      },
      changeku() {
        this.dialogVisible = false
        this.$store.commit('addkucun',[this.int,this.snum,this.num,this.sum])
      }
    },
    computed: {
        ...mapState({
            myArray: state => state.myArray, // 获取 vuex 中的数组
        })
    },
    mounted() {
        this.tableData = this.myArray
    },
    updated() {
        if(this.keyword == "") {
            this.tableData = this.myArray
        }
    },
    data() {
        return {
            dialogVisible:false,
            currentPage: 1, // 当前页码
            total: 20, // 总条数
            pageSize: 5, // 每页的数据条数
            tableData: [],
            keyword: "",
            num:0,
            snum:"",
            int:null,
            sum:""
        }
    }
}
</script>
<style scoped lang="less">
.search {
    width: 300px;
    display: flex;
}

.el-table {
    margin-top: 20px;
}

.block {
    width: 80%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    position: absolute;
    bottom: 0;
}

.box {
    color: aqua;
}
</style>