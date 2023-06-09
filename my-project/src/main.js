// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import './style.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router/index.js';
import store from './store/index.js';
import * as echarts from 'echarts'
Vue.prototype.$echarts = echarts;
Vue.config.productionTip = false
Vue.use(ElementUI).use(VueAxios, axios)
Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
