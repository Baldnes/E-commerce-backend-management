<template>
    <div>
        <el-tabs v-model="activeName" type="card">
            <el-tab-pane label="数码产品" name="first">
                <div>
                    <div>
                        <el-input style="width: 300px;" v-model="keyword" />

                        <el-button @click="send">搜索</el-button>

                    </div>

                    <el-table :data="tablenata.slice((currentPage - 1) * pageSize, currentPage * pageSize)"
                        style="width: 100%;height: 610px;">

                        <el-table-column fixed prop="name" label="商品名称" width="450">
                        </el-table-column>
                        <el-table-column prop="price" label="商品价格" width="300">
                            <template slot-scope="scope">
                                    <div v-if="scope.row.price" style="color:red;font-weight:bold;">{{ scope.row.price }}</div>
                                </template>
                        </el-table-column>
                        <el-table-column prop="snum" label="商品上架数量" width="300">
                        </el-table-column>
                        <el-table-column fixed="right" label="操作" width="200">
                            <template slot-scope="scope">
                                <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                                <el-button type="text" size="small" @click="changeCate1(scope.row)" class="btns">修改分类</el-button>
                            </template>
                        </el-table-column>
                    </el-table>

                </div>
                <div class="block">

                    <el-pagination align='center' @size-change="handleSizeChange" @current-change="handleCurrentChange"
                        :current-page="currentPage" :page-sizes="[5, 10]" :page-size="pageSize"
                        layout="total, sizes, prev, pager, next, jumper" :total="tablenata.length">

                    </el-pagination>

                </div>
            </el-tab-pane>
            <el-tab-pane label="五金" name="second">
                <div>
                    <div>
                        <el-input style="width: 300px;" v-model="usefrom" />
                        <el-button @click="sendtwo">搜索</el-button>
                    </div>
                    <el-table :data="tabletwo.slice((currentPage - 1) * pageSize, currentPage * pageSize)"
                        style="width: 100%;height: 610px;">

                        <el-table-column fixed prop="name" label="商品名称" width="450">
                        </el-table-column>
                        <el-table-column prop="price" label="商品价格" width="300">
                            <template slot-scope="scope">
                                    <div v-if="scope.row.price" style="color:red;font-weight:bold;">{{ scope.row.price }}</div>
                                </template>
                        </el-table-column>
                        <el-table-column prop="snum" label="商品上架数量" width="300">
                        </el-table-column>
                        <el-table-column fixed="right" label="操作" width="200">
                            <template slot-scope="scope">
                                <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                                <el-button type="text" size="small" @click="changeCate2(scope.row)" class="btns">修改分类</el-button>
                            </template>
                        </el-table-column>

                    </el-table>

                </div>

                <div class="block">

                    <el-pagination align='center' @size-change="handleSizeChange" @current-change="handleCurrentChange"
                        :current-page="currentPage" :page-sizes="[5, 10]" :page-size="pageSize"
                        layout="total, sizes, prev, pager, next, jumper" :total="tabletwo.length">

                    </el-pagination>

                </div>

            </el-tab-pane>

            <el-tab-pane label="日常出行" name="third">

                <div>

                    <div>

                        <el-input style="width: 300px;" v-model="uthere" />

                        <el-button @click="sendthere">搜索</el-button>

                    </div>

                    <el-table :data="tablethere.slice((currentPage - 1) * pageSize, currentPage * pageSize)"
                        style="width: 100%;height: 610px;">

                        <el-table-column fixed prop="name" label="商品名称" width="450">
                        </el-table-column>
                        <el-table-column prop="price" label="商品价格" width="300">
                            <template slot-scope="scope">
                                    <div v-if="scope.row.price" style="color:red;font-weight:bold;">{{ scope.row.price }}</div>
                                </template>
                        </el-table-column>
                        <el-table-column prop="snum" label="商品上架数量" width="300">
                        </el-table-column>
                        <el-table-column fixed="right" label="操作" width="200">
                            <template slot-scope="scope">
                                <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                                <el-button type="text" size="small" @click="changeCate3(scope.row)" class="btns">修改分类</el-button>
                            </template>
                        </el-table-column>

                    </el-table>

                </div>

                <div class="block">

                    <el-pagination align='center' @size-change="handleSizeChange" @current-change="handleCurrentChange"
                        :current-page="currentPage" :page-sizes="[5, 10]" :page-size="pageSize"
                        layout="total, sizes, prev, pager, next, jumper" :total="tablethere.length">

                    </el-pagination>

                </div>

            </el-tab-pane>

            <el-tab-pane label="衣服" name="fourth">

                <div>

                    <div>

                        <el-input style="width: 300px;" v-model="ufour" />

                        <el-button @click="sendfour">搜索</el-button>

                    </div>

                    <el-table :data="tablefour.slice((currentPage - 1) * pageSize, currentPage * pageSize)"
                        style="width: 100%;height: 610px;">

                        <el-table-column fixed prop="name" label="商品名称" width="450">
                        </el-table-column>
                        <el-table-column prop="price" label="商品价格" width="300">
                            <template slot-scope="scope">
                                    <div v-if="scope.row.price" style="color:red;font-weight:bold;">{{ scope.row.price }}</div>
                                </template>
                        </el-table-column>
                        <el-table-column prop="snum" label="商品上架数量" width="300">
                        </el-table-column>
                        <el-table-column fixed="right" label="操作" width="200">
                            <template slot-scope="scope">
                                <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                                <el-button type="text" size="small" @click="changeCate4(scope.row)" class="btns">修改分类</el-button>
                            </template>
                        </el-table-column>

                    </el-table>

                </div>

                <div class="block">

                    <el-pagination align='center' @size-change="handleSizeChange" @current-change="handleCurrentChange"
                        :current-page="currentPage" :page-sizes="[5, 10]" :page-size="pageSize"
                        layout="total, sizes, prev, pager, next, jumper" :total="tablefour.length">

                    </el-pagination>

                </div>

            </el-tab-pane>

            <el-tab-pane label="生活用品" name="fifth">

                <div>

                    <div>

                        <el-input style="width: 300px;" v-model="ufive" />

                        <el-button @click="sendfive">搜索</el-button>

                    </div>

                    <el-table :data="tablefive.slice((currentPage - 1) * pageSize, currentPage * pageSize)"
                        style="width: 100%;height: 610px;">

                        <el-table-column fixed prop="name" label="商品名称" width="450">
                        </el-table-column>
                        <el-table-column prop="price" label="商品价格" width="300">
                            <template slot-scope="scope">
                                    <div v-if="scope.row.price" style="color:red;font-weight:bold;">{{ scope.row.price }}</div>
                                </template>
                        </el-table-column>
                        <el-table-column prop="snum" label="商品上架数量" width="300">
                        </el-table-column>
                        <el-table-column fixed="right" label="操作" width="200">
                            <template slot-scope="scope">
                                <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                                <el-button type="text" size="small" @click="changeCate5(scope.row)" class="btns">修改分类</el-button>
                            </template>
                        </el-table-column>

                    </el-table>

                </div>

                <div class="block">

                    <el-pagination align='center' @size-change="handleSizeChange" @current-change="handleCurrentChange"
                        :current-page="currentPage" :page-sizes="[5, 10]" :page-size="pageSize"
                        layout="total, sizes, prev, pager, next, jumper" :total="tablefive.length">

                    </el-pagination>

                </div>

            </el-tab-pane>

            <el-tab-pane label="杂货" name="six">

                <div>

                    <div>

                        <el-input style="width: 300px;" v-model="usix" />

                        <el-button @click="sendsix">搜索</el-button>

                    </div>

                    <el-table :data="tablesix.slice((currentPage - 1) * pageSize, currentPage * pageSize)"
                        style="width: 100%;height: 610px;">

                        <el-table-column fixed prop="name" label="商品名称" width="450">
                        </el-table-column>
                        <el-table-column prop="price" label="商品价格" width="300">
                            <template slot-scope="scope">
                                    <div v-if="scope.row.price" style="color:red;font-weight:bold;">{{ scope.row.price }}</div>
                                </template>
                        </el-table-column>
                        <el-table-column prop="snum" label="商品上架数量" width="300">
                        </el-table-column>
                        <el-table-column fixed="right" label="操作" width="200">
                            <template slot-scope="scope">
                                <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                                <el-button type="text" size="small" @click="changeCate6(scope.row)" class="btns">修改分类</el-button>
                            </template>
                        </el-table-column>

                    </el-table>

                </div>

                <div class="block">

                    <el-pagination align='center' @size-change="handleSizeChange" @current-change="handleCurrentChange"
                        :current-page="currentPage" :page-sizes="[5, 10]" :page-size="pageSize"
                        layout="total, sizes, prev, pager, next, jumper" :total="tablesix.length">

                    </el-pagination>

                </div>

            </el-tab-pane>

            <el-tab-pane label="儿童玩具" name="senven">

                <div>

                    <div>

                        <el-input style="width: 300px;" v-model="usenven" />

                        <el-button @click="sendsenven">搜索</el-button>

                    </div>

                    <el-table :data="tablesenven.slice((currentPage - 1) * pageSize, currentPage * pageSize)"
                        style="width: 100%;height: 610px;">

                        <el-table-column fixed prop="name" label="商品名称" width="450">
                        </el-table-column>
                        <el-table-column prop="price" label="商品价格" width="300">
                            <template slot-scope="scope">
                                    <div v-if="scope.row.price" style="color:red;font-weight:bold;">{{ scope.row.price }}</div>
                                </template>
                        </el-table-column>
                        <el-table-column prop="snum" label="商品上架数量" width="300">
                        </el-table-column>
                        <el-table-column fixed="right" label="操作" width="200">
                            <template slot-scope="scope">
                                <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                                <el-button type="text" size="small" @click="changeCate7(scope.row)" class="btns">修改分类</el-button>
                            </template>
                        </el-table-column>

                    </el-table>

                </div>

                <div class="block">

                    <el-pagination align='center' @size-change="handleSizeChange" @current-change="handleCurrentChange"
                        :current-page="currentPage" :page-sizes="[5, 10]" :page-size="pageSize"
                        layout="total, sizes, prev, pager, next, jumper" :total="tablesenven.length">

                    </el-pagination>

                </div>

            </el-tab-pane>

            <el-tab-pane label="厨具" name="eight">

                <div>

                    <div>

                        <el-input style="width: 300px;" v-model="ueight" />

                        <el-button @click="sendeight">搜索</el-button>

                    </div>

                    <el-table :data="tableeight.slice((currentPage - 1) * pageSize, currentPage * pageSize)"
                        style="width: 100%;height: 610px;">

                        <el-table-column fixed prop="name" label="商品名称" width="450">
                        </el-table-column>
                        <el-table-column prop="price" label="商品价格" width="300">
                            <template slot-scope="scope">
                                    <div v-if="scope.row.price" style="color:red;font-weight:bold;">{{ scope.row.price }}</div>
                                </template>
                        </el-table-column>
                        <el-table-column prop="snum" label="商品上架数量" width="300">
                        </el-table-column>
                        <el-table-column fixed="right" label="操作" width="200">
                            <template slot-scope="scope">
                                <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                                <el-button type="text" size="small" @click="changeCate8(scope.row)" class="btns">修改分类</el-button>
                            </template>
                        </el-table-column>

                    </el-table>

                </div>

                <div class="block">
                    <div>
                        <el-pagination align='center' @size-change="handleSizeChange" @current-change="handleCurrentChange"
                            :current-page="currentPage" :page-sizes="[5, 10]" :page-size="pageSize"
                            layout="total, sizes, prev, pager, next, jumper" :total="tableeight.length">

                        </el-pagination>
                    </div>

                </div>

            </el-tab-pane>

        </el-tabs>
        <el-dialog title="查看商品信息" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
            <div class="box">
                <p>商品名字：{{ kname }}</p>
                <p>商品价格：{{ kprice }}元</p>
                <p>商品类别：{{ kcate }}</p>
                <p>商品上架数量：{{ knum }}件</p>
                <p>商品简介：{{ ktext }}</p>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
        </el-dialog>
        <el-dialog title="修改分类" :visible.sync="dialogVisibled" width="30%" :before-close="handleClose">
            <el-radio v-model="radio" label="数码产品">数码产品</el-radio>
            <el-radio v-model="radio" label="五金">五金</el-radio>
            <el-radio v-model="radio" label="日常出行">日常出行</el-radio>
            <el-radio v-model="radio" label="衣服">衣服</el-radio>
            <el-radio v-model="radio" label="生活用品">生活用品</el-radio>
            <el-radio v-model="radio" label="杂货">杂货</el-radio>
            <el-radio v-model="radio" label="儿童玩具">儿童玩具</el-radio>
            <el-radio v-model="radio" label="厨具">厨具</el-radio>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisibled = false">取 消</el-button>
                <el-button type="primary" @click="changeitem">确 定</el-button>
            </span>
        </el-dialog>
        <el-dialog title="修改分类" :visible.sync="dialogVisibled1" width="30%" :before-close="handleClose">
            <el-radio v-model="radio" label="数码产品">数码产品</el-radio>
            <el-radio v-model="radio" label="五金">五金</el-radio>
            <el-radio v-model="radio" label="日常出行">日常出行</el-radio>
            <el-radio v-model="radio" label="衣服">衣服</el-radio>
            <el-radio v-model="radio" label="生活用品">生活用品</el-radio>
            <el-radio v-model="radio" label="杂货">杂货</el-radio>
            <el-radio v-model="radio" label="儿童玩具">儿童玩具</el-radio>
            <el-radio v-model="radio" label="厨具">厨具</el-radio>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisibled = false">取 消</el-button>
                <el-button type="primary" @click="changeitem1">确 定</el-button>
            </span>
        </el-dialog>
        <el-dialog title="修改分类" :visible.sync="dialogVisibled2" width="30%" :before-close="handleClose">
            <el-radio v-model="radio" label="数码产品">数码产品</el-radio>
            <el-radio v-model="radio" label="五金">五金</el-radio>
            <el-radio v-model="radio" label="日常出行">日常出行</el-radio>
            <el-radio v-model="radio" label="衣服">衣服</el-radio>
            <el-radio v-model="radio" label="生活用品">生活用品</el-radio>
            <el-radio v-model="radio" label="杂货">杂货</el-radio>
            <el-radio v-model="radio" label="儿童玩具">儿童玩具</el-radio>
            <el-radio v-model="radio" label="厨具">厨具</el-radio>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisibled = false">取 消</el-button>
                <el-button type="primary" @click="changeitem2">确 定</el-button>
            </span>
        </el-dialog>
        <el-dialog title="修改分类" :visible.sync="dialogVisibled3" width="30%" :before-close="handleClose">
            <el-radio v-model="radio" label="数码产品">数码产品</el-radio>
            <el-radio v-model="radio" label="五金">五金</el-radio>
            <el-radio v-model="radio" label="日常出行">日常出行</el-radio>
            <el-radio v-model="radio" label="衣服">衣服</el-radio>
            <el-radio v-model="radio" label="生活用品">生活用品</el-radio>
            <el-radio v-model="radio" label="杂货">杂货</el-radio>
            <el-radio v-model="radio" label="儿童玩具">儿童玩具</el-radio>
            <el-radio v-model="radio" label="厨具">厨具</el-radio>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisibled = false">取 消</el-button>
                <el-button type="primary" @click="changeitem3">确 定</el-button>
            </span>
        </el-dialog>
        <el-dialog title="修改分类" :visible.sync="dialogVisibled4" width="30%" :before-close="handleClose">
            <el-radio v-model="radio" label="数码产品">数码产品</el-radio>
            <el-radio v-model="radio" label="五金">五金</el-radio>
            <el-radio v-model="radio" label="日常出行">日常出行</el-radio>
            <el-radio v-model="radio" label="衣服">衣服</el-radio>
            <el-radio v-model="radio" label="生活用品">生活用品</el-radio>
            <el-radio v-model="radio" label="杂货">杂货</el-radio>
            <el-radio v-model="radio" label="儿童玩具">儿童玩具</el-radio>
            <el-radio v-model="radio" label="厨具">厨具</el-radio>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisibled = false">取 消</el-button>
                <el-button type="primary" @click="changeitem4">确 定</el-button>
            </span>
        </el-dialog>
        <el-dialog title="修改分类" :visible.sync="dialogVisibled5" width="30%" :before-close="handleClose">
            <el-radio v-model="radio" label="数码产品">数码产品</el-radio>
            <el-radio v-model="radio" label="五金">五金</el-radio>
            <el-radio v-model="radio" label="日常出行">日常出行</el-radio>
            <el-radio v-model="radio" label="衣服">衣服</el-radio>
            <el-radio v-model="radio" label="生活用品">生活用品</el-radio>
            <el-radio v-model="radio" label="杂货">杂货</el-radio>
            <el-radio v-model="radio" label="儿童玩具">儿童玩具</el-radio>
            <el-radio v-model="radio" label="厨具">厨具</el-radio>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisibled = false">取 消</el-button>
                <el-button type="primary" @click="changeitem5">确 定</el-button>
            </span>
        </el-dialog>
        <el-dialog title="修改分类" :visible.sync="dialogVisibled6" width="30%" :before-close="handleClose">
            <el-radio v-model="radio" label="数码产品">数码产品</el-radio>
            <el-radio v-model="radio" label="五金">五金</el-radio>
            <el-radio v-model="radio" label="日常出行">日常出行</el-radio>
            <el-radio v-model="radio" label="衣服">衣服</el-radio>
            <el-radio v-model="radio" label="生活用品">生活用品</el-radio>
            <el-radio v-model="radio" label="杂货">杂货</el-radio>
            <el-radio v-model="radio" label="儿童玩具">儿童玩具</el-radio>
            <el-radio v-model="radio" label="厨具">厨具</el-radio>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisibled = false">取 消</el-button>
                <el-button type="primary" @click="changeitem6">确 定</el-button>
            </span>
        </el-dialog>
        <el-dialog title="修改分类" :visible.sync="dialogVisibled7" width="30%" :before-close="handleClose">
            <el-radio v-model="radio" label="数码产品">数码产品</el-radio>
            <el-radio v-model="radio" label="五金">五金</el-radio>
            <el-radio v-model="radio" label="日常出行">日常出行</el-radio>
            <el-radio v-model="radio" label="衣服">衣服</el-radio>
            <el-radio v-model="radio" label="生活用品">生活用品</el-radio>
            <el-radio v-model="radio" label="杂货">杂货</el-radio>
            <el-radio v-model="radio" label="儿童玩具">儿童玩具</el-radio>
            <el-radio v-model="radio" label="厨具">厨具</el-radio>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisibled = false">取 消</el-button>
                <el-button type="primary" @click="changeitem7">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>



