<template>
  <div class="contain">
    <div>
      <el-tabs v-model="activeName" @tab-click="send">
        <el-tab-pane v-for="(item,index) in tabList" :key="index" :label="item.label" :name="item.num">
        </el-tab-pane>
        <router-view></router-view>
      </el-tabs>
    </div>
  </div>
</template>
<script>
export default {
  name: "Manage",
  data() {
    return {
      activeName: "first",
      tabList:[
        {
          com: "/manage",
          label:"已上架商品",
          num:"first",
          id:0
        },
        {
          com: "/Commodity2",
          label:"已下架商品",
          num:"second",
          id:1
        },
        {
          com: "/Commodity3",
          label:"添加商品",
          num:"third",
          id:2
        }
      ]
    };
  },
  methods: {
    send(e) {
      this.tabList.forEach(item =>{
        if(e.index == item.id) {
          if (this.$router.currentRoute.name == item.com) {
            return;
          } else {
            this.$router.push({
              path:item.com
            });
            this.activeName = item.num
          };
        }
      })
    }
  },
  mounted() {
    this.tabList.forEach(item =>{
      if(this.$route.path == item.com) {
        this.activeName = item.num
      }
    })
  }
};
</script>
<style scoped lang="less">

</style>
