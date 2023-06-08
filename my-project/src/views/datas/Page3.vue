<template>
    <div>
        <div class="search">
            <el-input placeholder="订单号" v-model="keyword"></el-input>
            <el-button @click="filterItems()">搜索</el-button>
        </div>
        <el-table :data="tableData.slice((currentPage - 1) * pageSize, currentPage * pageSize)" border style="width: 100%">
            <el-table-column fixed prop="danhao" label="订单号" width="250">
            </el-table-column>
            <el-table-column prop="txt" label="买家昵称" width="200">
            </el-table-column>
            <el-table-column label="订单总金额" width="200">
                <template slot-scope="scope">
                    <div style="color:red;font-weight:bold;">{{ scope.row.price }}</div>
                </template>
            </el-table-column>
            <el-table-column label="订单状态" width="200">
                <template slot-scope="scope">
                    <div v-if="scope.row.ding == '1'" style="color:red;font-weight:bold;">已支付</div>
                    <div v-if="scope.row.ding == '2'" style="color:rgb(0, 147, 188);font-weight:bold;">申请退货退款</div>
                    <div v-if="scope.row.ding == '3'" style="color:rgb(0, 147, 188);font-weight:bold;">申请仅退款</div>
                </template>
            </el-table-column>
            <el-table-column prop="wu" label="发货状态" width="200">
                <template slot-scope="scope">
                    <div v-if="scope.row.wu == '0'" style="color:rgb(0, 147, 188);font-weight:bold;">待发货</div>
                    <div v-if="scope.row.wu == '1'" style="color:red;font-weight:bold;">已发货</div>
                    <div v-if="scope.row.wu == '2'" style="color:rgb(0, 170, 255);font-weight:bold;">已送达</div>
                </template>
            </el-table-column>
            <el-table-column prop="tian" label="送达大约时间(天)" width="120">
            </el-table-column>
            <el-table-column fixed="right" label="操作" width="150">
                <template slot-scope="scope">
                    <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                </template>
            </el-table-column>
        </el-table>
        <div class="block">
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage"
                :page-sizes="[10, 5]" :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper"
                :total="tableData.length" align="center">
            </el-pagination>
        </div>
        <el-dialog title="提示" :visible.sync="dialogVisible" width="36%" :before-close="handleClose">
            <div style="width: 100%;">
                <img src="https://img0.baidu.com/it/u=3152366596,2930329200&fm=253&fmt=auto&app=138&f=JPEG?w=499&h=228" alt="">
            </div>
            <div v-if="flag">
                <h1 style="font-size: 20px;">等待快递收取中...</h1>
            </div>
            <el-timeline v-if="flag1">
                <el-timeline-item timestamp="2023/01/12" placement="top">
                    <el-card>
                        <p>快递公司已揽件</p>
                    </el-card>
                </el-timeline-item>
                <el-timeline-item timestamp="2023/01/13" placement="top">
                    <el-card>
                        <p>洛阳市伊滨区科技大道--准备送往洛阳北郊快递点</p>
                    </el-card>
                </el-timeline-item>
                <el-timeline-item timestamp="2023/01/13" placement="top">
                    <el-card>
                        <p>洛阳北郊快递点已发车</p>
                    </el-card>
                </el-timeline-item>
                <el-timeline-item timestamp="2023/01/14" placement="top" v-if="flag2">
                    <el-card>
                        <p>已送达</p>
                    </el-card>
                </el-timeline-item>
            </el-timeline>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
    methods: {
        handleClick(row) {
            console.log(row);
            if(row.wu == 0) {
                this.flag = true
                this.flag1 = false
                this.flag2 = false
            } else if(row.wu == 1) {
                this.flag = false
                this.flag1 = true
                this.flag2 = false
            } else {
                this.flag = false
                this.flag1 = true
                this.flag2 = true
            }
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
        handleClose(done) {
            this.$confirm('确认关闭？')
                .then(_ => {
                    done();
                })
                .catch(_ => { });
        },
        filterItems() {
            this.tableData = this.dingList1.filter(val => val.danhao.includes(this.keyword))
        }
    },
    mounted() {
        this.$store.commit('wu')
        this.tableData = this.dingList1
    },
    updated() {
        if (this.keyword == "") {
            this.tableData = this.dingList1
        }
    },
    computed: {
        ...mapState({
            dingList1: state => state.dingList1
        })
    },
    data() {
        return {
            dialogVisible: false,
            currentPage: 1, // 当前页码
            total: 20, // 总条数
            pageSize: 5, // 每页的数据条数
            keyword: "", //搜索商品名称
            tableData: [],
            flag:false,
            flag1:false,
            flag2:false
        }
    }
}
</script>
<style scoped lang="less">
.el-dialog {
    width: 80%;
    height: 100%;
}

.search {
    width: 100%;

    .el-input {
        width: 200px;
    }
}

.el-table {
    margin-top: 20px;
}

.block {
    position: absolute;
    bottom: 10px;
    width: 80%;
    text-align: center;
}
</style>