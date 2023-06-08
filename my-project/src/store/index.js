import Vue from 'vue'
import Vuex from 'vuex'
import { manage } from '../api/manage';
import {list} from '../api/list'
import createPersistedState from 'vuex-persistedstate';
Vue.use(Vuex)
const state = {
  isCollapse: false,
  wid: "60px",
  wied: "180px",
  currentMenu: null,
  //商品管理数据
  myArray: [],
  deletedArr: [],
  //商品分类数据
  list: [],
  listtwo: [],
  listthere: [],
  listfour: [],
  listfive: [],
  listsix: [],
  listsenven: [],
  listeight: [],
  // 用户列表
  tableData: [],
  add: [
    {
      name: "小王",
      user: "admin",
      password: "z123456",
      jia: "洛阳市",
      adio: "1",
      dh: "18736648617",
      ugps: "河南省洛阳市伊滨区科技大道6号",
      imgs: "https://img1.baidu.com/it/u=1079732749,3668714962&fm=253&fmt=auto&app=138&f=JPEG?w=360&h=360"
    },
    {
      name: "小高",
      user: "xadmin",
      password: "z123456",
      jia: "洛阳市",
      adio: "2",
      dh: "17627828726",
      ugps: "河南省洛阳市伊滨区科技大道6号",
      imgs: "https://tva1.sinaimg.cn/bmiddle/ceeb653ejw1fa0pl0a2tyj20k00k0q4c.jpg"
    }
  ],
  bbc: '',
  luyou1: [
    {
      path: "/home",
      name: "home",
      icon: "el-icon-map-location",
      label: "首页",
    },
    {
      path: "/list",
      name: "list",
      icon: "el-icon-place",
      label: "用户信息",
    },

    {
      path: "/user",
      name: "user",
      icon: "el-icon-user",
      label: "个人中心",
    },
    {
      path: "/ohter",
      icon: "el-icon-s-order",
      label: "数据管理",
      children: [
        {
          path: "/thing",
          name: "thing",
          icon: "el-icon-help",
          label: "产品分类",
        },
        {
          path: "/stores",
          name: "stores",
          icon: "el-icon-takeaway-box",
          label: "仓库信息",
        },
        {
          path: "/nums",
          name: "nums",
          icon: "el-icon-s-data",
          label: "销售数据",
        },
        {
          path: "/manage",
          name: "manage",
          icon: "el-icon-setting",
          label: "商品管理",
        },
        {
          path: "/page1",
          name: "page1",
          icon: "el-icon-s-goods",
          label: "订单管理",
        },
        {
          path: "/page3",
          name: "page3",
          icon: "el-icon-truck",
          label: "物流信息",
        },
      ],
    },
  ],
  luyou2: [
    {
      path: "/home",
      name: "home",
      icon: "el-icon-map-location",
      label: "首页",
    },
    {
      path: "/user",
      name: "user",
      icon: "el-icon-user",
      label: "个人中心",
    }
  ],
  changeLu: 0,
  tookin: "",
  dingList: [
  ],
  dingList1:[]
}