<script>


import { mapState } from 'vuex'
export default {

    name: "Thing",

    data() {

        return {
            dialogVisible: false,
            dialogVisibled: false,
            dialogVisibled1:false,
            dialogVisibled2:false,
            dialogVisibled3:false,
            dialogVisibled4:false,
            dialogVisibled5:false,
            dialogVisibled6:false,
            dialogVisibled7:false,
            keyword: "",
            currentPage: 1, // 当前页码
            total: 20, // 总条数
            pageSize: 5,// 每页的数据条数
            activeName: 'first',
            usefrom: '',
            uthere: '',
            ufour: "",
            ufive: "",
            usix: "",
            usenven: "",
            ueight: '',
            tablenata: [],
            tabletwo: [],
            tablethere: [],
            tablefour: [],
            tablefive: [],
            tablesix: [],
            tablesenven: [],
            tableeight: [],
            kname: "",
            kprice: "",
            kcate: "",
            ktext: "",
            knum: "",
            radio:"",
            int:null,
            item:""
        };

    },
    computed:{
        ...mapState({
      list: state => state.list, // 获取 vuex 中的数组
      listtwo: state => state.listtwo,
      listthere: state => state.listthere,
      listfour: state => state.listfour,
      listfive: state => state.listfive,
      listsix: state => state.listsix,
      listsenven: state => state.listsenven,
      listeight: state => state.listeight,
    })   
    },
    mounted() {
        this.$store.commit("man")
        this.tablenata = this.list,
        this.tabletwo = this.listtwo
        this.tablethere = this.listthere
        this.tablefour = this.listfour
        this.tablefive = this.listfive
        this.tablesix = this.listsix
        this.tablesenven = this.listsenven
        this.tableeight = this.listeight
    },
    updated() {
        if (this.keyword == '') {
            this.tablenata = this.$store.state.list
        };
        if (this.usefrom == '') {
            this.tabletwo = this.$store.state.listtwo
        };
        if (this.uthere == '') {
            this.tablethere = this.$store.state.listthere
        };

        if (this.ufour == '') {

            this.tablefour = this.$store.state.listfour

        };

        if (this.ufive == '') {

            this.tablefive = this.$store.state.listfive

        };

        if (this.usix == '') {

            this.tablesix = this.$store.state.listsix

        };

        if (this.usenven == '') {

            this.tablesenven = this.$store.state.listsenven

        };

        if (this.ueight == '') {

            this.tableeight = this.$store.state.listeight

        };

    },

    methods: {

        handleClick(val) {
            this.dialogVisible = true
            this.kname = val.name
            this.kprice = val.price
            this.knum = val.snum
            this.kcate = val.category
            this.ktext = val.brief
        },
        handleClose(done) {
            this.$confirm('确认关闭？')
                .then(_ => {
                    done();
                })
                .catch(_ => { });
        },
        changeCate1(val) {
            this.dialogVisibled = true
            this.radio = val.category
            this.int = this.$store.state.list.findIndex(item => item.name == val.name)
            this.item = val
        },
        changeitem() {
            this.dialogVisibled = false
            this.$store.commit("changeCategory",[this.radio,this.int])
            this.tablenata = this.$store.state.list
            this.item.category = this.radio
            this.$store.commit("additem",this.item)
            this.tablenata = this.$store.state.list.filter(item => item.name.includes(this.keyword))
        },
        changeCate2(val) {
            this.dialogVisibled1 = true
            this.radio = val.category
            this.int = this.$store.state.listtwo.findIndex(item => item.name == val.name)
            this.item = val
        },
        changeitem1() {
            this.dialogVisibled1 = false
            this.$store.commit("changeCategory1",[this.radio,this.int])
            this.tabletwo = this.$store.state.listtwo
            this.item.category = this.radio
            this.$store.commit("additem1",this.item)
            this.tablenata = this.$store.state.listtwo.filter(item => item.name.includes(this.keyword))
        },
        changeCate3(val) {
            this.dialogVisibled2 = true
            this.radio = val.category
            this.int = this.$store.state.listthere.findIndex(item => item.name == val.name)
            this.item = val
        },
        changeCate4(val) {
            this.dialogVisibled3 = true
            this.radio = val.category
            this.int = this.$store.state.listfour.findIndex(item => item.name == val.name)
            this.item = val
        },
        changeCate5(val) {
            this.dialogVisibled4 = true
            this.radio = val.category
            this.int = this.$store.state.listfive.findIndex(item => item.name == val.name)
            this.item = val
        },
        changeCate6(val) {
            this.dialogVisibled5 = true
            this.radio = val.category
            this.int = this.$store.state.listsix.findIndex(item => item.name == val.name)
            this.item = val
        },
        changeCate7(val) {
            this.dialogVisibled6 = true
            this.radio = val.category
            this.int = this.$store.state.listsenven.findIndex(item => item.name == val.name)
            this.item = val
        },
        changeCate8(val) {
            this.dialogVisibled7 = true
            this.radio = val.category
            this.int = this.$store.state.listeight.findIndex(item => item.name == val.name)
            this.item = val
        },
        changeitem2() {
            this.dialogVisibled2 = false
            this.$store.commit("changeCategory2",[this.radio,this.int])
            this.tablethere = this.$store.state.listthere
            this.item.category = this.radio
            this.$store.commit("additem2",this.item)
            this.tablenata = this.$store.state.listthere.filter(item => item.name.includes(this.keyword))
        },
        changeitem3() {
            this.dialogVisibled3 = false
            this.$store.commit("changeCategory3",[this.radio,this.int])
            this.tablefour = this.$store.state.listfour
            this.item.category = this.radio
            this.$store.commit("additem3",this.item)
            this.tablenata = this.$store.state.listfour.filter(item => item.name.includes(this.keyword))
        },
        changeitem4() {
            this.dialogVisibled4 = false
            this.$store.commit("changeCategory4",[this.radio,this.int])
            this.tablefive = this.$store.state.listfive
            this.item.category = this.radio
            this.$store.commit("additem4",this.item)
            this.tablenata = this.$store.state.listfive.filter(item => item.name.includes(this.keyword))
        },
        changeitem5() {
            this.dialogVisibled5 = false
            this.$store.commit("changeCategory5",[this.radio,this.int])
            this.tablesix = this.$store.state.listsix
            this.item.category = this.radio
            this.$store.commit("additem5",this.item)
            this.tablenata = this.$store.state.listsix.filter(item => item.name.includes(this.keyword))
        },
        changeitem6() {
            this.dialogVisibled6 = false
            this.$store.commit("changeCategory6",[this.radio,this.int])
            this.tablesenven = this.$store.state.listsenven
            this.item.category = this.radio
            this.$store.commit("additem6",this.item)
            this.tablenata = this.$store.state.listsenven.filter(item => item.name.includes(this.keyword))
        },
        changeitem7() {
            this.dialogVisibled7 = false
            this.$store.commit("changeCategory7",[this.radio,this.int])
            this.tableeight = this.$store.state.listeight
            this.item.category = this.radio
            this.$store.commit("additem7",this.item)
            this.tablenata = this.$store.state.listeight.filter(item => item.name.includes(this.keyword))
        },
        handleSizeChange(val) {

            console.log(`每页 ${val} 条`);

            this.currentPage = 1;

            this.pageSize = val;

        },

        //当前页改变时触发 跳转其他页

        handleCurrentChange(val) {

            this.currentPage = val;

        },

        send() {
            this.tablenata = this.$store.state.list.filter(item => item.name.includes(this.keyword))
        },

        sendtwo() {
            this.tabletwo = this.$store.state.listtwo.filter(item => item.name.includes(this.usefrom))
        },
        sendthere() {
            this.tablethere = this.$store.state.listthere.filter(item => item.name.includes(this.uthere))
        },

        sendfour() {

            this.tablefour = this.$store.state.listfour.filter(item => item.name.includes(this.ufour))

        },

        sendfive() {

            this.tablefive = this.$store.state.listfive.filter(item => item.name.includes(this.ufive))

        },

        sendsix() {

            this.tablesix = this.$store.state.listsix.filter(item => item.name.includes(this.usix))

        },

        sendsenven() {

            this.tablesenven = this.$store.state.listsenven.filter(item => item.name.includes(this.usenven))

        },

        sendeight() {
            this.tableeight = this.$store.state.listeight.filter(item => item.name.includes(this.ueight))
        },

    },



}





</script>

<style scoped lang="less">
.el-table {
    width: 100%;
    height: 610px;
}

.box {
    p {
        margin-top: 20px;
    }
}

.block {
    margin-top: 15px;
}
.btns {
    color: red;
}
</style>