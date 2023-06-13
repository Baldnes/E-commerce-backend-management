<template>
    <div>
        <div class="top">
            <el-input placeholder="商品/单号/用户昵称" v-model="keyword"></el-input>
            <el-button type="primary" plain @click="look">查询</el-button>
        </div>
        <div class="bottom">
            <el-table :data="tableData.slice((currentPage - 1) * pageSize, currentPage * pageSize)" style="width: 100%;">
                <el-table-column type="expand">
                    <template slot-scope="props">
                        <el-form label-position="left" inline class="demo-table-expand">
                            <el-form-item label="商品名称">
                                <span>{{ props.row.name }}</span>
                            </el-form-item>
                            <el-form-item label="终端来源">
                                <span>{{ props.row.lai }}</span>
                            </el-form-item>
                            <el-form-item label="时间">
                                <span>{{ props.row.time }}</span>
                            </el-form-item>
                            <el-form-item label="订单号">
                                <span>{{ props.row.danhao }}</span>
                            </el-form-item>
                            <el-form-item label="用户昵称">
                                <span>{{ props.row.txt }}</span>
                            </el-form-item>
                            <el-form-item label="用户手机号码">
                                <span>{{ props.row.phone }}</span>
                            </el-form-item>
                            <el-form-item label="收货地址">
                                <span>{{ props.row.address }}</span>
                            </el-form-item>
                        </el-form>
                    </template>
                </el-table-column>
                <el-table-column label="商品信息" prop="name">
                </el-table-column>
                <el-table-column label="商品单价" prop="price">
                </el-table-column>
                <el-table-column label="购买数量" prop="num">
                </el-table-column>
                <el-table-column label="实付款">
                    <template slot-scope="scope">
                        <div style="color:red;font-weight:bold;">{{ scope.row.res }}</div>
                    </template>
                </el-table-column>
                <el-table-column label="支付状态">
                    <template slot-scope="scope">
                        <div v-if="scope.row.ding == '0'" style="color:red;font-weight:bold;">未支付</div>
                        <div v-if="scope.row.ding == '1'" style="color:rgb(0, 166, 255);font-weight:bold;">已支付</div>
                        <div v-if="scope.row.ding == '2'" style="color:rgb(15, 15, 15);font-weight:bold;">申请退货退款</div>
                        <div v-if="scope.row.ding == '3'" style="color:rgb(15, 15, 15);font-weight:bold;">申请仅退款</div>
                    </template>
                </el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button type="danger" @click="subItem(scope.row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <div class="block">
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage"
                :page-sizes="[10, 5]" :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper"
                :total="tableData.length" align="center">
            </el-pagination>
        </div>
        <el-dialog title="提示" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
            <i class="el-icon-delete" style="color: red;">此操作会永久删除该订单</i>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="sub">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script>

export default {
    data() {
        return {
            options: [{
                value: '淘宝',
                label: '淘宝'
            }, {
                value: '京东',
                label: '京东'
            }, {
                value: '拼多多',
                label: '拼多多'
            }, {
                value: '唯品会',
                label: '唯品会'
            }, {
                value: '天猫',
                label: '天猫'
            }],
            dialogVisible: false,
            value: '',
            tableData: [],
            currentPage: 1, // 当前页码
            total: 0, // 总条数
            pageSize: 5, // 每页的数据条数
            keyword: "", //搜索商品名称
            hao: "",
            int: ""
        }
    },
    created() {
        this.$store.commit('changlist')
        this.tableData = this.$store.state.dingList
        this.total = this.tableData.length
    },
    updated() {
        if (this.keyword == "") {
            this.tableData = this.$store.state.dingList
        }
    },
    mounted() {
       
    },
    methods: {
        handleClick(row) {
            console.log(row);
        },
        handleClose(done) {
            this.$confirm('确认关闭？')
                .then(_ => {
                    done();
                })
                .catch(_ => { });
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
        look() {
            this.tableData = this.$store.state.dingList.filter(val =>
                val.name.includes(this.keyword) || val.danhao.includes(this.keyword) || val.txt.includes(this.keyword)
            )
        },
        subItem(val) {
            this.hao = val.danhao
            this.dialogVisible = true
        },
        sub() {
            this.dialogVisible = false
            this.int = this.$store.state.dingList.findIndex(e => e.danhao == this.hao)
            this.$store.commit("changeding", this.int)
            let total = Math.ceil((this.tableData.length) / this.pageSize)
            console.log(total);
            this.currentPage = this.currentPage > total ? total : this.currentPage
            this.currentPage = this.currentPage < 1 ? 1 : this.currentPage
            this.tableData = this.$store.state.dingList.filter(val => {
                return val.name.includes(this.keyword) || val.danhao.includes(this.keyword) || val.txt.includes(this.keyword);
            })
        }
    },
}

</script>
<style scoped lang="less">
.top {
    width: 100%;

    .el-input {
        width: 200px;
    }
}
.el-table {
    height: 650px;
    overflow: auto;
}

.bottom {
    margin-top: 20px;

    .box {
        border: 1px solid red;
        width: 100%;
        height: 650px;
    }
}

.demo-table-expand {
    font-size: 0;
    padding-left: 55px;
}

.demo-table-expand label {
    width: 90px;
    color: #99a9bf;
}

.demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
}

.block {
    position: absolute;
    width: 80%;
    text-align: center;
    bottom: 20px;
}
</style>