const mutations = {
  adduser(state, val) {
    state.add.unshift(val)
  },
  changeUsers(state, val) {
    state.add[val[0]] = {
      name: state.add[val[0]].name,
      user: val[1].user,
      password: val[1].password,
      jia: state.add[val[0]].jia,
      adio: val[1].adio,
      dh: state.add[val[0]].dh,
      ugps: state.add[val[0]].ugps,
      imgs: val[1].adio == '1' ? "https://img1.baidu.com/it/u=1079732749,3668714962&fm=253&fmt=auto&app=138&f=JPEG?w=360&h=360" : "https://tva1.sinaimg.cn/bmiddle/ceeb653ejw1fa0pl0a2tyj20k00k0q4c.jpg"
    }
  },
  changlist(state) {
    list().then(res => {
      state.dingList = res.data.dan
    })
  },
  wu(state) {
    state.dingList1 = state.dingList.filter(val => val.ding != '0')
  },
  tookin(state, val) {
    state.tookin = val
  },
  changeCategory(state, val) {
    if (val[0] !== '数码产品') {
      state.list.splice(val[1], 1)
    }
  },
  additem(state, val) {
    if (val.category == '五金') {
      state.listtwo.unshift(val)
    } else if (val.category == '日常出行') {
      state.listthere.unshift(val)
    } else if (val.category == '衣服') {
      state.listfour.unshift(val)
    } else if (val.category == '生活用品') {
      state.listfive.unshift(val)
    } else if (val.category == '杂货') {
      state.listsix.unshift(val)
    } else if (val.category == '儿童玩具') {
      state.listsenven.unshift(val)
    } else {
      state.listeight.unshift(val)
    }
  },
  changeCategory1(state, val) {
    if (val[0] !== '五金') {
      state.listtwo.splice(val[1], 1)
    }
  },
  changeCategory2(state, val) {
    if (val[0] !== '日常出行') {
      state.listthere.splice(val[1], 1)
    }
  },
  changeCategory3(state, val) {
    if (val[0] !== '衣服') {
      state.listfour.splice(val[1], 1)
    }
  },
  changeCategory4(state, val) {
    if (val[0] !== '生活用品') {
      state.listfive.splice(val[1], 1)
    }
  },
  changeCategory5(state, val) {
    if (val[0] !== '杂货') {
      state.listsix.splice(val[1], 1)
    }
  },
  changeCategory6(state, val) {
    if (val[0] !== '儿童玩具') {
      state.listsenven.splice(val[1], 1)
    }
  },
  changeCategory7(state, val) {
    if (val[0] !== '厨具') {
      state.listeight.splice(val[1], 1)
    }
  },
  additem1(state, val) {
    if (val.category == '数码产品') {
      state.list.unshift(val)
    } else if (val.category == '日常出行') {
      state.listthere.unshift(val)
    } else if (val.category == '衣服') {
      state.listfour.unshift(val)
    } else if (val.category == '生活用品') {
      state.listfive.unshift(val)
    } else if (val.category == '杂货') {
      state.listsix.unshift(val)
    } else if (val.category == '儿童玩具') {
      state.listsenven.unshift(val)
    } else {
      state.listeight.unshift(val)
    }
  }, additem2(state, val) {
    if (val.category == '数码产品') {
      state.list.unshift(val)
    } else if (val.category == '五金') {
      state.listtwo.unshift(val)
    } else if (val.category == '衣服') {
      state.listfour.unshift(val)
    } else if (val.category == '生活用品') {
      state.listfive.unshift(val)
    } else if (val.category == '杂货') {
      state.listsix.unshift(val)
    } else if (val.category == '儿童玩具') {
      state.listsenven.unshift(val)
    } else {
      state.listeight.unshift(val)
    }
  }, additem3(state, val) {
    if (val.category == '数码产品') {
      state.list.unshift(val)
    } else if (val.category == '五金') {
      state.listtwo.unshift(val)
    } else if (val.category == '日常出行') {
      state.listthere.unshift(val)
    } else if (val.category == '生活用品') {
      state.listfive.unshift(val)
    } else if (val.category == '杂货') {
      state.listsix.unshift(val)
    } else if (val.category == '儿童玩具') {
      state.listsenven.unshift(val)
    } else {
      state.listeight.unshift(val)
    }
  }, additem4(state, val) {
    if (val.category == '数码产品') {
      state.list.unshift(val)
    } else if (val.category == '五金') {
      state.listtwo.unshift(val)
    } else if (val.category == '日常出行') {
      state.listthere.unshift(val)
    } else if (val.category == '衣服') {
      state.listfour.unshift(val)
    } else if (val.category == '杂货') {
      state.listsix.unshift(val)
    } else if (val.category == '儿童玩具') {
      state.listsenven.unshift(val)
    } else {
      state.listeight.unshift(val)
    }
  }, additem5(state, val) {
    if (val.category == '数码产品') {
      state.list.unshift(val)
    } else if (val.category == '五金') {
      state.listtwo.unshift(val)
    } else if (val.category == '日常出行') {
      state.listthere.unshift(val)
    } else if (val.category == '衣服') {
      state.listfour.unshift(val)
    } else if (val.category == '生活用品') {
      state.listfive.unshift(val)
    } else if (val.category == '儿童玩具') {
      state.listsenven.unshift(val)
    } else {
      state.listeight.unshift(val)
    }
  }, additem6(state, val) {
    if (val.category == '数码产品') {
      state.list.unshift(val)
    } else if (val.category == '五金') {
      state.listtwo.unshift(val)
    } else if (val.category == '日常出行') {
      state.listthere.unshift(val)
    } else if (val.category == '衣服') {
      state.listfour.unshift(val)
    } else if (val.category == '生活用品') {
      state.listfive.unshift(val)
    } else if (val.category == '杂货') {
      state.listsix.unshift(val)
    } else {
      state.listeight.unshift(val)
    }
  }, additem7(state, val) {
    if (val.category == '数码产品') {
      state.list.unshift(val)
    } else if (val.category == '五金') {
      state.listtwo.unshift(val)
    } else if (val.category == '日常出行') {
      state.listthere.unshift(val)
    } else if (val.category == '衣服') {
      state.listfour.unshift(val)
    } else if (val.category == '生活用品') {
      state.listfive.unshift(val)
    } else if (val.category == '杂货') {
      state.listsix.unshift(val)
    }
  },
  addkucun(state, val) {
    state.myArray[val[0]].snum = Number(val[1]) + val[2]
    state.myArray[val[0]].num = Number(val[3]) + val[2]
  },
  man(state) {
    manage().then(res => {
      state.myArray = res.data.manage
    })
    state.list = state.myArray.filter(item => item.category == '数码产品')
    state.listtwo = state.myArray.filter(item => item.category == '五金')
    state.listthere = state.myArray.filter(item => item.category == '日常出行')
    state.listfour = state.myArray.filter(item => item.category == '衣服')
    state.listfive = state.myArray.filter(item => item.category == '生活用品')
    state.listsix = state.myArray.filter(item => item.category == '杂货')
    state.listsenven = state.myArray.filter(item => item.category == '儿童玩具')
    state.listeight = state.myArray.filter(item => item.category == '厨具')
  },
  addmanage(state, val) {
    state.myArray.unshift(val)
    state.list = state.myArray.filter(item => item.category == '数码产品')
    state.listtwo = state.myArray.filter(item => item.category == '五金')
    state.listthere = state.myArray.filter(item => item.category == '日常出行')
    state.listfour = state.myArray.filter(item => item.category == '衣服')
    state.listfive = state.myArray.filter(item => item.category == '生活用品')
    state.listsix = state.myArray.filter(item => item.category == '杂货')
    state.listsenven = state.myArray.filter(item => item.category == '儿童玩具')
    state.listeight = state.myArray.filter(item => item.category == '厨具')
  },
  selectMenu(state, val) {
    val.name == 'home' ? (state.currentMenu = null) : (state.currentMenu = val)
    if (val.name == 'home') {
      state.currentMenu = null
    } else {
      state.currentMenu = val
    }
  },
  DELETE_ITEM(state, val) {
    const targetIndex = state.myArray.findIndex(obj => obj.name === val);
    const value = state.myArray.splice(targetIndex, 1)[0] // 删除元素并返回删除的值
    return value
  },
  flot(state, val) {
    state.deletedArr.unshift(val)
  },
  deleteRes(state, val) {
    const targetIndex = state.deletedArr.findIndex(obj => obj.name === val);
    const value = state.deletedArr.splice(targetIndex, 1)[0]
    return value
  },
  addItems(state, val) {
    state.myArray.unshift(val)
  },
  clearItem(state, val) {
    const targetIndex = state.deletedArr.findIndex(obj => obj.name === val);
    const value = state.deletedArr.splice(targetIndex, 1)[0]
    return value
  },
  updateData(state, data) {
    state.bbc = data
  },
  update(state, data) {
    state.add = data
  },
  changeItems(state, val) {
    state.myArray[val[0]] = {
      date: val[1],
      name: val[3],
      category: val[2],
      brief: val[5],
      price: val[4],
      num: val[6],
      snum: val[7]
    }
  },
  changeding(state, val) {
    const value = state.dingList.splice(val, 1)
    return value
  },
  xiaoitem(state,val) {
    const value = state.add.splice(val,1)
    return value
  }
}
export default new Vuex.Store({
  state,
  mutations,
  plugins: [
    createPersistedState({
      key: "item",
      paths: ['myArray', 'list', 'listtwo', 'listthere', 'listfour', 'listfive', "listsix", 'listsenven', 'listeight', 'tableData', 'deletedArr', 'add', 'bbc', "changeLu",'dingList']
    })
  ]
})