<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
  
  <script>
export default {
  name: "app",
  data() {
    return {};
  },
  mounted() {
    this.$store.commit('man')
    this.$store.commit('changlist')
    this.$store.commit('wu')
    if(this.$store.state.changeLu == 0) {
      this.$router.push({
        path:"/"
      })
    }
  }
};
</script>
  
  <style lang="less">

.el-card__body,
.el-main {
  padding: 0 0 0 10px;
}
.el-tabs__item {
  color: #024b4d;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  height: 840px;
  overflow-y: hidden;
}
input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
    -webkit-appearance: none;
}
input[type="number"]{
    -moz-appearance: textfield;
}
</style>
  